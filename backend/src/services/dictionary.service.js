const {
  createDictionarySearchHistory,
  findDictionarySearchHistory,
  findKanjiByCharacters,
  findKanjiExamples,
  findKanjiMatches,
  findRandomKanjiMemoryHints,
  findVocabularyContainingKanji,
  findVocabularyExamples,
  findVocabularyMatches,
} = require('../models/dictionary.model');
const { createHttpError } = require('../utils/http-error');

const DEFAULT_LIMIT = 8;
const HISTORY_LIMIT = 12;
const MEMORY_HINT_LIMIT = 3;
const MAX_QUERY_LENGTH = 80;
const SUPPORTED_TYPES = new Set(['vocabulary', 'kanji']);

function normalizeSearchType(typeInput) {
  const type = typeof typeInput === 'string' ? typeInput.trim().toLowerCase() : 'vocabulary';

  if (!SUPPORTED_TYPES.has(type)) {
    throw createHttpError(400, 'Loại tra cứu phải là từ vựng hoặc kanji.');
  }

  return type;
}

function normalizeSearchQuery(queryInput) {
  const query = typeof queryInput === 'string' ? queryInput.trim() : '';

  if (!query) {
    return '';
  }

  if (query.length > MAX_QUERY_LENGTH) {
    throw createHttpError(400, 'Từ khóa tra cứu quá dài.');
  }

  return query;
}

function groupRowsById(rows, idField) {
  return rows.reduce((groups, row) => {
    const id = row[idField];

    if (!groups.has(id)) {
      groups.set(id, []);
    }

    groups.get(id).push(row);
    return groups;
  }, new Map());
}

function extractKanjiCharacters(text) {
  return Array.from(text || '').filter((character, index, characters) => {
    return /[\u3400-\u9fff]/u.test(character) && characters.indexOf(character) === index;
  });
}

function mapVocabulary(row, examplesByVocabularyId) {
  return {
    id: row.id,
    word: row.word,
    kana: row.kana || '',
    romaji: row.romaji || '',
    meaningVi: row.meaningVi || '',
    meaningEn: row.meaningEn || '',
    wordType: row.wordType || '',
    jlptLevel: row.jlptLevel || '',
    accent: row.accent || '',
    audioUrl: row.audioUrl || '',
    imageUrl: row.imageUrl || '',
    notes: row.notes || '',
    tags: Array.isArray(row.tags) ? row.tags : [],
    examples: examplesByVocabularyId.get(row.id) || [],
  };
}

function mapKanji(row, examplesByKanjiId = new Map(), relatedVocab = []) {
  return {
    id: row.id,
    kanji: row.kanji,
    onyomi: row.onyomi || '',
    kunyomi: row.kunyomi || '',
    meaningVi: row.meaningVi || '',
    meaningEn: row.meaningEn || '',
    strokeCount: row.strokeCount || null,
    radical: row.radical || '',
    jlptLevel: row.jlptLevel || '',
    unicodeCode: row.unicodeCode || '',
    writingSvgUrl: row.writingSvgUrl || '',
    hanViet: row.hanViet || '',
    mnemonic: row.mnemonic || '',
    examples: examplesByKanjiId.get(row.id) || [],
    relatedVocabulary: relatedVocab || [],
  };
}

function mapSearchHistory(row) {
  return {
    query: row.queryText,
    type: row.searchType,
    createdAt: row.createdAt,
  };
}

function mapKanjiMemoryHint(row) {
  return {
    id: row.id,
    kanji: row.kanji,
    onyomi: row.onyomi || '',
    kunyomi: row.kunyomi || '',
    meaningVi: row.meaningVi || '',
    meaningEn: row.meaningEn || '',
    jlptLevel: row.jlptLevel || '',
    hanViet: row.hanViet || '',
    mnemonic: row.mnemonic || '',
  };
}

async function searchVocabulary(query) {
  const vocabularyRows = await findVocabularyMatches(query, DEFAULT_LIMIT);
  const vocabularyIds = vocabularyRows.map((row) => row.id);
  const exampleRows = await findVocabularyExamples(vocabularyIds);
  const examplesByVocabularyId = groupRowsById(exampleRows, 'vocabularyId');
  const primaryVocabularyWord = vocabularyRows[0]?.word || '';
  const kanjiCharacters = extractKanjiCharacters(primaryVocabularyWord);
  const uniqueKanjiCharacters = [...new Set(kanjiCharacters)];
  const relatedKanjiRows = await findKanjiByCharacters(uniqueKanjiCharacters);

  return {
    vocabulary: vocabularyRows.map((row) => mapVocabulary(row, examplesByVocabularyId)),
    kanji: relatedKanjiRows.map((row) => mapKanji(row)),
  };
}

