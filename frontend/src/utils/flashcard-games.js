export function normalizeText(value) {
  return String(value ?? '').normalize('NFKC').trim().replace(/\s+/g, ' ').toLocaleLowerCase()
}

export function shuffle(items, random = Math.random) {
  const result = [...items]
  for (let index = result.length - 1; index > 0; index -= 1) {
    const other = Math.floor(random() * (index + 1))
    ;[result[index], result[other]] = [result[other], result[index]]
  }
  return result
}

// One distinct prompt and answer per playable card avoids ambiguous pairings.
export function playableCards(cards) {
  const fronts = new Set()
  const backs = new Set()
  return cards.filter(card => {
    const front = normalizeText(card.frontText)
    const back = normalizeText(card.backText)
    if (!front || !back || fronts.has(front) || backs.has(back)) return false
    fronts.add(front)
    backs.add(back)
    return true
  })
}

export function makeQuestions(cards, answerPool) {
  return shuffle(cards).map(card => ({
    card,
    options: shuffle([
      card.backText,
      ...shuffle(answerPool.filter(other => normalizeText(other.backText) !== normalizeText(card.backText)))
        .slice(0, 3).map(other => other.backText),
    ]),
  }))
}

export function makeRounds(cards) {
  const deck = shuffle(cards)
  const rounds = []
  for (let index = 0; index < deck.length; index += 6) {
    const left = deck.slice(index, index + 6)
    rounds.push({ left, right: shuffle(left) })
  }
  return rounds
}
