import { useMemo, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { DashboardNav } from '../../components/dashboard/dashboard-nav'
import { useLessonsData } from '../../hooks/use-lessons-data'
import { useLessonsProgress } from '../../hooks/use-lessons-progress'
import { lessonLevelMeta, lessonLevels } from './lesson-levels'
import { NAV_ITEMS } from '../dashboard/dashboard-content'
import '../dashboard/dashboard-page.css'
import './lessons-page.css'

const DEFAULT_LEVEL = lessonLevels[0]

const LESSON_STAGES = [
  { key: 'all', label: 'Tất cả (25 bài)', min: 1, max: 99 },
  { key: 'stage-1', label: 'Chặng 1: Bài 1–5', subtitle: 'Khởi động & Nền tảng', min: 1, max: 5 },
  { key: 'stage-2', label: 'Chặng 2: Bài 6–10', subtitle: 'Mở rộng giao tiếp', min: 6, max: 10 },
  { key: 'stage-3', label: 'Chặng 3: Bài 11–15', subtitle: 'Trọng tâm cấu trúc', min: 11, max: 15 },
  { key: 'stage-4', label: 'Chặng 4: Bài 16–20', subtitle: 'Vận dụng nâng cao', min: 16, max: 20 },
  { key: 'stage-5', label: 'Chặng 5: Bài 21–25', subtitle: 'Về đích & Tổng ôn', min: 21, max: 25 },
]

function isValidLessonLevel(level) {
  return typeof level === 'string' && lessonLevels.includes(level)
}

function calculateCompletionRate(completedCount, totalCount) {
  if (totalCount === 0) {
    return 0
  }

  return Math.round((completedCount / totalCount) * 100)
}

function ChevronDownIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}

function BookOpenIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  )
}

function GrammarIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <polyline points="4 7 4 4 20 4 20 7" />
      <line x1="9" y1="20" x2="15" y2="20" />
      <line x1="12" y1="4" x2="12" y2="20" />
    </svg>
  )
}

function PenToolIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="m18 2 4 4-14 14H4v-4L18 2z" />
      <path d="m14.5 5.5 4 4" />
    </svg>
  )
}

function ReadingIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <line x1="10" y1="9" x2="8" y2="9" />
    </svg>
  )
}

function ArrowRightIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}

