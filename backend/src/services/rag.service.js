const {
  findGrammarByLesson,
  findVocabularyByLesson,
} = require('../models/vocabulary.model');
const {
  findGrammarContext,
  findKanjiContext,
  findVocabularyContext,
} = require('../models/assistant.model');

const MAX_SEARCH_TERMS = 8;
const DEFAULT_LEVEL = 'N5';
const STOP_WORDS = new Set([
  'a',
  'ạ',
  'anh',
  'ai',
  'bai',
  'bài',
  'ban',
  'bạn',
  'bi',
  'bị',
  'biet',
  'biết',
  'biệt',
  'cac',
  'các',
  'cach',
  'cách',
  'cai',
  'cái',
  'can',
  'cần',
  'cau',
  'câu',
  'chi',
  'chỉ',
  'chị',
  'cho',
  'chu',
  'chữ',
  'chưa',
  'co',
  'có',
  'con',
  'còn',
  'cua',
  'của',
  'cung',
  'cùng',
  'cũng',
  'ấu',
  'cau',
  'dang',
  'đang',
  'day',
  'đây',
  'de',
  'để',
  'den',
  'đến',
  'di',
  'đi',
  'dich',
  'dịch',
  'do',
  'đó',
  'doc',
  'đọc',
  'dung',
  'dùng',
  'dụng',
  'duoc',
  'được',
  'du',
  'dụ',
  'em',
  'gi',
  'gì',
  'giai',
  'giải',
  'giua',
  'giữa',
  'giup',
  'giúp',
  'han',
  'hán',
  'hay',
  'hieu',
  'hiểu',
  'hoac',
  'hoặc',
  'hoc',
  'học',
  'hoi',
  'hỏi',
  'jlpt',
  'kanji',
  'khac',
  'khác',
  'khi',
  'khong',
  'không',
  'kia',
  'la',
  'là',
  'lam',
  'làm',
  'loai',
  'loại',
  'luon',
  'luôn',
  'ma',
  'mà',
  'mau',
  'mẫu',
  'minh',
  'mình',
  'moi',
  'mới',
  'mot',
  'một',
  'muon',
  'muốn',
  'nao',
  'nào',
  'nay',
  'này',
  'nen',
  'nên',
  'neu',
  'nếu',
  'ngay',
  'ngữ',
  'ngu',
  'nghia',
  'nghĩa',
  'nha',
  'nhà',
  'nhat',
  'nhật',
  'nhau',
  'nhe',
  'nhé',
  'nhi',
  'nhỉ',
  'nhieu',
  'nhiều',
  'nhu',
  'như',
  'nhung',
  'những',
  'noi',
  'nói',
  'o',
  'ở',
  'oi',
  'ơi',
  'phan',
  'phân',
  'phap',
  'pháp',
  'phai',
  'phải',
  'qua',
  'quá',
  'ra',
  'rat',
  'rất',
  'roi',
  'rồi',
  'sao',
  'se',
  'sẽ',
  'su',
  'sử',
  'sự',
  'tai',
  'tại',
  'the',
  'thế',
  'thi',
  'thì',
  'thich',
  'thích',
  'tieng',
  'tiếng',
  'tim',
  'tìm',
  'toi',
  'tôi',
  'trong',
  'truc',
  'trúc',
  'tu',
  'từ',
  'tự',
  'va',
  'và',
  'vao',
  'vào',
  'vay',
  'vậy',
  've',
  'về',
  'vi',
  'vì',
  'ví',
  'viet',
  'viết',
  'việt',
  'voi',
  'với',
  'vung',
  'vựng',
  'xem',
  'xin',
  'y',
  'ý',
]);

function normalizeLevel(levelInput) {
  const normalizedLevel = String(levelInput || DEFAULT_LEVEL).trim().toUpperCase();

  if (/^N[1-5]$/.test(normalizedLevel)) {
    return normalizedLevel;
  }

  return DEFAULT_LEVEL;
}

