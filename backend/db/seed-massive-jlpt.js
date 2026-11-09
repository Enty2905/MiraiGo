const fs = require('node:fs');
const path = require('node:path');
const { Client } = require('pg');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });

const DIGRAPH_MAP = {
  きゃ: 'kya', きゅ: 'kyu', きょ: 'kyo',
  しゃ: 'sha', しゅ: 'shu', しょ: 'sho',
  ちゃ: 'cha', ちゅ: 'chu', ちょ: 'cho',
  にゃ: 'nya', にゅ: 'nyu', にょ: 'nyo',
  ひゃ: 'hya', ひゅ: 'hyu', ひょ: 'hyo',
  みゃ: 'mya', みゅ: 'myu', みょ: 'myo',
  りゃ: 'rya', りゅ: 'ryu', りょ: 'ryo',
  ぎゃ: 'gya', ぎゅ: 'gyu', ぎょ: 'gyo',
  じゃ: 'ja', じゅ: 'ju', じょ: 'jo',
  びゃ: 'bya', びゅ: 'byu', びょ: 'byo',
  ぴゃ: 'pya', ぴゅ: 'pyu', ぴょ: 'pyo',
};

const MONOGRAPH_MAP = {
  あ: 'a', い: 'i', う: 'u', え: 'e', お: 'o',
  か: 'ka', き: 'ki', く: 'ku', け: 'ke', こ: 'ko',
  さ: 'sa', し: 'shi', す: 'su', せ: 'se', そ: 'so',
  た: 'ta', ち: 'chi', つ: 'tsu', て: 'te', と: 'to',
  な: 'na', に: 'ni', ぬ: 'nu', ね: 'ne', の: 'no',
  は: 'ha', ひ: 'hi', ふ: 'fu', へ: 'he', ほ: 'ho',
  ま: 'ma', み: 'mi', む: 'mu', め: 'me', も: 'mo',
  や: 'ya', ゆ: 'yu', よ: 'yo',
  ら: 'ra', り: 'ri', る: 'ru', れ: 're', ろ: 'ro',
  わ: 'wa', を: 'o', ん: 'n',
  が: 'ga', ぎ: 'gi', ぐ: 'gu', げ: 'ge', ご: 'go',
  ざ: 'za', じ: 'ji', ず: 'zu', ぜ: 'ze', ぞ: 'zo',
  だ: 'da', ぢ: 'ji', づ: 'zu', で: 'de', ど: 'do',
  ば: 'ba', び: 'bi', ぶ: 'bu', べ: 'be', ぼ: 'bo',
  ぱ: 'pa', ぴ: 'pi', ぷ: 'pu', ぺ: 'pe', ぽ: 'po',
  ぁ: 'a', ぃ: 'i', ぅ: 'u', ぇ: 'e', ぉ: 'o',
  ゃ: 'ya', ゅ: 'yu', ょ: 'yo', ゔ: 'vu',
};

function katakanaToHiragana(str) {
  return String(str || '').replace(/[\u30a1-\u30f6]/g, (ch) =>
    String.fromCharCode(ch.charCodeAt(0) - 0x60),
  );
}

function kanaToRomaji(kanaInput) {
  const hira = katakanaToHiragana(kanaInput).trim();
  if (!hira) return '';
  let result = '';
  let i = 0;
  while (i < hira.length) {
    if (hira[i] === 'っ') {
      const nextTwo = hira.slice(i + 1, i + 3);
      const nextRomaji = DIGRAPH_MAP[nextTwo] || MONOGRAPH_MAP[hira[i + 1]] || '';
      if (nextRomaji) {
        result += nextRomaji[0];
      }
      i += 1;
      continue;
    }
    const two = hira.slice(i, i + 2);
    if (DIGRAPH_MAP[two]) {
      result += DIGRAPH_MAP[two];
      i += 2;
      continue;
    }
    const one = hira[i];
    if (MONOGRAPH_MAP[one]) {
      result += MONOGRAPH_MAP[one];
    } else if (one === 'ー') {
      const lastChar = result[result.length - 1];
      if ('aiueo'.includes(lastChar)) {
        result += lastChar;
      }
    } else {
      result += one;
    }
    i += 1;
  }
  return result;
}

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

function normalizePos(posInput) {
  if (Array.isArray(posInput)) {
    for (const p of posInput) {
      if (posMap[p]) return posMap[p];
    }
    return 'noun';
  }
  const str = String(posInput || '').toLowerCase();
  if (str.includes('v1') || str.includes('v5') || str.includes('vi') || str.includes('vt') || str.includes('vs')) {
    return 'verb';
  }
  if (str.includes('adj-i')) return 'i-adjective';
  if (str.includes('adj-na')) return 'na-adjective';
  if (str.includes('adv')) return 'adverb';
  if (str.includes('exp') || str.includes('int')) return 'expression';
  return 'noun';
}

