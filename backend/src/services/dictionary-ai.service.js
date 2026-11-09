const { Groq } = require('groq-sdk');
const { pool } = require('../config/db');

let groqClient = null;

function getGroqClient() {
  if (!process.env.GROQ_API_KEY) {
    return null;
  }
  if (!groqClient) {
    groqClient = new Groq({ apiKey: process.env.GROQ_API_KEY });
  }
  return groqClient;
}

const VALID_JLPT = new Set(['N5', 'N4', 'N3', 'N2', 'N1']);

function sanitizeJlptLevel(level) {
  if (!level) return null;
  const upper = String(level).trim().toUpperCase();
  return VALID_JLPT.has(upper) ? upper : null;
}

/**
 * On-demand dictionary lookup for missing Japanese vocabulary words.
 * Queries AI, saves to PostgreSQL, and returns the newly enriched row.
 */
async function lookupAndEnrichVocabulary(query) {
  const groq = getGroqClient();
  if (!groq || !query || query.trim().length === 0) return null;

  try {
    const completion = await groq.chat.completions.create({
      model: process.env.GROQ_MODEL || 'qwen/qwen3.8-27b',
      messages: [
        {
          role: 'system',
          content: [
            'You are an authoritative Japanese-Vietnamese lexicographer.',
            'Look up the Japanese term given by the user.',
            'If it is a valid Japanese word, phrase, idiom, or compound, return a JSON object with:',
            '- found: true',
            '- word: canonical Japanese form (using Kanji if customary, e.g. "脆弱")',
            '- kana: full hiragana or katakana reading (e.g. "ぜいじゃく")',
            '- romaji: clean Hepburn romaji (e.g. "zeijaku")',
            '- meaningVi: detailed, natural Vietnamese explanation and meanings (e.g. "mỏng manh, yếu ớt, dễ bị tổn thương; lỗ hổng bảo mật")',
            '- meaningEn: English definition (e.g. "fragile, weak, vulnerable")',
            '- wordType: part of speech in English (e.g. "na-adjective", "noun", "verb", "i-adjective", "adverb")',
            '- jlptLevel: one of "N1", "N2", "N3", "N4", "N5" or null',
            '- notes: optional Han-Viet or usage note (e.g. "Âm Hán-Việt: THÚY NHƯỢC")',
            '- examples: array of 1-3 realistic example objects with { "japanese": "...", "meaning": "..." }',
            'If the query is meaningless, purely random characters, or not Japanese, return { "found": false }.',
          ].join(' '),
        },
        { role: 'user', content: `Word to define: "${query.trim()}"` },
      ],
      response_format: { type: 'json_object' },
      temperature: 0.1,
    });

    const parsed = JSON.parse(completion.choices[0]?.message?.content || '{}');
    if (!parsed.found || !parsed.word || !parsed.meaningVi) {
      return null;
    }

    const word = String(parsed.word).trim();
    const kana = String(parsed.kana || word).trim();
    const romaji = String(parsed.romaji || '').trim();
    const meaningVi = String(parsed.meaningVi).trim();
    const meaningEn = String(parsed.meaningEn || '').trim();
    const wordType = String(parsed.wordType || 'noun').trim();
    const jlptLevel = sanitizeJlptLevel(parsed.jlptLevel);
    const notes = parsed.notes ? String(parsed.notes).trim() : null;

    const insertQuery = `
      INSERT INTO vocabulary (word, kana, romaji, meaning_vi, meaning_en, word_type, jlpt_level, notes)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
      ON CONFLICT DO NOTHING
      RETURNING
        id,
        word,
        kana,
        romaji,
        meaning_vi AS "meaningVi",
        meaning_en AS "meaningEn",
        word_type AS "wordType",
        jlpt_level AS "jlptLevel",
        accent,
        audio_url AS "audioUrl",
        image_url AS "imageUrl",
        notes,
        tags
    `;

    const res = await pool.query(insertQuery, [
      word,
      kana,
      romaji,
      meaningVi,
      meaningEn,
      wordType,
      jlptLevel,
      notes,
    ]);

    let savedRow = res.rows[0];
    if (!savedRow) {
      const existing = await pool.query(
        `SELECT
          id, word, kana, romaji,
          meaning_vi AS "meaningVi", meaning_en AS "meaningEn",
          word_type AS "wordType", jlpt_level AS "jlptLevel",
          accent, audio_url AS "audioUrl", image_url AS "imageUrl",
          notes, tags
         FROM vocabulary
         WHERE word = $1 OR word = $2
         LIMIT 1`,
        [word, query.trim()]
      );
      savedRow = existing.rows[0];
    }

    if (savedRow && Array.isArray(parsed.examples) && parsed.examples.length > 0) {
      for (const ex of parsed.examples) {
        if (ex.japanese && ex.meaning) {
          await pool.query(
            `INSERT INTO vocabulary_examples (vocabulary_id, example_jp, example_vi)
             VALUES ($1, $2, $3)
             ON CONFLICT DO NOTHING`,
            [savedRow.id, String(ex.japanese).trim(), String(ex.meaning).trim()]
          ).catch(() => {});
        }
      }
    }

    return savedRow || null;
  } catch (err) {
    console.warn('[Dictionary AI] Vocabulary lookup failed:', err.message);
    return null;
  }
}

