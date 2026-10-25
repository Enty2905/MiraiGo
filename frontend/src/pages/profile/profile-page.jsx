import { useEffect, useMemo, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { DashboardNav } from '../../components/dashboard/dashboard-nav'
import { AvatarModal } from '../../components/profile/avatar-modal'
import { useAuthSession } from '../../hooks/use-auth-session'
import { fetchMyBookmarks } from '../../services/bookmark.service'
import { clearAuthSession } from '../../services/auth-session.service'
import { changePassword, fetchMyProfile, updateMyProfile } from '../../services/profile.service'
import { fetchLearningActivity, fetchProgressOverview } from '../../services/progress.service'
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

function formatJoinDate(dateStr) {
  if (!dateStr) return 'Tháng 10/2026'
  try {
    const d = new Date(dateStr)
    return `Tháng ${d.getMonth() + 1}/${d.getFullYear()}`
  } catch {
    return 'Tháng 10/2026'
  }
}

function formatActivityTime(value) {
  if (!value) return ''
  try {
    return new Intl.DateTimeFormat('vi-VN', {
      day: '2-digit',
      month: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    }).format(new Date(value))
  } catch {
    return ''
  }
}

function formatErrorMessage(errors) {
  if (errors.length === 0) return ''
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

function CameraIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
      <circle cx="12" cy="13" r="3" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

function CalendarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  )
}

function EditIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
      <path d="m15 5 4 4" />
    </svg>
  )
}

function LessonStatIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
      <path d="M6 6h10" />
      <path d="M6 10h10" />
      <path d="M6 14h6" />
    </svg>
  )
}

function FlashcardStatIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="7" y="3" width="13" height="15" rx="2" />
      <path d="M4 7H3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1" />
      <path d="M10 8h7" />
      <path d="M10 12h4" />
    </svg>
  )
}

function StreakStatIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
    </svg>
  )
}

function TargetIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}

function SettingsIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}

function QuizIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m9 11 3 3L22 4" />
      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
    </svg>
  )
}

function BookOpenIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  )
}

function EyeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}

function EyeOffIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
      <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
      <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
      <line x1="2" x2="22" y1="2" y2="22" />
    </svg>
  )
}

function calculatePasswordStrength(password) {
  if (!password) return { level: 0, text: '', color: '' }
  let score = 0
  if (password.length >= 6) score += 1
  if (password.length >= 8) score += 1
  if (/[0-9]/.test(password)) score += 1
  if (/[a-zA-Z]/.test(password) && /[^a-zA-Z0-9]/.test(password)) score += 1

  if (score <= 1) return { level: 1, text: 'Yếu', color: 'var(--error)' }
  if (score <= 2) return { level: 2, text: 'Trung bình', color: 'var(--warning)' }
  if (score <= 3) return { level: 3, text: 'Khá tốt', color: 'var(--text-main)' }
  return { level: 4, text: 'Rất mạnh', color: 'var(--success)' }
}

const ACTIVITY_TYPE_LABELS = {
  complete_lesson: { label: 'Bài học', Icon: LessonStatIcon },
  submit_quiz: { label: 'Bài kiểm tra Quiz', Icon: QuizIcon },
  review_vocabulary: { label: 'Ôn tập Flashcard', Icon: FlashcardStatIcon },
}

