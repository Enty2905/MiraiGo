import { useState } from 'react'
import { CheckIcon, LanguagesIcon, VolumeIcon } from '../hiragana/hiragana-icons'
import { katakanaExampleWordsByCharacter } from '../../data/japanese-data'
import { KanaStrokeAnimator } from '../kana/kana-stroke-animator'
import { KanaWritingTips } from '../kana/kana-writing-tips'
import { getKanaStrokeData } from '../../data/kana-strokes'

export function KatakanaCharacterDetail({
  selectedCharacter,
  masteredCharacters,
  onToggleMastered,
  onPlaySound,
}) {
  const [replayTrigger, setReplayTrigger] = useState(0)

  if (!selectedCharacter) {
    return (
      <aside className="katakana-card katakana-detail-card">
        <div className="katakana-detail-empty">
          <LanguagesIcon className="katakana-detail-empty-icon" />
          <p>Chọn một chữ để xem chi tiết</p>
        </div>
      </aside>
    )
  }

  const isMastered = masteredCharacters.has(selectedCharacter.character)
  const exampleWords =
    katakanaExampleWordsByCharacter[selectedCharacter.character] || []
  const strokeData = getKanaStrokeData(selectedCharacter.character)
  const strokeCount = strokeData?.strokeCount || strokeData?.paths?.length || 0

  const handleReplay = () => {
    setReplayTrigger((prev) => prev + 1)
  }

  return (
    <aside className="katakana-card katakana-detail-card">
      <div className="katakana-detail-body">
        <header className="katakana-detail-header">
          <KanaStrokeAnimator
            character={selectedCharacter.character}
            replayTrigger={replayTrigger}
          />
          <div className="katakana-detail-romaji">{selectedCharacter.romaji}</div>
        </header>

        <div className="katakana-detail-actions">
          <button
            type="button"
            className="katakana-action-btn katakana-action-btn--play"
            onClick={onPlaySound}
          >
            <VolumeIcon className="katakana-action-icon" />
            Nghe phát âm
          </button>

          <button
            type="button"
            className={`katakana-action-btn katakana-action-btn--master${
              isMastered ? ' is-active' : ''
            }`}
            aria-pressed={isMastered}
            onClick={() => onToggleMastered(selectedCharacter.character)}
          >
            <CheckIcon className="katakana-action-icon" />
            {isMastered ? 'Đã thuộc' : 'Đánh dấu đã thuộc'}
          </button>
        </div>

        <details className="kana-extra" defaultOpen>
          <summary>
            Mẹo luyện viết
            {strokeCount > 0 ? (
              <span className="kana-stroke-summary-badge">{strokeCount} nét</span>
            ) : null}
          </summary>
          <KanaWritingTips
            character={selectedCharacter.character}
            romaji={selectedCharacter.romaji}
            kanaType="katakana"
            onReplayAnimation={handleReplay}
          />
        </details>

        <details className="kana-extra">
          <summary>Cách dùng & từ ví dụ</summary>
          <section className="katakana-detail-section">
            <h3>Cách dùng phổ biến</h3>
            <p>
              Katakana chủ yếu dùng cho từ mượn nước ngoài, từ tượng thanh và
              nhấn mạnh tương tự chữ nghiêng trong tiếng Anh.
            </p>
          </section>

          <section className="katakana-detail-section">
            <h3>Từ ví dụ</h3>
            <p>
              {exampleWords.length > 0
                ? exampleWords.map((item, index) => (
                    <span key={`${selectedCharacter.character}-${item.word}`}>
                      {item.word} ({item.romaji}) - {item.meaning}
                      {index < exampleWords.length - 1 ? <br /> : null}
                    </span>
                  ))
                : 'Chưa có từ ví dụ cho chữ này.'}
            </p>
          </section>
        </details>
      </div>
    </aside>
  )
}
