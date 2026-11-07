import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { getKanaStrokeData } from '../../data/kana-strokes'
import { fetchKanjiStrokes } from '../../services/dictionary.service'
import './kana-stroke-animator.css'

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

  // Natural calligraphy speed based on stroke length
  const durationMs = dashLength
    ? Math.max(460, Math.min(850, Math.round(dashLength * 7.2 + 300)))
    : 600

  useEffect(() => {
    const safetyTimeout = setTimeout(() => {
      if (!completedRef.current) {
        completedRef.current = true
        onComplete?.()
      }
    }, durationMs + 320)

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
      className={`kana-path-animating-red${dashLength ? ' is-gliding' : ''}`}
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

export function KanaStrokeAnimator({
  character,
  compact = false,
  replayTrigger = 0,
}) {
  const localData = getKanaStrokeData(character)
  const [apiData, setApiData] = useState(null)
  const strokeData = localData || apiData

  const [currentStroke, setCurrentStroke] = useState(1)
  const [prevCharacter, setPrevCharacter] = useState(character)
  const [prevReplayTrigger, setPrevReplayTrigger] = useState(replayTrigger)
  const isMountedRef = useRef(true)

  // Adjust state during render when props change (standard React pattern)
  if (character !== prevCharacter) {
    setPrevCharacter(character)
    setCurrentStroke(1)
    setApiData(null)
  }

  if (replayTrigger !== prevReplayTrigger) {
    setPrevReplayTrigger(replayTrigger)
    setCurrentStroke(1)
  }

  useEffect(() => {
    isMountedRef.current = true
    return () => {
      isMountedRef.current = false
    }
  }, [])

  // Only fetch via API if not found in pre-bundled kana map
  useEffect(() => {
    let isCurrent = true
    if (localData || !character) {
      return
    }

    async function loadStrokes() {
      const res = await fetchKanjiStrokes(character)
      if (isCurrent && isMountedRef.current) {
        setApiData(res)
        setCurrentStroke(1)
      }
    }

    loadStrokes()

    return () => {
      isCurrent = false
    }
  }, [character, localData])

  const totalStrokes = strokeData?.paths?.length || 0
  const isCompletedPause = currentStroke > totalStrokes

  const handleStrokeComplete = () => {
    if (!isMountedRef.current || totalStrokes === 0) {
      return
    }

    // 180ms breath between strokes (lifting brush)
    setTimeout(() => {
      if (!isMountedRef.current) {
        return
      }

      setCurrentStroke((prev) => {
        if (prev >= totalStrokes) {
          // Pause for 1.6s to showcase full completed character, then loop
          setTimeout(() => {
            if (isMountedRef.current) {
              setCurrentStroke(1)
            }
          }, 1600)
          return totalStrokes + 1
        }
        return prev + 1
      })
    }, 180)
  }

  const handleRestart = (e) => {
    e?.stopPropagation()
    if (totalStrokes > 0) {
      setCurrentStroke(1)
    }
  }

  const activeNumber =
    currentStroke > 0 && currentStroke <= totalStrokes
      ? strokeData?.numbers?.find((item) => item.number === currentStroke)
      : null

  if (compact) {
    return (
      <div className="kana-stroke-box--compact" title={`Cách viết chữ ${character}`}>
        <svg viewBox="0 0 109 109" className="kana-stroke-svg">
          <line x1="0" y1="54.5" x2="109" y2="54.5" className="stroke-grid-line" />
          <line x1="54.5" y1="0" x2="54.5" y2="109" className="stroke-grid-line" />
          <line x1="0" y1="0" x2="109" y2="109" className="stroke-grid-line stroke-grid-line--diagonal" />
          <line x1="109" y1="0" x2="0" y2="109" className="stroke-grid-line stroke-grid-line--diagonal" />

          {(!strokeData || totalStrokes === 0) && (
            <text x="54.5" y="76" textAnchor="middle" className="kana-stroke-fallback">
              {character}
            </text>
          )}

          {strokeData?.paths?.map((d, index) => (
            <path key={`compact-solid-${index}`} d={d} className="kana-path-solid" />
          ))}
        </svg>
      </div>
    )
  }

  return (
    <div
      className="kana-animator-card"
      onClick={handleRestart}
      title="Bấm để phát lại hoạt ảnh nét viết từ đầu"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          handleRestart()
        }
      }}
    >
      <div className="kana-animator-canvas-wrap">
        <svg viewBox="0 0 109 109" className="kana-stroke-svg">
          {/* Calligraphy square background grid */}
          <rect x="1.5" y="1.5" width="106" height="106" rx="6" className="stroke-grid-border" />
          <line x1="1.5" y1="54.5" x2="107.5" y2="54.5" className="stroke-grid-line" />
          <line x1="54.5" y1="1.5" x2="54.5" y2="107.5" className="stroke-grid-line" />
          <line x1="1.5" y1="1.5" x2="107.5" y2="107.5" className="stroke-grid-line stroke-grid-line--diagonal" />
          <line x1="107.5" y1="1.5" x2="1.5" y2="107.5" className="stroke-grid-line stroke-grid-line--diagonal" />

          {/* Fallback if no stroke data */}
          {(!strokeData || totalStrokes === 0) && (
            <text x="54.5" y="78" textAnchor="middle" className="kana-stroke-fallback">
              {character}
            </text>
          )}

          {/* Layer 1: Faint ghost outline */}
          {strokeData?.paths?.map((d, index) => (
            <path key={`ghost-${index}`} d={d} className="kana-path-ghost" />
          ))}

          {/* Layer 2: Completed solid ink strokes */}
          {strokeData?.paths
            ?.slice(0, isCompletedPause ? totalStrokes : Math.max(0, currentStroke - 1))
            .map((d, index) => (
              <path key={`solid-${index}`} d={d} className="kana-path-solid" />
            ))}

          {/* Layer 3: Actively gliding red calligraphy stroke */}
          {!isCompletedPause &&
            strokeData?.paths &&
            currentStroke > 0 &&
            currentStroke <= totalStrokes && (
              <AnimatedSingleStroke
                key={`stroke-${currentStroke}-${character}`}
                d={strokeData.paths[currentStroke - 1]}
                onComplete={handleStrokeComplete}
              />
            )}

          {/* Layer 4: Number badge on active stroke */}
          {!isCompletedPause && activeNumber && (
            <g key={`num-${activeNumber.number}`} className="kana-stroke-num-group">
              <circle cx={activeNumber.x + 2} cy={activeNumber.y - 3.2} r="4.2" className="kana-stroke-num-circle" />
              <text
                x={activeNumber.x + 2}
                y={activeNumber.y - 3}
                textAnchor="middle"
                dominantBaseline="central"
                className="kana-stroke-num-text"
              >
                {activeNumber.number}
              </text>
            </g>
          )}
        </svg>

        <button
          type="button"
          className="kana-animator-replay-overlay-btn"
          onClick={handleRestart}
          title="Phát lại"
          aria-label="Phát lại hoạt ảnh nét viết"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="kana-replay-icon">
            <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
            <path d="M3 3v5h5" />
          </svg>
        </button>
      </div>

      {totalStrokes > 0 && (
        <div className="kana-animator-footer">
          <span className="kana-stroke-counter">
            {isCompletedPause ? (
              <span className="kana-stroke-done">Hoàn thành ({totalStrokes}/{totalStrokes})</span>
            ) : (
              <>
                Nét <strong>{currentStroke}</strong> / {totalStrokes}
              </>
            )}
          </span>
          <span className="kana-animator-hint">Tự động lặp lại</span>
        </div>
      )}
    </div>
  )
}