function normalizeTerm(term) {
  return String(term || '')
    .trim()
    .replace(/[?!.。、「」『』()[\]{}:,;*'"`]+$/g, '')
    .replace(/^[?!.。、「」『』()[\]{}:,;*'"`]+/g, '');
}

function extractKanjiChars(text) {
  const chars = [];
  for (const match of String(text || '').matchAll(/[\u3400-\u9fff々]/gu)) {
    const ch = match[0];
    if (!chars.includes(ch)) {
      chars.push(ch);
    }
  }
  return chars;
}

function extractJapaneseTokens(text) {
  const tokens = [];
  for (const match of String(text || '').matchAll(/[\u3040-\u30ff\u3400-\u9fff々ー〜~]+/gu)) {
    const cleaned = normalizeTerm(match[0]);
    if (cleaned && !tokens.includes(cleaned)) {
      tokens.push(cleaned);
    }
  }
  return tokens;
}

function extractSearchTerms(message) {
  const text = String(message || '');
  const japaneseTokens = extractJapaneseTokens(text);

  // If the user's message contains Japanese script, focus strictly on the Japanese tokens
  // (and their constituent Kanji) so conversational Vietnamese filler words never pollute results.
  if (japaneseTokens.length > 0) {
    const terms = [...japaneseTokens];
    for (const token of japaneseTokens) {
      // Also split on common particles if the user pasted a whole Japanese clause
      const subParts = token
        .split(/[はがをにでへとからまでよりのやもねよか、。！？]+/u)
        .map((p) => normalizeTerm(p))
        .filter((p) => p.length >= 1);
      for (const part of subParts) {
        if (!terms.includes(part)) {
          terms.push(part);
        }
      }
    }
    return terms.slice(0, MAX_SEARCH_TERMS);
  }

  // Otherwise, extract meaningful Vietnamese/Romaji content terms after filtering stop words
  const rawTerms = [...text.matchAll(/[\p{L}\p{N}〜~]+/gu)].map((match) =>
    normalizeTerm(match[0]),
  );
  const terms = [];

  for (const term of rawTerms) {
    const lowerTerm = term.toLowerCase();

    if (
      term.length < 2
      || STOP_WORDS.has(lowerTerm)
      || /^n[1-5]$/i.test(term)
      || /^\d+$/.test(term)
      || terms.some((currentTerm) => currentTerm.toLowerCase() === lowerTerm)
    ) {
      continue;
    }

    terms.push(term);

    if (terms.length >= MAX_SEARCH_TERMS) {
      break;
    }
  }

  return terms;
}

function createSearchPatterns(terms) {
  return terms.map((term) => `%${term}%`);
}

function parseLessonReference(message, selectedLevel) {
  const text = String(message || '');
  const levelMatch = text.match(/\bN([1-5])\b/i);
  const lessonMatch = text.match(/(?:bài|bai|lesson)\s*(\d{1,3})/i);

  if (!lessonMatch) {
    return null;
  }

  return {
    level: levelMatch ? `N${levelMatch[1]}` : normalizeLevel(selectedLevel),
    lessonNumber: Number(lessonMatch[1]),
  };
}

function groupGrammarRows(rows) {
  const grammarById = new Map();

  for (const row of rows) {
    if (!grammarById.has(row.id)) {
      grammarById.set(row.id, {
        id: row.id,
        pattern: row.pattern,
        title: row.title || '',
        meaningVi: row.meaningVi || '',
        formation: row.formation || '',
        explanation: row.explanation || '',
        usageNote: row.usageNote || '',
        jlptLevel: row.jlptLevel || '',
        examples: [],
      });
    }

    if (row.exampleId && grammarById.get(row.id).examples.length < 2) {
      grammarById.get(row.id).examples.push({
        exampleJp: row.exampleJp,
        exampleKana: row.exampleKana || '',
        exampleVi: row.exampleVi || '',
      });
    }
  }

  return [...grammarById.values()];
}

function formatVocabularyContext(vocabulary) {
  if (vocabulary.length === 0) {
    return '';
  }

  return [
    'TỪ VỰNG TRONG DATABASE:',
    ...vocabulary.map((item) => {
      const reading = [item.kana, item.romaji].filter(Boolean).join(', ');

      return `- ${item.word}${reading ? ` (${reading})` : ''}`
        + ` [${item.jlptLevel || 'không rõ cấp'}]`
        + `: ${item.meaningVi || item.meaningEn || 'chưa có nghĩa'}`
        + `${item.wordType ? `. Loại từ: ${item.wordType}` : ''}`
        + `${item.lessonNumber ? `. Bài ${item.lessonNumber}` : ''}`;
    }),
  ].join('\n');
}

function formatKanjiContext(kanji) {
  if (kanji.length === 0) {
    return '';
  }

  return [
    'KANJI TRONG DATABASE:',
    ...kanji.map((item) => (
      `- ${item.kanji} [${item.jlptLevel || 'không rõ cấp'}]: ${item.meaningVi || item.meaningEn || ''}`
      + `${item.hanViet ? `. Hán Việt: ${item.hanViet}` : ''}`
      + `${item.onyomi ? `. On: ${item.onyomi}` : ''}`
      + `${item.kunyomi ? `. Kun: ${item.kunyomi}` : ''}`
      + `${item.mnemonic ? `. Mẹo nhớ: ${item.mnemonic}` : ''}`
    )),
  ].join('\n');
}

function formatGrammarContext(grammar) {
  if (grammar.length === 0) {
    return '';
  }

  return [
    'NGỮ PHÁP TRONG DATABASE:',
    ...grammar.map((item) => {
      const examples = item.examples
        .map((example) => ` Ví dụ: ${example.exampleJp}${example.exampleKana ? ` (${example.exampleKana})` : ''} - ${example.exampleVi}`)
        .join('');

      return `- ${item.pattern} [${item.jlptLevel || 'không rõ cấp'}]: ${item.meaningVi}`
        + `${item.formation ? `. Cấu trúc: ${item.formation}` : ''}`
        + `${item.explanation ? `. Giải thích: ${item.explanation}` : ''}`
        + `${examples}`;
    }),
  ].join('\n');
}

function formatLessonContext(lessonContext) {
  if (!lessonContext) {
    return '';
  }

  const vocabularyLines = lessonContext.vocabulary
    .slice(0, 8)
    .map((item) => `- ${item.word} (${item.kana || item.romaji || ''}): ${item.meaningVi || item.meaningEn || ''}`);
  const grammarLines = groupGrammarRows(lessonContext.grammar)
    .slice(0, 5)
    .map((item) => `- ${item.pattern}: ${item.meaningVi}${item.formation ? `; ${item.formation}` : ''}`);

  return [
    `NGỮ CẢNH BÀI HỌC ${lessonContext.level} BÀI ${lessonContext.lessonNumber}:`,
    vocabularyLines.length > 0 ? 'Từ vựng:\n' + vocabularyLines.join('\n') : '',
    grammarLines.length > 0 ? 'Ngữ pháp:\n' + grammarLines.join('\n') : '',
  ].filter(Boolean).join('\n');
}

function buildSources({
  vocabulary,
  kanji,
  grammar,
  lessonContext,
}) {
  const sources = [];
  const seenKeys = new Set();

  const pushUnique = (item) => {
    const key = `${item.type}:${item.label}`;
    if (!item.label || seenKeys.has(key)) {
      return;
    }
    seenKeys.add(key);
    sources.push(item);
  };

  if (lessonContext) {
    pushUnique({
      type: 'lesson',
      label: `${lessonContext.level} bài ${lessonContext.lessonNumber}`,
      detail: `${lessonContext.vocabulary.length} từ vựng, ${groupGrammarRows(lessonContext.grammar).length} mẫu ngữ pháp`,
      level: lessonContext.level,
      lessonNumber: lessonContext.lessonNumber,
    });
  }

  for (const item of vocabulary.slice(0, 5)) {
    const reading = item.kana || item.romaji || '';
    const meaning = item.meaningVi || item.meaningEn || '';
    pushUnique({
      type: 'vocabulary',
      label: item.word,
      reading,
      level: item.jlptLevel || '',
      detail: `${reading && reading !== item.word ? `(${reading}) ` : ''}${meaning}`,
    });
  }

  for (const item of kanji.slice(0, 5)) {
    const hv = item.hanViet ? `[${item.hanViet}] ` : '';
    const meaning = item.meaningVi || item.meaningEn || '';
    pushUnique({
      type: 'kanji',
      label: item.kanji,
      level: item.jlptLevel || '',
      detail: `${hv}${meaning}`.trim(),
    });
  }

  for (const item of groupGrammarRows(grammar).slice(0, 4)) {
    pushUnique({
      type: 'grammar',
      label: item.pattern,
      level: item.jlptLevel || '',
      detail: item.meaningVi,
    });
  }

  return sources.slice(0, 10);
}

async function buildRagContext({ message, selectedLevel }) {
  const level = normalizeLevel(selectedLevel);
  const japaneseTokens = extractJapaneseTokens(message);
  const kanjiChars = extractKanjiChars(message);
  const terms = extractSearchTerms(message);
  const searchPatterns = createSearchPatterns(terms);
  const lessonReference = parseLessonReference(message, level);
  const isGrammarQuery = /ngữ\s*pháp|cấu\s*trúc|mẫu\s*câu|[〜~]/iu.test(message);

  // If the user wrote Japanese text, only match Kanji that are actually in the message
  const kanjiSearchPatterns = japaneseTokens.length > 0 ? [] : searchPatterns;
  // Only search grammar if the user asked about grammar or did not ask about a specific Kanji/vocab word
  const shouldSearchGrammar = isGrammarQuery || japaneseTokens.length === 0;

  const [
    vocabulary,
    grammarRows,
    kanji,
    lessonVocabulary,
    lessonGrammar,
  ] = await Promise.all([
    findVocabularyContext(searchPatterns, 8, terms),
    shouldSearchGrammar ? findGrammarContext(searchPatterns, 5, terms) : Promise.resolve([]),
    findKanjiContext(kanjiSearchPatterns, 6, kanjiChars),
    lessonReference
      ? findVocabularyByLesson(lessonReference.level, lessonReference.lessonNumber)
      : Promise.resolve([]),
    lessonReference
      ? findGrammarByLesson(lessonReference.level, lessonReference.lessonNumber)
      : Promise.resolve([]),
  ]);
  const lessonContext = lessonReference
    ? {
      ...lessonReference,
      vocabulary: lessonVocabulary,
      grammar: lessonGrammar,
    }
    : null;
  const grammar = groupGrammarRows(grammarRows);
  const contextText = [
    formatLessonContext(lessonContext),
    formatVocabularyContext(vocabulary),
    formatGrammarContext(grammar),
    formatKanjiContext(kanji),
  ].filter(Boolean).join('\n\n');

  return {
    level,
    terms,
    contextText,
    sources: buildSources({
      vocabulary,
      grammar: grammarRows,
      kanji,
      lessonContext,
    }),
  };
}

async function refineSourcesWithReply({ message, assistantContent, initialSources = [] }) {
  const combinedText = `${message || ''}\n${assistantContent || ''}`;
  const userJpTokens = extractJapaneseTokens(message);
  const replyJpTokens = extractJapaneseTokens(assistantContent);
  const allJpTokens = [...new Set([...userJpTokens, ...replyJpTokens])].slice(0, 8);
  const allKanjiChars = extractKanjiChars(combinedText).slice(0, 6);

  if (allJpTokens.length === 0 && allKanjiChars.length === 0) {
    return initialSources;
  }

  const exactTerms = allJpTokens.filter((t) => t.length >= 1 && t.length <= 12);
  const patterns = exactTerms.slice(0, 4).map((t) => `${t}%`);

  const [vocabRows, kanjiRows] = await Promise.all([
    findVocabularyContext(patterns, 6, exactTerms),
    findKanjiContext([], 6, allKanjiChars),
  ]);

  const refined = [];
  const seen = new Set();

  const addSource = (src) => {
    const key = `${src.type}:${src.label}`;
    if (!src.label || seen.has(key)) return;
    seen.add(key);
    refined.push(src);
  };

  // Keep any lesson reference first
  for (const s of initialSources) {
    if (s.type === 'lesson') addSource(s);
  }

  // If the user asked about a specific Japanese word that isn't in DB yet, extract its summary from the AI reply
  for (const userToken of userJpTokens) {
    const inDb = vocabRows.some((v) => v.word === userToken || v.kana === userToken);
    const isSingleKanji = userToken.length === 1 && allKanjiChars.includes(userToken);
    if (!inDb && !isSingleKanji) {
      const meaningMatch = String(assistantContent || '').match(
        /(?:Nghĩa|Ý nghĩa)\s*:\s*([^\n*]+)/i,
      );
      const readingMatch = String(assistantContent || '').match(
        /(?:Cách đọc|Đọc là|Phiên âm)\s*:\s*([^\n*]+)/i,
      );
      const reading = readingMatch ? readingMatch[1].trim() : '';
      const meaning = meaningMatch ? meaningMatch[1].trim() : 'Từ vựng được giải thích trong hội thoại';
      addSource({
        type: 'vocabulary',
        label: userToken,
        detail: `${reading ? `(${reading}) ` : ''}${meaning}`,
      });
    }
  }

  for (const item of vocabRows) {
    const reading = item.kana || item.romaji || '';
    const meaning = item.meaningVi || item.meaningEn || '';
    addSource({
      type: 'vocabulary',
      label: item.word,
      reading,
      level: item.jlptLevel || '',
      detail: `${reading && reading !== item.word ? `(${reading}) ` : ''}${meaning}`,
    });
  }

  for (const item of kanjiRows) {
    const hv = item.hanViet ? `[${item.hanViet}] ` : '';
    const meaning = item.meaningVi || item.meaningEn || '';
    addSource({
      type: 'kanji',
      label: item.kanji,
      level: item.jlptLevel || '',
      detail: `${hv}${meaning}`.trim(),
    });
  }

  for (const s of initialSources) {
    if (s.type === 'grammar') addSource(s);
  }

  return refined.slice(0, 10);
}

module.exports = {
  buildRagContext,
  refineSourcesWithReply,
};
