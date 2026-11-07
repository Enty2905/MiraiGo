import { useState } from 'react'
import { getLessonReadingPassages } from '../../data/lesson-reading-data'

export function LessonReadingSection({ level, lessonNumber, vocabulary = [], grammar = [] }) {
  const passages = getLessonReadingPassages(level, lessonNumber, vocabulary, grammar)
  const [activePassageIndex, setActivePassageIndex] = useState(0)
  const [answersByPassage, setAnswersByPassage] = useState({})
  const [submittedByPassage, setSubmittedByPassage] = useState({})
  const [showTranslationByPassage, setShowTranslationByPassage] = useState({})

  if (!passages || passages.length === 0) {
    return (
      <section className="lesson-detail-card">
        <h2 className="lesson-section-title">Bài đọc hiểu</h2>
        <p className="lesson-empty-note">Đang cập nhật bài đọc hiểu cho bài học này.</p>
      </section>
    )
  }

  const currentPassage = passages[activePassageIndex] || passages[0]
  const currentAnswers = answersByPassage[currentPassage.id] || {}
  const isSubmitted = Boolean(submittedByPassage[currentPassage.id])
  const showTranslation = Boolean(showTranslationByPassage[currentPassage.id])

  const handleSelectOption = (questionId, optionIndex) => {
    if (isSubmitted) {
      return
    }
    setAnswersByPassage((previous) => ({
      ...previous,
      [currentPassage.id]: {
        ...(previous[currentPassage.id] || {}),
        [questionId]: optionIndex,
      },
    }))
  }

  const handleSubmitQuiz = (event) => {
    event.preventDefault()
    setSubmittedByPassage((previous) => ({
      ...previous,
      [currentPassage.id]: true,
    }))
  }

  const handleResetQuiz = () => {
    setAnswersByPassage((previous) => ({
      ...previous,
      [currentPassage.id]: {},
    }))
    setSubmittedByPassage((previous) => ({
      ...previous,
      [currentPassage.id]: false,
    }))
  }

  const toggleTranslation = () => {
    setShowTranslationByPassage((previous) => ({
      ...previous,
      [currentPassage.id]: !previous[currentPassage.id],
    }))
  }

  const questions = currentPassage.questions || []
  const allAnswered = questions.length > 0 && questions.every(
    (question) => currentAnswers[question.id] !== undefined,
  )

  const correctCount = isSubmitted
    ? questions.filter(
        (question) => currentAnswers[question.id] === question.answerIndex,
      ).length
    : 0

  const scorePercent = questions.length > 0
    ? Math.round((correctCount / questions.length) * 100)
    : 0

  return (
    <section className="lesson-detail-card lesson-reading-card" id="lesson-reading-section">
      <div className="lesson-section-head">
        <div>
          <h2 className="lesson-section-title">Bài đọc hiểu (Đọc đoạn văn & Trắc nghiệm)</h2>
          <p className="lesson-reading-subtitle">
            Gồm {passages.length} bài đọc ngắn bám sát từ vựng và ngữ pháp của Bài {lessonNumber}. Mỗi bài có {questions.length} câu trắc nghiệm.
          </p>
        </div>
        <span className="lesson-badge-accent">{passages.length} bài đọc</span>
      </div>

      {/* Tabs to switch among 4-5 reading passages */}
      <div className="lesson-reading-tabs" role="tablist" aria-label="Danh sách bài đọc">
        {passages.map((passage, index) => {
          const isDone = submittedByPassage[passage.id]
          const isActive = index === activePassageIndex

          return (
            <button
              key={passage.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              className={`lesson-reading-tab${isActive ? ' is-active' : ''}${isDone ? ' is-completed' : ''}`}
              onClick={() => setActivePassageIndex(index)}
            >
              <span>Bài đọc {index + 1}</span>
              {isDone ? <span className="lesson-tab-check">✓</span> : null}
            </button>
          )
        })}
      </div>

      {/* Active Passage Content */}
      <article className="lesson-passage-container">
        <header className="lesson-passage-header">
          <div className="lesson-passage-title-group">
            <h3>{currentPassage.title}</h3>
            {currentPassage.summary ? <p>{currentPassage.summary}</p> : null}
          </div>

          <button
            type="button"
            className="lesson-toggle-translation-btn"
            onClick={toggleTranslation}
            aria-expanded={showTranslation}
          >
            {showTranslation ? 'Ẩn bản dịch tiếng Việt' : 'Xem bản dịch tiếng Việt'}
          </button>
        </header>

        {/* Japanese Reading Text */}
        <div className="lesson-passage-text-box">
          <div className="lesson-passage-japanese-text">
            {currentPassage.passageJp.split('\n').map((line, lineIndex) => (
              <p key={`line-${lineIndex}`}>{line}</p>
            ))}
          </div>

          {showTranslation ? (
            <div className="lesson-passage-vietnamese-text" aria-live="polite">
              <strong>Bản dịch tiếng Việt:</strong>
              {currentPassage.passageVi.split('\n').map((line, lineIndex) => (
                <p key={`vi-line-${lineIndex}`}>{line}</p>
              ))}
            </div>
          ) : null}
        </div>

        {/* Focus vocabulary and grammar */}
        <div className="lesson-passage-focus-row">
          {Array.isArray(currentPassage.vocabFocus) && currentPassage.vocabFocus.length > 0 ? (
            <div className="lesson-passage-focus-item">
              <span className="lesson-focus-label">Từ vựng trọng tâm:</span>
              <div className="lesson-focus-chips">
                {currentPassage.vocabFocus.map((word, wordIndex) => (
                  <span key={`focus-w-${wordIndex}`} className="lesson-focus-chip">
                    {word}
                  </span>
                ))}
              </div>
            </div>
          ) : null}

          {Array.isArray(currentPassage.grammarFocus) && currentPassage.grammarFocus.length > 0 ? (
            <div className="lesson-passage-focus-item">
              <span className="lesson-focus-label">Ngữ pháp áp dụng:</span>
              <div className="lesson-focus-chips">
                {currentPassage.grammarFocus.map((pattern, patternIndex) => (
                  <span key={`focus-g-${patternIndex}`} className="lesson-focus-chip lesson-focus-chip--grammar">
                    {pattern}
                  </span>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </article>

      {/* 5-6 Comprehension Questions Form */}
      <div className="lesson-reading-quiz-section">
        <header className="lesson-reading-quiz-head">
          <h3>Trắc nghiệm đọc hiểu ({questions.length} câu)</h3>
          <p>Đọc kỹ đoạn văn trên và chọn phương án đúng nhất cho từng câu hỏi.</p>
        </header>

        {isSubmitted ? (
          <div
            className={`lesson-reading-score-banner${scorePercent >= 80 ? ' is-great' : scorePercent >= 50 ? ' is-pass' : ' is-retry'}`}
            role="status"
          >
            <strong>
              Kết quả: Đúng {correctCount}/{questions.length} câu ({scorePercent}%)
            </strong>
            <p>
              {scorePercent === 100
                ? 'Xuất sắc! Bạn đã hiểu trọn vẹn đoạn văn và trả lời chính xác tất cả câu hỏi.'
                : scorePercent >= 80
                  ? 'Rất tốt! Bạn nắm rất vững nội dung bài đọc.'
                  : 'Hãy xem lại các câu trả lời chưa đúng bên dưới để củng cố thêm kiến thức nhé.'}
            </p>
          </div>
        ) : null}

        <form onSubmit={handleSubmitQuiz} className="lesson-reading-quiz-form">
          <div className="lesson-reading-questions-list">
            {questions.map((question, qIndex) => {
              const selectedOptionIndex = currentAnswers[question.id]
              const isCorrectAnswer = selectedOptionIndex === question.answerIndex

              return (
                <article
                  key={question.id}
                  className={`lesson-reading-q-card${isSubmitted ? (isCorrectAnswer ? ' is-q-correct' : ' is-q-wrong') : ''}`}
                >
                  <header className="lesson-reading-q-head">
                    <span className="lesson-reading-q-number">Câu {qIndex + 1}</span>
                    <h4 className="lesson-reading-q-title">{question.question}</h4>
                  </header>

                  <div className="lesson-reading-options-grid">
                    {question.options.map((option, optIndex) => {
                      const isSelected = selectedOptionIndex === optIndex
                      const isThisCorrectOption = optIndex === question.answerIndex

                      let optionClass = 'lesson-reading-option'
                      if (isSelected) {
                        optionClass += ' is-selected'
                      }
                      if (isSubmitted) {
                        if (isThisCorrectOption) {
                          optionClass += ' is-correct-highlight'
                        } else if (isSelected && !isThisCorrectOption) {
                          optionClass += ' is-wrong-highlight'
                        }
                      }

                      return (
                        <label
                          key={`${question.id}-opt-${optIndex}`}
                          className={optionClass}
                        >
                          <input
                            type="radio"
                            name={question.id}
                            value={optIndex}
                            checked={isSelected}
                            disabled={isSubmitted}
                            onChange={() => handleSelectOption(question.id, optIndex)}
                          />
                          <span className="lesson-reading-opt-letter">
                            {['A', 'B', 'C', 'D'][optIndex]}
                          </span>
                          <span className="lesson-reading-opt-text">{option}</span>
                          {isSubmitted && isThisCorrectOption ? (
                            <span className="lesson-reading-opt-tag">Đáp án đúng</span>
                          ) : null}
                        </label>
                      )
                    })}
                  </div>

                  {isSubmitted ? (
                    <div className="lesson-reading-explanation">
                      <strong>Giải thích:</strong>
                      <p>{question.explanation}</p>
                    </div>
                  ) : null}
                </article>
              )
            })}
          </div>

          <div className="lesson-reading-actions">
            {!isSubmitted ? (
              <button
                type="submit"
                className="lesson-primary-btn lesson-reading-submit-btn"
                disabled={!allAnswered}
              >
                {allAnswered ? 'Kiểm tra đáp án bài đọc' : `Vui lòng chọn đáp án cho đủ ${questions.length} câu`}
              </button>
            ) : (
              <div className="lesson-reading-after-submit-btns">
                <button
                  type="button"
                  className="lesson-secondary-btn"
                  onClick={handleResetQuiz}
                >
                  Làm lại bài đọc này
                </button>

                {activePassageIndex < passages.length - 1 ? (
                  <button
                    type="button"
                    className="lesson-primary-btn"
                    onClick={() => setActivePassageIndex((previous) => previous + 1)}
                  >
                    Chuyển sang Bài đọc {activePassageIndex + 2} →
                  </button>
                ) : (
                  <button
                    type="button"
                    className="lesson-primary-btn"
                    onClick={() => setActivePassageIndex(0)}
                  >
                    Quay lại Bài đọc 1
                  </button>
                )}
              </div>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}

