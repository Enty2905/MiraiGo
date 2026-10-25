import { useState } from 'react'
import './avatar-modal.css'

function UploadIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" x2="12" y1="3" y2="15" />
    </svg>
  )
}

const PRESET_AVATARS = [
  { id: 'sakura', glyph: '桜', name: 'Sakura (Hoa anh đào)' },
  { id: 'fuji', glyph: '富士', name: 'Fuji (Phú Sĩ)' },
  { id: 'gaku', glyph: '学', name: 'Gaku (Học vấn)' },
  { id: 'kokoro', glyph: '心', name: 'Kokoro (Tâm trí)' },
  { id: 'dou', glyph: '道', name: 'Dou (Đạo / Con đường)' },
  { id: 'wa', glyph: '和', name: 'Wa (Hòa hợp)' },
  { id: 'yume', glyph: '夢', name: 'Yume (Ước mơ)' },
  { id: 'hikari', glyph: '光', name: 'Hikari (Ánh sáng)' },
]

export function AvatarModal({ currentAvatar, onClose, onSave }) {
  const [activeTab, setActiveTab] = useState('preset') // 'preset' | 'upload' | 'url'
  const [selectedAvatar, setSelectedAvatar] = useState(currentAvatar || '桜')
  const [customUrl, setCustomUrl] = useState('')
  const [isSaving, setIsSaving] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  const handleFileUpload = (e) => {
    setErrorMsg('')
    const file = e.target.files?.[0]
    if (!file) return

    if (!file.type.startsWith('image/')) {
      setErrorMsg('Vui lòng chọn file hình ảnh hợp lệ (PNG, JPG, WebP).')
      return
    }

    if (file.size > 2 * 1024 * 1024) {
      setErrorMsg('Dung lượng ảnh tối đa là 2MB.')
      return
    }

    const reader = new FileReader()
    reader.onload = (event) => {
      setSelectedAvatar(event.target?.result || '')
    }
    reader.readAsDataURL(file)
  }

  const handleApplyUrl = (e) => {
    e.preventDefault()
    if (!customUrl.trim()) return
    setSelectedAvatar(customUrl.trim())
  }

  const handleConfirm = async () => {
    setIsSaving(true)
    setErrorMsg('')
    try {
      await onSave(selectedAvatar)
      onClose()
    } catch (err) {
      setErrorMsg(err.message || 'Không thể lưu ảnh đại diện.')
    } finally {
      setIsSaving(false)
    }
  }

  const isImageAvatar = (val) => typeof val === 'string' && (val.startsWith('data:image') || val.startsWith('http'))

  return (
    <div className="avatar-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="avatar-modal-title">
      <div className="avatar-modal-card" onClick={(e) => e.stopPropagation()}>
        <header className="avatar-modal-header">
          <div>
            <h2 id="avatar-modal-title" className="avatar-modal-title">Thay đổi ảnh đại diện</h2>
            <p className="avatar-modal-subtitle">Chọn biểu tượng Kanji thư pháp hoặc tải ảnh từ máy tính của bạn.</p>
          </div>
          <button type="button" className="avatar-modal-close" onClick={onClose} aria-label="Đóng cửa sổ">
            ✕
          </button>
        </header>

        {/* Live Preview */}
        <div className="avatar-preview-container">
          <div className="avatar-preview-circle">
            {isImageAvatar(selectedAvatar) ? (
              <img src={selectedAvatar} alt="Xem trước ảnh đại diện" className="avatar-preview-img" />
            ) : (
              <span className="avatar-preview-glyph" lang="ja">{selectedAvatar}</span>
            )}
          </div>
          <span className="avatar-preview-hint">Ảnh đại diện đang được chọn</span>
        </div>

        {/* Tab selection */}
        <div className="avatar-modal-tabs" role="tablist">
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'preset'}
            className={`avatar-modal-tab ${activeTab === 'preset' ? 'active' : ''}`}
            onClick={() => setActiveTab('preset')}
          >
            Chữ Hán Nhật Bản
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'upload'}
            className={`avatar-modal-tab ${activeTab === 'upload' ? 'active' : ''}`}
            onClick={() => setActiveTab('upload')}
          >
            Tải ảnh từ máy
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'url'}
            className={`avatar-modal-tab ${activeTab === 'url' ? 'active' : ''}`}
            onClick={() => setActiveTab('url')}
          >
            Link ảnh online
          </button>
        </div>

        {errorMsg ? (
          <div className="avatar-modal-error" role="alert">
            {errorMsg}
          </div>
        ) : null}

        {/* Tab Content 1: Preset */}
        {activeTab === 'preset' ? (
          <div className="avatar-presets-grid">
            {PRESET_AVATARS.map((preset) => {
              const isSelected = selectedAvatar === preset.glyph
              return (
                <button
                  key={preset.id}
                  type="button"
                  className={`avatar-preset-btn ${isSelected ? 'selected' : ''}`}
                  onClick={() => setSelectedAvatar(preset.glyph)}
                  title={preset.name}
                  aria-label={preset.name}
                >
                  <span className="avatar-preset-icon" lang="ja">
                    {preset.glyph}
                  </span>
                  <span className="avatar-preset-name">{preset.name.split(' ')[0]}</span>
                </button>
              )
            })}
          </div>
        ) : null}

        {/* Tab Content 2: Upload */}
        {activeTab === 'upload' ? (
          <div className="avatar-upload-pane">
            <label htmlFor="avatar-file-input" className="avatar-upload-dropzone">
              <span className="avatar-upload-icon">
                <UploadIcon />
              </span>
              <strong>Nhấn để chọn ảnh từ máy tính</strong>
              <small>Hỗ trợ JPG, PNG, WebP (Tối đa 2MB)</small>
            </label>
            <input
              id="avatar-file-input"
              type="file"
              accept="image/*"
              className="avatar-hidden-file-input"
              onChange={handleFileUpload}
            />
          </div>
        ) : null}

        {/* Tab Content 3: URL */}
        {activeTab === 'url' ? (
          <form onSubmit={handleApplyUrl} className="avatar-url-pane">
            <label htmlFor="avatar-url-input" className="avatar-url-label">
              Nhập đường dẫn hình ảnh (URL):
            </label>
            <div className="avatar-url-row">
              <input
                id="avatar-url-input"
                type="url"
                className="avatar-url-input"
                placeholder="https://example.com/my-photo.jpg"
                value={customUrl}
                onChange={(e) => setCustomUrl(e.target.value)}
              />
              <button type="submit" className="avatar-apply-btn">
                Áp dụng
              </button>
            </div>
          </form>
        ) : null}

        <footer className="avatar-modal-footer">
          <button type="button" className="avatar-btn-cancel" onClick={onClose} disabled={isSaving}>
            Hủy
          </button>
          <button
            type="button"
            className="avatar-btn-save"
            onClick={handleConfirm}
            disabled={isSaving}
          >
            {isSaving ? 'Đang lưu...' : 'Lưu ảnh đại diện'}
          </button>
        </footer>
      </div>
    </div>
  )
}
