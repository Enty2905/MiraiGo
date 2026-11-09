const fs = require('node:fs');
const path = require('node:path');
const { Client } = require('pg');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });

const { N5_LESSONS, N5_GRAMMAR } = require('./curriculum/n5-curriculum');
const { N4_LESSONS, N4_GRAMMAR } = require('./curriculum/n4-curriculum');
const { N3_LESSONS, N3_GRAMMAR } = require('./curriculum/n3-curriculum');
const { N2_LESSONS, N2_GRAMMAR } = require('./curriculum/n2-curriculum');
const { N1_LESSONS, N1_GRAMMAR } = require('./curriculum/n1-curriculum');
const { N1_VOCABULARY } = require('./curriculum/n1-vocabulary');

const LEVEL_CURRICULUM = [
  { level: 'N5', lessons: N5_LESSONS, grammar: N5_GRAMMAR, targetVocabPerLesson: 26 },
  { level: 'N4', lessons: N4_LESSONS, grammar: N4_GRAMMAR, targetVocabPerLesson: 26 },
  { level: 'N3', lessons: N3_LESSONS, grammar: N3_GRAMMAR, targetVocabPerLesson: 28 },
  { level: 'N2', lessons: N2_LESSONS, grammar: N2_GRAMMAR, targetVocabPerLesson: 28 },
  { level: 'N1', lessons: N1_LESSONS, grammar: N1_GRAMMAR, targetVocabPerLesson: 20 },
];

function loadHanVietCache() {
  const cachePath = path.join(__dirname, 'xue-hanzi-cache.json');
  const map = new Map();
  if (!fs.existsSync(cachePath)) {
    return map;
  }
  try {
    const data = JSON.parse(fs.readFileSync(cachePath, 'utf8'));
    for (const item of data) {
      if (item.s && item.sv && !map.has(item.s)) {
        map.set(item.s, item.sv.toUpperCase());
      }
      if (item.t && item.sv && !map.has(item.t)) {
        map.set(item.t, item.sv.toUpperCase());
      }
    }
  } catch {
    // ignore cache error
  }
  return map;
}