function parseCsvLine(line) {
  const fields = [];
  let current = '';
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (ch === '"') {
      if (inQuotes && line[i + 1] === '"') {
        current += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (ch === ',' && !inQuotes) {
      fields.push(current.trim());
      current = '';
    } else {
      current += ch;
    }
  }
  fields.push(current.trim());
  return fields;
}

async function translateSingleBatch(texts) {
  if (texts.length === 0) return [];
  const sanitized = texts.map(
    (t) =>
      String(t || '')
        .replace(/[\r\n]+/g, ' ')
        .slice(0, 120)
        .trim() || 'word',
  );
  const query = sanitized.join('\n');
  const url =
    'https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=vi&dt=t&q=' +
    encodeURIComponent(query);

  for (let attempt = 0; attempt < 2; attempt++) {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error('HTTP ' + res.status);
      const data = await res.json();
      const rawTranslated = data[0].map((item) => item[0]).join('');
      const lines = rawTranslated.split('\n').map((l) => l.trim());
      while (lines.length < texts.length) {
        lines.push(sanitized[lines.length] || '');
      }
      return lines;
    } catch {
      await new Promise((r) => setTimeout(r, 250));
    }
  }
  return sanitized;
}

async function translateAllInParallel(items, batchSize = 90, concurrency = 6) {
  const results = new Array(items.length);
  const batches = [];
  for (let i = 0; i < items.length; i += batchSize) {
    batches.push({ start: i, slice: items.slice(i, i + batchSize) });
  }

  for (let i = 0; i < batches.length; i += concurrency) {
    const group = batches.slice(i, i + concurrency);
    const translatedGroup = await Promise.all(
      group.map((b) => translateSingleBatch(b.slice)),
    );
    for (let g = 0; g < group.length; g++) {
      const { start, slice } = group[g];
      const trans = translatedGroup[g];
      for (let k = 0; k < slice.length; k++) {
        results[start + k] = trans[k] || slice[k];
      }
    }
    if ((i + concurrency) % 18 === 0 || i + concurrency >= batches.length) {
      console.log(
        `[TRANSLATE] Progress: ${Math.min(batches.length, i + concurrency)}/${batches.length} batches...`,
      );
    }
  }
  return results;
}

function loadHanVietCache() {
  const cachePath = path.join(__dirname, 'xue-hanzi-cache.json');
  const map = new Map();
  if (!fs.existsSync(cachePath)) return map;
  try {
    const data = JSON.parse(fs.readFileSync(cachePath, 'utf8'));
    for (const item of data) {
      if (item.s && item.sv && !map.has(item.s)) map.set(item.s, item.sv.toUpperCase());
      if (item.t && item.sv && !map.has(item.t)) map.set(item.t, item.sv.toUpperCase());
    }
  } catch {
    // ignore
  }
  return map;
}

