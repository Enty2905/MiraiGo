import { useState, useEffect, useRef, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { useAuthSession } from '../../hooks/use-auth-session'
import { ProtectedLink } from '../auth/protected-link'

const N5_HERO_KANJI = [
  {
    kanji: '学',
    kana: 'まなぶ',
    romaji: 'manabu · học',
    motto: '一日一歩',
    mottoVi: 'mỗi ngày một bước',
  },
  {
    kanji: '日',
    kana: 'ひ / にち',
    romaji: 'hi / nichi · ngày, mặt trời',
    motto: '日進月歩',
    mottoVi: 'ngày tiến một bước',
  },
  {
    kanji: '月',
    kana: 'つき / げつ',
    romaji: 'tsuki / getsu · mặt trăng, tháng',
    motto: '明月清風',
    mottoVi: 'trăng thanh gió mát',
  },
  {
    kanji: '火',
    kana: 'ひ / か',
    romaji: 'hi / ka · ngọn lửa, ấm áp',
    motto: '情熱の火',
    mottoVi: 'ngọn lửa nhiệt huyết',
  },
  {
    kanji: '水',
    kana: 'みず / すい',
    romaji: 'mizu / sui · nước, uyển chuyển',
    motto: '水滴石穿',
    mottoVi: 'nước chảy đá mòn',
  },
  {
    kanji: '木',
    kana: 'き / もく',
    romaji: 'ki / moku · cây cối, gỗ',
    motto: '大木深根',
    mottoVi: 'cây lớn bền rễ',
  },
  {
    kanji: '金',
    kana: 'かね / きん',
    romaji: 'kane / kin · vàng, tiền tệ',
    motto: '時は金なり',
    mottoVi: 'thời gian là vàng bạc',
  },
  {
    kanji: '土',
    kana: 'つち / ど',
    romaji: 'tsuchi / do · đất đai, cội nguồn',
    motto: '大地育む',
    mottoVi: 'đất lành nuôi dưỡng',
  },
  {
    kanji: '人',
    kana: 'ひと / じん',
    romaji: 'hito / jin · con người',
    motto: '十人十色',
    mottoVi: 'mỗi người một vẻ',
  },
  {
    kanji: '山',
    kana: 'やま / さん',
    romaji: 'yama / san · ngọn núi, vững chãi',
    motto: '塵積成山',
    mottoVi: 'tích tiểu thành đại',
  },
  {
    kanji: '川',
    kana: 'かわ / せん',
    romaji: 'kawa / sen · dòng sông, êm đềm',
    motto: '清き流れ',
    mottoVi: 'dòng chảy bền bỉ',
  },
  {
    kanji: '本',
    kana: 'ほん / もと',
    romaji: 'hon / moto · sách, cội nguồn',
    motto: '初心不忘',
    mottoVi: 'giữ trọn sơ tâm',
  },
  {
    kanji: '先',
    kana: 'さき / せん',
    romaji: 'saki / sen · đi trước, dẫn lối',
    motto: '一歩先へ',
    mottoVi: 'tiến bước tương lai',
  },
  {
    kanji: '生',
    kana: 'いきる / せい',
    romaji: 'ikiru / sei · sống, sinh sôi',
    motto: '一生懸命',
    mottoVi: 'nỗ lực hết mình',
  },
  {
    kanji: '天',
    kana: 'あめ / てん',
    romaji: 'ame / ten · trời cao, bao la',
    motto: '天下泰平',
    mottoVi: 'bầu trời rộng mở',
  },
  {
    kanji: '気',
    kana: 'き',
    romaji: 'ki · tinh thần, sinh khí',
    motto: '元気一番',
    mottoVi: 'tràn đầy năng lượng',
  },
  {
    kanji: '大',
    kana: 'おおきい / だい',
    romaji: 'ookii / dai · to lớn, rộng mở',
    motto: '大器晩成',
    mottoVi: 'rèn giũa chí lớn',
  },
  {
    kanji: '小',
    kana: 'ちいさい / しょう',
    romaji: 'chiisai / shou · nhỏ nhắn, tinh tế',
    motto: '小さな一歩',
    mottoVi: 'từng bước nhỏ nhoi',
  },
  {
    kanji: '中',
    kana: 'なか / ちゅう',
    romaji: 'naka / chuu · bên trong, trung tâm',
    motto: '心の中',
    mottoVi: 'khắc ghi trong tâm',
  },
  {
    kanji: '心',
    kana: 'こころ / しん',
    romaji: 'kokoro / shin · trái tim, tấm lòng',
    motto: '心を込めて',
    mottoVi: 'dành trọn trái tim',
  },
]

const FLIP_INTERVAL_MS = 3000
const ANIMATION_HALF_MS = 250

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

function playAudio(text) {
  if (!text || typeof window === 'undefined' || !('speechSynthesis' in window)) return
  const utterance = new window.SpeechSynthesisUtterance(text)
  utterance.lang = 'ja-JP'
  utterance.rate = 0.85
  window.speechSynthesis.cancel()
  window.speechSynthesis.speak(utterance)
}

export function DashboardHero() {
  const { isAuthenticated } = useAuthSession()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [flipState, setFlipState] = useState('idle') // 'idle' | 'flip-out' | 'flip-in'
  const isMountedRef = useRef(true)
  const timerRef = useRef(null)

  useEffect(() => {
    isMountedRef.current = true
    return () => {
      isMountedRef.current = false
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [])

  const flipTo = useCallback(
    (targetIndex) => {
      if (flipState !== 'idle' || targetIndex === currentIndex) return
      if (timerRef.current) clearTimeout(timerRef.current)

      setFlipState('flip-out')

      setTimeout(() => {
        if (!isMountedRef.current) return
        setCurrentIndex(targetIndex)
        setFlipState('flip-in')

        setTimeout(() => {
          if (!isMountedRef.current) return
          setFlipState('idle')
        }, ANIMATION_HALF_MS)
      }, ANIMATION_HALF_MS)
    },
    [flipState, currentIndex]
  )

  const flipNext = useCallback(() => {
    if (flipState !== 'idle') return
    const nextIndex = (currentIndex + 1) % N5_HERO_KANJI.length
    flipTo(nextIndex)
  }, [currentIndex, flipState, flipTo])

  const flipPrev = useCallback(() => {
    if (flipState !== 'idle') return
    const prevIndex = (currentIndex - 1 + N5_HERO_KANJI.length) % N5_HERO_KANJI.length
    flipTo(prevIndex)
  }, [currentIndex, flipState, flipTo])

  // Continuous auto-flip every 3 seconds, looping through all 20 Kanji
  useEffect(() => {
    if (flipState !== 'idle') return

    timerRef.current = setTimeout(() => {
      if (isMountedRef.current && !document.hidden) {
        flipNext()
      }
    }, FLIP_INTERVAL_MS)

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [currentIndex, flipState, flipNext])

  const handleCardClick = () => {
    flipNext()
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ' || event.key === 'ArrowRight') {
      event.preventDefault()
      flipNext()
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault()
      flipPrev()
    }
  }

  const current = N5_HERO_KANJI[currentIndex]

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

        <div className="hero-visual-wrapper">
          <div
            className={`hero-visual ${flipState !== 'idle' ? flipState : ''}`}
            role="button"
            tabIndex={0}
            onClick={handleCardClick}
            onKeyDown={handleKeyDown}
            title="Nhấn để lật chữ tiếp theo"
            aria-label={`Chữ Hán N5 ${current.kanji}: ${current.romaji}. Nhấn để lật chữ tiếp theo.`}
          >
            <span className="practice-label">
              <span className="practice-motto">{current.motto}</span>
              <span className="practice-label-sub">
                <span>{current.mottoVi}</span>
                <span className="practice-counter-badge">{String(currentIndex + 1).padStart(2, '0')}/20</span>
              </span>
            </span>

            <div className="practice-square">
              <span lang="ja">{current.kanji}</span>
            </div>

            <div className="practice-caption">
              <span lang="ja">{current.kana}</span>
              <span className="practice-meaning-wrap">
                <span>{current.romaji}</span>
                <button
                  type="button"
                  className="practice-audio-btn"
                  onClick={(e) => {
                    e.stopPropagation()
                    playAudio(current.kana.split('/')[0].trim())
                  }}
                  title="Nghe phát âm"
                  aria-label={`Nghe phát âm chữ ${current.kanji}`}
                >
                  <VolumeIcon />
                </button>
              </span>
            </div>
          </div>

          <div className="practice-dots-bar" role="tablist" aria-label="20 chữ Hán N5">
            {N5_HERO_KANJI.map((item, idx) => (
              <button
                key={item.kanji}
                type="button"
                className={`practice-dot${idx === currentIndex ? ' is-active' : ''}`}
                onClick={(e) => {
                  e.stopPropagation()
                  flipTo(idx)
                }}
                title={`Chữ ${item.kanji} - ${item.romaji} (${idx + 1}/20)`}
                aria-label={`Chuyển tới chữ ${item.kanji} (${idx + 1}/20)`}
                aria-selected={idx === currentIndex}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
