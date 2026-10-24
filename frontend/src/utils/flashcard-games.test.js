import test from 'node:test'
import assert from 'node:assert/strict'
import { makeMemoryRounds, makeQuestions, makeRounds, normalizeText, playableCards, shuffle } from './flashcard-games.js'

const cards = Array.from({ length: 13 }, (_, index) => ({ id: index + 1, frontText: `Từ ${index}`, backText: `Nghĩa ${index}` }))


test('shuffle preserves every card without mutating the input', () => {
  const original = [...cards]
  const shuffled = shuffle(cards, () => 0)
  assert.deepEqual(cards, original)
  assert.deepEqual(shuffled.map(card => card.id).sort((a, b) => a - b), cards.map(card => card.id))
  assert.notDeepEqual(shuffled, original)
})

test('empty and ambiguous prompts/answers are excluded with Unicode normalization', () => {
  const input = [
    { id: 1, frontText: 'Ａ', backText: ' Một ' },
    { id: 2, frontText: 'a', backText: 'Hai' },
    { id: 3, frontText: 'B', backText: 'một' },
    { id: 4, frontText: ' ', backText: 'Ba' },
    { id: 5, frontText: 'C', backText: 'Ba' },
  ]
  assert.deepEqual(playableCards(input).map(card => card.id), [1, 5])
})

test('matching rounds cover all cards with at most six pairs each', () => {
  const rounds = makeRounds(cards)
  assert.deepEqual(rounds.map(round => round.left.length), [6, 6, 1])
  assert.equal(new Set(rounds.flatMap(round => round.left.map(card => card.id))).size, cards.length)
  for (const round of rounds) {
    assert.deepEqual(round.left.map(card => card.id).sort(), round.right.map(card => card.id).sort())
  }
})

test('choices contain the correct answer exactly once for small and large sets', () => {
  for (const size of [2, 3, 13]) {
    const pool = cards.slice(0, size)
    const questions = makeQuestions(pool, pool)
    assert.equal(questions.length, size)
    for (const question of questions) {
      assert.equal(question.options.length, Math.min(4, size))
      assert.equal(new Set(question.options.map(normalizeText)).size, question.options.length)
      assert.equal(question.options.filter(option => option === question.card.backText).length, 1)
    }
  }
})

test('retrying one mistaken card still uses distractors from the original set', () => {
  const questions = makeQuestions([cards[0]], cards)
  assert.equal(questions.length, 1)
  assert.equal(questions[0].options.length, 4)
  assert.ok(questions[0].options.includes(cards[0].backText))
})

test('memory rounds create pair tiles for each round with at most six pairs', () => {
  const rounds = makeMemoryRounds(cards, 6, () => 0)
  assert.equal(rounds.length, 3)
  assert.equal(rounds[0].cards.length, 6)
  assert.equal(rounds[0].tiles.length, 12)
  assert.equal(rounds[2].cards.length, 1)
  assert.equal(rounds[2].tiles.length, 2)

  const firstTile = rounds[0].tiles[0]
  assert.ok(firstTile.id)
  assert.ok(firstTile.cardId)
  assert.ok(firstTile.text)
  assert.ok(firstTile.type === 'front' || firstTile.type === 'back')
})

