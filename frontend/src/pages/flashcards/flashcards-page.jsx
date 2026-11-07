import { useEffect, useMemo, useState } from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import { Dialog } from '../../components/ui/dialog'
import { FlashcardGame } from '../../components/flashcards/flashcard-game'
import { DashboardNav } from '../../components/dashboard/dashboard-nav'
import { useAuthSession } from '../../hooks/use-auth-session'
import {
  createMyFlashcardSet,
  deleteMyFlashcardSet,
  fetchMyFlashcardSet,
  fetchMyFlashcardSets,
  saveFlashcardReview,
  updateMyFlashcardSet,
} from '../../services/flashcard.service'
import { NAV_ITEMS } from '../dashboard/dashboard-content'
import '../dashboard/dashboard-page.css'
import './flashcards-page.css'

const TERM_SEPARATOR_OPTIONS = [
  { id: 'tab', label: 'Tab', value: '\t' },
  { id: 'comma', label: 'Phẩy', value: ',' },
  { id: 'custom', label: 'Tùy chỉnh', value: '' },
]

const CARD_SEPARATOR_OPTIONS = [
  { id: 'newline', label: 'Dòng mới', value: '\n' },
  { id: 'semicolon', label: 'Chấm phẩy', value: ';' },
  { id: 'custom', label: 'Tùy chỉnh', value: '' },
]

function PlusIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
    </svg>
  )
}

function PencilIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M16.474 5.408l2.118 2.118m-.75-3.036a2.121 2.121 0 1 1 3 3L7.5 20.828l-4.5 1.172 1.172-4.5L17.842 4.49z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function FolderIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M3 6.8A2.8 2.8 0 0 1 5.8 4h3.5l2 2.2h6.9A2.8 2.8 0 0 1 21 9v7.2a2.8 2.8 0 0 1-2.8 2.8H5.8A2.8 2.8 0 0 1 3 16.2V6.8Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    </svg>
  )
}

function TrashIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M5 7h14M10 11v6M14 11v6M9 7l1-2h4l1 2M7 7l1 13h8l1-13" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function getDisplayName(user) {
  return user?.displayName || user?.fullName || user?.email || 'bạn'
}

function splitByCardSeparator(text, separatorId, customSeparator) {
  if (!text || !text.trim()) {
    return []
  }

  if (separatorId === 'newline') {
    return text.split(/\r?\n+/)
  }

  const selectedOption = CARD_SEPARATOR_OPTIONS.find((option) => option.id === separatorId)
  const separator = separatorId === 'custom' ? customSeparator : selectedOption?.value

  if (!separator) {
    return []
  }

  return text.split(separator)
}

function parseBulkCards({
  text,
  termSeparatorId,
  customTermSeparator,
  cardSeparatorId,
  customCardSeparator,
}) {
  if (!text || !text.trim()) {
    return []
  }

  const selectedOption = TERM_SEPARATOR_OPTIONS.find((option) => option.id === termSeparatorId)
  const termSeparator = termSeparatorId === 'custom' ? customTermSeparator : selectedOption?.value

  if (!termSeparator && termSeparatorId !== 'tab') {
    return []
  }

  return splitByCardSeparator(text, cardSeparatorId, customCardSeparator)
    .map((rawCard) => rawCard.trim())
    .filter(Boolean)
    .map((rawCard) => {
      let frontText = ''
      let backText = ''

      if (termSeparatorId === 'tab') {
        if (rawCard.includes('\t')) {
          const parts = rawCard.split('\t')
          frontText = parts[0]?.trim() || ''
          backText = parts.slice(1).join('\t').trim()
        } else if (/\s{2,}/.test(rawCard)) {
          const match = rawCard.match(/^(.+?)\s{2,}(.+)$/)
          if (match) {
            frontText = match[1]?.trim() || ''
            backText = match[2]?.trim() || ''
          }
        } else if (rawCard.includes(' - ')) {
          const parts = rawCard.split(' - ')
          frontText = parts[0]?.trim() || ''
          backText = parts.slice(1).join(' - ').trim()
        } else if (rawCard.includes(': ')) {
          const parts = rawCard.split(': ')
          frontText = parts[0]?.trim() || ''
          backText = parts.slice(1).join(': ').trim()
        }
      } else {
        const parts = rawCard.split(termSeparator)
        frontText = parts[0]?.trim() || ''
        backText = parts.slice(1).join(termSeparator).trim()
      }

      return {
        frontText,
        backText,
      }
    })
    .filter((card) => card.frontText && card.backText)
}

function buildBlankCard() {
  return {
    frontText: '',
    backText: '',
  }
}

