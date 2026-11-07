import { useState } from 'react'
import { CheckIcon, LanguagesIcon, VolumeIcon } from './hiragana-icons'
import { KanaStrokeAnimator } from '../kana/kana-stroke-animator'
import { KanaWritingTips } from '../kana/kana-writing-tips'
import { getKanaStrokeData } from '../../data/kana-strokes'

export function HiraganaCharacterDetail({
  selectedCharacter,
  masteredCharacters,
  onToggleMastered,
  onPlaySound,
}) {
  const [replayTrigger, setReplayTrigger] = useState(0)

  if (!selectedCharacter) {
    return (
      <aside className="hiragana-card hiragana-detail-card">
        <div className="hiragana-detail-empty">
          <LanguagesIcon className="hiragana-detail-empty-icon" />
          <p>Chọn một chữ để xem chi tiết</p>
        </div>
      </aside>
    )
  }

  const isMastered = masteredCharacters.has(selectedCharacter.character)
  const strokeData = getKanaStrokeData(selectedCharacter.character)
  const strokeCount = strokeData?.strokeCount || strokeData?.paths?.length || 0

  const handleReplay = () => {
    setReplayTrigger((prev) => prev + 1)
  }

  return (
    <aside className="hiragana-card hiragana-detail-card">
      <div className="hiragana-detail-body">
        <header className="hiragana-detail-header">
          <KanaStrokeAnimator
            character={selectedCharacter.character}
            replayTrigger={replayTrigger}
          />
          <div className="hiragana-detail-romaji">{selectedCharacter.romaji}</div>
        </header>

        <div className="hiragana-detail-actions">
          <button
            type="button"
            className="hiragana-action-btn hiragana-action-btn--play"
            onClick={onPlaySound}
          >
            <VolumeIcon className="hiragana-action-icon" />
            Nghe phát âm
          </button>

          <button
            type="button"
            className={`hiragana-action-btn hiragana-action-btn--master${
              isMastered ? ' is-active' : ''
            }`}
            aria-pressed={isMastered}
            onClick={() => onToggleMastered(selectedCharacter.character)}
          >
            <CheckIcon className="hiragana-action-icon" />
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
            kanaType="hiragana"
            onReplayAnimation={handleReplay}
          />
        </details>
      </div>
    </aside>
  )
}
