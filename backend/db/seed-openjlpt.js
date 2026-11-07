const fs = require('node:fs');
const path = require('node:path');
const { Client } = require('pg');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });

const posMap = {
  n: 'noun',
  pn: 'pronoun',
  v1: 'verb',
  'v1-s': 'verb',
  v5u: 'verb',
  v5k: 'verb',
  v5s: 'verb',
  v5t: 'verb',
  v5n: 'verb',
  v5m: 'verb',
  v5r: 'verb',
  v5g: 'verb',
  v5b: 'verb',
  vi: 'verb',
  vt: 'verb',
  'adj-i': 'i-adjective',
  'adj-na': 'na-adjective',
  'adj-no': 'noun',
  adv: 'adverb',
  'adv-to': 'adverb',
  exp: 'expression',
  int: 'expression',
  prt: 'particle',
  pref: 'prefix',
  suf: 'suffix',
  ctr: 'counter',
  num: 'numeral',
  conj: 'conjunction',
};

function normalizePos(posArray) {
  if (!Array.isArray(posArray) || posArray.length === 0) return 'noun';
  for (const p of posArray) {
    if (posMap[p]) return posMap[p];
  }
  return 'noun';
}

async function batchTranslate(texts) {
  if (texts.length === 0) return [];
  const query = texts.map((t) => (t || '').replace(/[\r\n]+/g, ' ').trim() || 'word').join('\n');
  const url =
    'https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=vi&dt=t&q=' +
    encodeURIComponent(query);

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error('Translate HTTP ' + res.status);
  }
  const data = await res.json();
  const rawTranslated = data[0].map((item) => item[0]).join('');
  const lines = rawTranslated.split('\n').map((l) => l.trim());

  while (lines.length < texts.length) {
    lines.push(texts[lines.length] || '');
  }
  return lines;
}

const LOCAL_XUE_CACHE = path.join(__dirname, 'xue-hanzi-cache.json');

async function loadHanVietDictionary() {
  console.log('[ENRICH] Loading Han-Viet dictionary dataset...');
  let data;
  if (fs.existsSync(LOCAL_XUE_CACHE)) {
    console.log('[ENRICH] Using local cached Han-Viet dictionary...');
    data = JSON.parse(fs.readFileSync(LOCAL_XUE_CACHE, 'utf8'));
  } else {
    console.log('[ENRICH] Downloading Han-Viet dictionary...');
    const res = await fetch(
      'https://raw.githubusercontent.com/phucbm/xue-hanzi/main/public/data/dictionary.json'
    );
    if (!res.ok) {
      console.warn('[ENRICH] Could not fetch xue-hanzi.');
      return new Map();
    }
    data = await res.json();
    fs.writeFileSync(LOCAL_XUE_CACHE, JSON.stringify(data));
  }

  const map = new Map();
  for (const item of data) {
    if (item.s && item.sv && !map.has(item.s)) {
      map.set(item.s, item.sv.toUpperCase());
    }
    if (item.t && item.sv && !map.has(item.t)) {
      map.set(item.t, item.sv.toUpperCase());
    }
  }
  console.log(`[ENRICH] Loaded ${map.size} Han-Viet character pronunciations.`);
  return map;
}