function BulkImportModal({
  isOpen,
  onClose,
  onImport,
}) {
  const [bulkText, setBulkText] = useState('')
  const [termSeparatorId, setTermSeparatorId] = useState('tab')
  const [cardSeparatorId, setCardSeparatorId] = useState('newline')
  const [customTermSeparator, setCustomTermSeparator] = useState('')
  const [customCardSeparator, setCustomCardSeparator] = useState('')

  const previewCards = useMemo(
    () => parseBulkCards({
      text: bulkText,
      termSeparatorId,
      customTermSeparator,
      cardSeparatorId,
      customCardSeparator,
    }),
    [bulkText, termSeparatorId, customTermSeparator, cardSeparatorId, customCardSeparator],
  )

  if (!isOpen) {
    return null
  }

  const handleImport = () => {
    if (previewCards.length === 0) {
      return
    }
    onImport(previewCards)
    setBulkText('')
  }

  return (
    <Dialog
      className="quizlet-import-modal"
      labelledBy="quizlet-import-title"
      onClose={onClose}
    >
      <div className="quizlet-import-container">
        <header className="quizlet-import-head">
          <div>
            <h2 id="quizlet-import-title" className="quizlet-import-title">
              Nhập dữ liệu tự động
            </h2>
            <p className="quizlet-import-subtitle">Chép và dán danh sách từ vựng ở đây (từ Word, Excel, Google Docs, Quizlet, v.v.)</p>
          </div>
          <button
            type="button"
            className="quizlet-import-close-btn"
            onClick={onClose}
            aria-label="Đóng"
          >
            &times;
          </button>
        </header>

        <div className="quizlet-import-textarea-wrap">
          <textarea
            className="quizlet-import-textarea"
            value={bulkText}
            onChange={(event) => setBulkText(event.target.value)}
            placeholder={'Từ 1\tĐịnh nghĩa 1\nTừ 2\tĐịnh nghĩa 2\nTừ 3\tĐịnh nghĩa 3'}
            rows={8}
            autoFocus
          />
        </div>

        <div className="quizlet-import-options-grid">
          <div className="quizlet-import-col">
            <h3 className="quizlet-import-col-title">Giữa thuật ngữ và định nghĩa</h3>
            <div className="quizlet-import-radio-group">
              {TERM_SEPARATOR_OPTIONS.map((option) => (
                <label key={option.id} className="quizlet-import-radio">
                  <input
                    type="radio"
                    name="modal-term-separator"
                    value={option.id}
                    checked={termSeparatorId === option.id}
                    onChange={() => setTermSeparatorId(option.id)}
                  />
                  <span>{option.label}</span>
                </label>
              ))}
            </div>
            {termSeparatorId === 'custom' ? (
              <input
                className="quizlet-import-custom-input"
                value={customTermSeparator}
                onChange={(event) => setCustomTermSeparator(event.target.value)}
                placeholder="Ví dụ: - hoặc :"
                aria-label="Ký tự phân tách thuật ngữ tùy chỉnh"
              />
            ) : null}
          </div>

          <div className="quizlet-import-col">
            <h3 className="quizlet-import-col-title">Giữa các thẻ</h3>
            <div className="quizlet-import-radio-group">
              {CARD_SEPARATOR_OPTIONS.map((option) => (
                <label key={option.id} className="quizlet-import-radio">
                  <input
                    type="radio"
                    name="modal-card-separator"
                    value={option.id}
                    checked={cardSeparatorId === option.id}
                    onChange={() => setCardSeparatorId(option.id)}
                  />
                  <span>{option.label}</span>
                </label>
              ))}
            </div>
            {cardSeparatorId === 'custom' ? (
              <input
                className="quizlet-import-custom-input"
                value={customCardSeparator}
                onChange={(event) => setCustomCardSeparator(event.target.value)}
                placeholder="Ví dụ: ; hoặc ///"
                aria-label="Ký tự phân tách thẻ tùy chỉnh"
              />
            ) : null}
          </div>
        </div>

        <section className="quizlet-import-preview-section">
          <div className="quizlet-import-preview-header">
            <h3>Xem trước</h3>
            <span className="quizlet-import-preview-count">{previewCards.length} thẻ</span>
          </div>

          {previewCards.length > 0 ? (
            <div className="quizlet-import-preview-list">
              {previewCards.map((card, idx) => (
                <div key={`preview-card-${idx + 1}`} className="quizlet-import-preview-item">
                  <div className="quizlet-import-preview-term">{card.frontText}</div>
                  <div className="quizlet-import-preview-def">{card.backText}</div>
                </div>
              ))}
            </div>
          ) : (
            <p className="quizlet-import-empty-notice">Không có nội dung để xem trước</p>
          )}
        </section>

        <footer className="quizlet-import-footer">
          <button
            type="button"
            className="quizlet-import-cancel-btn"
            onClick={onClose}
          >
            Hủy nhập
          </button>
          <button
            type="button"
            className="quizlet-import-submit-btn"
            disabled={previewCards.length === 0}
            onClick={handleImport}
          >
            Nhập
          </button>
        </footer>
      </div>
    </Dialog>
  )
}

