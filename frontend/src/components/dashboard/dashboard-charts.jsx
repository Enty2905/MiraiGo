import { useMemo, useState } from 'react'
import './dashboard-charts.css'

const LEVEL_COLORS = {
  N5: '#3b82f6', // blue
  N4: '#10b981', // emerald green
  N3: '#f59e0b', // amber
  N2: '#f43f5e', // rose
  N1: '#8b5cf6', // violet
}

export function DashboardCharts({ activity, overview }) {
  const [activeTab, setActiveTab] = useState('weekly') // 'weekly' | 'jlpt' | 'skills'
  const [hoveredDay, setHoveredDay] = useState(null)
  const [hoveredLevel, setHoveredLevel] = useState(null)

  // 7-day daily breakdown data
  const dailyData = useMemo(() => {
    if (Array.isArray(activity?.dailyBreakdown) && activity.dailyBreakdown.length > 0) {
      return activity.dailyBreakdown
    }

    // Fallback template if empty
    const days = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7']
    const today = new Date()
    return Array.from({ length: 7 }, (_, i) => {
      const d = new Date(today)
      d.setDate(today.getDate() - (6 - i))
      return {
        date: d.toISOString().slice(0, 10),
        dayLabel: days[d.getDay()],
        lessons: 0,
        quizzes: 0,
        flashcards: 0,
        total: 0,
      }
    })
  }, [activity])

  // Max value for scaling weekly bar heights
  const maxDailyTotal = useMemo(() => {
    const maxVal = Math.max(...dailyData.map((d) => d.total || 0), 1)
    return Math.max(maxVal, 4) // minimum height ceiling for aesthetics
  }, [dailyData])

  const bestDay = useMemo(() => {
    const sorted = [...dailyData].sort((a, b) => b.total - a.total)
    return sorted[0]?.total > 0 ? sorted[0] : null
  }, [dailyData])

  const totalWeeklyActions = useMemo(() => {
    return dailyData.reduce((acc, curr) => acc + (curr.total || 0), 0)
  }, [dailyData])

  // JLPT Level data
  const levelProgress = useMemo(() => {
    return Array.isArray(activity?.levelProgress) ? activity.levelProgress : []
  }, [activity])

  const totalJlptLessons = useMemo(() => {
    return levelProgress.reduce((acc, curr) => acc + (curr.totalLessons || 0), 0)
  }, [levelProgress])

  const completedJlptLessons = useMemo(() => {
    return levelProgress.reduce((acc, curr) => acc + (curr.completedLessons || 0), 0)
  }, [levelProgress])

  const jlptOverallRate = totalJlptLessons > 0
    ? Math.round((completedJlptLessons / totalJlptLessons) * 100)
    : 0

  // Skills Mastery Data
  const kanaCount = overview?.kana?.total ?? 0
  const kanaPercent = Math.min(Math.round((kanaCount / 92) * 100), 100)
  const vocabCount = overview?.vocabulary?.tracked ?? 0
  const vocabMastered = overview?.vocabulary?.mastered ?? 0
  const flashcardTotal = overview?.flashcards?.total ?? 0

  return (
    <section className="dashboard-charts-card" aria-label="Biểu đồ thống kê học tập">
      <header className="dashboard-charts-header">
        <div>
          <span className="ui-eyebrow">Phân tích trực quan</span>
          <h2 className="dashboard-charts-title">Thống kê & Nhịp độ học tập</h2>
        </div>

        <nav className="dashboard-charts-tabs" role="tablist" aria-label="Lựa chọn biểu đồ">
          <button
            type="button"
            role="tab"
            id="tab-weekly"
            aria-selected={activeTab === 'weekly'}
            aria-controls="panel-weekly"
            className={`dashboard-charts-tab ${activeTab === 'weekly' ? 'active' : ''}`}
            onClick={() => setActiveTab('weekly')}
          >
            📊 Tần suất 7 ngày
          </button>
          <button
            type="button"
            role="tab"
            id="tab-jlpt"
            aria-selected={activeTab === 'jlpt'}
            aria-controls="panel-jlpt"
            className={`dashboard-charts-tab ${activeTab === 'jlpt' ? 'active' : ''}`}
            onClick={() => setActiveTab('jlpt')}
          >
            🎯 Tiến độ JLPT
          </button>
          <button
            type="button"
            role="tab"
            id="tab-skills"
            aria-selected={activeTab === 'skills'}
            aria-controls="panel-skills"
            className={`dashboard-charts-tab ${activeTab === 'skills' ? 'active' : ''}`}
            onClick={() => setActiveTab('skills')}
          >
            ⚡ Cân bằng kỹ năng
          </button>
        </nav>
      </header>

      {/* Tab 1: Weekly Activity Rhythm Bar Chart */}
      {activeTab === 'weekly' ? (
        <div
          role="tabpanel"
          id="panel-weekly"
          aria-labelledby="tab-weekly"
          className="dashboard-charts-body"
        >
          <div className="weekly-chart-summary">
            <div className="weekly-stat-badge">
              <span className="weekly-stat-lbl">Tổng hoạt động 7 ngày</span>
              <strong className="weekly-stat-num">{totalWeeklyActions} lượt</strong>
            </div>
            {bestDay ? (
              <div className="weekly-stat-badge">
                <span className="weekly-stat-lbl">Tích cực nhất</span>
                <strong className="weekly-stat-num">{bestDay.dayLabel} ({bestDay.total} lượt)</strong>
              </div>
            ) : null}
            <div className="weekly-stat-badge">
              <span className="weekly-stat-lbl">Chuỗi học tập</span>
              <strong className="weekly-stat-num">🔥 {activity?.studyStreak || 0} ngày</strong>
            </div>
          </div>

          <div className="weekly-bars-container">
            <div className="weekly-bars-grid" role="region" aria-label="Biểu đồ cột 7 ngày">
              {dailyData.map((item, idx) => {
                const heightPercent = Math.max(Math.round((item.total / maxDailyTotal) * 100), 6)
                const isHovered = hoveredDay?.date === item.date
                const isToday = idx === dailyData.length - 1

                return (
                  <div
                    key={item.date}
                    className={`weekly-bar-col ${isToday ? 'today' : ''} ${isHovered ? 'hovered' : ''}`}
                    onMouseEnter={() => setHoveredDay(item)}
                    onMouseLeave={() => setHoveredDay(null)}
                    tabIndex={0}
                    role="button"
                    aria-label={`${item.dayLabel} (${item.date}): ${item.total} hoạt động`}
                    onFocus={() => setHoveredDay(item)}
                    onBlur={() => setHoveredDay(null)}
                  >
                    <div className="weekly-bar-track">
                      <div
                        className="weekly-bar-fill"
                        style={{ height: `${heightPercent}%` }}
                      >
                        {item.total > 0 ? (
                          <span className="weekly-bar-val">{item.total}</span>
                        ) : null}
                      </div>
                    </div>
                    <span className="weekly-bar-label">{item.dayLabel}</span>
                  </div>
                )
              })}
            </div>

            {/* Hover Tooltip Details */}
            <div className="weekly-tooltip-panel" aria-live="polite">
              {hoveredDay ? (
                <div className="weekly-tooltip-content">
                  <div className="weekly-tooltip-header">
                    <strong>{hoveredDay.dayLabel}</strong>
                    <time>{hoveredDay.date}</time>
                  </div>
                  <div className="weekly-tooltip-rows">
                    <div className="weekly-tooltip-row">
                      <span className="legend-dot dot-lesson" />
                      <span>Bài học hoàn thành:</span>
                      <strong>{hoveredDay.lessons}</strong>
                    </div>
                    <div className="weekly-tooltip-row">
                      <span className="legend-dot dot-quiz" />
                      <span>Bài kiểm tra Quiz:</span>
                      <strong>{hoveredDay.quizzes}</strong>
                    </div>
                    <div className="weekly-tooltip-row">
                      <span className="legend-dot dot-flashcard" />
                      <span>Thẻ Flashcard đã ôn:</span>
                      <strong>{hoveredDay.flashcards}</strong>
                    </div>
                  </div>
                </div>
              ) : (
                <p className="weekly-tooltip-hint">
                  💡 Rê chuột hoặc chạm vào từng cột để xem chi tiết hoạt động trong ngày.
                </p>
              )}
            </div>
          </div>
        </div>
      ) : null}

      {/* Tab 2: JLPT Donut & Level Distribution */}
      {activeTab === 'jlpt' ? (
        <div
          role="tabpanel"
          id="panel-jlpt"
          aria-labelledby="tab-jlpt"
          className="dashboard-charts-body jlpt-chart-layout"
        >
          <div className="jlpt-donut-container">
            <svg
              className="jlpt-donut-svg"
              viewBox="0 0 160 160"
              width="160"
              height="160"
              aria-label={`Biểu đồ tiến độ JLPT hoàn thành ${jlptOverallRate}%`}
            >
              <circle
                cx="80"
                cy="80"
                r="64"
                className="jlpt-donut-track"
                fill="none"
                strokeWidth="16"
              />
              <circle
                cx="80"
                cy="80"
                r="64"
                className="jlpt-donut-progress"
                fill="none"
                strokeWidth="16"
                strokeDasharray="402"
                strokeDashoffset={402 - (402 * jlptOverallRate) / 100}
                strokeLinecap="round"
                transform="rotate(-90 80 80)"
              />
              <text x="80" y="74" textAnchor="middle" className="jlpt-donut-rate">
                {jlptOverallRate}%
              </text>
              <text x="80" y="96" textAnchor="middle" className="jlpt-donut-sub">
                Đã hoàn thành
              </text>
            </svg>

            <div className="jlpt-donut-info">
              <h3>Tổng tiến độ giáo trình</h3>
              <p>
                Bạn đã hoàn thành <strong>{completedJlptLessons}</strong> trên tổng số{' '}
                <strong>{totalJlptLessons}</strong> bài học chuẩn JLPT hiện có.
              </p>
            </div>
          </div>

          <div className="jlpt-levels-breakdown">
            <h4>Chi tiết từng cấp độ</h4>
            <div className="jlpt-bars-stack">
              {levelProgress.map((lvl) => {
                const color = LEVEL_COLORS[lvl.level] || '#3b82f6'
                const isHovered = hoveredLevel === lvl.level

                return (
                  <div
                    key={lvl.level}
                    className={`jlpt-bar-item ${isHovered ? 'active' : ''}`}
                    onMouseEnter={() => setHoveredLevel(lvl.level)}
                    onMouseLeave={() => setHoveredLevel(null)}
                  >
                    <div className="jlpt-bar-header">
                      <span className="jlpt-bar-tag" style={{ backgroundColor: `${color}20`, color }}>
                        {lvl.level}
                      </span>
                      <span className="jlpt-bar-counts">
                        {lvl.completedLessons}/{lvl.totalLessons} bài
                      </span>
                      <strong className="jlpt-bar-percent" style={{ color }}>
                        {lvl.completionRate}%
                      </strong>
                    </div>

                    <div className="jlpt-bar-bg" aria-hidden="true">
                      <div
                        className="jlpt-bar-fill"
                        style={{
                          width: `${lvl.completionRate}%`,
                          backgroundColor: color,
                        }}
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      ) : null}

      {/* Tab 3: Skills Mastery Radar / Gauges */}
      {activeTab === 'skills' ? (
        <div
          role="tabpanel"
          id="panel-skills"
          aria-labelledby="tab-skills"
          className="dashboard-charts-body skills-layout"
        >
          <div className="skills-grid">
            {/* Kana Pillar */}
            <article className="skill-meter-card">
              <div className="skill-meter-icon kana-icon">あ</div>
              <div className="skill-meter-content">
                <div className="skill-meter-header">
                  <strong>Bảng chữ Kana</strong>
                  <span className="skill-meter-score">{kanaCount}/92 chữ ({kanaPercent}%)</span>
                </div>
                <div className="skill-meter-track" aria-hidden="true">
                  <div
                    className="skill-meter-fill fill-pink"
                    style={{ width: `${kanaPercent}%` }}
                  />
                </div>
                <p className="skill-meter-tip">
                  {kanaPercent >= 100
                    ? '🎉 Xuất sắc! Bạn đã làm chủ trọn vẹn cả 2 bảng Hiragana & Katakana.'
                    : 'Luyện lật thẻ và viết đều đặn để tự tin nhận diện mặt chữ.'}
                </p>
              </div>
            </article>

            {/* JLPT Lessons Pillar */}
            <article className="skill-meter-card">
              <div className="skill-meter-icon lesson-icon">学</div>
              <div className="skill-meter-content">
                <div className="skill-meter-header">
                  <strong>Ngữ pháp & Bài học</strong>
                  <span className="skill-meter-score">{completedJlptLessons}/{totalJlptLessons} bài ({jlptOverallRate}%)</span>
                </div>
                <div className="skill-meter-track" aria-hidden="true">
                  <div
                    className="skill-meter-fill fill-blue"
                    style={{ width: `${jlptOverallRate}%` }}
                  />
                </div>
                <p className="skill-meter-tip">
                  Nắm vững các mẫu câu và hoàn thành trắc nghiệm cuối mỗi bài học.
                </p>
              </div>
            </article>

            {/* Vocabulary Pillar */}
            <article className="skill-meter-card">
              <div className="skill-meter-icon vocab-icon">語</div>
              <div className="skill-meter-content">
                <div className="skill-meter-header">
                  <strong>Kho từ vựng</strong>
                  <span className="skill-meter-score">{vocabCount} từ theo dõi ({vocabMastered} thành thạo)</span>
                </div>
                <div className="skill-meter-track" aria-hidden="true">
                  <div
                    className="skill-meter-fill fill-emerald"
                    style={{
                      width: `${vocabCount > 0 ? Math.min(Math.round((vocabMastered / vocabCount) * 100), 100) : 0}%`,
                    }}
                  />
                </div>
                <p className="skill-meter-tip">
                  Tra cứu từ điển và thêm từ mới để mở rộng vốn giao tiếp tự nhiên.
                </p>
              </div>
            </article>

            {/* Flashcard Pillar */}
            <article className="skill-meter-card">
              <div className="skill-meter-icon card-icon">覚</div>
              <div className="skill-meter-content">
                <div className="skill-meter-header">
                  <strong>Thẻ ghi nhớ Flashcard</strong>
                  <span className="skill-meter-score">{flashcardTotal} thẻ đã lưu</span>
                </div>
                <div className="skill-meter-track" aria-hidden="true">
                  <div
                    className="skill-meter-fill fill-violet"
                    style={{ width: `${Math.min(flashcardTotal * 10, 100)}%` }}
                  />
                </div>
                <p className="skill-meter-tip">
                  Lặp lại ngắt quãng (SRS) giúp kiến thức đi sâu vào trí nhớ dài hạn.
                </p>
              </div>
            </article>
          </div>
        </div>
      ) : null}
    </section>
  )
}