/**
 * Mini static stroke preview showing the character drawn up to stepNumber
 */
export function KanaStrokeStepMini({ strokeData, stepNumber }) {
  if (!strokeData || !strokeData.paths) {
    return null
  }

  const targetNumber = strokeData.numbers?.find((n) => n.number === stepNumber)

  return (
    <div className="kana-step-card" title={`Bước ${stepNumber}: Viết nét ${stepNumber}`}>
      <div className="kana-step-card-canvas">
        <svg viewBox="0 0 109 109" className="kana-stroke-svg">
          <rect x="1.5" y="1.5" width="106" height="106" rx="4" className="stroke-grid-border" />
          <line x1="1.5" y1="54.5" x2="107.5" y2="54.5" className="stroke-grid-line" />
          <line x1="54.5" y1="1.5" x2="54.5" y2="107.5" className="stroke-grid-line" />

          {/* Faint ghost outline of all strokes */}
          {strokeData.paths.map((d, index) => (
            <path key={`step-ghost-${index}`} d={d} className="kana-path-ghost" />
          ))}

          {/* Strokes completed in earlier steps in solid dark ink */}
          {strokeData.paths.slice(0, stepNumber - 1).map((d, index) => (
            <path key={`step-prev-${index}`} d={d} className="kana-path-solid" />
          ))}

          {/* The new stroke of this step highlighted in cinnabar red */}
          {strokeData.paths[stepNumber - 1] && (
            <path
              d={strokeData.paths[stepNumber - 1]}
              className="kana-path-step-active"
            />
          )}

          {/* Number badge for this step's stroke */}
          {targetNumber && (
            <g className="kana-stroke-num-group">
              <circle cx={targetNumber.x + 2} cy={targetNumber.y - 3.2} r="5" className="kana-stroke-num-circle" />
              <text
                x={targetNumber.x + 2}
                y={targetNumber.y - 3}
                textAnchor="middle"
                dominantBaseline="central"
                className="kana-stroke-num-text"
              >
                {stepNumber}
              </text>
            </g>
          )}
        </svg>
      </div>
      <span className="kana-step-card-label">
        Nét {stepNumber}
      </span>
    </div>
  )
}