function ManualCardsForm({ cards, onCardChange, onAddCard, onRemoveCard }) {
  return (
    <div className="flashcards-card-editor">
      {cards.map((card, index) => (
        <article key={`manual-card-${index + 1}`} className="flashcards-card-editor-row">
          <span>{index + 1}</span>
          <label className="flashcards-field">
            <span>Thuật ngữ</span>
            <input
              value={card.frontText}
              onChange={(event) => onCardChange(index, 'frontText', event.target.value)}
              placeholder="日本語"
            />
          </label>
          <label className="flashcards-field">
            <span>Định nghĩa</span>
            <input
              value={card.backText}
              onChange={(event) => onCardChange(index, 'backText', event.target.value)}
              placeholder="Tiếng Nhật"
            />
          </label>
          <button
            type="button"
            className="flashcards-icon-btn"
            onClick={() => onRemoveCard(index)}
            disabled={cards.length === 1}
            aria-label="Xóa thẻ"
          >
            <TrashIcon />
          </button>
        </article>
      ))}

      <button type="button" className="flashcards-secondary-btn flashcards-add-card-btn" onClick={onAddCard}>
        <PlusIcon />
        Thêm thẻ
      </button>
    </div>
  )
}

function CreateFlashcardSetDialog({
  editingSet = null,
  isSaving,
  errorMessage,
  onClose,
  onSubmit,
  initialImportOpen = false,
}) {
  const isEditing = Boolean(editingSet?.id)
  const [title, setTitle] = useState(editingSet?.title || '')
  const [description, setDescription] = useState(editingSet?.description || '')
  const [manualCards, setManualCards] = useState(() => {
    if (editingSet?.cards && editingSet.cards.length > 0) {
      return editingSet.cards.map((card) => ({
        frontText: card.frontText || '',
        backText: card.backText || '',
      }))
    }
    return [buildBlankCard(), buildBlankCard()]
  })
  const [isImportModalOpen, setIsImportModalOpen] = useState(initialImportOpen)

  const cardsToSubmit = manualCards
    .map((card) => ({
      frontText: card.frontText.trim(),
      backText: card.backText.trim(),
    }))
    .filter((card) => card.frontText && card.backText)

  const handleCardChange = (index, field, value) => {
    setManualCards((currentCards) => currentCards.map((card, cardIndex) => {
      if (cardIndex !== index) {
        return card
      }

      return {
        ...card,
        [field]: value,
      }
    }))
  }

  const handleRemoveCard = (index) => {
    setManualCards((currentCards) => currentCards.filter((card, cardIndex) => cardIndex !== index))
  }

  const handleAddCard = () => {
    setManualCards((currentCards) => [...currentCards, buildBlankCard()])
  }

  const handleImportCards = (importedCards) => {
    if (!importedCards || importedCards.length === 0) {
      return
    }

    setManualCards((currentCards) => {
      const hasNonEmptyCards = currentCards.some(
        (card) => card.frontText.trim() || card.backText.trim(),
      )
      if (!hasNonEmptyCards) {
        return importedCards
      }
      return [...currentCards, ...importedCards]
    })

    if (!title.trim()) {
      setTitle(`Bộ từ vựng mới (${importedCards.length} thẻ)`)
    }

    setIsImportModalOpen(false)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit({
      title: title.trim(),
      description: description.trim(),
      cards: cardsToSubmit,
    })
  }

  return (
    <>
      <Dialog className="flashcards-modal" labelledBy="flashcards-modal-title" onClose={() => { if (!isSaving) onClose() }}>
        <form onSubmit={handleSubmit}>
          <header className="flashcards-modal-head">
            <h2 id="flashcards-modal-title">
              {isEditing ? 'Chỉnh sửa bộ thẻ' : 'Tạo một bộ thẻ mới'}
            </h2>
            <button type="button" className="flashcards-close-btn" disabled={isSaving} onClick={onClose} aria-label="Đóng">
              &times;
            </button>
          </header>

          <div className="flashcards-set-fields">
            <label className="flashcards-field">
              <span>Tên bộ thẻ</span>
              <input
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                placeholder="Ví dụ: 6 - Từ vựng"
              />
            </label>
            <label className="flashcards-field">
              <span>Mô tả</span>
              <input
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                placeholder="Mô tả ngắn cho bộ thẻ"
              />
            </label>
          </div>

          <div className="flashcards-card-editor-header">
            <div className="flashcards-card-editor-header-info">
              <h3>Danh sách thẻ ({cardsToSubmit.length})</h3>
              <p>Nhập tay từng thẻ hoặc bấm <strong>+ Nhập</strong> để dán nhanh danh sách từ Word, Excel, Quizlet...</p>
            </div>
            <button
              type="button"
              className="flashcards-quizlet-pill-btn"
              onClick={() => setIsImportModalOpen(true)}
            >
              <PlusIcon />
              Nhập
            </button>
          </div>

          <ManualCardsForm
            cards={manualCards}
            onCardChange={handleCardChange}
            onAddCard={handleAddCard}
            onRemoveCard={handleRemoveCard}
          />

          {errorMessage ? <p role="alert" className="flashcards-form-error">{errorMessage}</p> : null}

          <footer className="flashcards-modal-actions">
            <button type="button" className="flashcards-secondary-btn" disabled={isSaving} onClick={onClose}>
              Hủy
            </button>
            <button
              type="submit"
              className="flashcards-primary-btn"
              disabled={isSaving || !title.trim() || cardsToSubmit.length === 0}
            >
              {isSaving
                ? (isEditing ? 'Đang lưu...' : 'Đang tạo...')
                : (isEditing ? `Lưu thay đổi (${cardsToSubmit.length} thẻ)` : `Tạo bộ ${cardsToSubmit.length} thẻ`)}
            </button>
          </footer>
        </form>
      </Dialog>

      {isImportModalOpen ? (
        <BulkImportModal
          isOpen={isImportModalOpen}
          onClose={() => setIsImportModalOpen(false)}
          onImport={handleImportCards}
        />
      ) : null}
    </>
  )
}

