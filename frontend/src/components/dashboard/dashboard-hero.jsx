import { Link } from 'react-router-dom'
import { useAuthSession } from '../../hooks/use-auth-session'
import { ProtectedLink } from '../auth/protected-link'

export function DashboardHero() {
  const { isAuthenticated } = useAuthSession()
  return (
    <>
      <div className="dashboard-breadcrumb" aria-label="Điều hướng phân cấp">
        <Link to="/" className="breadcrumb-link">Trang chủ</Link>
        <span className="breadcrumb-sep">›</span>
        <span className="breadcrumb-cur">{isAuthenticated ? 'Học viên' : 'Khách'}</span>
      </div>

      <section className="hero-card">
        <div className="hero-copy">
          <span className="hero-eyebrow">{isAuthenticated ? 'HỌC VIÊN' : 'SỔ HỌC TIẾNG NHẬT'}</span>
          <h1>
            Mỗi ngày một chút.<br />
            <em>Mở thêm một thế giới.</em>
          </h1>
          <p>
            Bắt đầu từ một nét chữ. Tích lũy từng từ mới.<br className="desktop-break" />
            Tự tin hơn với tiếng Nhật, theo nhịp của bạn.
          </p>
          <div className="hero-actions">
            <ProtectedLink to={isAuthenticated ? '/lessons/n5' : '/hiragana'} className="ui-button">
              {isAuthenticated ? 'Tiếp tục học' : 'Bắt đầu với Hiragana'} <span aria-hidden="true">→</span>
            </ProtectedLink>
            <Link to="/dictionary" className="ui-button ui-button--secondary">
              Tra một từ mới <span aria-hidden="true">🔍</span>
            </Link>
          </div>
          <div className="hero-caption">
            <span className="caption-rule" /> Mỗi nét chữ hôm nay, là một bước gần hơn với ước mơ.
          </div>
        </div>
        <div className="hero-visual" aria-label="Học, trong tiếng Nhật là manabu">
          <span className="practice-label">
            一日一歩 <span>mỗi ngày một bước</span>
          </span>
          <div className="practice-square">
            <span lang="ja">学</span>
          </div>
          <div className="practice-caption">
            <span lang="ja">まなぶ</span>
            <span>manabu · học</span>
          </div>
        </div>
      </section>
    </>
  )
}
