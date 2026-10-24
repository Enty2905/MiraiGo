import { useEffect, useMemo, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { DashboardNav } from '../../components/dashboard/dashboard-nav'
import { useAuthSession } from '../../hooks/use-auth-session'
import { fetchMyBookmarks } from '../../services/bookmark.service'
import { clearAuthSession } from '../../services/auth-session.service'
import { changePassword, fetchMyProfile } from '../../services/profile.service'
import { fetchProgressOverview } from '../../services/progress.service'
import { NAV_ITEMS } from '../dashboard/dashboard-content'
import '../dashboard/dashboard-page.css'
import './profile-page.css'

function buildAvatarLabel(user) {
  const candidate = user?.displayName || user?.fullName || user?.email || ''
  const normalizedCandidate = candidate.trim()

  if (!normalizedCandidate) {
    return 'U'
  }

  const parts = normalizedCandidate.split(/\s+/).filter(Boolean)
  if (parts.length >= 2) {
    return `${parts[0][0]}${parts[1][0]}`.toUpperCase()
  }

  return normalizedCandidate.slice(0, 2).toUpperCase()
}

function formatErrorMessage(errors) {
  if (errors.length === 0) {
    return ''
  }

  return errors.join(' | ')
}

function getRoleLabel(role) {
  const roleLabels = {
    admin: 'Quản trị viên',
    student: 'Học viên',
    teacher: 'Giáo viên',
  }

  return roleLabels[role] || role || 'Học viên'
}

function calculatePasswordStrength(password) {
  if (!password) return { level: 0, text: '', color: '' }
  let score = 0
  if (password.length >= 6) score += 1
  if (password.length >= 8) score += 1
  if (/[0-9]/.test(password)) score += 1
  if (/[a-zA-Z]/.test(password) && /[^a-zA-Z0-9]/.test(password)) score += 1

  if (score <= 1) return { level: 1, text: 'Yếu', color: 'var(--error, #e53e3e)' }
  if (score <= 2) return { level: 2, text: 'Trung bình', color: '#dd6b20' }
  if (score <= 3) return { level: 3, text: 'Khá mạnh', color: '#319795' }
  return { level: 4, text: 'Rất mạnh', color: 'var(--success, #38a169)' }
}

export function ProfilePage() {
  const navigate = useNavigate()
  const { isAuthenticated, user } = useAuthSession()
  const [profile, setProfile] = useState(null)
  const [progressOverview, setProgressOverview] = useState(null)
  const [bookmarkCount, setBookmarkCount] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [errorMessage, setErrorMessage] = useState('')

  // Password change state
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showCurrent, setShowCurrent] = useState(false)
  const [showNew, setShowNew] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [isSubmittingPassword, setIsSubmittingPassword] = useState(false)
  const [passwordSuccess, setPasswordSuccess] = useState('')
  const [passwordError, setPasswordError] = useState('')

  useEffect(() => {
    if (!isAuthenticated) {
      return
    }

    let isMounted = true

    async function loadProfileData() {
      setIsLoading(true)
      setErrorMessage('')

      try {
        const results = await Promise.allSettled([
          fetchMyProfile(),
          fetchProgressOverview(),
          fetchMyBookmarks(),
        ])

        if (!isMounted) {
          return
        }

        const nextErrors = []

        const profileResult = results[0]
        if (profileResult.status === 'fulfilled') {
          setProfile(profileResult.value)
        } else {
          nextErrors.push(profileResult.reason?.message || 'Không tải được hồ sơ.')
        }

        const progressResult = results[1]
        if (progressResult.status === 'fulfilled') {
          setProgressOverview(progressResult.value)
        } else {
          nextErrors.push(progressResult.reason?.message || 'Không tải được tiến độ.')
        }

        const bookmarkResult = results[2]
        if (bookmarkResult.status === 'fulfilled') {
          setBookmarkCount(bookmarkResult.value.length)
        } else {
          nextErrors.push(bookmarkResult.reason?.message || 'Không tải được dấu trang.')
        }

        setErrorMessage(formatErrorMessage(nextErrors))
      } finally {
        if (isMounted) {
          setIsLoading(false)
        }
      }
    }

    loadProfileData()

    return () => {
      isMounted = false
    }
  }, [isAuthenticated])

  const displayUser = useMemo(() => profile || user, [profile, user])
  const passwordStrength = useMemo(() => calculatePasswordStrength(newPassword), [newPassword])

  if (!isAuthenticated) {
    return <Navigate to="/auth" replace />
  }

  const handleLogout = () => {
    clearAuthSession()
    navigate('/auth', { replace: true })
  }

  const handleChangePassword = async (event) => {
    event.preventDefault()
    setPasswordError('')
    setPasswordSuccess('')

    if (!currentPassword.trim()) {
      setPasswordError('Vui lòng nhập mật khẩu hiện tại.')
      return
    }

    if (newPassword.length < 6) {
      setPasswordError('Mật khẩu mới phải có ít nhất 6 ký tự.')
      return
    }

    if (newPassword !== confirmPassword) {
      setPasswordError('Mật khẩu xác nhận không trùng khớp.')
      return
    }

    if (newPassword === currentPassword) {
      setPasswordError('Mật khẩu mới không được trùng với mật khẩu hiện tại.')
      return
    }

    setIsSubmittingPassword(true)
    try {
      const response = await changePassword({
        currentPassword,
        newPassword,
        confirmPassword,
      })

      setPasswordSuccess(response?.message || 'Đổi mật khẩu thành công!')
      setCurrentPassword('')
      setNewPassword('')
      setConfirmPassword('')
    } catch (err) {
      setPasswordError(err?.message || 'Đổi mật khẩu không thành công.')
    } finally {
      setIsSubmittingPassword(false)
    }
  }

  return (
    <div className="dashboard-page">
      <DashboardNav navItems={NAV_ITEMS} />

      <main className="dashboard-main profile-main" id="main-content" tabIndex={-1}>
        <section className="profile-card">
          <header className="profile-header">
            <div className="profile-avatar">{buildAvatarLabel(displayUser)}</div>

            <div className="profile-identity">
              <h1>{displayUser?.fullName || displayUser?.displayName || 'Hồ sơ người dùng'}</h1>
              <p>{displayUser?.email || ''}</p>
            </div>
          </header>

          <div className="profile-actions">
            <button type="button" onClick={handleLogout} className="profile-logout-btn">
              Đăng xuất
            </button>
            <Link to="/" className="profile-back-link">
              Về trang chủ
            </Link>
          </div>

          {isLoading ? <p role="status" className="profile-feedback">Đang tải dữ liệu hồ sơ...</p> : null}

          {!isLoading && errorMessage ? (
            <p role="alert" className="profile-feedback profile-feedback--error">{errorMessage}</p>
          ) : null}
        </section>

        <section className="profile-stats-grid" aria-label="Dữ liệu tài khoản người dùng">
          <article className="profile-stat-card">
            <p className="profile-stat-label">Vai trò</p>
            <h2 className="profile-stat-value">{getRoleLabel(displayUser?.role)}</h2>
          </article>

          <article className="profile-stat-card">
            <p className="profile-stat-label">Bài học đã hoàn thành</p>
            <h2 className="profile-stat-value">{progressOverview?.lessons?.completed || 0}</h2>
          </article>

          <article className="profile-stat-card">
            <p className="profile-stat-label">Từ vựng đang theo dõi</p>
            <h2 className="profile-stat-value">{progressOverview?.vocabulary?.tracked || 0}</h2>
          </article>

          <article className="profile-stat-card">
            <p className="profile-stat-label">Dấu trang</p>
            <h2 className="profile-stat-value">{bookmarkCount}</h2>
          </article>
        </section>

        {/* Change Password Card */}
        <section className="profile-card profile-password-section" aria-labelledby="change-password-heading">
          <div className="profile-password-header">
            <div className="profile-password-icon" aria-hidden="true">🔒</div>
            <div>
              <h2 id="change-password-heading" className="profile-password-title">Đổi mật khẩu</h2>
              <p className="profile-password-subtitle">
                Cập nhật mật khẩu định kỳ để bảo vệ tài khoản và quá trình học tập của bạn.
              </p>
            </div>
          </div>

          {passwordSuccess ? (
            <div className="profile-alert profile-alert--success" role="status">
              <span className="profile-alert-icon" aria-hidden="true">✓</span>
              <span>{passwordSuccess}</span>
            </div>
          ) : null}

          {passwordError ? (
            <div className="profile-alert profile-alert--error" role="alert">
              <span className="profile-alert-icon" aria-hidden="true">⚠️</span>
              <span>{passwordError}</span>
            </div>
          ) : null}

          <form onSubmit={handleChangePassword} className="profile-password-form" noValidate>
            <div className="profile-form-group">
              <label htmlFor="current-password" className="profile-form-label">
                Mật khẩu hiện tại <span className="profile-form-required">*</span>
              </label>
              <div className="profile-input-wrapper">
                <input
                  id="current-password"
                  name="currentPassword"
                  type={showCurrent ? 'text' : 'password'}
                  className="profile-form-input"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  placeholder="Nhập mật khẩu hiện tại"
                  autoComplete="current-password"
                  required
                />
                <button
                  type="button"
                  className="profile-pwd-toggle"
                  onClick={() => setShowCurrent((prev) => !prev)}
                  title={showCurrent ? 'Ẩn mật khẩu' : 'Hiện mật khẩu'}
                  aria-label={showCurrent ? 'Ẩn mật khẩu hiện tại' : 'Hiện mật khẩu hiện tại'}
                >
                  {showCurrent ? '🙈' : '👁️'}
                </button>
              </div>
            </div>

            <div className="profile-form-group">
              <label htmlFor="new-password" className="profile-form-label">
                Mật khẩu mới <span className="profile-form-required">*</span>
              </label>
              <div className="profile-input-wrapper">
                <input
                  id="new-password"
                  name="newPassword"
                  type={showNew ? 'text' : 'password'}
                  className="profile-form-input"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Tối thiểu 6 ký tự"
                  autoComplete="new-password"
                  required
                />
                <button
                  type="button"
                  className="profile-pwd-toggle"
                  onClick={() => setShowNew((prev) => !prev)}
                  title={showNew ? 'Ẩn mật khẩu' : 'Hiện mật khẩu'}
                  aria-label={showNew ? 'Ẩn mật khẩu mới' : 'Hiện mật khẩu mới'}
                >
                  {showNew ? '🙈' : '👁️'}
                </button>
              </div>

              {newPassword ? (
                <div className="profile-pwd-strength" aria-live="polite">
                  <div className="profile-strength-bars">
                    {[1, 2, 3, 4].map((step) => (
                      <div
                        key={step}
                        className="profile-strength-bar"
                        style={{
                          backgroundColor:
                            step <= passwordStrength.level ? passwordStrength.color : 'var(--stroke, #e2e8f0)',
                        }}
                      />
                    ))}
                  </div>
                  <span className="profile-strength-text" style={{ color: passwordStrength.color }}>
                    Độ mạnh: {passwordStrength.text}
                  </span>
                </div>
              ) : null}
            </div>

            <div className="profile-form-group">
              <label htmlFor="confirm-password" className="profile-form-label">
                Xác nhận mật khẩu mới <span className="profile-form-required">*</span>
              </label>
              <div className="profile-input-wrapper">
                <input
                  id="confirm-password"
                  name="confirmPassword"
                  type={showConfirm ? 'text' : 'password'}
                  className="profile-form-input"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Nhập lại mật khẩu mới"
                  autoComplete="new-password"
                  required
                />
                <button
                  type="button"
                  className="profile-pwd-toggle"
                  onClick={() => setShowConfirm((prev) => !prev)}
                  title={showConfirm ? 'Ẩn mật khẩu' : 'Hiện mật khẩu'}
                  aria-label={showConfirm ? 'Ẩn xác nhận mật khẩu' : 'Hiện xác nhận mật khẩu'}
                >
                  {showConfirm ? '🙈' : '👁️'}
                </button>
              </div>
              {confirmPassword && newPassword && confirmPassword !== newPassword ? (
                <p className="profile-field-hint profile-field-hint--error">
                  Mật khẩu xác nhận chưa trùng khớp.
                </p>
              ) : null}
            </div>

            <div className="profile-form-actions">
              <button
                type="submit"
                disabled={isSubmittingPassword}
                className="profile-submit-pwd-btn"
              >
                {isSubmittingPassword ? (
                  <>
                    <span className="profile-spinner" aria-hidden="true" />
                    <span>Đang cập nhật...</span>
                  </>
                ) : (
                  'Lưu mật khẩu mới'
                )}
              </button>
            </div>
          </form>
        </section>
      </main>
    </div>
  )
}