function FlashcardSetCard({ flashcardSet, onEdit, onDelete }) {
  return (
    <article className="flashcards-set-card">
      <Link to={`/flashcards/${flashcardSet.id}`} className="flashcards-set-link">
        <div className="flashcards-set-icon">
          <FolderIcon />
        </div>
        <div>
          <h2>{flashcardSet.title}</h2>
          <p>{flashcardSet.cardCount} thuật ngữ - Tác giả: bạn</p>
          {flashcardSet.description ? <small>{flashcardSet.description}</small> : null}
        </div>
      </Link>

      <div className="flashcards-set-actions">
        <button
          type="button"
          className="flashcards-icon-btn flashcards-icon-btn--edit"
          onClick={() => onEdit(flashcardSet)}
          aria-label="Sửa bộ thẻ"
          title="Chỉnh sửa tên và từ vựng"
        >
          <PencilIcon />
        </button>
        <button
          type="button"
          className="flashcards-icon-btn flashcards-icon-btn--danger"
          onClick={() => onDelete(flashcardSet.id)}
          aria-label="Xóa bộ thẻ"
          title="Xóa bộ thẻ"
        >
          <TrashIcon />
        </button>
      </div>
    </article>
  )
}

function FlashcardSetsView({
  user,
  sets,
  isLoading,
  errorMessage,
  onOpenDialog,
  onOpenImportDialog,
  onEditSet,
  onDeleteSet,
}) {
  return (
    <main className="dashboard-main flashcards-main" id="main-content" tabIndex={-1}>
      <section className="flashcards-hero">
        <div className="flashcards-folder-icon">
          <FolderIcon />
        </div>
        <div>
          <h1>Flashcard của {getDisplayName(user)}</h1>
          <p>{sets.length} bộ thẻ</p>
        </div>
        <div className="flashcards-hero-actions">
          <button
            type="button"
            className="flashcards-quizlet-pill-btn"
            onClick={onOpenImportDialog}
            title="Dán từ vựng và tự tạo flashcard tự động như Quizlet"
          >
            <PlusIcon />
            Nhập
          </button>
          <button type="button" className="flashcards-add-btn" onClick={onOpenDialog} aria-label="Thêm bộ thẻ">
            <PlusIcon />
            Tạo bộ thẻ
          </button>
        </div>
      </section>

      <p className="flashcards-intro">Gom những từ mới vào một bộ thẻ. Ôn lại, tự kiểm tra và ghi nhớ theo nhịp của bạn.</p>

      {isLoading ? <p role="status" className="flashcards-status">Đang tải bộ thẻ...</p> : null}
      {!isLoading && errorMessage ? <p role="alert" className="flashcards-status flashcards-status--error">{errorMessage}</p> : null}

      {!isLoading && !errorMessage ? (
        <section className="flashcards-set-list" aria-label="Các bộ flash card">
          {sets.map((flashcardSet) => (
            <FlashcardSetCard
              key={flashcardSet.id}
              flashcardSet={flashcardSet}
              onEdit={onEditSet}
              onDelete={onDeleteSet}
            />
          ))}
          {sets.length === 0 ? (
            <p className="flashcards-empty-state">Chưa có bộ thẻ nào.</p>
          ) : null}
        </section>
      ) : null}
    </main>
  )
}

