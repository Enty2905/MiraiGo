import test from 'node:test'
import assert from 'node:assert/strict'
import { getLessonReadingPassages } from '../src/data/lesson-reading-data.js'

test('each JLPT level loads its own curated reading data', async () => {
  for (const level of ['N5', 'N4', 'N3', 'N2', 'N1']) {
    const passages = await getLessonReadingPassages(level, 1)
    assert(passages.length > 0, level)
    assert(passages.every(passage => passage.passageJp && passage.questions.length > 0), level)
  }
})

test('missing lessons retain generated reading exercises', async () => {
  const passages = await getLessonReadingPassages('N5', 999)
  assert.equal(passages.length, 5)
  assert(passages.every(passage => passage.questions.length > 0))
})