async function seedMassiveJLPT(client) {
  console.log('[MASSIVE JLPT] Starting 12,000+ JLPT Vocabulary & Kanji expansion...');
  const hanVietMap = loadHanVietCache();

  // Load existing words & kanji
  const existingVocabRes = await client.query('SELECT word, jlpt_level FROM vocabulary');
  const existingWords = new Set(existingVocabRes.rows.map((r) => r.word));
  const levelCountMap = { N5: 0, N4: 0, N3: 0, N2: 0, N1: 0 };
  for (const r of existingVocabRes.rows) {
    const lv = String(r.jlpt_level || 'N1').toUpperCase();
    if (levelCountMap[lv] !== undefined) levelCountMap[lv]++;
  }
  console.log('[MASSIVE JLPT] Current DB vocabulary counts:', levelCountMap, 'Total:', existingWords.size);

  const existingKanjiRes = await client.query('SELECT kanji, jlpt_level FROM kanji');
  const existingKanjiMap = new Map(existingKanjiRes.rows.map((r) => [r.kanji, r.jlpt_level]));

  // 1. Import OpenJLPT N1 Kanji (~1,345 N1 Kanji)
  console.log('[MASSIVE JLPT] Fetching OpenJLPT N1 Kanji...');
  const n1KanjiRes = await fetch(
    'https://raw.githubusercontent.com/evanclan/OpenJLPT/main/data/json/kanji/n1.json',
  );
  if (n1KanjiRes.ok) {
    const n1KanjiItems = await n1KanjiRes.json();
    const newKanji = n1KanjiItems.filter(
      (k) => k.character && !existingKanjiMap.has(k.character),
    );
    console.log(`[MASSIVE JLPT] Translating & inserting ${newKanji.length} new N1 Kanji...`);

    const kanjiEnList = newKanji.map((k) => (k.meanings || []).join(', ') || k.character);
    const kanjiViList = await translateAllInParallel(kanjiEnList, 90, 6);

    for (let i = 0; i < newKanji.length; i++) {
      const k = newKanji[i];
      const ch = k.character;
      const meaningEn = kanjiEnList[i];
      const meaningVi = kanjiViList[i] || meaningEn;
      const onyomi = Array.isArray(k.onyomi) ? k.onyomi.join('、') : k.onyomi || '';
      const kunyomi = Array.isArray(k.kunyomi) ? k.kunyomi.join('、') : k.kunyomi || '';
      const hanViet = hanVietMap.get(ch) || '';
      const unicodeCode = `U+${ch.codePointAt(0).toString(16).toUpperCase()}`;
      const mnemonic = meaningVi ? `Nghĩa cốt lõi: ${meaningVi}${hanViet ? ` (Hán-Việt: ${hanViet})` : ''}.` : '';

      await client.query(
        `
          INSERT INTO kanji (
            kanji, onyomi, kunyomi, meaning_vi, meaning_en,
            stroke_count, radical, jlpt_level, unicode_code, han_viet, mnemonic,
            created_at, updated_at
          )
          VALUES ($1, $2, $3, $4, $5, $6, $7, 'N1', $8, $9, $10, NOW(), NOW())
          ON CONFLICT (kanji) DO UPDATE SET
            han_viet = CASE WHEN kanji.han_viet IS NULL OR kanji.han_viet = '' THEN EXCLUDED.han_viet ELSE kanji.han_viet END,
            updated_at = NOW()
        `,
        [ch, onyomi, kunyomi, meaningVi, meaningEn, k.strokes || null, k.radical || '', unicodeCode, hanViet, mnemonic],
      );
      existingKanjiMap.set(ch, 'N1');
    }
    console.log(`[MASSIVE JLPT] Total Kanji in DB now: ${existingKanjiMap.size}`);
  }

  // 2. Collect candidate new vocabulary across OpenJLPT (n5..n1) + jamsinclair (n5..n1) + AnchorI
  const candidates = [];

  // 2a. OpenJLPT vocab (especially n1.json which has 3,070 words)
  for (const lv of ['n5', 'n4', 'n3', 'n2', 'n1']) {
    const upperLv = lv.toUpperCase();
    const res = await fetch(
      `https://raw.githubusercontent.com/evanclan/OpenJLPT/main/data/json/vocab/${lv}.json`,
    );
    if (!res.ok) continue;
    const items = await res.json();
    for (const item of items) {
      const word = (item.word || '').trim();
      if (!word || existingWords.has(word)) continue;
      existingWords.add(word);
      levelCountMap[upperLv]++;
      const kana = item.reading || word;
      const romaji = item.romaji || kanaToRomaji(kana);
      const meaningEn = (item.meanings || []).join(', ') || word;
      const wordType = normalizePos(item.pos);
      const example = item.examples?.[0] || null;
      candidates.push({
        word,
        kana,
        romaji,
        meaningEn,
        wordType,
        jlptLevel: upperLv,
        exampleJp: example?.ja || '',
        exampleKana: example?.furigana || example?.ja || '',
        exampleEn: example?.en || '',
      });
    }
  }
  console.log(`[MASSIVE JLPT] After OpenJLPT N5-N1: ${candidates.length} new words queued.`);

  // 2b. jamsinclair/open-anki-jlpt-decks (n5..n1 CSVs)
  for (const lv of ['n5', 'n4', 'n3', 'n2', 'n1']) {
    const upperLv = lv.toUpperCase();
    const res = await fetch(
      `https://raw.githubusercontent.com/jamsinclair/open-anki-jlpt-decks/main/src/${lv}.csv`,
    );
    if (!res.ok) continue;
    const text = await res.text();
    const lines = text.trim().split('\n').slice(1);
    for (const line of lines) {
      const [rawWord, rawKana, rawMeaning] = parseCsvLine(line);
      const word = (rawWord || '').replace(/^〜\s*/, '').trim();
      if (!word || word.length > 20 || existingWords.has(word)) continue;
      existingWords.add(word);
      levelCountMap[upperLv]++;
      const kana = (rawKana || word).replace(/^〜\s*/, '').trim();
      const romaji = kanaToRomaji(kana);
      const meaningEn = rawMeaning || word;
      candidates.push({
        word,
        kana,
        romaji,
        meaningEn,
        wordType: 'noun',
        jlptLevel: upperLv,
        exampleJp: '',
        exampleKana: '',
        exampleEn: '',
      });
    }
  }
  console.log(`[MASSIVE JLPT] After jamsinclair N5-N1: ${candidates.length} new words queued.`);

  // 2c. Top up each level from AnchorI/jlpt-kanji-dictionary + Bluskyo level mapping so total vocabulary reaches ~12,500 words!
  // Target per level: N5: 900, N4: 1000, N3: 2500, N2: 3000, N1: 5100 (Total = 12,500 words)
  const targetByLevel = { N5: 900, N4: 1000, N3: 2500, N2: 3000, N1: 5100 };

  console.log('[MASSIVE JLPT] Fetching Bluskyo level map & AnchorI dictionary for 12,500-word target...');
  let bluskyoMap = {};
  try {
    const bRes = await fetch(
      'https://raw.githubusercontent.com/Bluskyo/JLPT_Vocabulary/main/data/vocab/results/JLPT_vocab_ALL.json',
    );
    if (bRes.ok) {
      bluskyoMap = await bRes.json();
    }
  } catch {
    // ignore
  }

  const anchorRes = await fetch(
    'https://raw.githubusercontent.com/AnchorI/jlpt-kanji-dictionary/main/dictionary_part_1.json',
  );
  if (anchorRes.ok) {
    const anchorItems = await anchorRes.json();
    const levelOrder = { N5: 1, N4: 2, N3: 3, N2: 4, N1: 5 };
    const orderToLevel = { 1: 'N5', 2: 'N4', 3: 'N3', 4: 'N2', 5: 'N1' };

    for (const entry of anchorItems) {
      const word = (entry.kanji || '').trim();
      const kana = (entry.reading || '').trim();
      if (!word || !kana || word.length > 10 || existingWords.has(word)) continue;

      // Determine JLPT level from Bluskyo or from constituent Kanji levels
      let assignedLevel = null;
      if (bluskyoMap[word] && bluskyoMap[word][0]?.level) {
        assignedLevel = `N${bluskyoMap[word][0].level}`;
      } else {
        const kanjiChars = Array.from(word).filter((ch) => /[\u4e00-\u9faf]/u.test(ch));
        if (kanjiChars.length === 0) continue;
        let maxOrder = 0;
        let allKnown = true;
        for (const ch of kanjiChars) {
          const kLv = existingKanjiMap.get(ch);
          if (!kLv || !levelOrder[kLv]) {
            allKnown = false;
            break;
          }
          if (levelOrder[kLv] > maxOrder) maxOrder = levelOrder[kLv];
        }
        if (allKnown && maxOrder > 0) {
          assignedLevel = orderToLevel[maxOrder];
        }
      }

      if (!assignedLevel || levelCountMap[assignedLevel] >= targetByLevel[assignedLevel]) {
        continue;
      }

      // Extract English glosses vs example sentences from glossary_en
      const glosses = (entry.glossary_en || []).filter(
        (g) => !/[\u3040-\u30ff\u4e00-\u9faf]/u.test(g) && g.length < 80,
      );
      if (glosses.length === 0) continue;

      const meaningEn = glosses.slice(0, 3).join(', ');
      const romaji = kanaToRomaji(kana);
      const wordType = normalizePos(entry.pos);

      existingWords.add(word);
      levelCountMap[assignedLevel]++;
      candidates.push({
        word,
        kana,
        romaji,
        meaningEn,
        wordType,
        jlptLevel: assignedLevel,
        exampleJp: '',
        exampleKana: '',
        exampleEn: '',
      });

      const totalSoFar =
        levelCountMap.N5 +
        levelCountMap.N4 +
        levelCountMap.N3 +
        levelCountMap.N2 +
        levelCountMap.N1;
      if (totalSoFar >= 12500) break;
    }
  }

  console.log(
    `[MASSIVE JLPT] Total new vocabulary candidates to translate & insert: ${candidates.length}`,
  );
  console.log('[MASSIVE JLPT] Projected level counts:', levelCountMap);

  // 3. Translate English meanings of all candidates in parallel
  const englishList = candidates.map((c) => c.meaningEn);
  const vietnameseList = await translateAllInParallel(englishList, 100, 6);

  // 4. Bulk insert candidates into `vocabulary` in batches of 250 rows
  console.log('[MASSIVE JLPT] Bulk inserting vocabulary into PostgreSQL...');
  let insertedCount = 0;
  const CHUNK_SIZE = 250;

  for (let i = 0; i < candidates.length; i += CHUNK_SIZE) {
    const chunk = candidates.slice(i, i + CHUNK_SIZE);
    const values = [];
    const placeholders = [];
    let paramIdx = 1;

    for (let j = 0; j < chunk.length; j++) {
      const c = chunk[j];
      const meaningVi = vietnameseList[i + j] || c.meaningEn;
      placeholders.push(
        `($${paramIdx++}, $${paramIdx++}, $${paramIdx++}, $${paramIdx++}, $${paramIdx++}, $${paramIdx++}, $${paramIdx++}, NOW(), NOW())`,
      );
      values.push(
        c.word,
        c.kana,
        c.romaji,
        meaningVi,
        c.meaningEn,
        c.wordType,
        c.jlptLevel,
      );
    }

    await client.query(
      `
        INSERT INTO vocabulary (
          word, kana, romaji, meaning_vi, meaning_en, word_type, jlpt_level, created_at, updated_at
        )
        VALUES ${placeholders.join(', ')}
        ON CONFLICT DO NOTHING
      `,
      values,
    );
    insertedCount += chunk.length;
  }
  console.log(`[MASSIVE JLPT] Inserted ${insertedCount} new vocabulary words!`);

  // 5. Distribute 100% of unassigned vocabulary across Lessons 1..25 of each level!
  console.log('[MASSIVE JLPT] Distributing all vocabulary evenly across 25 lessons per level...');
  for (const level of ['N5', 'N4', 'N3', 'N2', 'N1']) {
    await client.query(
      `
        WITH unassigned AS (
          SELECT
            id,
            ((ROW_NUMBER() OVER (ORDER BY id ASC) - 1) % 25) + 1 AS target_lesson
          FROM vocabulary
          WHERE UPPER(jlpt_level) = $1
            AND (lesson_number IS NULL OR lesson_number < 1 OR lesson_number > 25)
        )
        UPDATE vocabulary
        SET
          lesson_number = unassigned.target_lesson,
          updated_at = NOW()
        FROM unassigned
        WHERE vocabulary.id = unassigned.id
      `,
      [level],
    );
  }

  // 6. Sync lesson_vocabularies table
  await client.query(
    `
      INSERT INTO lesson_vocabularies (
        lesson_id,
        vocabulary_id,
        position,
        is_main
      )
      SELECT
        lessons.id,
        ranked_vocabulary.id,
        ranked_vocabulary.position,
        true
      FROM (
        SELECT
          vocabulary.id,
          vocabulary.jlpt_level,
          vocabulary.lesson_number,
          ROW_NUMBER() OVER (
            PARTITION BY vocabulary.jlpt_level, vocabulary.lesson_number
            ORDER BY vocabulary.id
          ) AS position
        FROM vocabulary
        WHERE vocabulary.lesson_number BETWEEN 1 AND 25
          AND vocabulary.jlpt_level IS NOT NULL
      ) ranked_vocabulary
      INNER JOIN lessons
        ON lessons.slug = LOWER(ranked_vocabulary.jlpt_level) || '-l' || ranked_vocabulary.lesson_number
      ON CONFLICT (lesson_id, vocabulary_id) DO UPDATE SET
        position = EXCLUDED.position,
        is_main = true
    `,
  );

  // Final summary query
  const finalStats = await client.query(
    `
      SELECT
        jlpt_level AS level,
        COUNT(*)::int AS total_words,
        COUNT(DISTINCT lesson_number)::int AS lessons_count,
        ROUND(AVG(lesson_counts.cnt))::int AS avg_words_per_lesson
      FROM vocabulary
      LEFT JOIN (
        SELECT jlpt_level AS lv, lesson_number AS ln, COUNT(*)::int AS cnt
        FROM vocabulary
        WHERE lesson_number BETWEEN 1 AND 25
        GROUP BY jlpt_level, lesson_number
      ) lesson_counts
        ON lesson_counts.lv = vocabulary.jlpt_level
        AND lesson_counts.ln = vocabulary.lesson_number
      GROUP BY jlpt_level
      ORDER BY jlpt_level
    `,
  );
  console.log('[MASSIVE JLPT] Final Vocabulary Distribution across N5..N1:');
  console.table(finalStats.rows);
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
    await seedMassiveJLPT(client);
  } finally {
    await client.end().catch(() => {});
  }
}

if (require.main === module) {
  main().catch((err) => {
    console.error('[MASSIVE JLPT] Failed:', err);
    process.exitCode = 1;
  });
}

module.exports = { seedMassiveJLPT };

