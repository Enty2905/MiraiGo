import { useEffect, useMemo, useState } from 'react'
import { Navigate, Link, useSearchParams } from 'react-router-dom'
import { DashboardNav } from '../../components/dashboard/dashboard-nav'
import { QuickSaveModal, BookmarkIcon } from '../../components/flashcards/quick-save-modal'
import { useDictionarySearch } from '../../hooks/use-dictionary-search'
import {
  fetchDictionaryHistory,
  fetchKanjiMemoryHints,
} from '../../services/dictionary.service'
import { NAV_ITEMS } from '../dashboard/dashboard-content'
import '../dashboard/dashboard-page.css'
import './dictionary-page.css'

const SEARCH_TABS = [
  { id: 'vocabulary', label: 'Từ vựng' },
  { id: 'kanji', label: 'Hán tự' },
]

const HOT_KEYWORDS = ['以上', '役割', '値段', '間', '検討', '活躍', '技術', '影響', '頭', '人', 'さ']
const JLPT_LEVELS = ['N1', 'N2', 'N3', 'N4', 'N5']
const GUEST_HISTORY_KEY = 'dictionary-search-history'

function SearchIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="m21 21-4.35-4.35M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  )
}

function VolumeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4 9v6h4l5 4V5L8 9H4Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M16 9.5a4 4 0 0 1 0 5M18.5 7a7.5 7.5 0 0 1 0 10"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  )
}

function SparkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 3 9.7 9.7 3 12l6.7 2.3L12 21l2.3-6.7L21 12l-6.7-2.3L12 3Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function LightbulbIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M9 18h6m-4 3h2M12 2a7 7 0 0 0-7 7c0 2.38 1.19 4.47 3 5.74V17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.26c1.81-1.27 3-3.36 3-5.74a7 7 0 0 0-7-7Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function BookOpenIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2V3Zm20 0h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7V3Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ChatIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function TurtleIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 7c3.3 0 6 2.7 6 6 0 1-.2 2-.7 2.8l2.2 1.4a1 1 0 0 1-.5 1.8H5a1 1 0 0 1-.5-1.8l2.2-1.4c-.5-.8-.7-1.8-.7-2.8 0-3.3 2.7-6 6-6Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="4" r="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M9 11l3 3 3-3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function formatWordType(type) {
  if (!type) return 'Từ vựng'
  const lower = String(type).toLowerCase().trim()
  const map = {
    noun: 'Danh từ',
    verb: 'Động từ',
    adjective: 'Tính từ',
    'na-adjective': 'Tính từ đuôi な',
    'i-adjective': 'Tính từ đuôi い',
    adverb: 'Phó từ',
    expression: 'Thành ngữ / Quán ngữ',
    greeting: 'Lời chào xã giao',
    particle: 'Trợ từ',
    pronoun: 'Đại từ',
    counter: 'Lượng từ',
  }
  return map[lower] || type
}

function playText(text, rate = 0.9) {
  if (!text || typeof window === 'undefined' || !('speechSynthesis' in window)) {
    return
  }

  const utterance = new window.SpeechSynthesisUtterance(text)
  utterance.lang = 'ja-JP'
  utterance.rate = rate
  window.speechSynthesis.cancel()
  window.speechSynthesis.speak(utterance)
}

function splitReading(reading) {
  if (!reading) {
    return []
  }

  return reading
    .split(/[,\s;、]+/)
    .map((item) => item.trim())
    .filter(Boolean)
}

function getDisplayMeaning(item) {
  return item?.meaningVi || item?.meaningEn || 'Chưa có nghĩa.'
}

function getFlashcardBackMeaning(item) {
  const raw = item?.meaningVi || item?.meaningEn || 'Chưa có nghĩa.'
  return raw.replace(/\s*[（(][^）)]*[）)]\s*/g, '').trim() || raw
}

function readGuestHistory() {
  if (typeof window === 'undefined') {
    return []
  }

  try {
    const parsedHistory = JSON.parse(window.localStorage.getItem(GUEST_HISTORY_KEY) || '[]')

    if (!Array.isArray(parsedHistory)) {
      return []
    }

    return parsedHistory.filter((item) => typeof item?.query === 'string' && item.query.trim())
  } catch {
    return []
  }
}

function writeGuestHistory(query, type) {
  if (typeof window === 'undefined' || !query) {
    return []
  }

  const nextEntry = {
    query,
    type,
  }
  const nextHistory = [
    nextEntry,
    ...readGuestHistory().filter((item) => item.query !== query || item.type !== type),
  ].slice(0, 12)

  window.localStorage.setItem(GUEST_HISTORY_KEY, JSON.stringify(nextHistory))
  return nextHistory
}

