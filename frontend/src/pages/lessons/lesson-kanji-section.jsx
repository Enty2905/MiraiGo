import { useMemo, useState } from 'react'
import { KanjiStrokeAnimator } from '../../components/dictionary/kanji-stroke-animator'

export function LessonKanjiSection({ kanjiList = [], lessonNumber, vocabulary = [] }) {
  const [selectedKanjiIndex, setSelectedKanjiIndex] = useState(0)
  const [quizAnswers, setQuizAnswers] = useState({})
  const [isQuizSubmitted, setIsQuizSubmitted] = useState(false)

  // Deduplicate and ensure clean kanji objects
  const displayKanjiList = useMemo(() => {
    if (Array.isArray(kanjiList) && kanjiList.length > 0) {
      return kanjiList
    }

    // Fallback: extract any kanji from lesson vocabulary
    const chars = []
    const seen = new Set()
    for (const v of vocabulary || []) {
      for (const char of String(v.japanese || '')) {
        if (/[\u3400-\u9fff]/u.test(char) && !seen.has(char)) {
          seen.add(char)
          chars.push({
            id: `char-${char}`,
            kanji: char,
            character: char,
            hanViet: '',
            onyomi: '',
            kunyomi: '',
            meaningVi: v.meaningVi || '',
            strokeCount: null,
            relatedVocabulary: [v],
          })
        }
      }
    }
    return chars
  }, [kanjiList, vocabulary])

  // Mini Kanji Quiz based on Han-Viet readings and meanings
  const kanjiQuiz = useMemo(() => {
    const listWithHanViet = displayKanjiList.filter((k) => Boolean(k.hanViet))
    if (listWithHanViet.length === 0) {
      return []
    }

    return listWithHanViet.slice(0, 5).map((targetKanji, index) => {
      const distractors = listWithHanViet
        .filter((k) => k.kanji !== targetKanji.kanji && k.hanViet !== targetKanji.hanViet)
        .map((k) => k.hanViet)
        .slice(0, 3)

      const fallbackHanViet = ['TƯ', 'NHÂN', 'TIÊN', 'SINH', 'HỌC', 'HỘI', 'XÃ', 'VIÊN', 'Y', 'GIẢ']
      for (const fb of fallbackHanViet) {
        if (distractors.length >= 3) break
        if (fb !== targetKanji.hanViet && !distractors.includes(fb)) {
          distractors.push(fb)
        }
      }

      const options = [...distractors]
      const insertIdx = index % (options.length + 1)
      options.splice(insertIdx, 0, targetKanji.hanViet)

      return {
        id: `kanji-q-${targetKanji.kanji}-${index}`,
        prompt: `Âm Hán-Việt của chữ Hán [ ${targetKanji.kanji} ] là gì?`,
        kanji: targetKanji.kanji,
        meaningVi: targetKanji.meaningVi,
        answer: targetKanji.hanViet,
        options,
      }
    })
  }, [displayKanjiList])

  if (displayKanjiList.length === 0) {
    return (
      <section className="lesson-detail-card">
        <h2 className="lesson-section-title">Hán tự (Kanji)</h2>
        <p className="lesson-empty-note">
          Bài học này không có chữ Hán phức tạp hoặc đang được cập nhật.
        </p>
      </section>
    )
  }

  const activeKanji = displayKanjiList[selectedKanjiIndex] || displayKanjiList[0]

  const handleSelectQuizOption = (questionId, option) => {
    if (isQuizSubmitted) return
    setQuizAnswers((prev) => ({
      ...prev,
      [questionId]: option,
    }))
  }

  const handleSubmitQuiz = (e) => {
    e.preventDefault()
    setIsQuizSubmitted(true)
  }

  const handleResetQuiz = () => {
    setQuizAnswers({})
    setIsQuizSubmitted(false)
  }

  const quizCorrectCount = isQuizSubmitted
    ? kanjiQuiz.filter((q) => quizAnswers[q.id] === q.answer).length
    : 0

  return (
    <section className="lesson-detail-card lesson-kanji-card" id="lesson-kanji-section">
      <div className="lesson-section-head">
        <div>
          <h2 className="lesson-section-title">Hán tự trong Bài {lessonNumber}</h2>
          <p className="lesson-kanji-subtitle">
            Học thứ tự từng nét vẽ uyển chuyển, âm Hán-Việt, âm On/Kun và các từ vựng thực tế.
          </p>
        </div>
        <span className="lesson-badge-accent">{displayKanjiList.length} chữ Hán</span>
      </div>

      {/* Quick selection pill chips */}
      <div className="lesson-kanji-pills-bar" aria-label="Danh sách chữ Hán">
        {displayKanjiList.map((item, index) => {
          const isSelected = index === selectedKanjiIndex

          return (
            <button
              key={`pill-${item.kanji}-${index}`}
              type="button"
              className={`lesson-kanji-pill${isSelected ? ' is-selected' : ''}`}
              onClick={() => setSelectedKanjiIndex(index)}
            >
              <span className="lesson-kanji-pill-char">{item.kanji}</span>
              {item.hanViet ? (
                <span className="lesson-kanji-pill-hv">{item.hanViet}</span>
              ) : null}
            </button>
          )
        })}
      </div>

      {/* Main Kanji Detail Spotlight */}
      {activeKanji ? (
        <article className="lesson-kanji-spotlight">
          <div className="lesson-kanji-spotlight-visual">
            <KanjiStrokeAnimator kanji={activeKanji.kanji} />
            <p className="lesson-kanji-stroke-note">
              {activeKanji.strokeCount
                ? `Tổng số nét: ${activeKanji.strokeCount} nét`
                : 'Thứ tự từng nét vẽ chuyển động'}
            </p>
          </div>

          <div className="lesson-kanji-spotlight-info">
            <header className="lesson-kanji-spotlight-header">
              <div className="lesson-kanji-char-badge-row">
                <span className="lesson-kanji-big-char">{activeKanji.kanji}</span>
                {activeKanji.jlptLevel ? (
                  <span className="lesson-kanji-jlpt-tag">{activeKanji.jlptLevel}</span>
                ) : null}
              </div>

              {activeKanji.hanViet ? (
                <div className="lesson-kanji-hanviet-banner">
                  <span className="lesson-hanviet-label">Âm Hán-Việt:</span>
                  <strong className="lesson-hanviet-value">{activeKanji.hanViet}</strong>
                </div>
              ) : null}
            </header>

            <div className="lesson-kanji-readings-box">
              {activeKanji.onyomi ? (
                <div className="lesson-kanji-reading-item">
                  <span className="lesson-reading-type">Onyomi (Âm On):</span>
                  <strong className="lesson-reading-text is-on">{activeKanji.onyomi}</strong>
                </div>
              ) : null}

              {activeKanji.kunyomi ? (
                <div className="lesson-kanji-reading-item">
                  <span className="lesson-reading-type">Kunyomi (Âm Kun):</span>
                  <strong className="lesson-reading-text is-kun">{activeKanji.kunyomi}</strong>
                </div>
              ) : null}

              {activeKanji.meaningVi ? (
                <div className="lesson-kanji-reading-item">
                  <span className="lesson-reading-type">Nghĩa tiếng Việt:</span>
                  <span className="lesson-reading-meaning">{activeKanji.meaningVi}</span>
                </div>
              ) : null}
            </div>

            {/* Related Vocabulary containing this Kanji */}
            <div className="lesson-kanji-compounds-section">
              <h4>Từ vựng thực tế chứa chữ [{activeKanji.kanji}]:</h4>

              {Array.isArray(activeKanji.relatedVocabulary) && activeKanji.relatedVocabulary.length > 0 ? (
                <div className="lesson-kanji-compounds-list">
                  {activeKanji.relatedVocabulary.slice(0, 4).map((vocab, vIndex) => (
                    <article key={`comp-${vocab.japanese}-${vIndex}`} className="lesson-kanji-compound-card">
                      <div className="lesson-compound-head">
                        <strong className="lesson-compound-jp">{vocab.japanese}</strong>
                        {vocab.kana ? <span className="lesson-compound-kana">{vocab.kana}</span> : null}
                        {vocab.jlptLevel ? <span className="lesson-compound-level">{vocab.jlptLevel}</span> : null}
                      </div>
                      <p className="lesson-compound-meaning">{vocab.meaningVi || vocab.english}</p>
                    </article>
                  ))}
                </div>
              ) : (
                <p className="lesson-empty-note">Đang liên kết thêm từ vựng mẫu cho chữ này.</p>
              )}
            </div>
          </div>
        </article>
      ) : null}

      {/* Mini Kanji Quiz to test Han-Viet & recall */}
      {kanjiQuiz.length > 0 ? (
        <div className="lesson-kanji-quiz-section">
          <header className="lesson-kanji-quiz-head">
            <h3>Luyện tập Hán tự ({kanjiQuiz.length} câu)</h3>
            <p>Chọn đúng âm Hán-Việt tương ứng với từng chữ Hán để củng cố trí nhớ.</p>
          </header>

          {isQuizSubmitted ? (
            <div className="lesson-reading-score-banner is-great" role="status">
              <strong>Kết quả Hán tự: Đúng {quizCorrectCount}/{kanjiQuiz.length} câu!</strong>
            </div>
          ) : null}

          <form onSubmit={handleSubmitQuiz} className="lesson-reading-quiz-form">
            <div className="lesson-reading-questions-list">
              {kanjiQuiz.map((q, qIndex) => {
                const selected = quizAnswers[q.id]
                const isCorrect = selected === q.answer

                return (
                  <article
                    key={q.id}
                    className={`lesson-reading-q-card${isQuizSubmitted ? (isCorrect ? ' is-q-correct' : ' is-q-wrong') : ''}`}
                  >
                    <header className="lesson-reading-q-head">
                      <span className="lesson-reading-q-number">Câu {qIndex + 1}</span>
                      <h4 className="lesson-reading-q-title">{q.prompt}</h4>
                    </header>

                    <div className="lesson-reading-options-grid">
                      {q.options.map((opt, optIndex) => {
                        const isOptSelected = selected === opt
                        const isTargetAnswer = opt === q.answer

                        let optClass = 'lesson-reading-option'
                        if (isOptSelected) optClass += ' is-selected'
                        if (isQuizSubmitted) {
                          if (isTargetAnswer) optClass += ' is-correct-highlight'
                          else if (isOptSelected && !isTargetAnswer) optClass += ' is-wrong-highlight'
                        }

                        return (
                          <label key={`${q.id}-opt-${optIndex}`} className={optClass}>
                            <input
                              type="radio"
                              name={q.id}
                              value={opt}
                              checked={isOptSelected}
                              disabled={isQuizSubmitted}
                              onChange={() => handleSelectQuizOption(q.id, opt)}
                            />
                            <span className="lesson-reading-opt-letter">
                              {['A', 'B', 'C', 'D'][optIndex]}
                            </span>
                            <span className="lesson-reading-opt-text">{opt}</span>
                          </label>
                        )
                      })}
                    </div>
                  </article>
                )
              })}
            </div>

            <div className="lesson-reading-actions">
              {!isQuizSubmitted ? (
                <button
                  type="submit"
                  className="lesson-primary-btn"
                  disabled={kanjiQuiz.some((q) => !quizAnswers[q.id])}
                >
                  Kiểm tra đáp án Hán tự
                </button>
              ) : (
                <button
                  type="button"
                  className="lesson-secondary-btn"
                  onClick={handleResetQuiz}
                >
                  Làm lại bài Hán tự
                </button>
              )}
            </div>
          </form>
        </div>
      ) : null}
    </section>
  )
}