export function ProfilePage() {
  const navigate = useNavigate()
  const { isAuthenticated, user } = useAuthSession()
  const [profile, setProfile] = useState(null)
  const [progressOverview, setProgressOverview] = useState(null)
  const [learningActivity, setLearningActivity] = useState(null)
  const [bookmarkCount, setBookmarkCount] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [errorMessage, setErrorMessage] = useState('')

  // Tab State: 'goals' | 'history' | 'settings'
  const [activeTab, setActiveTab] = useState('goals')

  // Avatar Modal State
  const [isAvatarModalOpen, setIsAvatarModalOpen] = useState(false)

  // Profile Edit State
  const [fullNameInput, setFullNameInput] = useState('')
  const [displayNameInput, setDisplayNameInput] = useState('')
  const [currentLevelInput, setCurrentLevelInput] = useState('N5')
  const [isSavingProfile, setIsSavingProfile] = useState(false)
  const [profileSuccessMsg, setProfileSuccessMsg] = useState('')
  const [profileErrorMsg, setProfileErrorMsg] = useState('')

  // Daily Study Goal State (stored locally)
  const [dailyGoalMinutes, setDailyGoalMinutes] = useState(() => {
    return Number(localStorage.getItem('miraigo_daily_goal')) || 30
  })

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
          fetchLearningActivity(),
          fetchMyBookmarks(),
        ])

        if (!isMounted) {
          return
        }

        const nextErrors = []

        const profileResult = results[0]
        if (profileResult.status === 'fulfilled' && profileResult.value) {
          setProfile(profileResult.value)
          setFullNameInput(profileResult.value.fullName || '')
          setDisplayNameInput(profileResult.value.displayName || '')
          setCurrentLevelInput(profileResult.value.currentLevel || 'N5')
        } else {
          nextErrors.push(profileResult.reason?.message || 'Không tải được hồ sơ.')
        }

        const progressResult = results[1]
        if (progressResult.status === 'fulfilled') {
          setProgressOverview(progressResult.value)
        } else {
          nextErrors.push(progressResult.reason?.message || 'Không tải được tiến độ.')
        }

        const activityResult = results[2]
        if (activityResult.status === 'fulfilled') {
          setLearningActivity(activityResult.value)
        } else {
          nextErrors.push(activityResult.reason?.message || 'Không tải được hoạt động.')
        }

        const bookmarkResult = results[3]
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

  const handleSaveAvatar = async (newAvatarUrl) => {
    const updated = await updateMyProfile({ avatarUrl: newAvatarUrl })
    setProfile(updated)
  }

  const handleSaveProfile = async (e) => {
    e.preventDefault()
    setProfileSuccessMsg('')
    setProfileErrorMsg('')

    if (!fullNameInput.trim()) {
      setProfileErrorMsg('Họ và tên không được để trống.')
      return
    }

    setIsSavingProfile(true)
    try {
      const updated = await updateMyProfile({
        fullName: fullNameInput.trim(),
        displayName: displayNameInput.trim() || null,
        currentLevel: currentLevelInput,
      })
      setProfile(updated)
      setProfileSuccessMsg('Cập nhật thông tin hồ sơ thành công!')
    } catch (err) {
      setProfileErrorMsg(err.message || 'Không thể cập nhật hồ sơ.')
    } finally {
      setIsSavingProfile(false)
    }
  }

  const handleSelectDailyGoal = (mins) => {
    setDailyGoalMinutes(mins)
    localStorage.setItem('miraigo_daily_goal', String(mins))
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

  // Calculate goal progress for current level
  const targetLevel = displayUser?.currentLevel || 'N5'
  const matchedLevelProgress = progressOverview?.levelProgress?.find(
    (lvl) => lvl.level?.toUpperCase() === targetLevel.toUpperCase()
  )
  const targetCompletionRate = matchedLevelProgress?.completionRate || 0

  const recentLogs = Array.isArray(learningActivity?.recentActivities)
    ? learningActivity.recentActivities
    : []

  const isImageAvatar = (val) => typeof val === 'string' && (val.startsWith('data:image') || val.startsWith('http'))

  return (
    <div className="dashboard-page profile-layout-page">
      <DashboardNav navItems={NAV_ITEMS} />

      <main className="dashboard-main profile-main" id="main-content" tabIndex={-1}>
        {/* =================================================================
            KHU VỰC A: THẺ HỒ SƠ CÁ NHÂN (HERO CARD)
            ================================================================= */}
        <section className="profile-hero-card" aria-label="Thẻ hồ sơ cá nhân">
          <div className="profile-hero-left">
            <div className="profile-avatar-wrapper">
              <div className="profile-avatar-display" tabIndex={0} role="button" aria-label="Thay đổi ảnh đại diện" onClick={() => setIsAvatarModalOpen(true)}>
                {displayUser?.avatarUrl ? (
                  isImageAvatar(displayUser.avatarUrl) ? (
                    <img src={displayUser.avatarUrl} alt="Avatar" className="profile-avatar-img" />
                  ) : (
                    <span className="profile-avatar-glyph">{displayUser.avatarUrl}</span>
                  )
                ) : (
                  <span className="profile-avatar-text">{buildAvatarLabel(displayUser)}</span>
                )}
              </div>
              <button
                type="button"
                className="profile-avatar-edit-btn"
                title="Thay đổi ảnh đại diện"
                onClick={() => setIsAvatarModalOpen(true)}
                aria-label="Thay đổi ảnh đại diện"
              >
                <CameraIcon />
              </button>
            </div>

            <div className="profile-hero-details">
              <div className="profile-name-row">
                <h1>{displayUser?.displayName || displayUser?.fullName || 'Học viên MiraiGo'}</h1>
                <span className="profile-role-badge">{getRoleLabel(displayUser?.role)}</span>
                <span className="profile-level-badge">{targetLevel}</span>
              </div>

              {displayUser?.displayName && displayUser?.fullName !== displayUser?.displayName ? (
                <p className="profile-fullname-text">Họ và tên: {displayUser.fullName}</p>
              ) : null}

              <div className="profile-meta-info">
                <span className="profile-meta-item">
                  <MailIcon />
                  <span>{displayUser?.email}</span>
                </span>
                <span className="profile-meta-item">
                  <CalendarIcon />
                  <span>Thành viên từ: {formatJoinDate(displayUser?.createdAt)}</span>
                </span>
              </div>
            </div>
          </div>

          <div className="profile-hero-actions">
            <button
              type="button"
              className="profile-btn-edit-fast"
              onClick={() => setActiveTab('settings')}
            >
              <EditIcon />
              <span>Chỉnh sửa hồ sơ</span>
            </button>
            <button type="button" onClick={handleLogout} className="profile-logout-btn">
              Đăng xuất
            </button>
          </div>

          {isLoading ? <p role="status" className="profile-feedback">Đang đồng bộ hồ sơ...</p> : null}
          {!isLoading && errorMessage ? (
            <p role="alert" className="profile-feedback profile-feedback--error">{errorMessage}</p>
          ) : null}
        </section>

        {/* =================================================================
            KHU VỰC B: TỔNG QUAN HỌC TẬP (4 THẺ SỐ LIỆU)
            ================================================================= */}
        <section className="profile-stats-grid" aria-label="Tổng quan số liệu học tập">
          <article className="profile-stat-card">
            <div className="profile-stat-icon-wrap">
              <LessonStatIcon />
            </div>
            <div>
              <p className="profile-stat-label">Bài học đã hoàn thành</p>
              <h2 className="profile-stat-value">{progressOverview?.lessons?.completed || 0} bài</h2>
            </div>
          </article>

          <article className="profile-stat-card">
            <div className="profile-stat-icon-wrap">
              <FlashcardStatIcon />
            </div>
            <div>
              <p className="profile-stat-label">Từ vựng & Flashcard</p>
              <h2 className="profile-stat-value">
                {progressOverview?.vocabulary?.tracked || 0} từ / {bookmarkCount} thẻ
              </h2>
            </div>
          </article>

          <article className="profile-stat-card">
            <div className="profile-stat-icon-wrap">
              <span className="profile-stat-kana-glyph" lang="ja">あ</span>
            </div>
            <div>
              <p className="profile-stat-label">Bảng chữ cái Kana</p>
              <h2 className="profile-stat-value">{progressOverview?.kana?.total || 0}/92 chữ</h2>
            </div>
          </article>

          <article className="profile-stat-card">
            <div className="profile-stat-icon-wrap">
              <StreakStatIcon />
            </div>
            <div>
              <p className="profile-stat-label">Chuỗi ngày học (Streak)</p>
              <h2 className="profile-stat-value">
                {learningActivity?.studyStreak || progressOverview?.activity?.studyStreak || 0} ngày
              </h2>
            </div>
          </article>
        </section>

        {/* =================================================================
            HỆ THỐNG TABS CHỨC NĂNG (C, D, E)
            ================================================================= */}
        <div className="profile-tabs-container">
          <nav className="profile-tabs-nav" role="tablist" aria-label="Điều hướng hồ sơ">
            <button
              type="button"
              role="tab"
              id="tab-goals"
              aria-selected={activeTab === 'goals'}
              aria-controls="panel-goals"
              className={`profile-tab-item ${activeTab === 'goals' ? 'active' : ''}`}
              onClick={() => setActiveTab('goals')}
            >
              <TargetIcon />
              <span>Mục tiêu học tiếng Nhật</span>
            </button>
            <button
              type="button"
              role="tab"
              id="tab-history"
              aria-selected={activeTab === 'history'}
              aria-controls="panel-history"
              className={`profile-tab-item ${activeTab === 'history' ? 'active' : ''}`}
              onClick={() => setActiveTab('history')}
            >
              <ClockIcon />
              <span>Hoạt động gần đây</span>
            </button>
            <button
              type="button"
              role="tab"
              id="tab-settings"
              aria-selected={activeTab === 'settings'}
              aria-controls="panel-settings"
              className={`profile-tab-item ${activeTab === 'settings' ? 'active' : ''}`}
              onClick={() => setActiveTab('settings')}
            >
              <SettingsIcon />
              <span>Cài đặt & Bảo mật</span>
            </button>
          </nav>

          {/* ===============================================================
              KHU VỰC C: MỤC TIÊU HỌC TIẾNG NHẬT
              =============================================================== */}
          {activeTab === 'goals' ? (
            <section
              role="tabpanel"
              id="panel-goals"
              aria-labelledby="tab-goals"
              className="profile-tab-panel"
            >
              <div className="profile-goals-grid">
                {/* Target JLPT Level Progress */}
                <article className="profile-goal-box">
                  <header className="profile-goal-header">
                    <div>
                      <h3>Mục tiêu JLPT hiện tại: <strong>{targetLevel}</strong></h3>
                      <p>Tiến độ hoàn thành giáo trình cấp độ {targetLevel}</p>
                    </div>
                    <span className="profile-goal-badge">{targetCompletionRate}%</span>
                  </header>

                  <div className="profile-progress-bar-bg" aria-hidden="true">
                    <div
                      className="profile-progress-bar-fill"
                      style={{ width: `${targetCompletionRate}%` }}
                    />
                  </div>

                  <div className="profile-goal-footer">
                    <span>
                      {matchedLevelProgress?.completedLessons || 0} / {matchedLevelProgress?.totalLessons || 0} bài học
                    </span>
                    <Link to={`/lessons/${targetLevel.toLowerCase()}`} className="profile-link-continue">
                      Tiếp tục bài học {targetLevel} →
                    </Link>
                  </div>
                </article>

                {/* Daily Study Goal */}
                <article className="profile-goal-box">
                  <header className="profile-goal-header">
                    <div>
                      <h3>Mục tiêu thời gian mỗi ngày</h3>
                      <p>Duy trì thói quen học tập đều đặn giúp bạn nhớ lâu hơn.</p>
                    </div>
                    <span className="profile-goal-badge">
                      {dailyGoalMinutes} phút/ngày
                    </span>
                  </header>

                  <div className="profile-daily-options">
                    {[15, 30, 45, 60].map((mins) => (
                      <button
                        key={mins}
                        type="button"
                        className={`profile-daily-btn ${dailyGoalMinutes === mins ? 'selected' : ''}`}
                        onClick={() => handleSelectDailyGoal(mins)}
                      >
                        {mins} phút
                      </button>
                    ))}
                  </div>

                  <p className="profile-goal-hint">
                    Đã chọn mục tiêu <strong>{dailyGoalMinutes} phút/ngày</strong>. Hệ thống sẽ hỗ trợ bạn duy trì nhịp học đều đặn.
                  </p>
                </article>

                {/* Weekly Target */}
                <article className="profile-goal-box">
                  <header className="profile-goal-header">
                    <div>
                      <h3>Tiến độ tuần này</h3>
                      <p>Số bài học đã hoàn thành trong tuần hiện tại.</p>
                    </div>
                    <span className="profile-goal-badge">
                      {learningActivity?.completedThisWeek || progressOverview?.lessons?.completedThisWeek || 0} bài
                    </span>
                  </header>
                  <p className="profile-goal-hint">
                    Hoàn thành tối thiểu 3–5 bài học mỗi tuần để duy trì đà tăng tiến vững chắc!
                  </p>
                </article>
              </div>
            </section>
          ) : null}

          {/* ===============================================================
              KHU VỰC D: HOẠT ĐỘNG HỌC TẬP GẦN ĐÂY
              =============================================================== */}
          {activeTab === 'history' ? (
            <section
              role="tabpanel"
              id="panel-history"
              aria-labelledby="tab-history"
              className="profile-tab-panel"
            >
              <div className="profile-history-card">
                <header className="profile-history-header">
                  <h3>Nhật ký học tập thực tế</h3>
                  <p>Theo dõi từng cột mốc bạn đã vượt qua trên hành trình chinh phục tiếng Nhật.</p>
                </header>

                <div className="profile-history-list">
                  {recentLogs.length > 0 ? (
                    recentLogs.map((item) => {
                      const typeMeta = ACTIVITY_TYPE_LABELS[item.type] || { label: 'Hoạt động', Icon: LessonStatIcon }
                      const TypeIcon = typeMeta.Icon

                      return (
                        <article key={item.id} className="profile-history-item">
                          <span className="profile-history-icon-box">
                            <TypeIcon />
                          </span>
                          <div className="profile-history-content">
                            <div className="profile-history-top">
                              <span className="profile-history-tag">{typeMeta.label}</span>
                              <time dateTime={item.createdAt} className="profile-history-time">
                                {formatActivityTime(item.createdAt)}
                              </time>
                            </div>
                            <h4 className="profile-history-title">{item.title}</h4>
                            {item.details?.score !== undefined ? (
                              <p className="profile-history-sub">
                                Điểm kiểm tra: <strong>{item.details.score}/100</strong>
                              </p>
                            ) : null}
                            {item.details?.reviewedCards ? (
                              <p className="profile-history-sub">
                                Đã ôn tập: <strong>{item.details.reviewedCards} thẻ</strong>
                              </p>
                            ) : null}
                          </div>
                        </article>
                      )
                    })
                  ) : (
                    <div className="profile-history-empty">
                      <span className="empty-icon-wrap">
                        <BookOpenIcon />
                      </span>
                      <p>Chưa có lịch sử học tập gần đây. Hãy bắt đầu học bài đầu tiên ngay hôm nay!</p>
                      <Link to="/lessons/n5" className="profile-btn-start">
                        Bắt đầu học ngay →
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </section>
          ) : null}

          {/* ===============================================================
              KHU VỰC E: CÀI ĐẶT TÀI KHOẢN & BẢO MẬT
              =============================================================== */}
          {activeTab === 'settings' ? (
            <section
              role="tabpanel"
              id="panel-settings"
              aria-labelledby="tab-settings"
              className="profile-tab-panel profile-settings-layout"
            >
              {/* Form Chỉnh sửa thông tin cá nhân */}
              <div className="profile-card profile-settings-card">
                <header className="profile-settings-header">
                  <h3>Thông tin cá nhân</h3>
                  <p>Cập nhật tên gọi, biệt danh và cấp độ tiếng Nhật mục tiêu.</p>
                </header>

                {profileSuccessMsg ? (
                  <div className="profile-alert profile-alert--success" role="status">
                    {profileSuccessMsg}
                  </div>
                ) : null}

                {profileErrorMsg ? (
                  <div className="profile-alert profile-alert--error" role="alert">
                    {profileErrorMsg}
                  </div>
                ) : null}

                <form onSubmit={handleSaveProfile} className="profile-settings-form">
                  <div className="profile-form-group">
                    <label htmlFor="fullname-input" className="profile-form-label">
                      Họ và tên đầy đủ <span className="profile-form-required">*</span>
                    </label>
                    <input
                      id="fullname-input"
                      type="text"
                      className="profile-form-input"
                      value={fullNameInput}
                      onChange={(e) => setFullNameInput(e.target.value)}
                      placeholder="Ví dụ: Nguyễn Văn A"
                      required
                    />
                  </div>

                  <div className="profile-form-group">
                    <label htmlFor="displayname-input" className="profile-form-label">
                      Tên hiển thị / Biệt danh
                    </label>
                    <input
                      id="displayname-input"
                      type="text"
                      className="profile-form-input"
                      value={displayNameInput}
                      onChange={(e) => setDisplayNameInput(e.target.value)}
                      placeholder="Ví dụ: Akira, Sakura-chan"
                    />
                  </div>

                  <div className="profile-form-group">
                    <label htmlFor="level-select" className="profile-form-label">
                      Cấp độ tiếng Nhật mục tiêu
                    </label>
                    <select
                      id="level-select"
                      className="profile-form-input"
                      value={currentLevelInput}
                      onChange={(e) => setCurrentLevelInput(e.target.value)}
                    >
                      <option value="N5">N5 - Nhập môn cơ bản</option>
                      <option value="N4">N4 - Sơ cấp</option>
                      <option value="N3">N3 - Trung cấp</option>
                      <option value="N2">N2 - Trung cao cấp</option>
                      <option value="N1">N1 - Cao cấp</option>
                    </select>
                  </div>

                  <div className="profile-form-actions">
                    <button
                      type="submit"
                      disabled={isSavingProfile}
                      className="profile-btn-save-info"
                    >
                      {isSavingProfile ? 'Đang lưu...' : 'Lưu thông tin cá nhân'}
                    </button>
                  </div>
                </form>
              </div>

              {/* Form Đổi mật khẩu tài khoản */}
              <div className="profile-card profile-settings-card">
                <header className="profile-settings-header">
                  <h3>Đổi mật khẩu tài khoản</h3>
                  <p>Cập nhật mật khẩu định kỳ để bảo vệ tài khoản và quá trình học tập.</p>
                </header>

                {passwordSuccess ? (
                  <div className="profile-alert profile-alert--success" role="status">
                    {passwordSuccess}
                  </div>
                ) : null}

                {passwordError ? (
                  <div className="profile-alert profile-alert--error" role="alert">
                    {passwordError}
                  </div>
                ) : null}

                <form onSubmit={handleChangePassword} className="profile-settings-form">
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
                        {showCurrent ? <EyeOffIcon /> : <EyeIcon />}
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
                        {showNew ? <EyeOffIcon /> : <EyeIcon />}
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
                                  step <= passwordStrength.level ? passwordStrength.color : 'var(--stroke)',
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
                        {showConfirm ? <EyeOffIcon /> : <EyeIcon />}
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
                      className="profile-btn-save-pwd"
                    >
                      {isSubmittingPassword ? 'Đang lưu...' : 'Lưu mật khẩu mới'}
                    </button>
                  </div>
                </form>
              </div>
            </section>
          ) : null}
        </div>
      </main>

      {/* Modal Đổi Avatar */}
      {isAvatarModalOpen ? (
        <AvatarModal
          currentAvatar={displayUser?.avatarUrl || '桜'}
          onClose={() => setIsAvatarModalOpen(false)}
          onSave={handleSaveAvatar}
        />
      ) : null}
    </div>
  )
}