function normalizeHistoryEntries(historyEntries, fallbackType) {
  return historyEntries
    .map((item) => {
      if (typeof item === 'string') {
        return {
          query: item,
          type: fallbackType,
        }
      }

      return {
        query: item?.query || item?.queryText || '',
        type: item?.type || item?.searchType || fallbackType,
      }
    })
    .filter((item) => item.query)
}

function DictionarySearchBox({
  activeType,
  initialValue,
  onSubmit,
  onTabChange,
}) {
  const [inputValue, setInputValue] = useState(initialValue)
  useEffect(() => {
    // Back can interrupt a pending router transition before the keyed field remounts.
    const restoreQuery = () => setInputValue(new URLSearchParams(window.location.search).get('q') || '')
    window.addEventListener('popstate', restoreQuery)
    return () => window.removeEventListener('popstate', restoreQuery)
  }, [])
  return (
    <section className="dictionary-search-panel">
      <form className="dictionary-search-row" onSubmit={onSubmit} autoComplete="off">
        <SearchIcon className="dictionary-search-icon" />
        <input
          name="query"
          autoComplete="off"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          className="dictionary-search-input"
          placeholder="日本, nihon, Nhật Bản"
          aria-label="Nhập từ khóa tra cứu"
        />

        <button type="submit" className="ui-button dictionary-submit">Tra cứu</button>
      </form>

      <div className="dictionary-tabs" role="group" aria-label="Loại tra cứu">
        {SEARCH_TABS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={`dictionary-tab${activeType === tab.id ? ' is-active' : ''}`}
            aria-pressed={activeType === tab.id}
            onClick={() => onTabChange(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </section>
  )
}

function EmptyDictionaryState({
  historyEntries,
  memoryHints,
  onKeywordSelect,
}) {
  return (
    <div className="dictionary-content-grid">
      <section className="dictionary-panel dictionary-tips-panel">
        <div className="dictionary-panel-head">
          <SparkIcon className="dictionary-section-icon" />
          <h2>Mẹo</h2>
        </div>

        <ul className="dictionary-tip-list">
          <li>Đăng nhập tài khoản để đồng bộ dữ liệu và sử dụng trên nhiều thiết bị.</li>
          <li>Tra bằng chữ Nhật, cách đọc hoặc nghĩa tiếng Việt. Bắt đầu với 日本.</li>
          <li>Chọn Hán tự để xem cách đọc, bộ thủ và gợi ý ghi nhớ.</li>
        </ul>

        <KeywordSection
          title="Lịch sử"
          keywords={historyEntries}
          emptyText="Chưa có lịch sử tra cứu."
          onKeywordSelect={onKeywordSelect}
        />
        <KeywordSection title="Từ vựng gợi ý" keywords={HOT_KEYWORDS} onKeywordSelect={onKeywordSelect} />

        <section className="dictionary-keyword-section">
          <h3>JLPT</h3>
          <div className="dictionary-jlpt-row">
            {JLPT_LEVELS.map((level) => (
              <span key={level} className={`dictionary-jlpt-chip dictionary-jlpt-chip--${level.toLowerCase()}`}>
                {level}
              </span>
            ))}
          </div>
        </section>
      </section>

      <aside className="dictionary-side-column">
        <section className="dictionary-panel dictionary-memory-panel">
          <h2>Gợi ý cách nhớ Kanji</h2>
          {memoryHints.length > 0 ? (
            memoryHints.map((item) => (
              <article key={item.id || item.kanji} className="dictionary-memory-item">
                <div>
                  <Link to={`/dictionary?q=${encodeURIComponent(item.kanji)}&type=kanji`}>{item.kanji}</Link>
                  <strong>{item.hanViet || item.onyomi || item.kunyomi}</strong>
                </div>
                <p>{getDisplayMeaning(item)}</p>
                <small>{item.mnemonic}</small>
              </article>
            ))
          ) : (
            <p className="dictionary-empty-note">Chưa có gợi ý cách nhớ từ cơ sở dữ liệu.</p>
          )}
        </section>
      </aside>
    </div>
  )
}

function KeywordSection({
  title,
  keywords,
  emptyText = '',
  onKeywordSelect,
}) {
  const normalizedKeywords = normalizeHistoryEntries(keywords, 'vocabulary')

  return (
    <section className="dictionary-keyword-section">
      <div className="dictionary-keyword-head">
        <h3>{title}</h3>
      </div>

      <div className="dictionary-chip-list">
        {normalizedKeywords.map((keyword) => (
          <button
            key={`${title}-${keyword.type}-${keyword.query}`}
            type="button"
            className="dictionary-chip"
            onClick={() => onKeywordSelect(keyword)}
          >
            {keyword.query}
          </button>
        ))}
        {normalizedKeywords.length === 0 && emptyText ? (
          <p className="dictionary-empty-note">{emptyText}</p>
        ) : null}
      </div>
    </section>
  )
}

function VocabularyResult({ vocabulary, relatedKanji, query, onQuickSaveWord }) {
  const primaryWord = vocabulary[0]
  const wordExamples = primaryWord?.examples || []

  if (!primaryWord) {
    return <NoResult query={query} label="từ vựng" />
  }

  // Compute combined Hán-Việt for the vocabulary word
  const computedHanViet =
    primaryWord.hanViet ||
    (relatedKanji && relatedKanji.length > 0
      ? relatedKanji
          .filter((k) => primaryWord.word.includes(k.kanji) && k.hanViet)
          .map((k) => k.hanViet.split(/[,/]/)[0].trim())
          .join(' ')
      : '')

  return (
    <div className="dictionary-result-grid">
      <section className="dictionary-panel dictionary-entry-panel">
        <header className="dictionary-entry-header">
          <div className="dictionary-header-top-row">
            <h2 lang="ja" className="dictionary-word-title">{primaryWord.word}</h2>
            <div className="dictionary-badges-wrap">
              <span className="dictionary-badge dictionary-badge--type">
                {formatWordType(primaryWord.wordType)}
              </span>
              {primaryWord.jlptLevel && (
                <span className={`dictionary-badge dictionary-badge--jlpt jlpt-${primaryWord.jlptLevel.toLowerCase()}`}>
                  {primaryWord.jlptLevel}
                </span>
              )}
              {Array.isArray(primaryWord.tags) &&
                primaryWord.tags.map((tag) => (
                  <span key={tag} className="dictionary-badge dictionary-badge--tag">
                    {tag}
                  </span>
                ))}
            </div>
          </div>

          <div className="dictionary-pronounce-row">
            {primaryWord.kana && (
              <span className="dictionary-kana-bracket">「{primaryWord.kana}」</span>
            )}
            {primaryWord.romaji && (
              <span className="dictionary-romaji-bracket">[{primaryWord.romaji}]</span>
            )}
            {computedHanViet && (
              <span className="dictionary-hanviet-tag">
                Hán-Việt: <strong>{computedHanViet}</strong>
              </span>
            )}
          </div>

          <div className="dictionary-audio-actions">
            <button
              type="button"
              className="dictionary-audio-pill"
              onClick={() => playText(primaryWord.word, 0.9)}
              title="Nghe phát âm chuẩn"
            >
              <VolumeIcon />
              <span>Phát âm chuẩn</span>
            </button>
            <button
              type="button"
              className="dictionary-audio-pill dictionary-audio-pill--slow"
              onClick={() => playText(primaryWord.word, 0.6)}
              title="Nghe phát âm chậm"
            >
              <TurtleIcon />
              <span>Đọc chậm</span>
            </button>
          </div>
        </header>

        {onQuickSaveWord && (
          <div className="dictionary-action-row">
            <button
              type="button"
              className="dictionary-flashcard-action-btn"
              onClick={() => onQuickSaveWord(primaryWord)}
              title="Lưu nhanh vào Flashcard"
            >
              <BookmarkIcon className="dictionary-action-icon" />
              <span>Lưu nhanh vào Flashcard</span>
            </button>
          </div>
        )}

        {/* 1. Định nghĩa chi tiết (Mazii-style Detailed Definitions) */}
        <section className="dictionary-meaning-section">
          <div className="dictionary-section-heading">
            <BookOpenIcon className="dictionary-section-heading-icon" />
            <h3>Định nghĩa từ vựng</h3>
          </div>

          <div className="dictionary-definition-block">
            <span className="dict-def-index">①</span>
            <div className="dict-def-body">
              <p className="dict-def-text">{getDisplayMeaning(primaryWord)}</p>
              {primaryWord.meaningEn && (
                <p className="dict-def-en">
                  <em>Tiếng Anh:</em> {primaryWord.meaningEn}
                </p>
              )}
            </div>
          </div>
        </section>

        {/* 2. Điểm lưu ý văn hóa & Ngữ cảnh sử dụng (Mazii Cultural & Usage Notes Callout) */}
        {primaryWord.notes && (
          <section className="dictionary-culture-callout">
            <div className="dictionary-culture-callout-head">
              <LightbulbIcon className="dictionary-culture-callout-icon" />
              <h4>Điểm lưu ý văn hóa & Cách dùng</h4>
            </div>
            <div className="dictionary-culture-callout-body">
              {primaryWord.notes.split('\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </section>
        )}

        {/* 3. Câu ví dụ thực tế (Mazii Examples with Furigana & Audio) */}
        {wordExamples.length > 0 && (
          <section className="dictionary-examples-section">
            <div className="dictionary-section-heading">
              <ChatIcon className="dictionary-section-heading-icon" />
              <h3>
                Ví dụ thực tế <span>({wordExamples.length} câu)</span>
              </h3>
            </div>

            <div className="dictionary-examples-list">
              {wordExamples.map((example, idx) => (
                <div key={example.id || idx} className="dictionary-example-card">
                  <div className="dict-example-top">
                    <span className="dict-example-badge">Ví dụ {idx + 1}</span>
                    <button
                      type="button"
                      className="dict-example-speak-btn"
                      onClick={() => playText(example.exampleJp, 0.85)}
                      title="Nghe câu tiếng Nhật"
                    >
                      <VolumeIcon />
                      <span>Nghe câu</span>
                    </button>
                  </div>
                  <div className="dict-example-jp">{example.exampleJp}</div>
                  {example.exampleKana && (
                    <div className="dict-example-kana">{example.exampleKana}</div>
                  )}
                  <div className="dict-example-vi">{example.exampleVi}</div>
                </div>
              ))}
            </div>
          </section>
        )}

        {primaryWord.imageUrl && (
          <section className="dictionary-image-section">
            <h3>Ảnh minh họa</h3>
            <img src={primaryWord.imageUrl} alt={`Minh họa cho ${primaryWord.word}`} />
          </section>
        )}
      </section>

      <aside className="dictionary-side-column">
        {relatedKanji.length > 0 && (
          <section className="dictionary-panel dictionary-kanji-side-panel">
            <div className="dictionary-side-head">
              <h2>Các chữ Hán của {primaryWord.word}</h2>
              <span className="dictionary-side-badge">{relatedKanji.length} chữ</span>
            </div>
            {relatedKanji.map((kanji) => (
              <KanjiMiniCard key={kanji.id} kanji={kanji} />
            ))}
          </section>
        )}

        <section className="dictionary-panel dictionary-lookup-panel">
          <div className="dictionary-side-head">
            <h2>Các từ vựng liên quan</h2>
          </div>
          {vocabulary.slice(0, 6).map((item) => (
            <article key={item.id} className="dictionary-lookup-item">
              <div className="dictionary-lookup-item-top">
                <Link to={`/dictionary?q=${encodeURIComponent(item.word)}&type=vocabulary`}>{item.word}</Link>
                {onQuickSaveWord && (
                  <button
                    type="button"
                    className="dictionary-lookup-save-btn"
                    onClick={() => onQuickSaveWord(item)}
                    title="Lưu vào Flashcard"
                    aria-label={`Lưu ${item.word} vào Flashcard`}
                  >
                    <BookmarkIcon className="dictionary-lookup-save-icon" />
                  </button>
                )}
              </div>
              <p>{getDisplayMeaning(item)}</p>
              <small>{item.kana || item.romaji}</small>
            </article>
          ))}
        </section>
      </aside>
    </div>
  )
}

function KanjiResult({ kanji, query }) {
  const primaryKanji = kanji[0]

  if (!primaryKanji) {
    return <NoResult query={query} label="kanji" />
  }

  return (
    <div className="dictionary-result-grid">
      <section className="dictionary-panel dictionary-entry-panel">


        <header className="dictionary-kanji-header">
          <div>
            <h2 lang="ja">{primaryKanji.kanji}</h2>
            <p>「{primaryKanji.hanViet || primaryKanji.meaningVi}」</p>
          </div>
          <KanjiStrokeBox kanji={primaryKanji} />
        </header>

        <section className="dictionary-kanji-info">
          <h2>Phát âm</h2>
          <ReadingGroup label="Onyomi" readings={splitReading(primaryKanji.onyomi)} />
          <ReadingGroup label="Kunyomi" readings={splitReading(primaryKanji.kunyomi)} />

          <div className="dictionary-stat-row">
            <StatBlock label="Số nét" value={primaryKanji.strokeCount || '-'} />
            <StatBlock label="JLPT" value={primaryKanji.jlptLevel || '-'} />
            <StatBlock label="Bộ" value={primaryKanji.radical || '-'} />
          </div>
        </section>

        <section className="dictionary-kanji-breakdown">
          <h2>Bộ</h2>
          <p>{primaryKanji.radical || 'Chưa có dữ liệu bộ thủ.'}</p>
        </section>

        <section className="dictionary-kanji-meaning">
          <h2>Nghĩa</h2>
          <p>{getDisplayMeaning(primaryKanji)}</p>
        </section>

        {primaryKanji.examples.length > 0 ? (
          <section className="dictionary-kanji-examples">
            <h2>Ví dụ</h2>
            {primaryKanji.examples.slice(0, 4).map((example) => (
              <article key={example.id}>
                <strong>{example.exampleJp}</strong>
                {example.exampleKana ? <span>{example.exampleKana}</span> : null}
                <p>{example.exampleVi}</p>
              </article>
            ))}
          </section>
        ) : null}

        <section className="dictionary-kanji-mnemonic">
          <h2>Cách nhớ</h2>
          <p>{primaryKanji.mnemonic || 'Chưa có mẹo ghi nhớ cho kanji này.'}</p>
        </section>
      </section>

      <aside className="dictionary-side-column">
        <section className="dictionary-panel dictionary-lookup-panel">
          <div className="dictionary-side-head">
            <h2>Kết quả tra cứu kanji</h2>
            <span className="dictionary-side-badge">{kanji.length} chữ</span>
          </div>
          {kanji.slice(0, 8).map((item) => (
            <article
              key={item.id}
              className={`dictionary-kanji-result-item${item.id === primaryKanji.id ? ' is-active' : ''}`}
            >
              <Link to={`/dictionary?q=${encodeURIComponent(item.kanji)}&type=kanji`}>{item.kanji}</Link>
              <div>
                <strong>{item.hanViet || item.meaningVi}</strong>
                <p>{getDisplayMeaning(item)}</p>
              </div>
            </article>
          ))}
        </section>
      </aside>
    </div>
  )
}

function ReadingGroup({ label, readings }) {
  if (readings.length === 0) {
    return null
  }

  return (
    <div className="dictionary-reading-group">
      <span>{label}</span>
      <div>
        {readings.map((reading) => (
          <strong key={`${label}-${reading}`}>{reading}</strong>
        ))}
      </div>
    </div>
  )
}

function StatBlock({ label, value }) {
  return (
    <div className="dictionary-stat-block">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  )
}

function KanjiMiniCard({ kanji }) {
  return (
    <article className="dictionary-kanji-mini-card">
      <div className="dictionary-kanji-mini-head">
        <span>{kanji.kanji}</span>
        <strong>「{kanji.onyomi || kanji.kunyomi || kanji.hanViet}」</strong>
      </div>
      <p>{kanji.hanViet || getDisplayMeaning(kanji)}</p>
      <KanjiStrokeBox kanji={kanji} compact />
      <small>Hán tự: {kanji.kanji} - {kanji.hanViet || getDisplayMeaning(kanji)}</small>
    </article>
  )
}

function KanjiStrokeBox({ kanji, compact = false }) {
  return (
    <div className={`dictionary-stroke-box${compact ? ' dictionary-stroke-box--compact' : ''}`}>
      {kanji.writingSvgUrl ? (
        <img src={kanji.writingSvgUrl} alt={`Thứ tự nét của ${kanji.kanji}`} />
      ) : (
        <span>{kanji.kanji}</span>
      )}
    </div>
  )
}

function NoResult({ query, label }) {
  return (
    <section className="dictionary-panel dictionary-no-result">
      <h2>Không tìm thấy {label}</h2>
      <p>Không có kết quả phù hợp với “{query}”. Hãy thử cách đọc kana, romaji hoặc nghĩa tiếng Việt.</p>
    </section>
  )
}

export function DictionaryPage({ redirectToDictionary = false }) {
  const [searchParams, setSearchParams] = useSearchParams()
  const queryParam = searchParams.get('q') || ''
  const typeParam = searchParams.get('type') || 'vocabulary'
  const activeType = typeParam === 'kanji' ? 'kanji' : 'vocabulary'
  const [guestHistory, setGuestHistory] = useState(readGuestHistory)
  const [accountHistory, setAccountHistory] = useState([])
  const [memoryHints, setMemoryHints] = useState([])
  const [quickSaveWord, setQuickSaveWord] = useState(null)
  const { result, isLoading, errorMessage } = useDictionarySearch(queryParam, activeType)

  useEffect(() => {
    let isMounted = true

    async function loadMemoryHints() {
      try {
        const hints = await fetchKanjiMemoryHints()

        if (isMounted) {
          setMemoryHints(hints)
        }
      } catch {
        if (isMounted) {
          setMemoryHints([])
        }
      }
    }

    loadMemoryHints()

    return () => {
      isMounted = false
    }
  }, [])

  useEffect(() => {
    let isMounted = true

    async function loadSearchHistory() {
      try {
        const history = await fetchDictionaryHistory()

        if (isMounted) {
          setAccountHistory(history)
        }
      } catch {
        if (isMounted) {
          setAccountHistory([])
        }
      }
    }

    loadSearchHistory()

    return () => {
      isMounted = false
    }
  }, [])

  const hasQuery = queryParam.trim().length > 0
  const historyEntries = accountHistory.length > 0 ? accountHistory : guestHistory
  const totalResults = useMemo(
    () => result.vocabulary.length + result.kanji.length,
    [result.vocabulary.length, result.kanji.length],
  )

  if (redirectToDictionary) {
    return <Navigate to="/dictionary" replace />
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const normalizedInput = String(new FormData(event.currentTarget).get('query') || '').trim()

    if (normalizedInput) {
      setGuestHistory(writeGuestHistory(normalizedInput, activeType))
    }

    setSearchParams(normalizedInput ? { q: normalizedInput, type: activeType } : { type: activeType })
  }

  const handleTabChange = (nextType) => {
    setSearchParams(queryParam ? { q: queryParam, type: nextType } : { type: nextType })
  }

  const handleKeywordSelect = (keyword) => {
    const nextQuery = typeof keyword === 'string' ? keyword : keyword.query
    const nextType = typeof keyword === 'string' ? activeType : keyword.type

    setGuestHistory(writeGuestHistory(nextQuery, nextType))
    setSearchParams({ q: nextQuery, type: nextType })
  }

  return (
    <div className="dictionary-page">
      <DashboardNav navItems={NAV_ITEMS} />

      <main className="dictionary-main" id="main-content" tabIndex={-1}>
        <header className="workspace-heading">
          <span className="ui-eyebrow">SỔ TỪ VỰNG</span>
          <h1>Từ điển Nhật – Việt</h1>
        </header>
        <DictionarySearchBox
          activeType={activeType}
          key={queryParam}
          initialValue={queryParam}
          onSubmit={handleSubmit}
          onTabChange={handleTabChange}
        />

        {!hasQuery ? (
          <EmptyDictionaryState
            historyEntries={historyEntries}
            memoryHints={memoryHints}
            onKeywordSelect={handleKeywordSelect}
          />
        ) : (
          <>
            {isLoading ? <p role="status" className="dictionary-status">Đang tra cứu dữ liệu...</p> : null}
            {errorMessage ? <p role="alert" className="dictionary-status dictionary-status--error">{errorMessage}</p> : null}
            {!isLoading && !errorMessage && totalResults === 0 ? (
              <NoResult query={queryParam} label={activeType === 'kanji' ? 'kanji' : 'từ vựng'} />
            ) : null}
            {!isLoading && !errorMessage && activeType === 'vocabulary' && totalResults > 0 ? (
              <VocabularyResult
                vocabulary={result.vocabulary}
                relatedKanji={result.kanji}
                query={queryParam}
                onQuickSaveWord={setQuickSaveWord}
              />
            ) : null}
            {!isLoading && !errorMessage && activeType === 'kanji' && totalResults > 0 ? (
              <KanjiResult kanji={result.kanji} query={queryParam} />
            ) : null}
          </>
        )}
      </main>

      <QuickSaveModal
        isOpen={Boolean(quickSaveWord)}
        onClose={() => setQuickSaveWord(null)}
        initialFront={quickSaveWord?.word || ''}
        initialBack={`${quickSaveWord?.kana ? `${quickSaveWord.kana} ` : ''}${quickSaveWord?.romaji ? `(${quickSaveWord.romaji}) - ` : '- '}${getFlashcardBackMeaning(quickSaveWord)}`}
        vocabularyId={quickSaveWord?.id}
      />
    </div>
  )
}
