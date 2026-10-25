import { Link } from 'react-router-dom'
import { DashboardCharts } from '../../components/dashboard/dashboard-charts'
import { DashboardHero } from '../../components/dashboard/dashboard-hero'
import { DashboardLearningActivity } from '../../components/dashboard/dashboard-learning-activity'
import { DashboardNav } from '../../components/dashboard/dashboard-nav'
import { ProtectedLink } from '../../components/auth/protected-link'
import { useDashboardStats } from '../../hooks/use-dashboard-stats'
import { useAuthSession } from '../../hooks/use-auth-session'
import { NAV_ITEMS } from './dashboard-content'
import './dashboard-page.css'

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

function ChevronRightIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  )
}

function ToolHandwritingIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
      <path d="m15 5 4 4" />
      <path d="M4 22c2.5-2 5.5-2 8 0" />
    </svg>
  )
}

function ToolDictionaryIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
      <path d="M6 2v6l2.5-1.5L11 8V2" />
      <path d="M6 18h14" />
    </svg>
  )
}

function ToolFlashcardIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="7" y="3" width="13" height="15" rx="2" />
      <path d="M4 7H3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1" />
      <path d="M10 8h7" />
      <path d="M10 12h4" />
    </svg>
  )
}

function ToolAssistantIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m14 2 1.8 4.2L20 8l-4.2 1.8L14 14l-1.8-4.2L8 8l4.2-1.8L14 2Z" />
      <path d="m6 14 1.2 2.8L10 18l-2.8 1.2L6 22l-1.2-2.8L2 18l2.8-1.2L6 14Z" />
    </svg>
  )
}

const STUDY_STEPS = [
  {
    number: '01',
    stepLabel: 'Bài 1',
    glyph: 'あ',
    title: 'Hiragana',
    description: '46 âm tiết. Đánh vần chuẩn.',
    path: '/hiragana',
    status: 'completed',
  },
  {
    number: '02',
    stepLabel: 'Bài 2',
    glyph: 'ア',
    title: 'Katakana',
    description: 'Đọc tên riêng và những từ mượn.',
    path: '/katakana',
    status: 'completed',
  },
  {
    number: '03',
    stepLabel: 'Bài 3',
    glyph: '学',
    title: 'Bài học JLPT',
    description: 'Từ vựng, ngữ pháp và bài kiểm tra.',
    path: '/lessons/n5',
    status: 'current',
  },
]

const TOOLS = [
  {
    IconComponent: ToolHandwritingIcon,
    title: 'Luyện viết',
    description: 'Viết một chữ, nhận phản hồi từ AI.',
    path: '/handwriting',
  },
  {
    IconComponent: ToolDictionaryIcon,
    title: 'Từ điển',
    description: 'Tra nghĩa, cách đọc và ví dụ.',
    path: '/dictionary',
  },
  {
    IconComponent: ToolFlashcardIcon,
    title: 'Flashcard',
    description: 'Ghi nhớ nhanh từ mới.',
    path: '/flashcards',
  },
  {
    IconComponent: ToolAssistantIcon,
    title: 'Trợ lý học tập',
    description: 'Cùng bạn học mọi lúc, mọi nơi.',
    path: '/assistant',
  },
]

export function DashboardPage() {
  const stats = useDashboardStats()
  const { isAuthenticated } = useAuthSession()

  return (
    <div className="dashboard-page">
      <DashboardNav navItems={NAV_ITEMS} />
      <main className="dashboard-main" id="main-content" tabIndex={-1}>
        <DashboardHero />

        {/* Lộ trình của bạn */}
        <section className="study-path" aria-labelledby="study-path-title">
          <div className="section-title-row">
            <div>
              <span className="ui-eyebrow">LỘ TRÌNH CỦA BẠN</span>
              <h2 id="study-path-title">Từng bước, vững nền tảng.</h2>
            </div>
            <Link to="/lessons/n5" className="section-aside section-aside-link">
              Tất cả các bài học trong chương trình →
            </Link>
          </div>
          <div className="study-path-list">
            {STUDY_STEPS.map((step) => (
              <ProtectedLink key={step.path} to={step.path} className="study-path-item">
                <div className="study-path-head">
                  <span className="study-path-number">{step.number}</span>
                  <span className="study-path-glyph" lang="ja">{step.glyph}</span>
                </div>
                <div className="study-path-copy">
                  <small>{step.stepLabel}</small>
                  <strong>{step.title}</strong>
                  <span>{step.description}</span>
                </div>
                <span className="study-path-status-icon" aria-hidden="true">
                  {step.status === 'completed' ? <CheckIcon /> : <ChevronRightIcon />}
                </span>
              </ProtectedLink>
            ))}
          </div>
        </section>

        {/* Góc thực hành - Minimalist line-art vector icons */}
        <section className="study-tools" aria-labelledby="study-tools-title">
          <div className="section-title-row">
            <div>
              <span className="ui-eyebrow">GÓC THỰC HÀNH</span>
              <h2 id="study-tools-title">Mục tiêu luyện tập mỗi ngày.</h2>
            </div>
          </div>
          <div className="study-tools-grid">
            {TOOLS.map((tool) => {
              const Icon = tool.IconComponent
              return (
                <ProtectedLink className="study-tool-card" key={tool.path} to={tool.path}>
                  <span className="study-tool-icon-wrap">
                    <Icon />
                  </span>
                  <span className="study-tool-text">
                    <strong>{tool.title}</strong>
                    <small>{tool.description}</small>
                  </span>
                  <span className="study-tool-arrow" aria-hidden="true">
                    <ChevronRightIcon />
                  </span>
                </ProtectedLink>
              )
            })}
          </div>
        </section>

        {/* Phân tích trực quan & Lịch sử học tập */}
        {isAuthenticated ? (
          <>
            <DashboardCharts activity={stats.learningActivity} overview={stats.overview} />
            <DashboardLearningActivity activity={stats.learningActivity} />
          </>
        ) : (
          <section className="learning-invitation">
            <div>
              <h2>Lưu lại từng bước tiến.</h2>
              <p>Tạo tài khoản để lưu bài học, bộ thẻ và nhịp học của riêng bạn.</p>
            </div>
            <Link className="ui-button ui-button--secondary" to="/auth/register">
              Tạo tài khoản
            </Link>
          </section>
        )}

        <footer className="study-footer">
          <span><span lang="ja">日々学ぶ</span> · Học một điều mới mỗi ngày.</span>
          <Link to="/culture">Đọc chuyện văn hóa Nhật Bản ↗</Link>
        </footer>
      </main>
    </div>
  )
}
