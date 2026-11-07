import { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { DashboardNav } from '../../components/dashboard/dashboard-nav'
import { useLessonsData } from '../../hooks/use-lessons-data'
import { useLessonsProgress } from '../../hooks/use-lessons-progress'
import { lessonLevelMeta, lessonLevels } from './lesson-levels'
import { NAV_ITEMS } from '../dashboard/dashboard-content'
import '../dashboard/dashboard-page.css'
import './lessons-page.css'

const DEFAULT_LEVEL = lessonLevels[0]

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
  const {
    completedLessons,
    isProgressLoading,
    progressErrorMessage,
  } = useLessonsProgress()
  const normalizedLevel = isValidLessonLevel(level) ? level : DEFAULT_LEVEL

  const {
    lessons: currentLessons,
    isLoading,
    errorMessage,
  } = useLessonsData(normalizedLevel)

  if (!isValidLessonLevel(level)) {
    return <Navigate to={`/lessons/${DEFAULT_LEVEL}`} replace />
  }

  const currentLevelMeta = lessonLevelMeta[level]
  const isPageLoading = isLoading || isProgressLoading
  const pageErrorMessage = errorMessage || progressErrorMessage
  const completedInLevel = currentLessons.filter((lesson) =>
    completedLessons.has(lesson.id),
  ).length
  const completionRate = calculateCompletionRate(
    completedInLevel,
    currentLessons.length,
  )

  const toggleLesson = (lessonId, isLocked) => {
    if (isLocked) {
      return
    }
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
            <span>Hoàn thành {completionRate}%</span>
          </div>

          <div className="lessons-hero-progress-track" aria-hidden="true">
            <div
              className="lessons-hero-progress-fill"
              style={{ width: `${completionRate}%` }}
            />
          </div>
        </section>

        <section className="lessons-level-tabs" aria-label="Cấp độ bài học">
          {lessonLevels.map((itemLevel) => (
            <Link
              key={itemLevel}
              to={`/lessons/${itemLevel}`}
              aria-current={itemLevel === level ? 'page' : undefined}
              className={`lessons-level-tab${itemLevel === level ? ' is-active' : ''}`}
            >
              {itemLevel.toUpperCase()}
            </Link>
          ))}
        </section>

        <section className="lessons-grid" aria-label="Danh sách bài học">
          {isPageLoading ? (
            <p role="status" className="lessons-feedback">Đang tải bài học từ cơ sở dữ liệu...</p>
          ) : null}

          {!isPageLoading && pageErrorMessage ? (
            <p role="alert" className="lessons-feedback lessons-feedback--error">{pageErrorMessage}</p>
          ) : null}

          {!isPageLoading && !pageErrorMessage && currentLessons.length === 0 ? (
            <p role="status" className="lessons-feedback">Chưa có bài học cho cấp độ này.</p>
          ) : null}

          {!isPageLoading && !pageErrorMessage
            ? currentLessons.map((lesson, index) => {
                const previousLesson = currentLessons[index - 1]
                const isCompleted = completedLessons.has(lesson.id)
                const isLocked =
                  Boolean(previousLesson) && !completedLessons.has(previousLesson.id)
                const isExpanded = expandedLessonId === lesson.id

                return (
                  <article
                    key={lesson.id}
                    className={`lesson-card${isLocked ? ' is-locked' : ''}${isExpanded ? ' is-expanded' : ''}`}
                  >
                    <button
                      type="button"
                      className="lesson-card-head-btn"
                      onClick={() => toggleLesson(lesson.id, isLocked)}
                      aria-expanded={isExpanded}
                      aria-disabled={isLocked || undefined}
                    >
                      <span className="lesson-chapter" aria-hidden="true">
                        {String(lesson.lessonNumber).padStart(2, '0')}
                      </span>

                      <div className="lesson-card-head-content">
                        <div className="lesson-card-head-title-row">
                          <header className="lesson-card-title-group">
                            <h3>{lesson.title}</h3>
                            <p>{lesson.description}</p>
                          </header>

                          <div className="lesson-card-badges">
                            {isLocked ? (
                              <span className="lesson-status-badge lesson-status-badge--locked">KHÓA</span>
                            ) : isCompleted ? (
                              <span className="lesson-status-badge lesson-status-badge--done">XONG</span>
                            ) : null}

                            {!isLocked ? (
                              <span className={`lesson-expand-chevron${isExpanded ? ' is-rotated' : ''}`} aria-hidden="true">
                                <ChevronDownIcon className="lesson-chevron-icon" />
                              </span>
                            ) : null}
                          </div>
                        </div>

                        <div className="lesson-card-meta">
                          <span>{lesson.estimatedTime} phút</span>
                          <span>•</span>
                          <span>{lesson.vocabularyCount || 0} từ</span>
                          <span>•</span>
                          <span>{lesson.grammarCount || 0} ngữ pháp</span>
                          <span>•</span>
                          <span>5 bài đọc hiểu</span>
                        </div>

                        {isLocked ? (
                          <p className="lesson-lock-note">Hoàn thành bài trước để mở khóa.</p>
                        ) : null}
                      </div>
                    </button>

                    {/* Accordion dropdown revealing the 4 sub-modules */}
                    {isExpanded && !isLocked ? (
                      <div className="lesson-accordion-panel" role="region" aria-label={`Các chuyên đề của ${lesson.title}`}>
                        <div className="lesson-accordion-notice">
                          <span>Chọn chuyên đề bạn muốn học:</span>
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
                                <h4>Bài {lesson.lessonNumber}_Ngữ pháp</h4>
                                <span className="lesson-submodule-badge">
                                  {lesson.grammarCount || 2} mẫu cấu trúc
                                </span>
                              </div>
                              <p>Học cấu trúc câu, giải thích ngữ nghĩa, lưu ý sử dụng và câu ví dụ thực tế.</p>
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
                                <h4>Bài {lesson.lessonNumber}_Từ vựng</h4>
                                <span className="lesson-submodule-badge">
                                  {lesson.vocabularyCount || 14} từ vựng
                                </span>
                              </div>
                              <p>Luyện phát âm giọng chuẩn bản xứ, Romaji, nghĩa tiếng Việt và flashcard phản xạ.</p>
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
                                <h4>Bài {lesson.lessonNumber}_Hán tự (Kanji)</h4>
                                <span className="lesson-submodule-badge">
                                  Chữ Hán & Nét vẽ
                                </span>
                              </div>
                              <p>Mô phỏng nét viết thư pháp mực đỏ uyển chuyển, âm Hán-Việt, On/Kun và từ ghép thực tế.</p>
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
                                <h4>Bài {lesson.lessonNumber}_Bài đọc (Đọc hiểu)</h4>
                                <span className="lesson-submodule-badge lesson-submodule-badge--highlight">
                                  5 bài đọc • 5-6 trắc nghiệm/bài
                                </span>
                              </div>
                              <p>Các đoạn văn ngắn bám sát từ vựng & ngữ pháp bài học, kèm hệ thống trắc nghiệm ôn tập.</p>
                            </div>
                            <span className="lesson-submodule-go-btn" aria-hidden="true">
                              Luyện đọc hiểu <ArrowRightIcon className="lesson-arrow-icon" />
                            </span>
                          </Link>
                        </div>

                        <div className="lesson-accordion-footer">
                          <Link
                            to={`/lessons/${level}/${lesson.lessonNumber}`}
                            className="lesson-full-mode-link"
                          >
                            Học toàn bộ bài học (Tổng hợp tất cả chuyên đề) →
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