async function seed25LessonsCurriculum(client) {
  console.log('[CURRICULUM 25] Starting 125-lesson JLPT curriculum upgrade...');

  // 1. Upsert all 125 lessons (25 per level across N5..N1)
  let upsertedLessons = 0;
  for (const { level, lessons } of LEVEL_CURRICULUM) {
    for (const lesson of lessons) {
      const slug = `${level.toLowerCase()}-l${lesson.number}`;
      const content = `# ${lesson.title}\n${lesson.description}`;
      await client.query(
        `
          INSERT INTO lessons (
            title,
            slug,
            lesson_type,
            jlpt_level,
            description,
            content,
            duration_seconds,
            is_published,
            created_at,
            updated_at
          )
          VALUES ($1, $2, 'mixed', $3, $4, $5, 1500, true, NOW(), NOW())
          ON CONFLICT (slug) DO UPDATE SET
            title = EXCLUDED.title,
            jlpt_level = EXCLUDED.jlpt_level,
            description = EXCLUDED.description,
            is_published = true,
            updated_at = NOW()
        `,
        [lesson.title, slug, level, lesson.description, content],
      );
      upsertedLessons++;
    }
  }
  console.log(`[CURRICULUM 25] Upserted ${upsertedLessons} lessons across N5..N1.`);

  // 2. Seed N1 curated vocabulary across lessons 1..25
  let n1Inserted = 0;
  for (const [lessonNumber, word, kana, romaji, meaningVi, meaningEn, wordType] of N1_VOCABULARY) {
    const existingRes = await client.query(
      `
        SELECT id, lesson_number
        FROM vocabulary
        WHERE word = $1 AND LOWER(jlpt_level) = 'n1'
        LIMIT 1
      `,
      [word],
    );

    if (existingRes.rows.length > 0) {
      const existing = existingRes.rows[0];
      await client.query(
        `
          UPDATE vocabulary
          SET
            kana = COALESCE(NULLIF($1, ''), kana),
            romaji = COALESCE(NULLIF($2, ''), romaji),
            meaning_vi = $3,
            meaning_en = $4,
            word_type = $5,
            lesson_number = COALESCE(lesson_number, $6),
            updated_at = NOW()
          WHERE id = $7
        `,
        [kana, romaji, meaningVi, meaningEn, wordType, lessonNumber, existing.id],
      );
    } else {
      await client.query(
        `
          INSERT INTO vocabulary (
            word,
            kana,
            romaji,
            meaning_vi,
            meaning_en,
            word_type,
            jlpt_level,
            lesson_number,
            created_at,
            updated_at
          )
          VALUES ($1, $2, $3, $4, $5, $6, 'N1', $7, NOW(), NOW())
        `,
        [word, kana, romaji, meaningVi, meaningEn, wordType, lessonNumber],
      );
      n1Inserted++;
    }
  }
  console.log(`[CURRICULUM 25] Processed ${N1_VOCABULARY.length} N1 vocabulary items (${n1Inserted} newly inserted).`);

  // 3. Distribute vocabulary across lessons 1..25 for every level so each lesson has ~20-28 words
  for (const { level, targetVocabPerLesson } of LEVEL_CURRICULUM) {
    // Count current assigned vocabulary per lesson (1..25)
    const countRes = await client.query(
      `
        SELECT lesson_number, COUNT(*)::int AS count
        FROM vocabulary
        WHERE UPPER(jlpt_level) = $1
          AND lesson_number BETWEEN 1 AND 25
        GROUP BY lesson_number
      `,
      [level],
    );

    const countByLesson = new Map();
    for (let num = 1; num <= 25; num++) {
      countByLesson.set(num, 0);
    }
    for (const row of countRes.rows) {
      countByLesson.set(Number(row.lesson_number), Number(row.count));
    }

    // Fetch unassigned vocabulary for this level
    const unassignedRes = await client.query(
      `
        SELECT id
        FROM vocabulary
        WHERE UPPER(jlpt_level) = $1
          AND (lesson_number IS NULL OR lesson_number < 1 OR lesson_number > 25)
        ORDER BY id ASC
      `,
      [level],
    );

    const unassignedIds = unassignedRes.rows.map((r) => r.id);
    let cursor = 0;

    // First pass: ensure lessons 6..25 reach targetVocabPerLesson, and top up lessons 1..5 to at least 20 words
    for (let lessonNum = 1; lessonNum <= 25; lessonNum++) {
      const minTarget = lessonNum <= 5 ? Math.min(20, targetVocabPerLesson) : targetVocabPerLesson;
      const currentCount = countByLesson.get(lessonNum) || 0;
      const needed = Math.max(0, minTarget - currentCount);

      if (needed > 0 && cursor < unassignedIds.length) {
        const batchIds = unassignedIds.slice(cursor, cursor + needed);
        cursor += batchIds.length;

        if (batchIds.length > 0) {
          await client.query(
            `
              UPDATE vocabulary
              SET lesson_number = $1, updated_at = NOW()
              WHERE id = ANY($2::bigint[])
            `,
            [lessonNum, batchIds],
          );
          countByLesson.set(lessonNum, currentCount + batchIds.length);
        }
      }
    }

    console.log(
      `[CURRICULUM 25] Level ${level}: distributed vocabulary across 25 lessons (assigned ${cursor} additional words).`,
    );
  }

  // 4. Seed & Link Grammar Points for all 125 lessons (Lessons 1..5 + Lessons 6..25)
  // First clear lesson_grammar_points to rebuild accurate 1-to-1 lesson mapping
  await client.query('DELETE FROM lesson_grammar_points');

  let totalGrammarLinked = 0;

  for (const { level, grammar } of LEVEL_CURRICULUM) {
    // 4a. Get existing grammar points from seed.js for lessons 1..5 (the first 10 grammar points of this level)
    const curatedPatterns = new Set(grammar.map((g) => g.pattern));
    const existingGrammarRes = await client.query(
      `
        SELECT id, pattern, title
        FROM grammar_points
        WHERE UPPER(jlpt_level) = $1
        ORDER BY id ASC
      `,
      [level],
    );

    const baseGrammarRows = existingGrammarRes.rows.filter(
      (r) => !curatedPatterns.has(r.pattern),
    );

    // Link first 10 base grammar points to lessons 1..5 (2 per lesson)
    for (let i = 0; i < Math.min(10, baseGrammarRows.length); i++) {
      const lessonNum = Math.floor(i / 2) + 1;
      const slug = `${level.toLowerCase()}-l${lessonNum}`;
      const lessonRes = await client.query('SELECT id FROM lessons WHERE slug = $1 LIMIT 1', [slug]);
      const lessonId = lessonRes.rows[0]?.id;
      if (lessonId) {
        await client.query(
          `
            INSERT INTO lesson_grammar_points (lesson_id, grammar_point_id, position)
            VALUES ($1, $2, $3)
            ON CONFLICT (lesson_id, grammar_point_id) DO UPDATE SET position = EXCLUDED.position
          `,
          [lessonId, baseGrammarRows[i].id, (i % 2) + 1],
        );
        totalGrammarLinked++;
      }
    }

    // 4b. Upsert and link the 40 grammar points for lessons 6..25
    const posCounterByLesson = new Map();
    for (const item of grammar) {
      const pos = (posCounterByLesson.get(item.lessonNumber) || 0) + 1;
      posCounterByLesson.set(item.lessonNumber, pos);

      const existingGpRes = await client.query(
        `
          SELECT id
          FROM grammar_points
          WHERE UPPER(jlpt_level) = $1 AND pattern = $2
          LIMIT 1
        `,
        [level, item.pattern],
      );

      let grammarId;
      if (existingGpRes.rows.length > 0) {
        grammarId = existingGpRes.rows[0].id;
        await client.query(
          `
            UPDATE grammar_points
            SET
              title = $1,
              meaning_vi = $2,
              explanation = $3,
              usage_note = $4,
              formation = $5,
              updated_at = NOW()
            WHERE id = $6
          `,
          [
            item.title,
            item.meaningVi,
            item.explanation,
            item.usageNote,
            item.formation,
            grammarId,
          ],
        );
      } else {
        const insertGpRes = await client.query(
          `
            INSERT INTO grammar_points (
              title,
              pattern,
              meaning_vi,
              explanation,
              usage_note,
              formation,
              jlpt_level,
              created_at,
              updated_at
            )
            VALUES ($1, $2, $3, $4, $5, $6, $7, NOW(), NOW())
            RETURNING id
          `,
          [
            item.title,
            item.pattern,
            item.meaningVi,
            item.explanation,
            item.usageNote,
            item.formation,
            level,
          ],
        );
        grammarId = insertGpRes.rows[0].id;
      }

      // Sync grammar examples
      if (grammarId && Array.isArray(item.examples)) {
        await client.query('DELETE FROM grammar_examples WHERE grammar_point_id = $1', [grammarId]);
        for (const ex of item.examples) {
          await client.query(
            `
              INSERT INTO grammar_examples (
                grammar_point_id,
                example_jp,
                example_kana,
                example_vi,
                created_at
              )
              VALUES ($1, $2, $3, $4, NOW())
            `,
            [grammarId, ex.jp, ex.kana, ex.vi],
          );
        }
      }

      // Link to lesson_grammar_points
      const slug = `${level.toLowerCase()}-l${item.lessonNumber}`;
      const lessonRes = await client.query('SELECT id FROM lessons WHERE slug = $1 LIMIT 1', [slug]);
      const lessonId = lessonRes.rows[0]?.id;
      if (lessonId && grammarId) {
        await client.query(
          `
            INSERT INTO lesson_grammar_points (lesson_id, grammar_point_id, position)
            VALUES ($1, $2, $3)
            ON CONFLICT (lesson_id, grammar_point_id) DO UPDATE SET position = EXCLUDED.position
          `,
          [lessonId, grammarId, pos],
        );
        totalGrammarLinked++;
      }
    }
  }
  console.log(`[CURRICULUM 25] Linked ${totalGrammarLinked} grammar points across 125 lessons.`);

  // 5. Sync lesson_vocabularies table
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

  // 6. Ensure all Kanji characters appearing in lesson vocabulary exist in `kanji` table
  const hanVietMap = loadHanVietCache();
  const existingKanjiRes = await client.query('SELECT kanji FROM kanji');
  const existingKanjiSet = new Set(existingKanjiRes.rows.map((r) => r.kanji));

  const lessonVocabRes = await client.query(
    `
      SELECT word, kana, meaning_vi, meaning_en, jlpt_level
      FROM vocabulary
      WHERE lesson_number BETWEEN 1 AND 25
    `,
  );

  let kanjiAdded = 0;
  for (const row of lessonVocabRes.rows) {
    const chars = Array.from(row.word || '').filter((ch) => /[\u4e00-\u9faf]/u.test(ch));
    for (const ch of chars) {
      if (!existingKanjiSet.has(ch)) {
        const hanViet = hanVietMap.get(ch) || '';
        const unicodeCode = `U+${ch.codePointAt(0).toString(16).toUpperCase()}`;
        const meaningVi = hanViet
          ? `Chữ Hán "${ch}" (Hán-Việt: ${hanViet}) trong từ ${row.word} (${row.meaning_vi || ''})`
          : `Chữ Hán trong từ ${row.word} (${row.meaning_vi || ''})`;
        await client.query(
          `
            INSERT INTO kanji (
              kanji,
              onyomi,
              kunyomi,
              meaning_vi,
              meaning_en,
              jlpt_level,
              unicode_code,
              han_viet,
              mnemonic,
              created_at,
              updated_at
            )
            VALUES ($1, $2, '', $3, $4, $5, $6, $7, $8, NOW(), NOW())
            ON CONFLICT (kanji) DO NOTHING
          `,
          [
            ch,
            row.kana || '',
            meaningVi,
            row.meaning_en || '',
            row.jlpt_level || 'N1',
            unicodeCode,
            hanViet,
            `Xuất hiện trong từ vựng ${row.word} (${row.meaning_vi || ''}).`,
          ],
        );
        existingKanjiSet.add(ch);
        kanjiAdded++;
      }
    }
  }
  console.log(`[CURRICULUM 25] Added ${kanjiAdded} missing Kanji characters from lesson vocabulary.`);
  console.log('[CURRICULUM 25] All 125 JLPT lessons (N5..N1) are fully seeded and ready!');
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
    await client.query('BEGIN');
    await seed25LessonsCurriculum(client);
    await client.query('COMMIT');
  } catch (err) {
    await client.query('ROLLBACK').catch(() => {});
    console.error('[CURRICULUM 25] Failed:', err);
    process.exitCode = 1;
  } finally {
    await client.end().catch(() => {});
  }
}

if (require.main === module) {
  main();
}

module.exports = {
  seed25LessonsCurriculum,
};

