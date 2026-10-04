import { useRef, useState } from 'react'
import { makeQuestions, makeRounds, playableCards } from '../../utils/flashcard-games'
import './flashcard-game.css'

export function FlashcardGame({ cards, mode }) {
  const [pool] = useState(() => playableCards(cards))
  const [session, setSession] = useState(null)
  const [position, setPosition] = useState(0)
  const [selected, setSelected] = useState(null)
  const [matched, setMatched] = useState([])
  const [mistakes, setMistakes] = useState([])
  const [feedback, setFeedback] = useState('')
  const [finished, setFinished] = useState(false)
  const titleRef = useRef(null)
  const isMatch = mode === 'match'
  const title = isMatch ? 'Ghép cặp' : 'Chọn đáp án'

  function start(deck) {
    setSession({ deck, rounds: makeRounds(deck), questions: makeQuestions(deck, pool) })
    setPosition(0)
    setSelected(null)
    setMatched([])
    setMistakes([])
    setFeedback('')
    setFinished(false)
    titleRef.current?.focus()
  }

  function choosePair(card) {
    if (selected === null) return
    if (selected === card.id) {
      setMatched(previous => [...previous, card.id])
      setFeedback(`Đúng: ${card.frontText} — ${card.backText}.`)
      setSelected(null)
    } else {
      setMistakes(previous => [...new Set([...previous, selected, card.id])])
      setFeedback('Chưa đúng. Hãy chọn lại nghĩa phù hợp hoặc chọn từ khác.')
    }
  }

  function chooseAnswer(answer) {
    if (selected !== null) return
    const question = session.questions[position]
    const correct = answer === question.card.backText
    setSelected(answer)
    if (!correct) setMistakes(previous => [...previous, question.card.id])
    setFeedback(correct ? 'Chính xác!' : `Chưa đúng. Đáp án: ${question.card.backText}.`)
  }

  function next() {
    const total = isMatch ? session.rounds.length : session.questions.length
    if (position + 1 >= total) setFinished(true)
    else setPosition(previous => previous + 1)
    setSelected(null)
    setFeedback('')
    titleRef.current?.focus()
  }

  const wrongCards = session?.deck.filter(card => mistakes.includes(card.id)) || []
  const round = session?.rounds[position]
  const question = session?.questions[position]
  const completedCount = isMatch ? matched.length : position + (selected !== null ? 1 : 0)

  return (
    <section className="flashcard-game" aria-labelledby="game-title">
      <header className="game-heading">
        <div><span className="ui-eyebrow">Luyện qua trò chơi</span><h2 id="game-title" ref={titleRef} tabIndex={-1}>{title}</h2></div>
        <span className="game-tag">{pool.length} thẻ phù hợp</span>
      </header>
      <p className="game-note">Kết quả luyện tập chỉ trong phiên này, chưa cập nhật tiến độ tài khoản. Đổi chế độ hoặc rời trang sẽ kết thúc lượt chơi.</p>
      {!session ? (
        <div className="game-intro">
          <p>{isMatch ? 'Chọn một mặt trước bên trái, rồi chọn mặt sau tương ứng bên phải. Mỗi vòng tối đa 6 cặp, không giới hạn thời gian.' : 'Đọc mặt trước và chọn mặt sau đúng. Mỗi câu có tối đa 4 đáp án, không giới hạn thời gian.'}</p>
          {pool.length !== cards.length && <p>Đã bỏ qua {cards.length - pool.length} thẻ trống hoặc trùng mặt trước/mặt sau để tránh đáp án mơ hồ.</p>}
          {pool.length < 2 ? <p role="status">Cần ít nhất 2 thẻ có mặt trước và mặt sau khác nhau. Bạn vẫn có thể ôn bằng chế độ Flashcard.</p> : <button className="ui-button" onClick={() => start(pool)}>Bắt đầu {title.toLocaleLowerCase()}</button>}
        </div>
      ) : finished ? (
        <div className="game-result">
          <h3>Hoàn thành lượt ôn!</h3>
          <div className="game-result-stats"><p><strong>{session.deck.length - wrongCards.length}/{session.deck.length}</strong>Thẻ không nhầm</p><p><strong>{wrongCards.length}</strong>Thẻ cần ôn</p></div>
          <p>{isMatch ? 'Thẻ chọn sai ở một trong hai cột đều được đưa vào danh sách ôn lại.' : 'Kết quả tính theo lần chọn đầu tiên của mỗi câu.'}</p>
          {wrongCards.length > 0 ? <ul className="game-review">{wrongCards.map(card => <li key={card.id}><strong>{card.frontText}</strong><span>{card.backText}</span></li>)}</ul> : <p>Bạn đã trả lời đúng tất cả. Làm tốt lắm!</p>}
          <div className="game-actions">{wrongCards.length > 0 && <button className="ui-button" onClick={() => start(wrongCards)}>Ôn lại {wrongCards.length} thẻ nhầm</button>}<button className="ui-button ui-button--secondary" onClick={() => start(pool)}>Chơi lại cả bộ</button></div>
        </div>
      ) : (
        <>
          <p>{isMatch ? `Vòng ${position + 1}/${session.rounds.length}` : `Câu ${position + 1}/${session.questions.length}`} · Đã xử lý {completedCount}/{session.deck.length} thẻ</p>
          <progress className="game-progress" aria-label="Tiến độ trò chơi" value={completedCount} max={session.deck.length} />
          {isMatch ? (
            <div className="game-pairs">
              <div><h3>Mặt trước</h3>{round.left.map(card => <button className={`game-tile${selected === card.id ? ' is-selected' : ''}${matched.includes(card.id) ? ' is-correct' : ''}`} key={card.id} aria-pressed={selected === card.id} disabled={matched.includes(card.id)} onClick={() => { setSelected(card.id); setFeedback('Đã chọn mặt trước. Chọn mặt sau tương ứng.') }}>{matched.includes(card.id) ? '✓ ' : ''}{card.frontText}</button>)}</div>
              <div><h3>Mặt sau</h3>{round.right.map(card => <button className={`game-tile${matched.includes(card.id) ? ' is-correct' : ''}`} key={card.id} disabled={selected === null || matched.includes(card.id)} onClick={() => choosePair(card)}>{matched.includes(card.id) ? '✓ ' : ''}{card.backText}</button>)}</div>
            </div>
          ) : (
            <div className="game-question"><h3>{question.card.frontText}</h3><p>Chọn mặt sau tương ứng:</p><div className="game-options">{question.options.map((option, index) => <button key={option} className={`game-tile${selected !== null && option === question.card.backText ? ' is-correct' : ''}${selected === option && option !== question.card.backText ? ' is-wrong' : ''}`} disabled={selected !== null} onClick={() => chooseAnswer(option)}><span className="game-option-letter">{String.fromCharCode(65 + index)}</span>{option}</button>)}</div></div>
          )}
          <p className="game-feedback" role="status" aria-live="polite">{feedback || (isMatch ? 'Chọn một thẻ ở cột mặt trước để bắt đầu.' : 'Chọn một đáp án.')}</p>
          {(isMatch ? round.left.every(card => matched.includes(card.id)) : selected !== null) && <button className="ui-button" onClick={next}>{position + 1 === (isMatch ? session.rounds.length : session.questions.length) ? 'Xem kết quả' : isMatch ? 'Vòng tiếp theo' : 'Câu tiếp theo'}</button>}
        </>
      )}
    </section>
  )
}
