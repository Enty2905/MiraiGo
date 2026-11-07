import { getKanaStrokeData, getKanaWritingNote } from '../../data/kana-strokes'
import { KanaStrokeStepMini } from './kana-stroke-animator'

export function KanaWritingTips({
  character,
  romaji,
  kanaType = 'hiragana',
  onReplayAnimation,
}) {
  const strokeData = getKanaStrokeData(character)
  const writingNote = getKanaWritingNote(character)
  const totalStrokes = strokeData?.strokeCount || strokeData?.paths?.length || 0

  const stepNumbers = totalStrokes > 0
    ? Array.from({ length: totalStrokes }, (_, i) => i + 1)
    : []

  return (
    <section className="kana-writing-tips-box">
      <div className="kana-writing-tips-header">
        <h3>
          Thứ tự nét viết
          {totalStrokes > 0 ? (
            <span className="kana-stroke-summary-badge">
              {totalStrokes} nét
            </span>
          ) : null}
        </h3>

        {onReplayAnimation && totalStrokes > 0 ? (
          <button
            type="button"
            className="kana-replay-btn"
            onClick={onReplayAnimation}
            title="Phát lại hoạt ảnh nét viết từ đầu"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
              <path d="M3 3v5h5" />
            </svg>
            Phát lại
          </button>
        ) : null}
      </div>

      {stepNumbers.length > 0 ? (
        <div className="kana-steps-gallery" aria-label="Các bước viết từng nét">
          {stepNumbers.map((num) => (
            <KanaStrokeStepMini
              key={`step-${character}-${num}`}
              strokeData={strokeData}
              stepNumber={num}
            />
          ))}
        </div>
      ) : null}

      <div className="kana-writing-guide-note">
        <span className="kana-writing-rule-tag">
          {kanaType === 'katakana' ? 'Nét Katakana' : 'Nét Hiragana'} ({character} - {romaji})
        </span>
        <p style={{ margin: '4px 0 0' }}>{writingNote}</p>
        <p style={{ margin: '6px 0 0', fontSize: '12px', color: 'var(--text-muted, #64748b)' }}>
          Quy tắc chuẩn: Viết từ trên xuống dưới, từ trái sang phải. Nhấn vào khung chữ ở trên hoặc nút &ldquo;Phát lại&rdquo; để xem chuyển động nét.
        </p>
      </div>
    </section>
  )
}