export function LessonsPage() {
  const { level } = useParams()
  const [expandedLessonId, setExpandedLessonId] = useState(null)
  const [activeStageKey, setActiveStageKey] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const { completedLessons } = useLessonsProgress()
  const normalizedLevel = isValidLessonLevel(level) ? level : DEFAULT_LEVEL

  const {
    lessons: currentLessons,
    isLoading,
    errorMessage,
  } = useLessonsData(normalizedLevel)

  const filteredLessons = useMemo(() => {
    const selectedStage =
      LESSON_STAGES.find((stage) => stage.key === activeStageKey) || LESSON_STAGES[0]
    const normalizedQuery = searchQuery.trim().toLowerCase()

    return currentLessons.filter((lesson) => {
      const inStage =
        lesson.lessonNumber >= selectedStage.min && lesson.lessonNumber <= selectedStage.max
      if (!inStage) {
        return false
      }
      if (!normalizedQuery) {
        return true
      }
      const titleMatch = (lesson.title || '').toLowerCase().includes(normalizedQuery)
      const descMatch = (lesson.description || '').toLowerCase().includes(normalizedQuery)
      const numMatch = String(lesson.lessonNumber) === normalizedQuery
      const grammarMatch = Array.isArray(lesson.grammar)
        && lesson.grammar.some((g) => String(g).toLowerCase().includes(normalizedQuery))
      return titleMatch || descMatch || numMatch || grammarMatch
    })
  }, [currentLessons, activeStageKey, searchQuery])

  if (!isValidLessonLevel(level)) {
    return <Navigate to={`/lessons/${DEFAULT_LEVEL}`} replace />
  }

  const currentLevelMeta = lessonLevelMeta[level]
  const isPageLoading = isLoading
  const pageErrorMessage = errorMessage
  const completedInLevel = currentLessons.filter((lesson) =>
    completedLessons.has(lesson.id),
  ).length
  const totalVocabInLevel = currentLessons.reduce(
    (sum, lesson) => sum + (lesson.vocabularyCount || 0),
    0,
  )
  const totalGrammarInLevel = currentLessons.reduce(
    (sum, lesson) => sum + (lesson.grammarCount || 0),
    0,
  )
  const completionRate = calculateCompletionRate(
    completedInLevel,
    currentLessons.length,
  )

  const toggleLesson = (lessonId) => {
    setExpandedLessonId((previous) => (previous === lessonId ? null : lessonId))
  }

  return (
    <div className="lessons-page">
      <DashboardNav navItems={NAV_ITEMS} />

      <main className="lessons-main" id="main-content" tabIndex={-1}>
        <section className={`lessons-hero lessons-hero--${currentLevelMeta.gradientClass}`}>
          <h1>{currentLevelMeta.title}</h1>
          <p>{currentLevelMeta.description}</p>

          <div className="lessons-hero-meta">
            <span>{currentLessons.length} bài học</span>
            <span>•</span>
            <span>{totalVocabInLevel} từ vựng</span>
            <span>•</span>
            <span>{totalGrammarInLevel} mẫu ngữ pháp</span>
            <span>•</span>
            <span>
              Đã hoàn thành {completedInLevel}/{currentLessons.length} bài ({completionRate}%)
            </span>
          </div>

          <div className="lessons-hero-progress-track" aria-hidden="true">
            <div
              className="lessons-hero-progress-fill"
              style={{ width: `${completionRate}%` }}
            />
          </div>
        </section>

        <div className="lessons-controls-bar">
          <section className="lessons-level-tabs" aria-label="Cấp độ bài học">
            {lessonLevels.map((itemLevel) => (
              <Link
                key={itemLevel}
                to={`/lessons/${itemLevel}`}
                onClick={() => {
                  setActiveStageKey('all')
                  setSearchQuery('')
                  setExpandedLessonId(null)
                }}
                aria-current={itemLevel === level ? 'page' : undefined}
                className={`lessons-level-tab${itemLevel === level ? ' is-active' : ''}`}
              >
                JLPT {itemLevel.toUpperCase()}
              </Link>
            ))}
          </section>

          <div className="lessons-search-box">
            <input
              type="search"
              className="lessons-search-input"
              placeholder="Tìm bài học, chủ đề hoặc mẫu ngữ pháp..."
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              aria-label="Tìm kiếm bài học"
            />
          </div>
        </div>

        {/* 5-Stage Roadmap Filter */}
        <nav className="lessons-stage-tabs" aria-label="Các chặng lộ trình học">
          {LESSON_STAGES.map((stage) => {
            const isActive = activeStageKey === stage.key
            return (
              <button
                key={stage.key}
                type="button"
                className={`lessons-stage-tab${isActive ? ' is-active' : ''}`}
                onClick={() => setActiveStageKey(stage.key)}
              >
                <strong>{stage.label}</strong>
                {stage.subtitle ? <span>{stage.subtitle}</span> : null}
              </button>
            )
          })}
        </nav>

        <section className="lessons-grid" aria-label="Danh sách bài học">
          {isPageLoading ? (
            <p role="status" className="lessons-feedback">Đang tải lộ trình 25 bài học từ cơ sở dữ liệu...</p>
          ) : null}

          {!isPageLoading && pageErrorMessage ? (
            <p role="alert" className="lessons-feedback lessons-feedback--error">{pageErrorMessage}</p>
          ) : null}

          {!isPageLoading && !pageErrorMessage && filteredLessons.length === 0 ? (
            <p role="status" className="lessons-feedback">
              Không tìm thấy bài học phù hợp với bộ lọc hiện tại.
            </p>
          ) : null}

          {!isPageLoading && !pageErrorMessage
            ? filteredLessons.map((lesson) => {
                const isCompleted = completedLessons.has(lesson.id)
                const isExpanded = expandedLessonId === lesson.id
                const stageNumber = Math.ceil(lesson.lessonNumber / 5)

                return (
                  <article
                    key={lesson.id}
                    className={`lesson-card${isExpanded ? ' is-expanded' : ''}${isCompleted ? ' is-completed' : ''}`}
                  >
                    <button
                      type="button"
                      className="lesson-card-head-btn"
                      onClick={() => toggleLesson(lesson.id)}
                      aria-expanded={isExpanded}
                    >
                      <span className="lesson-chapter" aria-hidden="true">
                        {String(lesson.lessonNumber).padStart(2, '0')}
                      </span>

                      <div className="lesson-card-head-content">
                        <div className="lesson-card-head-title-row">
                          <header className="lesson-card-title-group">
                            <div className="lesson-card-stage-pill">
                              Chặng {stageNumber} • JLPT {level.toUpperCase()}
                            </div>
                            <h3>{lesson.title}</h3>
                            <p>{lesson.description}</p>
                          </header>

                          <div className="lesson-card-badges">
                            {isCompleted ? (
                              <span className="lesson-status-badge lesson-status-badge--done">
                                ĐÃ HOÀN THÀNH
                              </span>
                            ) : (
                              <span className="lesson-status-badge lesson-status-badge--ready">
                                SẴN SÀNG HỌC
                              </span>
                            )}

                            <span
                              className={`lesson-expand-chevron${isExpanded ? ' is-rotated' : ''}`}
                              aria-hidden="true"
                            >
                              <ChevronDownIcon className="lesson-chevron-icon" />
                            </span>
                          </div>
                        </div>

                        <div className="lesson-card-meta">
                          <span>{lesson.estimatedTime} phút</span>
                          <span>•</span>
                          <span>{lesson.vocabularyCount || 0} từ vựng</span>
                          <span>•</span>
                          <span>{lesson.grammarCount || 0} mẫu ngữ pháp</span>
                          <span>•</span>
                          <span>5 bài đọc hiểu</span>
                          <span>•</span>
                          <span>10 câu trắc nghiệm</span>
                        </div>

                        {Array.isArray(lesson.grammar) && lesson.grammar.length > 0 ? (
                          <div className="lesson-card-grammar-chips">
                            {lesson.grammar.slice(0, 3).map((pattern, idx) => (
                              <span key={`${lesson.id}-gp-${idx}`} className="lesson-card-grammar-chip">
                                {pattern}
                              </span>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    </button>

                    {/* Accordion dropdown revealing the 4 sub-modules */}
                    {isExpanded ? (
                      <div
                        className="lesson-accordion-panel"
                        role="region"
                        aria-label={`Các chuyên đề của ${lesson.title}`}
                      >
                        <div className="lesson-accordion-notice">
                          <span>Chọn chuyên đề bạn muốn học trong {lesson.title}:</span>
                        </div>

                        <div className="lesson-submodules-grid">
                          {/* 1. Ngữ pháp */}
                          <Link
                            to={`/lessons/${level}/${lesson.lessonNumber}?section=grammar`}
                            className="lesson-submodule-card lesson-submodule-card--grammar"
                          >
                            <div className="lesson-submodule-icon-wrap lesson-submodule-icon-wrap--grammar">
                              <GrammarIcon className="lesson-submodule-icon" />
                            </div>
                            <div className="lesson-submodule-body">
                              <div className="lesson-submodule-title-row">
                                <h4>Bài {lesson.lessonNumber} • Ngữ pháp</h4>
                                <span className="lesson-submodule-badge">
                                  {lesson.grammarCount || 2} mẫu cấu trúc
                                </span>
                              </div>
                              <p>Học cấu trúc câu, giải thích ngữ nghĩa, lưu ý đề thi JLPT và ví dụ song ngữ.</p>
                            </div>
                            <span className="lesson-submodule-go-btn" aria-hidden="true">
                              Vào học <ArrowRightIcon className="lesson-arrow-icon" />
                            </span>
                          </Link>

                          {/* 2. Từ vựng */}
                          <Link
                            to={`/lessons/${level}/${lesson.lessonNumber}?section=vocabulary`}
                            className="lesson-submodule-card lesson-submodule-card--vocab"
                          >
                            <div className="lesson-submodule-icon-wrap lesson-submodule-icon-wrap--vocab">
                              <BookOpenIcon className="lesson-submodule-icon" />
                            </div>
                            <div className="lesson-submodule-body">
                              <div className="lesson-submodule-title-row">
                                <h4>Bài {lesson.lessonNumber} • Từ vựng</h4>
                                <span className="lesson-submodule-badge">
                                  {lesson.vocabularyCount || 20} từ vựng
                                </span>
                              </div>
                              <p>Luyện phát âm chuẩn, Kana, Romaji, nghĩa tiếng Việt và lưu nhanh vào Flashcard.</p>
                            </div>
                            <span className="lesson-submodule-go-btn" aria-hidden="true">
                              Vào học <ArrowRightIcon className="lesson-arrow-icon" />
                            </span>
                          </Link>

                          {/* 3. Hán tự */}
                          <Link
                            to={`/lessons/${level}/${lesson.lessonNumber}?section=kanji`}
                            className="lesson-submodule-card lesson-submodule-card--kanji"
                          >
                            <div className="lesson-submodule-icon-wrap lesson-submodule-icon-wrap--kanji">
                              <PenToolIcon className="lesson-submodule-icon" />
                            </div>
                            <div className="lesson-submodule-body">
                              <div className="lesson-submodule-title-row">
                                <h4>Bài {lesson.lessonNumber} • Hán tự (Kanji)</h4>
                                <span className="lesson-submodule-badge">
                                  Chữ Hán & Thứ tự nét
                                </span>
                              </div>
                              <p>Mô phỏng nét viết theo thứ tự chuẩn, âm Hán-Việt, On/Kun và từ ghép thực tế.</p>
                            </div>
                            <span className="lesson-submodule-go-btn" aria-hidden="true">
                              Vào học <ArrowRightIcon className="lesson-arrow-icon" />
                            </span>
                          </Link>

                          {/* 4. Bài đọc (Đọc hiểu) */}
                          <Link
                            to={`/lessons/${level}/${lesson.lessonNumber}?section=reading`}
                            className="lesson-submodule-card lesson-submodule-card--reading"
                          >
                            <div className="lesson-submodule-icon-wrap lesson-submodule-icon-wrap--reading">
                              <ReadingIcon className="lesson-submodule-icon" />
                            </div>
                            <div className="lesson-submodule-body">
                              <div className="lesson-submodule-title-row">
                                <h4>Bài {lesson.lessonNumber} • Đọc hiểu</h4>
                                <span className="lesson-submodule-badge lesson-submodule-badge--highlight">
                                  5 bài đọc • 6 câu/bài
                                </span>
                              </div>
                              <p>Đoạn văn bám sát từ vựng & ngữ pháp của bài, kèm bản dịch và giải thích đáp án.</p>
                            </div>
                            <span className="lesson-submodule-go-btn" aria-hidden="true">
                              Luyện đọc <ArrowRightIcon className="lesson-arrow-icon" />
                            </span>
                          </Link>
                        </div>

                        <div className="lesson-accordion-footer">
                          <Link
                            to={`/lessons/${level}/${lesson.lessonNumber}`}
                            className="lesson-full-mode-link"
                          >
                            Học trọn vẹn cả bài (Từ vựng • Ngữ pháp • Hán tự • Đọc hiểu • Kiểm tra) →
                          </Link>
                        </div>
                      </div>
                    ) : null}
                  </article>
                )
              })
            : null}
        </section>
      </main>
    </div>
  )
}