function StudySummary({
  knownCount,
  unknownCount,
  totalCards,
  isSavingReview,
  reviewMessage,
  reviewErrorMessage,
  onRestart,
  onRetrySave,
}) {
  return (
    <section className="flashcards-summary">
      <h2>Kết quả ôn luyện</h2>
      <div className="flashcards-summary-grid">
        <article>
          <span>Đã thuộc</span>
          <strong>{knownCount}</strong>
        </article>
        <article>
          <span>Chưa thuộc</span>
          <strong>{unknownCount}</strong>
        </article>
        <article>
          <span>Tổng số</span>
          <strong>{totalCards}</strong>
        </article>
      </div>
      {isSavingReview ? <p role="status" className="flashcards-status">Đang lưu kết quả ôn tập...</p> : null}
      {!isSavingReview && reviewMessage ? <p role="status" className="flashcards-status">{reviewMessage}</p> : null}
      {!isSavingReview && reviewErrorMessage ? (
        <div>
          <p role="alert" className="flashcards-status flashcards-status--error">
            Chưa lưu được kết quả. {reviewErrorMessage} Kết quả phiên này vẫn được giữ để thử lại; đừng tải lại hoặc rời trang.
          </p>
          <button type="button" className="flashcards-primary-btn" onClick={onRetrySave}>
            Thử lưu lại
          </button>
        </div>
      ) : null}
      <button type="button" className="flashcards-primary-btn" disabled={isSavingReview} onClick={onRestart}>
        Xem lại bộ thẻ
      </button>
    </section>
  )
}

function StudyCard({
  card,
  currentIndex,
  totalCards,
  isFlipped,
  knownCount,
  unknownCount,
  onFlip,
  onMarkKnown,
  onMarkUnknown,
}) {
  return (
    <section className="flashcards-study-panel">
      <div className="flashcards-study-progress" aria-label="Tiến độ ôn tập">
        <span>
          <small>Thẻ</small>
          <strong>{currentIndex + 1} / {totalCards}</strong>
        </span>
        <span>
          <small>Đã thuộc</small>
          <strong>{knownCount}</strong>
        </span>
        <span>
          <small>Chưa thuộc</small>
          <strong>{unknownCount}</strong>
        </span>
      </div>

      <div className="flashcards-study-stack">
        <button
          type="button"
          className={`flashcards-study-card${isFlipped ? ' is-flipped' : ''}`}
          onClick={onFlip}
          aria-label={`${isFlipped ? card.backText : card.frontText}. Lật thẻ để xem ${isFlipped ? 'mặt trước' : 'đáp án'}.`}
          aria-pressed={isFlipped}
        >
          <span className="flashcards-study-card-inner">
            <span aria-hidden={isFlipped} className="flashcards-study-card-face flashcards-study-card-front">
              <small>Mặt trước</small>
              <strong>{card.frontText}</strong>
            </span>
            <span aria-hidden={!isFlipped} className="flashcards-study-card-face flashcards-study-card-back">
              <small>Mặt sau</small>
              <strong>{card.backText}</strong>
            </span>
          </span>
        </button>
      </div>

      <div className="flashcards-study-actions">
        <button type="button" className="flashcards-study-arrow flashcards-study-arrow--left" onClick={onMarkUnknown}>
          <span>←</span>
          Chưa thuộc
        </button>
        <button type="button" className="flashcards-study-arrow flashcards-study-arrow--right" onClick={onMarkKnown}>
          Đã thuộc
          <span>→</span>
        </button>
      </div>
    </section>
  )
}