/**
 * On-demand Kanji lookup for missing characters.
 */
async function lookupAndEnrichKanji(char) {
  const groq = getGroqClient();
  if (!groq || !char) return null;

  const targetChar = String(char).trim()[0];
  if (!targetChar) return null;

  try {
    const completion = await groq.chat.completions.create({
      model: process.env.GROQ_MODEL || 'qwen/qwen3.8-27b',
      messages: [
        {
          role: 'system',
          content: [
            'You are an authoritative Japanese Kanji dictionary editor.',
            'For the single Kanji character provided, return a JSON object with:',
            '- found: true',
            '- kanji: the character',
            '- onyomi: katakana readings separated by comma (e.g. "セイ, サイ")',
            '- kunyomi: hiragana readings (e.g. "もろ.い")',
            '- hanViet: Sino-Vietnamese reading in UPPERCASE (e.g. "THÚY")',
            '- meaningVi: Vietnamese meaning (e.g. "giòn, yếu, mỏng manh, dễ vỡ")',
            '- meaningEn: English meaning (e.g. "fragile, brittle, weak")',
            '- radical: radical character (e.g. "月" or "肉")',
            '- strokeCount: total strokes as a positive number (e.g. 11)',
            '- jlptLevel: one of "N1", "N2", "N3", "N4", "N5" or null',
            '- mnemonic: short helpful memory hint in Vietnamese',
            '- examples: array of 1-3 objects with { "japanese": "...", "meaning": "..." }',
            'If not a valid kanji, return { "found": false }.',
          ].join(' '),
        },
        { role: 'user', content: `Kanji: "${targetChar}"` },
      ],
      response_format: { type: 'json_object' },
      temperature: 0.1,
    });

    const parsed = JSON.parse(completion.choices[0]?.message?.content || '{}');
    if (!parsed.found || !parsed.kanji) return null;

    const kanji = String(parsed.kanji).trim()[0];
    const onyomi = String(parsed.onyomi || '').trim();
    const kunyomi = String(parsed.kunyomi || '').trim();
    const hanViet = String(parsed.hanViet || '').trim().toUpperCase();
    const meaningVi = String(parsed.meaningVi || '').trim();
    const meaningEn = String(parsed.meaningEn || '').trim();
    const radical = String(parsed.radical || '').trim();
    const strokeCount =
      Number.isInteger(parsed.strokeCount) && parsed.strokeCount > 0
        ? parsed.strokeCount
        : null;
    const jlptLevel = sanitizeJlptLevel(parsed.jlptLevel);
    const mnemonic = parsed.mnemonic ? String(parsed.mnemonic).trim() : null;

    const insertQuery = `
      INSERT INTO kanji (kanji, onyomi, kunyomi, han_viet, meaning_vi, meaning_en, radical, stroke_count, jlpt_level, mnemonic)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
      ON CONFLICT (kanji) DO UPDATE SET
        han_viet = COALESCE(kanji.han_viet, EXCLUDED.han_viet),
        meaning_vi = COALESCE(kanji.meaning_vi, EXCLUDED.meaning_vi)
      RETURNING
        id,
        kanji,
        onyomi,
        kunyomi,
        meaning_vi AS "meaningVi",
        meaning_en AS "meaningEn",
        stroke_count AS "strokeCount",
        radical,
        jlpt_level AS "jlptLevel",
        unicode_code AS "unicodeCode",
        writing_svg_url AS "writingSvgUrl",
        han_viet AS "hanViet",
        mnemonic
    `;

    const res = await pool.query(insertQuery, [
      kanji,
      onyomi,
      kunyomi,
      hanViet,
      meaningVi,
      meaningEn,
      radical,
      strokeCount,
      jlptLevel,
      mnemonic,
    ]);

    const savedKanji = res.rows[0];

    if (savedKanji && Array.isArray(parsed.examples)) {
      for (const ex of parsed.examples) {
        if (ex.japanese && ex.meaning) {
          await pool.query(
            `INSERT INTO kanji_examples (kanji_id, example_jp, example_vi)
             VALUES ($1, $2, $3)
             ON CONFLICT DO NOTHING`,
            [savedKanji.id, String(ex.japanese).trim(), String(ex.meaning).trim()]
          ).catch(() => {});
        }
      }
    }

    return savedKanji || null;
  } catch (err) {
    console.warn('[Dictionary AI] Kanji lookup failed:', err.message);
    return null;
  }
}

module.exports = {
  lookupAndEnrichVocabulary,
  lookupAndEnrichKanji,
};

