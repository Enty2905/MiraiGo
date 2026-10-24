import { useEffect, useRef, useState } from 'react'
import { makeMemoryRounds, makeQuestions, makeRounds, playableCards } from '../../utils/flashcard-games'
import { playSound } from '../../utils/sound-effects'
import './flashcard-game.css'

export function FlashcardGame({ cards, mode, onActiveChange }) {
  const [pool] = useState(() => playableCards(cards))
  const [session, setSession] = useState(null)
  const [position, setPosition] = useState(0)
  const [selected, setSelected] = useState(null)
  const [matched, setMatched] = useState([])
  const [mistakes, setMistakes] = useState([])
  const [feedback, setFeedback] = useState('')
  const [finished, setFinished] = useState(false)
  const [soundEnabled, setSoundEnabled] = useState(true)

  // Memory Game states
  const [flippedTileIds, setFlippedTileIds] = useState([])
  const [matchedTileIds, setMatchedTileIds] = useState([])
  const [turns, setTurns] = useState(0)
  const [isLocked, setIsLocked] = useState(false)
  const [seconds, setSeconds] = useState(0)

  const titleRef = useRef(null)

  const isMatch = mode === 'match'
  const isChoice = mode === 'choice'
  const isMemory = mode === 'memory'

  let title = 'Chọn đáp án'
  if (isMatch) title = 'Ghép cặp'
  else if (isMemory) title = 'Lật thẻ tìm cặp'

  // Notify parent whether an active, in-progress game is ongoing
  useEffect(() => {
    const isActive = Boolean(session && !finished)
    onActiveChange?.(isActive)
    return () => {
      onActiveChange?.(false)
    }
  }, [session, finished, onActiveChange])

  // Timer for Memory game
  useEffect(() => {
    let interval = null
    if (session && !finished && isMemory) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1)
      }, 1000)
    }
    return () => {
      if (interval) clearInterval(interval)
    }
  }, [session, finished, isMemory])


  function formatTime(totalSeconds) {
    const mins = Math.floor(totalSeconds / 60)
    const secs = totalSeconds % 60
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
  }

  function start(deck) {
    setSession({
      deck,
      rounds: makeRounds(deck),
      questions: makeQuestions(deck, pool),
      memoryRounds: makeMemoryRounds(deck, 6),
    })
    setPosition(0)
    setSelected(null)
    setMatched([])
    setMistakes([])
    setFeedback('')
    setFinished(false)
    setFlippedTileIds([])
    setMatchedTileIds([])
    setTurns(0)
    setIsLocked(false)
    setSeconds(0)
    titleRef.current?.focus()
  }

  function choosePair(card) {
    if (selected === null) return
    if (selected === card.id) {
      playSound('match', soundEnabled)
      setMatched((previous) => [...previous, card.id])
      setFeedback(`Đúng: ${card.frontText} — ${card.backText}.`)
      setSelected(null)
    } else {
      playSound('wrong', soundEnabled)
      setMistakes((previous) => [...new Set([...previous, selected, card.id])])
      setFeedback('Chưa đúng. Hãy chọn lại nghĩa phù hợp hoặc chọn từ khác.')
    }
  }

  function chooseAnswer(answer) {
    if (selected !== null) return
    const question = session.questions[position]
    const correct = answer === question.card.backText
    setSelected(answer)
    if (!correct) {
      playSound('wrong', soundEnabled)
      setMistakes((previous) => [...previous, question.card.id])
    } else {
      playSound('correct', soundEnabled)
    }
    setFeedback(correct ? 'Chính xác!' : `Chưa đúng. Đáp án: ${question.card.backText}.`)
  }

  function chooseMemoryTile(tile) {
    if (isLocked || flippedTileIds.includes(tile.id) || matchedTileIds.includes(tile.id)) {
      return
    }

    playSound('flip', soundEnabled)

    if (flippedTileIds.length === 0) {
      setFlippedTileIds([tile.id])
      setFeedback('Đã lật 1 thẻ. Hãy tìm thẻ tương ứng!')
      return
    }

    if (flippedTileIds.length === 1) {
      const firstId = flippedTileIds[0]
      const roundTiles = session.memoryRounds[position]?.tiles || []
      const firstTile = roundTiles.find((t) => t.id === firstId)

      setFlippedTileIds([firstId, tile.id])
      setTurns((prev) => prev + 1)

      if (firstTile && firstTile.cardId === tile.cardId && firstTile.id !== tile.id) {
        // Matched!
        playSound('match', soundEnabled)
        const nextMatched = [...matchedTileIds, firstId, tile.id]
        setMatchedTileIds(nextMatched)
        setFeedback(`Chính xác: ${firstTile.text} = ${tile.text}`)
        setFlippedTileIds([])

        // Check if all pairs in current round matched
        if (nextMatched.length >= roundTiles.length) {
          const totalRounds = session.memoryRounds.length
          if (position + 1 >= totalRounds) {
            playSound('victory', soundEnabled)
            setFinished(true)
          } else {
            setFeedback('Tuyệt vời! Bạn đã ghép xong vòng này.')
          }
        }
      } else {
        // Mismatch
        playSound('wrong', soundEnabled)
        setIsLocked(true)
        if (firstTile) {
          setMistakes((prev) => [...new Set([...prev, firstTile.cardId, tile.cardId])])
        }
        setFeedback('Chưa trùng khớp. Hãy ghi nhớ vị trí 2 thẻ!')
        setTimeout(() => {
          setFlippedTileIds([])
          setIsLocked(false)
        }, 850)
      }
    }
  }

  function next() {
    let total = session.questions.length
    if (isMatch) total = session.rounds.length
    else if (isMemory) total = session.memoryRounds.length

    if (position + 1 >= total) {
      playSound('victory', soundEnabled)
      setFinished(true)
    } else {
      setPosition((previous) => previous + 1)
      setSelected(null)
      setFeedback('')
      setFlippedTileIds([])
      setMatchedTileIds([])
      titleRef.current?.focus()
    }
  }

  const wrongCards = session?.deck.filter((card) => mistakes.includes(card.id)) || []
  const round = session?.rounds[position]
  const question = session?.questions[position]
  const memoryRound = session?.memoryRounds[position]

  let completedCount = 0
  if (isMatch) completedCount = matched.length
  else if (isChoice) completedCount = position + (selected !== null ? 1 : 0)
  else if (isMemory) completedCount = Math.floor(matchedTileIds.length / 2)

  const memoryPairsInRound = memoryRound?.cards.length || 0
  const isMemoryRoundComplete = isMemory && memoryRound && matchedTileIds.length >= memoryRound.tiles.length

  // Star rating calculation for memory game
  const totalPairs = session?.deck.length || 1
  let starCount = 3
  if (turns > totalPairs * 2.2) starCount = 1
  else if (turns > totalPairs * 1.5) starCount = 2

  return (
    <section className="flashcard-game" aria-labelledby="game-title">
      <header className="game-heading">
        <div>
          <span className="ui-eyebrow">Luyện qua trò chơi</span>
          <h2 id="game-title" ref={titleRef} tabIndex={-1}>
            {title}
          </h2>
        </div>
        <div className="game-heading-tools">
          <button
            type="button"
            className="game-sound-btn"
            onClick={() => setSoundEnabled((prev) => !prev)}
            title={soundEnabled ? 'Tắt âm thanh' : 'Bật âm thanh'}
            aria-label={soundEnabled ? 'Tắt âm thanh' : 'Bật âm thanh'}
          >
            {soundEnabled ? '🔊 Âm thanh' : '🔇 Đã tắt'}
          </button>
          <span className="game-tag">{pool.length} thẻ phù hợp</span>
        </div>
      </header>

      <p className="game-note">
        Kết quả luyện tập chỉ trong phiên này, chưa cập nhật tiến độ tài khoản. Đổi chế độ hoặc rời trang sẽ kết thúc
        lượt chơi.
      </p>

      {!session ? (
        <div className="game-intro">
          {isMemory ? (
            <p>
              Lật 2 thẻ bài úp mặt để tìm cặp từ tiếng Nhật và nghĩa tiếng Việt tương ứng. Mỗi vòng có tối đa 6 cặp
              (12 thẻ), có đếm thời gian và tính số lượt lật!
            </p>
          ) : isMatch ? (
            <p>
              Chọn một mặt trước bên trái, rồi chọn mặt sau tương ứng bên phải. Mỗi vòng tối đa 6 cặp, không giới hạn
              thời gian.
            </p>
          ) : (
            <p>
              Đọc mặt trước và chọn mặt sau đúng. Mỗi câu có tối đa 4 đáp án, không giới hạn thời gian.
            </p>
          )}

          {pool.length !== cards.length && (
            <p>
              Đã bỏ qua {cards.length - pool.length} thẻ trống hoặc trùng mặt trước/mặt sau để tránh đáp án mơ hồ.
            </p>
          )}

          {pool.length < 2 ? (
            <p role="status">
              Cần ít nhất 2 thẻ có mặt trước và mặt sau khác nhau. Bạn vẫn có thể ôn bằng chế độ Flashcard.
            </p>
          ) : (
            <button className="ui-button" onClick={() => start(pool)}>
              Bắt đầu {title.toLocaleLowerCase()}
            </button>
          )}
        </div>
      ) : finished ? (
        <div className="game-result">
          <h3>🎉 Hoàn thành lượt chơi!</h3>

          {isMemory && (
            <div className="game-stars" aria-label={`Đánh giá: ${starCount} sao`}>
              {'★'.repeat(starCount) + '☆'.repeat(3 - starCount)}
            </div>
          )}

          <div className="game-result-stats">
            {isMemory ? (
              <>
                <p>
                  <strong>{formatTime(seconds)}</strong>
                  Thời gian
                </p>
                <p>
                  <strong>{turns}</strong>
                  Lượt lật
                </p>
                <p>
                  <strong>{session.deck.length - wrongCards.length}/{session.deck.length}</strong>
                  Thẻ không nhầm
                </p>
              </>
            ) : (
              <>
                <p>
                  <strong>
                    {session.deck.length - wrongCards.length}/{session.deck.length}
                  </strong>
                  Thẻ không nhầm
                </p>
                <p>
                  <strong>{wrongCards.length}</strong>
                  Thẻ cần ôn
                </p>
              </>
            )}
          </div>

          <p>
            {isMemory
              ? 'Các thẻ bị lật sai ít nhất 1 lần sẽ được liệt kê bên dưới để bạn tiện ôn lại.'
              : isMatch
              ? 'Thẻ chọn sai ở một trong hai cột đều được đưa vào danh sách ôn lại.'
              : 'Kết quả tính theo lần chọn đầu tiên của mỗi câu.'}
          </p>

          {wrongCards.length > 0 ? (
            <ul className="game-review">
              {wrongCards.map((card) => (
                <li key={card.id}>
                  <strong>{card.frontText}</strong>
                  <span>{card.backText}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="game-perfect-msg">✨ Bạn đã hoàn thành xuất sắc tất cả các thẻ mà không bị nhầm. Tuyệt vời!</p>
          )}

          <div className="game-actions">
            {wrongCards.length > 0 && (
              <button className="ui-button" onClick={() => start(wrongCards)}>
                Ôn lại {wrongCards.length} thẻ nhầm
              </button>
            )}
            <button className="ui-button ui-button--secondary" onClick={() => start(pool)}>
              Chơi lại cả bộ
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="game-meta-bar">
            <p>
              {isMemory
                ? `Vòng ${position + 1}/${session.memoryRounds.length} · Đã tìm ${completedCount}/${memoryPairsInRound} cặp`
                : isMatch
                ? `Vòng ${position + 1}/${session.rounds.length} · Đã xử lý ${completedCount}/${session.deck.length} thẻ`
                : `Câu ${position + 1}/${session.questions.length} · Đã xử lý ${completedCount}/${session.deck.length} thẻ`}
            </p>
            {isMemory && (
              <div className="game-stats-pill">
                <span>⏱️ {formatTime(seconds)}</span>
                <span>🔄 {turns} lượt</span>
              </div>
            )}
          </div>

          <progress
            className="game-progress"
            aria-label="Tiến độ trò chơi"
            value={completedCount}
            max={isMemory ? memoryPairsInRound : session.deck.length}
          />

          {isMemory ? (
            <div className="memory-grid" role="region" aria-label="Bàn cờ lật thẻ">
              {memoryRound.tiles.map((tile) => {
                const isFlipped = flippedTileIds.includes(tile.id)
                const isMatched = matchedTileIds.includes(tile.id)
                const isOpen = isFlipped || isMatched

                return (
                  <button
                    key={tile.id}
                    type="button"
                    className={`memory-card${isOpen ? ' is-flipped' : ''}${isMatched ? ' is-matched' : ''}`}
                    disabled={isMatched || isLocked}
                    onClick={() => chooseMemoryTile(tile)}
                    aria-label={isOpen ? tile.text : 'Thẻ úp mặt'}
                  >
                    <div className="memory-card-inner">
                      <div className="memory-card-front" aria-hidden={isOpen}>
                        <span className="memory-card-icon">🎴</span>
                        <span className="memory-card-label">MiraiGo</span>
                      </div>
                      <div className="memory-card-back" aria-hidden={!isOpen}>
                        <span className="memory-card-tag">{tile.type === 'front' ? 'Từ' : 'Nghĩa'}</span>
                        <span className="memory-card-text">{tile.text}</span>
                        {isMatched && <span className="memory-card-check">✓</span>}
                      </div>
                    </div>
                  </button>
                )
              })}
            </div>
          ) : isMatch ? (
            <div className="game-pairs">
              <div>
                <h3>Mặt trước</h3>
                {round.left.map((card) => (
                  <button
                    className={`game-tile${selected === card.id ? ' is-selected' : ''}${
                      matched.includes(card.id) ? ' is-correct' : ''
                    }`}
                    key={card.id}
                    aria-pressed={selected === card.id}
                    disabled={matched.includes(card.id)}
                    onClick={() => {
                      setSelected(card.id)
                      setFeedback('Đã chọn mặt trước. Chọn mặt sau tương ứng.')
                    }}
                  >
                    {matched.includes(card.id) ? '✓ ' : ''}
                    {card.frontText}
                  </button>
                ))}
              </div>
              <div>
                <h3>Mặt sau</h3>
                {round.right.map((card) => (
                  <button
                    className={`game-tile${matched.includes(card.id) ? ' is-correct' : ''}`}
                    key={card.id}
                    disabled={selected === null || matched.includes(card.id)}
                    onClick={() => choosePair(card)}
                  >
                    {matched.includes(card.id) ? '✓ ' : ''}
                    {card.backText}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="game-question">
              <h3>{question.card.frontText}</h3>
              <p>Chọn mặt sau tương ứng:</p>
              <div className="game-options">
                {question.options.map((option, index) => (
                  <button
                    key={option}
                    className={`game-tile${
                      selected !== null && option === question.card.backText ? ' is-correct' : ''
                    }${selected === option && option !== question.card.backText ? ' is-wrong' : ''}`}
                    disabled={selected !== null}
                    onClick={() => chooseAnswer(option)}
                  >
                    <span className="game-option-letter">{String.fromCharCode(65 + index)}</span>
                    {option}
                  </button>
                ))}
              </div>
            </div>
          )}

          <p className="game-feedback" role="status" aria-live="polite">
            {feedback ||
              (isMemory
                ? 'Nhấp vào một thẻ bất kỳ để bắt đầu lật.'
                : isMatch
                ? 'Chọn một thẻ ở cột mặt trước để bắt đầu.'
                : 'Chọn một đáp án.')}
          </p>

          {((isMemory && isMemoryRoundComplete) ||
            (isMatch && round.left.every((card) => matched.includes(card.id))) ||
            (!isMemory && !isMatch && selected !== null)) && (
            <button className="ui-button" onClick={next}>
              {position + 1 ===
              (isMemory
                ? session.memoryRounds.length
                : isMatch
                ? session.rounds.length
                : session.questions.length)
                ? 'Xem kết quả'
                : 'Vòng tiếp theo'}
            </button>
          )}
        </>
      )}
    </section>
  )
}