function FlashcardSetDetailView({
  flashcardSet,
  isLoading,
  errorMessage,
  isSavingReview,
  reviewMessage,
  reviewErrorMessage,
  onSaveReview,
  onRestart,
  onEdit,
  studyState,
  setStudyState,
}) {
  const [practiceMode, setPracticeMode] = useState('cards')
  const [isGameActive, setIsGameActive] = useState(false)
  const [pendingMode, setPendingMode] = useState(null)
  const cards = flashcardSet?.cards || []
  const currentCard = cards[studyState.currentIndex]
  const knownCount = studyState.knownIds.length
  const unknownCount = studyState.unknownIds.length
  const isFinished = cards.length > 0 && studyState.currentIndex >= cards.length
  const cardCount = flashcardSet?.cardCount || cards.length

  const handleMark = (status) => {
    const cardId = currentCard?.id

    if (!cardId) {
      return
    }

    const nextKnownIds = studyState.knownIds.filter((id) => id !== cardId)
    const nextUnknownIds = studyState.unknownIds.filter((id) => id !== cardId)

    if (status === 'known') {
      nextKnownIds.push(cardId)
    } else {
      nextUnknownIds.push(cardId)
    }

    const nextReviewResults = [
      ...(studyState.reviewResults || []).filter((result) => result.cardId !== cardId),
      {
        cardId,
        isCorrect: status === 'known',
      },
    ]
    const nextState = {
      currentIndex: studyState.currentIndex + 1,
      isFlipped: false,
      knownIds: nextKnownIds,
      unknownIds: nextUnknownIds,
      reviewResults: nextReviewResults,
    }

    setStudyState(nextState)

    if (nextState.currentIndex >= cards.length) {
      onSaveReview(nextReviewResults)
    }
  }

  return (
    <main className="dashboard-main flashcards-main" id="main-content" tabIndex={-1}>
      <section className="flashcards-detail-head">
        <Link to="/flashcards" className="flashcards-back-link">← Các bộ thẻ</Link>
        {!flashcardSet ? <h1>Ôn tập flashcard</h1> : null}
        {flashcardSet ? (
          <div className="flashcards-detail-head-content">
            <div className="flashcards-detail-title">
              <div className="flashcards-detail-icon">
                <FolderIcon />
              </div>
              <div className="flashcards-detail-title-info">
                <h1>{flashcardSet.title}</h1>
                <div className="flashcards-detail-meta">
                  <span>{cardCount} thẻ</span>
                  {flashcardSet.description ? <span>{flashcardSet.description}</span> : null}
                </div>
              </div>
              {onEdit ? (
                <button
                  type="button"
                  className="flashcards-quizlet-pill-btn flashcards-detail-edit-btn"
                  onClick={() => onEdit(flashcardSet)}
                  title="Sửa tên, mô tả hoặc từ vựng của bộ thẻ"
                >
                  <PencilIcon />
                  Sửa bộ thẻ
                </button>
              ) : null}
            </div>
            <div className="flashcards-detail-stats" aria-label="Thống kê bộ thẻ">
              <article>
                <span>Tổng thẻ</span>
                <strong>{cardCount}</strong>
              </article>
              <article>
                <span>Đã thuộc</span>
                <strong>{knownCount}</strong>
              </article>
              <article>
                <span>Chưa thuộc</span>
                <strong>{unknownCount}</strong>
              </article>
            </div>
          </div>
        ) : null}
      </section>

      {isLoading ? <p role="status" className="flashcards-status">Đang tải bộ thẻ...</p> : null}
      {!isLoading && errorMessage ? <p role="alert" className="flashcards-status flashcards-status--error">{errorMessage}</p> : null}

      {!isLoading && flashcardSet && cards.length === 0 ? (
        <p className="flashcards-empty-state">Bộ này chưa có thẻ.</p>
      ) : null}

      {!isLoading && !errorMessage && cards.length > 0 ? (
        <div className="flashcard-modes" role="group" aria-label="Chế độ ôn tập">
          {[
            ['cards', 'Ôn flashcard'],
            ['match', 'Ghép cặp'],
            ['choice', 'Chọn đáp án'],
            ['memory', 'Lật thẻ tìm cặp'],
          ].map(([mode, label]) => (
            <button key={mode} type="button" aria-pressed={practiceMode === mode} disabled={isSavingReview}
              className={`ui-button${practiceMode === mode ? '' : ' ui-button--secondary'}`}
              onClick={() => {
                if (mode === practiceMode) return
                const isCurrentlyActive = practiceMode === 'cards'
                  ? (!isFinished && studyState.currentIndex > 0)
                  : isGameActive

                if (isCurrentlyActive) {
                  setPendingMode(mode)
                  return
                }
                setIsGameActive(false)
                setPracticeMode(mode)
              }}>{label}</button>
          ))}
        </div>
      ) : null}

      {pendingMode !== null ? (
        <Dialog
          className="game-switch-dialog"
          labelledBy="switch-game-title"
          onClose={() => setPendingMode(null)}
        >
          <div className="game-switch-modal-content">
            <div className="game-switch-icon-wrap" aria-hidden="true">
              ⚠️
            </div>
            <h2 id="switch-game-title">Đổi chế độ luyện tập?</h2>
            <p>
              Bạn đang trong một lượt ôn tập chưa hoàn thành. Nếu đổi sang chế độ{' '}
              <strong>
                {pendingMode === 'cards'
                  ? 'Ôn flashcard'
                  : pendingMode === 'match'
                  ? 'Ghép cặp'
                  : pendingMode === 'choice'
                  ? 'Chọn đáp án'
                  : 'Lật thẻ tìm cặp'}
              </strong>
              , tiến độ của lượt chơi này sẽ bị hủy bỏ.
            </p>
            <div className="game-switch-actions">
              <button
                type="button"
                autoFocus
                className="ui-button ui-button--secondary"
                onClick={() => setPendingMode(null)}
              >
                Tiếp tục chơi
              </button>
              <button
                type="button"
                className="ui-button ui-button--danger"
                onClick={() => {
                  const nextMode = pendingMode
                  setPendingMode(null)
                  setIsGameActive(false)
                  setPracticeMode(nextMode)
                }}
              >
                Xác nhận đổi
              </button>
            </div>
          </div>
        </Dialog>
      ) : null}

      {!isLoading && !errorMessage && cards.length > 0 && practiceMode !== 'cards' ? (
        <FlashcardGame
          key={`${flashcardSet.id}-${practiceMode}`}
          cards={cards}
          mode={practiceMode}
          onActiveChange={setIsGameActive}
        />
      ) : null}



      {practiceMode === 'cards' && !isLoading && flashcardSet && currentCard && !isFinished ? (
        <StudyCard
          card={currentCard}
          currentIndex={studyState.currentIndex}
          totalCards={cards.length}
          isFlipped={studyState.isFlipped}
          knownCount={knownCount}
          unknownCount={unknownCount}
          onFlip={() => setStudyState((currentState) => ({
            ...currentState,
            isFlipped: !currentState.isFlipped,
          }))}
          onMarkKnown={() => handleMark('known')}
          onMarkUnknown={() => handleMark('unknown')}
        />
      ) : null}

      {practiceMode === 'cards' && !isLoading && flashcardSet && isFinished ? (
        <StudySummary
          knownCount={knownCount}
          unknownCount={unknownCount}
          totalCards={cards.length}
          isSavingReview={isSavingReview}
          reviewMessage={reviewMessage}
          reviewErrorMessage={reviewErrorMessage}
          onRestart={onRestart}
          onRetrySave={() => onSaveReview(studyState.reviewResults)}
        />
      ) : null}

      {practiceMode === 'cards' && !isLoading && flashcardSet && cards.length > 0 ? (
        <section className="flashcards-detail-list">
          <div className="flashcards-detail-list-head">
            <h2>Thuật ngữ trong bộ này</h2>
            <span>{cards.length} mục</span>
          </div>
          {cards.map((card, index) => (
            <article key={card.id}>
              <span className="flashcards-detail-index">{index + 1}</span>
              <div>
                <small>Mặt trước</small>
                <strong>{card.frontText}</strong>
              </div>
              <div>
                <small>Mặt sau</small>
                <p>{card.backText}</p>
              </div>
            </article>
          ))}
        </section>
      ) : null}
    </main>
  )
}

