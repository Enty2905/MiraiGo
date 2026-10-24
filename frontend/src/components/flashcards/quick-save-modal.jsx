import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Dialog } from '../ui/dialog'
import { useAuthSession } from '../../hooks/use-auth-session'
import {
  fetchMyFlashcardSets,
  createMyFlashcardSet,
  quickSaveFlashcard,
} from '../../services/flashcard.service'
import './quick-save-modal.css'

export function BookmarkIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
    </svg>
  )
}

function CheckIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

function QuickSaveModalContent({
  onClose,
  initialFront = '',
  initialBack = '',
  vocabularyId = null,
  onSaved,
}) {
  const { isAuthenticated } = useAuthSession()
  const [sets, setSets] = useState([])
  const [selectedSetId, setSelectedSetId] = useState('')
  const [newSetTitle, setNewSetTitle] = useState('')
  const [frontText, setFrontText] = useState(initialFront)
  const [backText, setBackText] = useState(initialBack)
  const [isSaving, setIsSaving] = useState(false)
  const [isLoadingSets, setIsLoadingSets] = useState(() => Boolean(isAuthenticated))
  const [feedback, setFeedback] = useState(null)
  const [savedResult, setSavedResult] = useState(null)

  useEffect(() => {
    let isMounted = true

    if (isAuthenticated) {
      fetchMyFlashcardSets()
        .then((loadedSets) => {
          if (isMounted) {
            setSets(loadedSets)
          }
        })
        .catch(() => {
          // Non-critical, fallback to default set
        })
        .finally(() => {
          if (isMounted) {
            setIsLoadingSets(false)
          }
        })
    }

    return () => {
      isMounted = false
    }
  }, [isAuthenticated])

  const handleSubmit = async (event) => {
    event.preventDefault()

    const trimmedFront = frontText.trim()
    const trimmedBack = backText.trim()

    if (!trimmedFront) {
      setFeedback({ type: 'error', message: 'Mặt trước (từ vựng) không được để trống.' })
      return
    }

    if (!trimmedBack) {
      setFeedback({ type: 'error', message: 'Mặt sau (nghĩa / phiên âm) không được để trống.' })
      return
    }

    setIsSaving(true)
    setFeedback(null)

    try {
      let result = null

      if (selectedSetId === '+new') {
        const trimmedTitle = newSetTitle.trim()
        if (!trimmedTitle) {
          setFeedback({ type: 'error', message: 'Vui lòng nhập tên cho bộ flashcard mới.' })
          setIsSaving(false)
          return
        }

        const newSet = await createMyFlashcardSet({
          title: trimmedTitle,
          description: 'Bộ thẻ được tạo từ tính năng lưu nhanh từ vựng.',
          cards: [{ frontText: trimmedFront, backText: trimmedBack }],
        })

        result = {
          alreadyExists: false,
          set: newSet,
          message: `Đã tạo bộ "${newSet.title}" và lưu từ vựng.`,
        }
      } else {
        const targetSetId = selectedSetId ? Number(selectedSetId) : null
        result = await quickSaveFlashcard({
          setId: targetSetId,
          vocabularyId,
          frontText: trimmedFront,
          backText: trimmedBack,
        })
      }

      setSavedResult(result)
      setFeedback({
        type: result.alreadyExists ? 'info' : 'success',
        message: result.message || 'Lưu từ vựng vào Flashcard thành công!',
      })

      if (typeof onSaved === 'function') {
        onSaved(result)
      }
    } catch (error) {
      setFeedback({
        type: 'error',
        message: error.message || 'Không thể lưu flashcard. Vui lòng thử lại.',
      })
    } finally {
      setIsSaving(false)
    }
  }

  return (
    <Dialog
      className="quick-save-dialog"
      labelledBy="quick-save-modal-title"
      onClose={() => {
        if (!isSaving) {
          onClose()
        }
      }}
    >
      <div className="quick-save-modal-container">
        <header className="quick-save-modal-header">
          <div className="quick-save-title-row">
            <span className="quick-save-icon-pill">
              <BookmarkIcon className="quick-save-head-icon" />
            </span>
            <h2 id="quick-save-modal-title">Lưu nhanh vào Flashcard</h2>
          </div>
          <button
            type="button"
            className="quick-save-close-btn"
            onClick={onClose}
            aria-label="Đóng cửa sổ"
            disabled={isSaving}
          >
            ✕
          </button>
        </header>

        {!isAuthenticated ? (
          <div className="quick-save-auth-prompt">
            <p>Bạn cần đăng nhập tài khoản để tạo và lưu bộ thẻ flashcard ôn tập.</p>
            <div className="quick-save-modal-actions">
              <Link to="/auth" className="quick-save-btn quick-save-btn--primary">
                Đăng nhập ngay
              </Link>
              <button
                type="button"
                className="quick-save-btn quick-save-btn--secondary"
                onClick={onClose}
              >
                Đóng
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="quick-save-form">
            <div className="quick-save-preview-card">
              <div className="quick-save-card-face quick-save-card-front">
                <span className="quick-save-face-tag">Mặt trước</span>
                <span className="quick-save-card-text">{frontText || '---'}</span>
              </div>
              <div className="quick-save-card-divider" />
              <div className="quick-save-card-face quick-save-card-back">
                <span className="quick-save-face-tag">Mặt sau</span>
                <span className="quick-save-card-text">{backText || '---'}</span>
              </div>
            </div>

            <div className="quick-save-field">
              <label htmlFor="quick-save-set-select">Chọn bộ Flashcard</label>
              <select
                id="quick-save-set-select"
                value={selectedSetId}
                onChange={(e) => setSelectedSetId(e.target.value)}
                disabled={isSaving || Boolean(savedResult)}
              >
                <option value="">Bộ mặc định ("Từ vựng đã lưu")</option>
                {sets.map((set) => (
                  <option key={set.id} value={set.id}>
                    {set.title} ({set.cardCount} thẻ)
                  </option>
                ))}
                <option value="+new">+ Tạo bộ flashcard mới...</option>
              </select>
              {isLoadingSets ? (
                <span className="quick-save-hint">Đang tải danh sách bộ thẻ...</span>
              ) : null}
            </div>

            {selectedSetId === '+new' ? (
              <div className="quick-save-field">
                <label htmlFor="quick-save-new-set-title">Tên bộ thẻ mới</label>
                <input
                  id="quick-save-new-set-title"
                  type="text"
                  placeholder="Ví dụ: Từ vựng N5 bài 1, Từ cần nhớ..."
                  value={newSetTitle}
                  onChange={(e) => setNewSetTitle(e.target.value)}
                  disabled={isSaving || Boolean(savedResult)}
                  required
                />
              </div>
            ) : null}

            <div className="quick-save-field-row">
              <div className="quick-save-field">
                <label htmlFor="quick-save-front-input">Chỉnh sửa mặt trước</label>
                <input
                  id="quick-save-front-input"
                  type="text"
                  value={frontText}
                  onChange={(e) => setFrontText(e.target.value)}
                  disabled={isSaving || Boolean(savedResult)}
                  required
                />
              </div>

              <div className="quick-save-field">
                <label htmlFor="quick-save-back-input">Chỉnh sửa mặt sau</label>
                <input
                  id="quick-save-back-input"
                  type="text"
                  value={backText}
                  onChange={(e) => setBackText(e.target.value)}
                  disabled={isSaving || Boolean(savedResult)}
                  required
                />
              </div>
            </div>

            {feedback ? (
              <div
                role={feedback.type === 'error' ? 'alert' : 'status'}
                className={`quick-save-feedback quick-save-feedback--${feedback.type}`}
              >
                {feedback.type === 'success' ? <CheckIcon className="quick-save-status-icon" /> : null}
                <span>{feedback.message}</span>
              </div>
            ) : null}

            <div className="quick-save-modal-actions">
              {savedResult ? (
                <>
                  <Link
                    to={`/flashcards?set=${savedResult.set?.id || ''}`}
                    className="quick-save-btn quick-save-btn--primary"
                  >
                    Xem bộ Flashcard
                  </Link>
                  <button
                    type="button"
                    className="quick-save-btn quick-save-btn--secondary"
                    onClick={onClose}
                  >
                    Xong
                  </button>
                </>
              ) : (
                <>
                  <button
                    type="button"
                    className="quick-save-btn quick-save-btn--secondary"
                    onClick={onClose}
                    disabled={isSaving}
                  >
                    Hủy
                  </button>
                  <button
                    type="submit"
                    className="quick-save-btn quick-save-btn--primary"
                    disabled={isSaving}
                  >
                    <BookmarkIcon className="quick-save-btn-icon" />
                    <span>{isSaving ? 'Đang lưu...' : 'Lưu vào Flashcard'}</span>
                  </button>
                </>
              )}
            </div>
          </form>
        )}
      </div>
    </Dialog>
  )
}

export function QuickSaveModal({
  isOpen,
  onClose,
  initialFront = '',
  initialBack = '',
  vocabularyId = null,
  onSaved,
}) {
  if (!isOpen) {
    return null
  }

  return (
    <QuickSaveModalContent
      key={`${initialFront}-${initialBack}`}
      onClose={onClose}
      initialFront={initialFront}
      initialBack={initialBack}
      vocabularyId={vocabularyId}
      onSaved={onSaved}
    />
  )
}