async function seedOpenJLPT(client) {
  console.log('[ENRICH] Starting OpenJLPT dictionary enrichment...');

  const hanVietMap = await loadHanVietDictionary();

  const existingVocabRes = await client.query('SELECT word FROM vocabulary');
  const existingWords = new Set(existingVocabRes.rows.map((r) => r.word));
  console.log(`[ENRICH] Existing vocabulary count in DB: ${existingWords.size}`);

  const existingKanjiRes = await client.query('SELECT kanji FROM kanji');
  const existingKanji = new Set(existingKanjiRes.rows.map((r) => r.kanji));
  console.log(`[ENRICH] Existing Kanji count in DB: ${existingKanji.size}`);

  // Import Vocabulary for N5, N4, N3, N2
  const vocabLevels = ['n5', 'n4', 'n3', 'n2'];
  let totalVocabAdded = 0;
  let totalExamplesAdded = 0;

  for (const level of vocabLevels) {
    console.log(`[ENRICH] Fetching OpenJLPT vocabulary ${level.toUpperCase()}...`);
    const url = `https://raw.githubusercontent.com/evanclan/OpenJLPT/main/data/json/vocab/${level}.json`;
    const res = await fetch(url);
    if (!res.ok) {
      console.warn(`[ENRICH] Failed to fetch ${url} (HTTP ${res.status})`);
      continue;
    }

    const items = await res.json();
    console.log(`[ENRICH] Loaded ${items.length} words for ${level.toUpperCase()}.`);

    const newItems = items.filter((item) => item.word && !existingWords.has(item.word));
    console.log(`[ENRICH] ${newItems.length} new words to import for ${level.toUpperCase()}.`);

    const BATCH_SIZE = 80;
    for (let i = 0; i < newItems.length; i += BATCH_SIZE) {
      const batch = newItems.slice(i, i + BATCH_SIZE);
      const englishMeanings = batch.map((item) => (item.meanings || []).join(', ') || item.word);
      const exampleEnTexts = batch.map((item) => item.examples?.[0]?.en || '');

      let vietnameseMeanings = [];
      try {
        vietnameseMeanings = await batchTranslate(englishMeanings);
      } catch (err) {
        vietnameseMeanings = englishMeanings;
      }

      // Batch translate examples for items that have examples
      let vietnameseExamples = [];
      const hasExamples = exampleEnTexts.some((t) => t.length > 0);
      if (hasExamples) {
        try {
          vietnameseExamples = await batchTranslate(exampleEnTexts);
        } catch {
          vietnameseExamples = exampleEnTexts;
        }
      }

      await client.query('BEGIN');
      try {
        for (let j = 0; j < batch.length; j++) {
          const item = batch[j];
          const meaningEn = englishMeanings[j];
          const meaningVi = vietnameseMeanings[j] || meaningEn;
          const wordType = normalizePos(item.pos);
          const jlptLevel = level.toUpperCase();
          const kana = item.reading || '';
          const romaji = item.romaji || '';

          const insertRes = await client.query(
            `
              INSERT INTO vocabulary (
                word,
                kana,
                romaji,
                meaning_vi,
                meaning_en,
                word_type,
                jlpt_level,
                created_at,
                updated_at
              )
              VALUES ($1, $2, $3, $4, $5, $6, $7, NOW(), NOW())
              ON CONFLICT DO NOTHING
              RETURNING id
            `,
            [item.word, kana, romaji, meaningVi, meaningEn, wordType, jlptLevel]
          );

          const insertedId = insertRes.rows[0]?.id;
          if (insertedId) {
            existingWords.add(item.word);
            totalVocabAdded++;

            if (item.examples && item.examples[0] && item.examples[0].ja) {
              const ex = item.examples[0];
              const exVi = vietnameseExamples[j] || ex.en || '';

              await client.query(
                `
                  INSERT INTO vocabulary_examples (
                    vocabulary_id,
                    example_jp,
                    example_kana,
                    example_vi,
                    created_at
                  )
                  VALUES ($1, $2, $3, $4, NOW())
                `,
                [insertedId, ex.ja, ex.furigana || ex.ja, exVi]
              );
              totalExamplesAdded++;
            }
          }
        }
        await client.query('COMMIT');
      } catch (err) {
        await client.query('ROLLBACK');
        console.error('[ENRICH] Batch insert error:', err.message);
      }

      await new Promise((r) => setTimeout(r, 120));
    }
  }

  console.log(`[ENRICH] Successfully added ${totalVocabAdded} new vocabulary words!`);
  console.log(`[ENRICH] Successfully added ${totalExamplesAdded} new example sentences!`);

  // Import Kanji for N5, N4, N3, N2
  const kanjiLevels = ['n5', 'n4', 'n3', 'n2'];
  let totalKanjiAdded = 0;

  for (const level of kanjiLevels) {
    console.log(`[ENRICH] Fetching OpenJLPT Kanji ${level.toUpperCase()}...`);
    const url = `https://raw.githubusercontent.com/evanclan/OpenJLPT/main/data/json/kanji/${level}.json`;
    const res = await fetch(url);
    if (!res.ok) {
      console.warn(`[ENRICH] Failed to fetch ${url} (HTTP ${res.status})`);
      continue;
    }

    const items = await res.json();
    console.log(`[ENRICH] Loaded ${items.length} Kanji for ${level.toUpperCase()}.`);

    const newKanjiItems = items.filter((k) => k.character && !existingKanji.has(k.character));
    console.log(`[ENRICH] ${newKanjiItems.length} new Kanji to import for ${level.toUpperCase()}.`);

    const BATCH_SIZE = 80;
    for (let i = 0; i < newKanjiItems.length; i += BATCH_SIZE) {
      const batch = newKanjiItems.slice(i, i + BATCH_SIZE);
      const englishMeanings = batch.map((item) => (item.meanings || []).join(', ') || item.character);

      let vietnameseMeanings = [];
      try {
        vietnameseMeanings = await batchTranslate(englishMeanings);
      } catch {
        vietnameseMeanings = englishMeanings;
      }

      await client.query('BEGIN');
      try {
        for (let j = 0; j < batch.length; j++) {
          const item = batch[j];
          const character = item.character;
          const meaningEn = englishMeanings[j];
          const meaningVi = vietnameseMeanings[j] || meaningEn;
          const onyomi = Array.isArray(item.onyomi) ? item.onyomi.join('、') : item.onyomi || '';
          const kunyomi = Array.isArray(item.kunyomi) ? item.kunyomi.join('、') : item.kunyomi || '';
          const strokeCount = item.strokes || null;
          const radical = item.radical || '';
          const jlptLevel = level.toUpperCase();
          const unicodeCode = `U+${character.codePointAt(0).toString(16).toUpperCase()}`;
          const hanViet = hanVietMap.get(character) || '';
          const mnemonic = item.meanings?.[0] ? `Nghĩa cơ bản: ${item.meanings[0]}.` : '';

          await client.query(
            `
              INSERT INTO kanji (
                kanji,
                onyomi,
                kunyomi,
                meaning_vi,
                meaning_en,
                stroke_count,
                radical,
                jlpt_level,
                unicode_code,
                han_viet,
                mnemonic,
                created_at,
                updated_at
              )
              VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, NOW(), NOW())
              ON CONFLICT (kanji) DO UPDATE SET
                han_viet = CASE WHEN kanji.han_viet IS NULL OR kanji.han_viet = '' THEN EXCLUDED.han_viet ELSE kanji.han_viet END,
                meaning_en = EXCLUDED.meaning_en,
                updated_at = NOW()
            `,
            [
              character,
              onyomi,
              kunyomi,
              meaningVi,
              meaningEn,
              strokeCount,
              radical,
              jlptLevel,
              unicodeCode,
              hanViet,
              mnemonic,
            ]
          );

          existingKanji.add(character);
          totalKanjiAdded++;
        }
        await client.query('COMMIT');
      } catch (err) {
        await client.query('ROLLBACK');
        console.error('[ENRICH] Kanji batch error:', err.message);
      }

      await new Promise((r) => setTimeout(r, 100));
    }
  }

  console.log(`[ENRICH] Successfully added ${totalKanjiAdded} new Kanji!`);
  console.log('[ENRICH] Dictionary enrichment complete!');
}

async function main() {
  const client = new Client({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  });

  await client.connect();
  try {
    await seedOpenJLPT(client);
  } finally {
    await client.end();
  }
}

if (require.main === module) {
  main().catch((err) => {
    console.error('[ENRICH] Failed:', err);
    process.exit(1);
  });
}

module.exports = { seedOpenJLPT };