export function FlashcardsPage() {
  const navigate = useNavigate()
  const { setId } = useParams()
  const { isAuthenticated, user } = useAuthSession()
  const [sets, setSets] = useState([])
  const [activeSet, setActiveSet] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [deleteSetId, setDeleteSetId] = useState(null)
  const [isDeleting, setIsDeleting] = useState(false)
  const [deleteError, setDeleteError] = useState('')
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [initialImportOpen, setInitialImportOpen] = useState(false)
  const [editingSet, setEditingSet] = useState(null)
  const [isSaving, setIsSaving] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [formErrorMessage, setFormErrorMessage] = useState('')
  const [isSavingReview, setIsSavingReview] = useState(false)
  const [reviewMessage, setReviewMessage] = useState('')
  const [reviewErrorMessage, setReviewErrorMessage] = useState('')
  const [studyState, setStudyState] = useState({
    currentIndex: 0,
    isFlipped: false,
    knownIds: [],
    unknownIds: [],
    reviewResults: [],
  })

  useEffect(() => {
    if (!isAuthenticated) {
      return
    }

    let isMounted = true
    const loadData = setId ? fetchMyFlashcardSet(setId) : fetchMyFlashcardSets()

    Promise.resolve().then(() => {
      if (!isMounted) {
        return
      }

      setIsLoading(true)
      setErrorMessage('')

      if (setId) {
        setActiveSet(null)
      }
    })

    loadData
      .then((result) => {
        if (!isMounted) {
          return
        }

        setErrorMessage('')

        if (setId) {
          setActiveSet(result)
          setStudyState({
            currentIndex: 0,
            isFlipped: false,
            knownIds: [],
            unknownIds: [],
            reviewResults: [],
          })
          setReviewMessage('')
          setReviewErrorMessage('')
        } else {
          setSets(result)
          setActiveSet(null)
        }
      })
      .catch((error) => {
        if (isMounted) {
          setErrorMessage(error.message)
        }
      })
      .finally(() => {
        if (isMounted) {
          setIsLoading(false)
        }
      })

    return () => {
      isMounted = false
    }
  }, [isAuthenticated, setId])

  if (!isAuthenticated) {
    return <Navigate to="/auth" replace />
  }

  const handleEditSet = async (flashcardSet) => {
    setFormErrorMessage('')
    if (flashcardSet.cards && flashcardSet.cards.length > 0) {
      setEditingSet(flashcardSet)
      setIsDialogOpen(true)
      return
    }

    try {
      setIsLoading(true)
      const fullSet = await fetchMyFlashcardSet(flashcardSet.id)
      setEditingSet(fullSet)
      setIsDialogOpen(true)
    } catch (error) {
      setErrorMessage(error.message || 'Không thể tải chi tiết bộ thẻ để sửa.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleSaveSet = async (payload) => {
    if (!payload.title) {
      setFormErrorMessage('Hãy nhập tên bộ thẻ.')
      return
    }

    if (payload.cards.length === 0) {
      setFormErrorMessage('Hãy nhập ít nhất một thẻ có đủ thuật ngữ và định nghĩa.')
      return
    }

    setIsSaving(true)
    setFormErrorMessage('')

    try {
      if (editingSet?.id) {
        const updatedSet = await updateMyFlashcardSet(editingSet.id, payload)
        setSets((currentSets) =>
          currentSets.map((s) => (s.id === updatedSet.id ? updatedSet : s)),
        )
        if (activeSet && activeSet.id === updatedSet.id) {
          setActiveSet(updatedSet)
        }
        setIsDialogOpen(false)
        setEditingSet(null)
      } else {
        const createdSet = await createMyFlashcardSet(payload)
        setSets((currentSets) => [createdSet, ...currentSets])
        setIsDialogOpen(false)
        navigate(`/flashcards/${createdSet.id}`)
      }
    } catch (error) {
      setFormErrorMessage(error.message)
    } finally {
      setIsSaving(false)
    }
  }

  const handleDeleteSet = async (flashcardSetId) => {
    setDeleteError('')
    setIsDeleting(true)

    try {
      await deleteMyFlashcardSet(flashcardSetId)
      setDeleteSetId(null)
      setSets((currentSets) => currentSets.filter((flashcardSet) => flashcardSet.id !== flashcardSetId))
    } catch (error) {
      setDeleteError(error.message)
    } finally {
      setIsDeleting(false)
    }
  }

  const handleRestartStudy = () => {
    if (isSavingReview) {
      return
    }

    if (reviewErrorMessage && !window.confirm('Kết quả ôn tập chưa được lưu thành công. Bỏ kết quả phiên này và ôn lại từ đầu?')) {
      return
    }

    setStudyState({
      currentIndex: 0,
      isFlipped: false,
      knownIds: [],
      unknownIds: [],
      reviewResults: [],
    })
    setReviewMessage('')
    setReviewErrorMessage('')
  }

  const handleSaveReview = async (results) => {
    if (isSavingReview || !setId || results.length === 0) {
      return
    }

    setIsSavingReview(true)
    setReviewMessage('')
    setReviewErrorMessage('')

    try {
      const review = await saveFlashcardReview(setId, results)
      setReviewMessage(
        `Đã lưu ${review?.reviewedCards || results.length} thẻ. ${review?.trackedVocabulary || 0} từ vựng được cập nhật.`,
      )
    } catch (error) {
      setReviewErrorMessage(error.message)
    } finally {
      setIsSavingReview(false)
    }
  }

  const handleOpenDialog = () => {
    setFormErrorMessage('')
    setEditingSet(null)
    setInitialImportOpen(false)
    setIsDialogOpen(true)
  }

  const handleOpenImportDialog = () => {
    setFormErrorMessage('')
    setEditingSet(null)
    setInitialImportOpen(true)
    setIsDialogOpen(true)
  }

  const isViewingLoadedSet = setId ? String(activeSet?.id) === String(setId) : true
  const isPageLoading = isLoading || Boolean(setId && activeSet && !isViewingLoadedSet)

  return (
    <div className="dashboard-page flashcards-page">
      <DashboardNav navItems={NAV_ITEMS} />

      {setId ? (
        <FlashcardSetDetailView
          key={setId}
          flashcardSet={activeSet}
          isLoading={isPageLoading}
          errorMessage={errorMessage || (!isPageLoading && !activeSet ? 'Không tìm thấy bộ thẻ này.' : '')}
          isSavingReview={isSavingReview}
          reviewMessage={reviewMessage}
          reviewErrorMessage={reviewErrorMessage}
          onSaveReview={handleSaveReview}
          onRestart={handleRestartStudy}
          onEdit={handleEditSet}
          studyState={studyState}
          setStudyState={setStudyState}
        />
      ) : (
        <FlashcardSetsView
          user={user}
          sets={sets}
          isLoading={isPageLoading}
          errorMessage={errorMessage}
          onOpenDialog={handleOpenDialog}
          onOpenImportDialog={handleOpenImportDialog}
          onEditSet={handleEditSet}
          onDeleteSet={(id) => { setDeleteError(''); setDeleteSetId(id) }}
        />
      )}

      {deleteSetId !== null ? (
        <Dialog className="flashcards-confirm-dialog" labelledBy="delete-set-title" onClose={() => { if (!isDeleting) setDeleteSetId(null) }}>
          <h2 id="delete-set-title">Xóa bộ thẻ này?</h2>
          <p>Bộ “{sets.find(set => set.id === deleteSetId)?.title}” và các thẻ bên trong sẽ bị xóa. Thao tác này không thể hoàn tác.</p>
          {deleteError ? <p role="alert" className="ui-status ui-status--error">{deleteError}</p> : null}
          <div className="flashcards-modal-actions">
            <button autoFocus type="button" className="ui-button ui-button--secondary" disabled={isDeleting} onClick={() => setDeleteSetId(null)}>Giữ lại</button>
            <button type="button" className="ui-button" disabled={isDeleting} onClick={() => handleDeleteSet(deleteSetId)}>{isDeleting ? 'Đang xóa…' : 'Xóa bộ thẻ'}</button>
          </div>
        </Dialog>
      ) : null}
      {isDialogOpen ? (
        <CreateFlashcardSetDialog
          editingSet={editingSet}
          isSaving={isSaving}
          errorMessage={formErrorMessage}
          onClose={() => {
            setIsDialogOpen(false)
            setInitialImportOpen(false)
            setEditingSet(null)
          }}
          onSubmit={handleSaveSet}
          initialImportOpen={initialImportOpen}
        />
      ) : null}
    </div>
  )
}
