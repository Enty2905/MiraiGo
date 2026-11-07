import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { fetchKanjiStrokes } from '../../services/dictionary.service'
import './kanji-stroke-animator.css'

function AnimatedSingleStroke({ d, onComplete }) {
  const pathRef = useRef(null)
  const [dashLength, setDashLength] = useState(null)
  const completedRef = useRef(false)

  useLayoutEffect(() => {
    completedRef.current = false
    if (pathRef.current) {
      const len = Math.ceil(pathRef.current.getTotalLength()) || 80
      setDashLength(len)
    }
  }, [d])

  // Calculate smooth, natural calligraphy speed based on stroke distance
  const durationMs = dashLength
    ? Math.max(480, Math.min(850, Math.round(dashLength * 7.5 + 320)))
    : 650

  useEffect(() => {
    // Safety timer fallback to guarantee the animation advances
    // even if browser tab loses focus or onAnimationEnd is missed
    const safetyTimeout = setTimeout(() => {
      if (!completedRef.current) {
        completedRef.current = true
        onComplete?.()
      }
    }, durationMs + 350)

    return () => {
      clearTimeout(safetyTimeout)
    }
  }, [d, durationMs, onComplete])

  const handleAnimationEnd = () => {
    if (!completedRef.current) {
      completedRef.current = true
      onComplete?.()
    }
  }

  return (
    <path
      ref={pathRef}
      d={d}
      className={`kanji-path-animating-red${dashLength ? ' is-gliding' : ''}`}
      style={
        dashLength
          ? {
              strokeDasharray: dashLength,
              strokeDashoffset: dashLength,
              animationDuration: `${durationMs}ms`,
            }
          : { opacity: 0 }
      }
      onAnimationEnd={handleAnimationEnd}
    />
  )
}

