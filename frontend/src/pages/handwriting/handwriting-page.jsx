import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { DashboardNav } from '../../components/dashboard/dashboard-nav'
import {
  fetchHandwritingHealth,
  predictHandwriting,
} from '../../services/handwriting.service'
import { NAV_ITEMS } from '../dashboard/dashboard-content'
import '../dashboard/dashboard-page.css'
import './handwriting-page.css'

const CANVAS_SIZE = 420

function BrushIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M16.8 3.7 20.3 7.2 9.5 18H6v-3.5L16.8 3.7Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M5 19c-1.2.5-2 .6-2 .6s.1-.8.6-2"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  )
}

function UploadIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 16V4m0 0L7.5 8.5M12 4l4.5 4.5M5 16v2.5A1.5 1.5 0 0 0 6.5 20h11a1.5 1.5 0 0 0 1.5-1.5V16"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function VolumeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M11 5L6 9H2v6h4l5 4V5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.54 8.46a5 5 0 0 1 0 7.07M19.07 4.93a10 10 0 0 1 0 14.14"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function SearchIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
      <path d="m20 20-3.5-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function ArrowRightIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function SparklesIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="m12 3 1.9 4.8L19 9.5l-4 3.5 1.2 5.5-4.2-2.8-4.2 2.8 1.2-5.5-4-3.5 5.1-1.7L12 3Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function playAudio(text) {
  if (!text || typeof window === 'undefined' || !('speechSynthesis' in window)) return
  const utterance = new window.SpeechSynthesisUtterance(text)
  utterance.lang = 'ja-JP'
  utterance.rate = 0.85
  window.speechSynthesis.cancel()
  window.speechSynthesis.speak(utterance)
}

function percent(value) {
  const confidence = Number(value)

  if (!Number.isFinite(confidence)) {
    return '0%'
  }

  return `${Math.round(Math.max(0, Math.min(1, confidence)) * 100)}%`
}

function hasRecognizedText(result) {
  return typeof result?.text === 'string' && result.text.trim().length > 0
}