async function searchKanji(query) {
  const kanjiCharacters = extractKanjiCharacters(query);

  let kanjiRows = [];

  // 1. If query contains multiple Kanji characters (e.g. "着物", "日本語"),
  // prioritize fetching all constituent Kanji characters in query order
  if (kanjiCharacters.length > 1) {
    kanjiRows = await findKanjiByCharacters(kanjiCharacters);
  }

  // 2. Otherwise (or if compound not found), perform standard kanji search
  // (matches single character, onyomi, kunyomi, han-viet, meaning)
  if (kanjiRows.length === 0) {
    kanjiRows = await findKanjiMatches(query, DEFAULT_LIMIT);
  }

  // 3. Fallback: If still not found and query contains at least 1 kanji (e.g. "食べる", "行く")
  if (kanjiRows.length === 0 && kanjiCharacters.length > 0) {
    kanjiRows = await findKanjiByCharacters(kanjiCharacters);
  }

  // 4. Fallback: If still not found, check if query matches a vocabulary word
  // (e.g. user typed "kimono", "きもの" or "gakkou" in the Kanji tab)
  if (kanjiRows.length === 0) {
    const vocabRows = await findVocabularyMatches(query, 1);
    if (vocabRows.length > 0) {
      const vocabKanji = extractKanjiCharacters(vocabRows[0].word);
      if (vocabKanji.length > 0) {
        kanjiRows = await findKanjiByCharacters(vocabKanji);
      }
    }
  }

  const kanjiIds = kanjiRows.map((row) => row.id);
  const exampleRows = await findKanjiExamples(kanjiIds);
  const examplesByKanjiId = groupRowsById(exampleRows, 'kanjiId');

  const relatedVocabByKanji = new Map();
  await Promise.all(
    kanjiRows.map(async (row) => {
      try {
        const vocabList = await findVocabularyContainingKanji(row.kanji, 6);
        relatedVocabByKanji.set(row.kanji, vocabList);
      } catch {
        relatedVocabByKanji.set(row.kanji, []);
      }
    })
  );

  return {
    vocabulary: [],
    kanji: kanjiRows.map((row) =>
      mapKanji(row, examplesByKanjiId, relatedVocabByKanji.get(row.kanji) || [])
    ),
  };
}

const kanjiStrokesCache = new Map();

async function getKanjiStrokes(kanjiInput) {
  const char = (kanjiInput || '').trim()[0];
  if (!char) {
    throw createHttpError(400, 'Ký tự kanji không hợp lệ.');
  }

  if (kanjiStrokesCache.has(char)) {
    return kanjiStrokesCache.get(char);
  }

  const hex = char.codePointAt(0).toString(16).padStart(5, '0');
  let svgText = '';

  try {
    const response = await fetch(`https://cdn.jsdelivr.net/gh/KanjiVG/kanjivg@master/kanji/${hex}.svg`, {
      signal: AbortSignal.timeout(4000),
    });
    if (response.ok) {
      svgText = await response.text();
    }
  } catch {
    // Network or timeout, try fallback
  }

  if (!svgText) {
    try {
      const fallbackResponse = await fetch(`https://raw.githubusercontent.com/KanjiVG/kanjivg/master/kanji/${hex}.svg`, {
        signal: AbortSignal.timeout(4000),
      });
      if (fallbackResponse.ok) {
        svgText = await fallbackResponse.text();
      }
    } catch {
      // Ignore
    }
  }

  if (!svgText) {
    return {
      kanji: char,
      hex,
      strokeCount: 0,
      paths: [],
      numbers: [],
    };
  }

  const paths = [];
  const pathRegex = /<path[^>]*d="([^"]+)"/g;
  let match;
  while ((match = pathRegex.exec(svgText)) !== null) {
    paths.push(match[1]);
  }

  const numbers = [];
  const numRegex = /<text[^>]*transform="matrix\([^)]+\s+([\d.]+)\s+([\d.]+)\)"[^>]*>(\d+)<\/text>/g;
  while ((match = numRegex.exec(svgText)) !== null) {
    numbers.push({
      number: parseInt(match[3], 10),
      x: parseFloat(match[1]),
      y: parseFloat(match[2]),
    });
  }

  const result = {
    kanji: char,
    hex,
    strokeCount: paths.length,
    paths,
    numbers,
  };

  kanjiStrokesCache.set(char, result);
  return result;
}

async function getDictionarySearchHistory(userId) {
  if (!userId) {
    return [];
  }

  const rows = await findDictionarySearchHistory(userId, HISTORY_LIMIT);
  return rows.map(mapSearchHistory);
}

async function getRandomKanjiMemoryHints() {
  const rows = await findRandomKanjiMemoryHints(MEMORY_HINT_LIMIT);
  return rows.map(mapKanjiMemoryHint);
}

async function searchDictionary(typeInput, queryInput, userId = null) {
  const type = normalizeSearchType(typeInput);
  const query = normalizeSearchQuery(queryInput);

  if (!query) {
    return {
      type,
      query,
      vocabulary: [],
      kanji: [],
      history: await getDictionarySearchHistory(userId),
    };
  }

  const result = type === 'kanji'
    ? await searchKanji(query)
    : await searchVocabulary(query);

  if (userId) {
    await createDictionarySearchHistory({
      userId,
      queryText: query,
      searchType: type,
    });
  }

  const history = await getDictionarySearchHistory(userId);

  return {
    type,
    query,
    history,
    ...result,
  };
}

module.exports = {
  getDictionarySearchHistory,
  getKanjiStrokes,
  getRandomKanjiMemoryHints,
  searchDictionary,
};