export function KanjiStrokeAnimator({ kanji, compact = false }) {
  const [data, setData] = useState(null)
  const [currentStroke, setCurrentStroke] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const isMountedRef = useRef(true)

  // Track mount state
  useEffect(() => {
    isMountedRef.current = true
    return () => {
      isMountedRef.current = false
    }
  }, [])

  // Fetch stroke data when kanji prop changes
  useEffect(() => {
    let isCurrent = true
    if (!kanji) {
      return
    }

    async function loadStrokes() {
      setIsLoading(true)
      const res = await fetchKanjiStrokes(kanji)
      if (isCurrent && isMountedRef.current) {
        setData(res)
        setCurrentStroke(res && res.paths && res.paths.length > 0 ? 1 : 0)
        setIsLoading(false)
      }
    }

    loadStrokes()

    return () => {
      isCurrent = false
    }
  }, [kanji])

  const totalStrokes = data?.paths?.length || 0

  // Called when the active red stroke finishes gliding across smoothly
  const handleStrokeComplete = () => {
    if (!isMountedRef.current || totalStrokes === 0) {
      return
    }

    // A small 180ms breath between strokes (like brush lifting)
    setTimeout(() => {
      if (!isMountedRef.current) {
        return
      }

      setCurrentStroke((prev) => {
        if (prev >= totalStrokes) {
          // Full character finished! Show full solid character for 1.5s, then loop back to stroke 1
          setTimeout(() => {
            if (isMountedRef.current) {
              setCurrentStroke(1)
            }
          }, 1500)
          return totalStrokes + 1 // Marks complete state
        }
        return prev + 1
      })
    }, 180)
  }

  const handleRestart = () => {
    if (totalStrokes > 0) {
      setCurrentStroke(1)
    }
  }

  // Only the active stroke currently being drawn has its stroke number shown
  const activeNumber =
    currentStroke > 0 && currentStroke <= totalStrokes
      ? data?.numbers?.find((item) => item.number === currentStroke)
      : null

  const isCompletedPause = currentStroke > totalStrokes

  if (compact) {
    return (
      <div className="kanji-stroke-box kanji-stroke-box--compact" title={`Cách viết chữ ${kanji}`}>
        <svg viewBox="0 0 109 109" className="kanji-stroke-svg">
          <line x1="0" y1="54.5" x2="109" y2="54.5" className="stroke-grid-line" />
          <line x1="54.5" y1="0" x2="54.5" y2="109" className="stroke-grid-line" />
          <line x1="0" y1="0" x2="109" y2="109" className="stroke-grid-line stroke-grid-line--diagonal" />
          <line x1="109" y1="0" x2="0" y2="109" className="stroke-grid-line stroke-grid-line--diagonal" />

          {(!data || totalStrokes === 0) && (
            <text x="54.5" y="76" textAnchor="middle" className="kanji-stroke-fallback">
              {kanji}
            </text>
          )}

          {data?.paths?.map((d, index) => (
            <path key={`ghost-${index}`} d={d} className="kanji-path-ghost" />
          ))}

          {data?.paths?.map((d, index) => (
            <path key={`solid-${index}`} d={d} className="kanji-path-solid" />
          ))}
        </svg>
      </div>
    )
  }

  return (
    <div
      className="kanji-animator-card"
      onClick={handleRestart}
      title="Bấm để phát lại hoạt ảnh nét viết từ đầu"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleRestart()
        }
      }}
    >
      <div className="kanji-animator-canvas-wrap">
        <svg viewBox="0 0 109 109" className="kanji-stroke-svg">
          {/* Calligraphy square background grid */}
          <rect x="1.5" y="1.5" width="106" height="106" rx="4" className="stroke-grid-border" />
          <line x1="1.5" y1="54.5" x2="107.5" y2="54.5" className="stroke-grid-line" />
          <line x1="54.5" y1="1.5" x2="54.5" y2="107.5" className="stroke-grid-line" />
          <line x1="1.5" y1="1.5" x2="107.5" y2="107.5" className="stroke-grid-line stroke-grid-line--diagonal" />
          <line x1="107.5" y1="1.5" x2="1.5" y2="107.5" className="stroke-grid-line stroke-grid-line--diagonal" />

          {/* Fallback if no stroke data */}
          {(!data || totalStrokes === 0) && (
            <text x="54.5" y="78" textAnchor="middle" className="kanji-stroke-fallback">
              {kanji}
            </text>
          )}

          {/* Layer 1: Faint ghost outline (Chữ hán mờ nhạt ở nền) */}
          {data?.paths?.map((d, index) => (
            <path key={`ghost-${index}`} d={d} className="kanji-path-ghost" />
          ))}

          {/* Layer 2: Completed solid strokes (Các nét đã vẽ xong, chuyển màu mực đậm) */}
          {data?.paths
            ?.slice(0, isCompletedPause ? totalStrokes : Math.max(0, currentStroke - 1))
            .map((d, index) => (
              <path key={`completed-${index}`} d={d} className="kanji-path-solid" />
            ))}

          {/* Layer 3: Currently gliding red stroke (Nét chữ lướt từ từ qua uyển chuyển) */}
          {!isCompletedPause &&
            data?.paths &&
            currentStroke > 0 &&
            currentStroke <= totalStrokes && (
              <AnimatedSingleStroke
                key={`stroke-${currentStroke}-${kanji}`}
                d={data.paths[currentStroke - 1]}
                onComplete={handleStrokeComplete}
              />
            )}

          {/* Layer 4: Number badge ONLY for the stroke actively being drawn */}
          {!isCompletedPause && activeNumber && (
            <g key={`num-${activeNumber.number}`} className="kanji-stroke-num-group">
              <circle cx={activeNumber.x + 2} cy={activeNumber.y - 3.2} r="4.2" className="kanji-stroke-num-circle" />
              <text
                x={activeNumber.x + 2}
                y={activeNumber.y - 3}
                textAnchor="middle"
                dominantBaseline="central"
                className="kanji-stroke-num-text"
              >
                {activeNumber.number}
              </text>
            </g>
          )}
        </svg>

        {isLoading && (
          <div className="kanji-animator-loading-overlay">
            <span>Đang tải nét viết...</span>
          </div>
        )}
      </div>

      {totalStrokes > 0 && (
        <div className="kanji-animator-footer">
          <span className="kanji-stroke-counter">
            {isCompletedPause ? (
              <span className="kanji-stroke-done">Hoàn thành ({totalStrokes}/{totalStrokes})</span>
            ) : (
              <>
                Nét <strong>{currentStroke}</strong> / {totalStrokes}
              </>
            )}
          </span>
          <span className="kanji-animator-hint">Tự động lặp lại</span>
        </div>
      )}
    </div>
  )
}