function TextResult({ result, onSelectCandidate }) {
  if (!hasRecognizedText(result)) {
    return null
  }

  const confidenceNum = Math.round(Number(result.average_confidence || 0) * 100)
  const confidenceTag = confidenceNum >= 85 ? 'Độ chính xác cao' : confidenceNum >= 60 ? 'Tốt' : 'Tham khảo'

  return (
    <div className="handwriting-text-result">
      <div className="handwriting-text-header">
        <span className="hw-eyebrow-tag">
          <SparklesIcon className="hw-tag-icon" />
          <span>VĂN BẢN NHẬN DIỆN</span>
        </span>
        <button
          type="button"
          className="handwriting-audio-btn"
          onClick={() => playAudio(result.text)}
          title="Nghe phát âm chuẩn tiếng Nhật"
        >
          <VolumeIcon />
          <span>Phát âm</span>
        </button>
      </div>

      <div className="hw-hero-char-box">
        <p lang="ja" className="hw-hero-char">{result.text}</p>
      </div>

      <div className="hw-stats-grid">
        <div className="hw-stat-card">
          <span className="hw-stat-label">Số ký tự</span>
          <span className="hw-stat-value">{result.character_count || 1}</span>
        </div>
        <div className="hw-stat-card">
          <span className="hw-stat-label">Độ tin cậy</span>
          <div className="hw-stat-row">
            <span className="hw-stat-value">{percent(result.average_confidence)}</span>
            <span className="hw-confidence-badge">{confidenceTag}</span>
          </div>
        </div>
      </div>

      {result.candidates && result.candidates.length > 1 && (
        <div className="handwriting-candidates-wrap">
          <div className="handwriting-candidates-title">
            <span>Các ký tự gợi ý khác:</span>
            <small>(Nhấn để chọn chữ đúng)</small>
          </div>
          <div className="handwriting-candidates-list">
            {result.candidates.slice(0, 8).map((candidate, idx) => (
              <button
                key={`${candidate}-${idx}`}
                type="button"
                className={`handwriting-candidate-pill${candidate === result.text ? ' is-active' : ''}`}
                onClick={() => onSelectCandidate && onSelectCandidate(candidate)}
                title={`Chọn chữ ${candidate}`}
              >
                {candidate}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="handwriting-action-row">
        <Link
          to={`/dictionary?q=${encodeURIComponent(result.text)}`}
          className="handwriting-dict-link"
        >
          <span className="handwriting-dict-link-content">
            <SearchIcon />
            <span>Tra cứu chữ này trong Từ điển</span>
          </span>
          <ArrowRightIcon />
        </Link>
      </div>
    </div>
  )
}

function NoRecognitionResult() {
  return (
    <div className="handwriting-no-result">
      <BrushIcon />
      <strong>Chưa nhận diện được chữ viết.</strong>
      <p>Hãy viết rõ nét hơn hoặc dùng bút vẽ đều tay để nhận diện chuẩn xác.</p>
    </div>
  )
}

export function HandwritingPage() {
  const canvasRef = useRef(null)
  const fileInputRef = useRef(null)
  const isDrawingRef = useRef(false)
  const strokesRef = useRef([])
  const currentStrokeRef = useRef(null)
  const [health, setHealth] = useState(null)
  const [result, setResult] = useState(null)
  const [errorMessage, setErrorMessage] = useState('')
  const [isPredicting, setIsPredicting] = useState(false)
  const [hasInk, setHasInk] = useState(false)

  const isAiReady = useMemo(() => {
    return Boolean(health?.connected && (health.model_loaded || health.modelLoaded || health.ok))
  }, [health])

  const statusLabel = useMemo(() => {
    if (!health) {
      return 'Đang kiểm tra'
    }

    if (isAiReady) {
      return 'AI Sẵn sàng'
    }

    return 'AI chưa bật'
  }, [health, isAiReady])

  const canvasPoint = (event) => {
    const canvas = canvasRef.current
    const rect = canvas.getBoundingClientRect()
    const scaleX = canvas.width / rect.width
    const scaleY = canvas.height / rect.height

    return {
      x: (event.clientX - rect.left) * scaleX,
      y: (event.clientY - rect.top) * scaleY,
    }
  }

  const clearCanvas = useCallback(() => {
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d')

    if (!canvas || !context) {
      return
    }

    context.fillStyle = '#ffffff'
    context.fillRect(0, 0, canvas.width, canvas.height)
    context.lineCap = 'round'
    context.lineJoin = 'round'
    context.lineWidth = 18
    context.strokeStyle = '#0f172a'
    strokesRef.current = []
    currentStrokeRef.current = null
    setHasInk(false)
    setResult(null)
    setErrorMessage('')
  }, [])

  useEffect(() => {
    clearCanvas()
  }, [clearCanvas])

  useEffect(() => {
    let isMounted = true

    async function loadHealth() {
      try {
        const nextHealth = await fetchHandwritingHealth()

        if (isMounted) {
          setHealth(nextHealth)
        }
      } catch (error) {
        if (isMounted) {
          setHealth({
            connected: false,
            message: error.message,
          })
        }
      }
    }

    loadHealth()

    return () => {
      isMounted = false
    }
  }, [])

  const handlePointerDown = (event) => {
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d')

    if (!canvas || !context) {
      return
    }

    event.preventDefault()
    try {
      canvas.setPointerCapture(event.pointerId)
    } catch {
      // ignore
    }
    isDrawingRef.current = true
    const point = canvasPoint(event)
    context.beginPath()
    context.moveTo(point.x, point.y)
    context.lineTo(point.x, point.y)
    context.stroke()
    setHasInk(true)

    currentStrokeRef.current = {
      x: [Math.round(point.x)],
      y: [Math.round(point.y)],
      t: [Date.now()],
    }
  }

  const handlePointerMove = (event) => {
    if (!isDrawingRef.current) {
      return
    }

    const context = canvasRef.current?.getContext('2d')
    if (!context) {
      return
    }

    event.preventDefault()
    const point = canvasPoint(event)
    context.lineTo(point.x, point.y)
    context.stroke()
    setHasInk(true)

    if (currentStrokeRef.current) {
      currentStrokeRef.current.x.push(Math.round(point.x))
      currentStrokeRef.current.y.push(Math.round(point.y))
      currentStrokeRef.current.t.push(Date.now())
    }
  }

  const stopDrawing = (event) => {
    if (!isDrawingRef.current) {
      return
    }

    if (event && event.currentTarget?.hasPointerCapture?.(event.pointerId)) {
      try {
        event.currentTarget.releasePointerCapture(event.pointerId)
      } catch {
        // ignore
      }
    }

    isDrawingRef.current = false
    const context = canvasRef.current?.getContext('2d')
    context?.closePath()

    if (currentStrokeRef.current && currentStrokeRef.current.x.length > 0) {
      strokesRef.current.push(currentStrokeRef.current)
      currentStrokeRef.current = null
    }
  }

  const handleUpload = (event) => {
    const file = event.target.files?.[0]

    if (!file) {
      return
    }

    const reader = new FileReader()
    reader.onload = () => {
      const image = new Image()
      image.onload = () => {
        const canvas = canvasRef.current
        const context = canvas?.getContext('2d')

        if (!canvas || !context) {
          return
        }

        clearCanvas()
        const scale = Math.min(canvas.width / image.width, canvas.height / image.height)
        const width = image.width * scale
        const height = image.height * scale
        const x = (canvas.width - width) / 2
        const y = (canvas.height - height) / 2
        context.drawImage(image, x, y, width, height)
        setHasInk(true)
      }
      image.src = reader.result
    }
    reader.readAsDataURL(file)
    event.target.value = ''
  }

  const handlePredict = async () => {
    if (!hasInk || isPredicting) {
      return
    }

    setIsPredicting(true)
    setErrorMessage('')
    setResult(null)

    try {
      const prediction = await predictHandwriting({
        imageDataUrl: canvasRef.current.toDataURL('image/png'),
        strokes: strokesRef.current,
        width: canvasRef.current?.width || CANVAS_SIZE,
        height: canvasRef.current?.height || CANVAS_SIZE,
      })
      setResult(prediction)
    } catch (error) {
      setErrorMessage(error.message)
    } finally {
      setIsPredicting(false)
    }
  }

  const handleSelectCandidate = (candidate) => {
    if (!result) return
    setResult({
      ...result,
      text: candidate,
      character_count: candidate.length,
    })
  }

  return (
    <div className="handwriting-page">
      <DashboardNav navItems={NAV_ITEMS} />

      <main className="handwriting-main" id="main-content" tabIndex={-1}>
        <section className="handwriting-shell" aria-label="Luyện viết AI">
          <div className="handwriting-workspace">
            <header className="handwriting-head">
              <div>
                <span>Japanese Handwriting AI</span>
                <h1>Luyện viết AI</h1>
              </div>
              <div className={`handwriting-status${isAiReady ? ' is-online' : ''}`}>
                <i />
                <span>{statusLabel}</span>
              </div>
            </header>

            <div className="handwriting-board">
              <canvas
                ref={canvasRef}
                width={CANVAS_SIZE}
                height={CANVAS_SIZE}
                aria-label="Bảng viết tay"
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={stopDrawing}
                onPointerCancel={stopDrawing}
                onPointerLeave={stopDrawing}
              />
            </div>

            <div className="handwriting-toolbar" aria-label="Công cụ luyện viết">
              <button type="button" className="handwriting-tool-button" onClick={clearCanvas}>
                Xóa bảng
              </button>
              <button
                type="button"
                className="handwriting-tool-button"
                onClick={() => fileInputRef.current?.click()}
              >
                <UploadIcon />
                Tải ảnh
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/png,image/jpeg,image/webp"
                onChange={handleUpload}
                hidden
              />
              <button
                type="button"
                className="handwriting-primary-button"
                disabled={!hasInk || isPredicting}
                onClick={handlePredict}
              >
                <BrushIcon />
                {isPredicting ? 'Đang nhận diện' : 'Nhận diện nét vẽ'}
              </button>
            </div>
          </div>

          <aside className="handwriting-panel">
            <section className="handwriting-result" aria-live="polite" aria-atomic="true">
              <h2 className="handwriting-result-title">Kết quả phân tích</h2>
              {errorMessage ? <p role="alert" className="handwriting-error">{errorMessage}</p> : null}
              {!errorMessage && !result ? (
                <div className="handwriting-empty">
                  <BrushIcon />
                  <p>Hãy viết một chữ cái hoặc Hán tự lên bảng rồi nhấn <strong>Nhận diện nét vẽ</strong>.</p>
                </div>
              ) : null}
              {!errorMessage && result && !hasRecognizedText(result) ? (
                <NoRecognitionResult />
              ) : null}
              <TextResult result={result} onSelectCandidate={handleSelectCandidate} />
            </section>
          </aside>
        </section>
      </main>
    </div>
  )
}
