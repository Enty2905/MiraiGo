const progressModel = require('../models/progress.model');
const { createHttpError } = require('../utils/http-error');

const SUPPORTED_LEVELS = new Set(['n1', 'n2', 'n3', 'n4', 'n5']);
const MAX_QUIZ_QUESTIONS = 20;
const RECENT_ACTIVITY_LIMIT = 8;

function normalizeNumber(value) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : 0;
}

function addDays(dateText, days) {
  const date = new Date(`${dateText}T00:00:00.000Z`);
  date.setUTCDate(date.getUTCDate() + days);
  return date.toISOString().slice(0, 10);
}

function calculateStudyStreak(activityDates, today) {
  if (!today || activityDates.length === 0) {
    return 0;
  }

  const dateSet = new Set(activityDates);
  let cursor = today;

  if (!dateSet.has(cursor)) {
    cursor = addDays(today, -1);
  }

  let streak = 0;
  while (dateSet.has(cursor)) {
    streak += 1;
    cursor = addDays(cursor, -1);
  }

  return streak;
}

function buildSevenDayHistory(todayStr, rawRows) {
  const rowMap = new Map();
  for (const row of rawRows) {
    rowMap.set(row.date, row);
  }

  const DAY_NAMES = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'];
  const today = todayStr ? new Date(`${todayStr}T00:00:00Z`) : new Date();
  const days = [];

  for (let i = 6; i >= 0; i--) {
    const d = new Date(today);
    d.setUTCDate(today.getUTCDate() - i);
    const dateStr = d.toISOString().slice(0, 10);
    const dayOfWeek = d.getUTCDay();
    const dayLabel = DAY_NAMES[dayOfWeek];

    const matched = rowMap.get(dateStr) || {};
    days.push({
      date: dateStr,
      dayLabel,
      lessons: normalizeNumber(matched.lessons),
      quizzes: normalizeNumber(matched.quizzes),
      flashcards: normalizeNumber(matched.flashcards),
      total: normalizeNumber(matched.total),
    });
  }

  return days;
}

function createActivityTitle(row) {
  const lessonTitle = row.lessonTitle || row.details?.lessonSlug || 'bài học';

  const titleMap = {
    complete_lesson: `Hoàn thành ${lessonTitle}`,
    submit_quiz: `Nộp bài kiểm tra ${lessonTitle}`,
    review_vocabulary: 'Ôn tập flashcard',
  };

  return titleMap[row.activityType] || 'Hoạt động học tập';
}

function mapRecentActivity(row) {
  return {
    id: row.id,
    type: row.activityType,
    title: createActivityTitle(row),
    lessonTitle: row.lessonTitle || '',
    lessonSlug: row.lessonSlug || row.details?.lessonSlug || '',
    lessonLevel: row.lessonLevel || '',
    details: row.details || {},
    createdAt: row.createdAt,
  };
}

function mapLevelProgress(row) {
  const totalLessons = normalizeNumber(row.totalLessons);
  const completedLessons = normalizeNumber(row.completedLessons);

  return {
    level: row.level,
    totalLessons,
    completedLessons,
    completionRate: totalLessons > 0
      ? Math.round((completedLessons / totalLessons) * 100)
      : 0,
  };
}

function normalizeLevel(levelInput) {
  if (typeof levelInput !== 'string') {
    throw createHttpError(400, 'Vui lòng chọn cấp độ bài học.');
  }

  const level = levelInput.trim().toLowerCase();
  if (!SUPPORTED_LEVELS.has(level)) {
    throw createHttpError(400, 'Cấp độ bài học không được hỗ trợ.');
  }

  return level;
}

function normalizeLessonNumber(lessonNumberInput) {
  const lessonNumber = Number(lessonNumberInput);

  if (!Number.isInteger(lessonNumber) || lessonNumber <= 0) {
    throw createHttpError(400, 'Số bài học phải là số nguyên dương.');
  }

  return lessonNumber;
}

function normalizeQuizCount(value, fieldName) {
  const parsed = Number(value);

  if (!Number.isInteger(parsed) || parsed < 0 || parsed > MAX_QUIZ_QUESTIONS) {
    throw createHttpError(400, `${fieldName} khong hop le.`);
  }

  return parsed;
}

function normalizeVocabularyResults(value) {
  const rawResults = Array.isArray(value) ? value : [];

  return rawResults
    .map((result) => ({
      vocabularyId: Number(result?.vocabularyId),
      isCorrect: Boolean(result?.isCorrect),
    }))
    .filter((result) => Number.isInteger(result.vocabularyId) && result.vocabularyId > 0)
    .slice(0, MAX_QUIZ_QUESTIONS);
}

async function getProgressOverview(userId) {
  const [
    lessonSummary,
    vocabularySummary,
    kanjiSummary,
    activityDates,
    today,
    weeklyLessonSummary,
    levelProgressRows,
    flashcardCount,
    kanaSummary,
  ] = await Promise.all([
    progressModel.getLessonProgressSummary(userId),
    progressModel.getVocabularyProgressSummary(userId),
    progressModel.getKanjiProgressSummary(userId),
    progressModel.getLearningActivityDates(userId),
    progressModel.getUserLocalToday(userId),
    progressModel.getWeeklyCompletedLessonCount(userId),
    progressModel.getLevelProgressRows(userId),
    progressModel.getFlashcardCount(userId),
    progressModel.getKanaMasterySummary(userId),
  ]);
  const studyStreak = calculateStudyStreak(activityDates, today);

  return {
    lessons: {
      total: normalizeNumber(lessonSummary.totalLessons),
      completed: normalizeNumber(lessonSummary.completedLessons),
      averageProgress: normalizeNumber(lessonSummary.averageProgress),
      completedThisWeek: normalizeNumber(weeklyLessonSummary.completedThisWeek),
    },
    vocabulary: {
      tracked: normalizeNumber(vocabularySummary.trackedVocabulary),
      mastered: normalizeNumber(vocabularySummary.masteredVocabulary),
    },
    kanji: {
      tracked: normalizeNumber(kanjiSummary.trackedKanji),
      mastered: normalizeNumber(kanjiSummary.masteredKanji),
    },
    flashcards: {
      total: normalizeNumber(flashcardCount),
    },
    kana: {
      hiragana: normalizeNumber(kanaSummary.hiragana),
      katakana: normalizeNumber(kanaSummary.katakana),
      total: normalizeNumber(kanaSummary.total),
    },
    activity: {
      studyStreak,
      activeDays: activityDates.length,
    },
    levelProgress: levelProgressRows.map(mapLevelProgress),
  };
}

async function getLearningActivity(userId) {
  const [
    activityDates,
    today,
    weeklyLessonSummary,
    recentRows,
    levelProgressRows,
    dailyBreakdownRows,
  ] = await Promise.all([
    progressModel.getLearningActivityDates(userId),
    progressModel.getUserLocalToday(userId),
    progressModel.getWeeklyCompletedLessonCount(userId),
    progressModel.getRecentLearningLogs(userId, RECENT_ACTIVITY_LIMIT),
    progressModel.getLevelProgressRows(userId),
    progressModel.getDailyActivityBreakdown(userId, 7),
  ]);

  return {
    studyStreak: calculateStudyStreak(activityDates, today),
    completedThisWeek: normalizeNumber(weeklyLessonSummary.completedThisWeek),
    activeDays: activityDates.length,
    recentActivities: recentRows.map(mapRecentActivity),
    levelProgress: levelProgressRows.map(mapLevelProgress),
    dailyBreakdown: buildSevenDayHistory(today, dailyBreakdownRows),
  };
}

async function getCompletedLessons(userId) {
  return progressModel.getCompletedLessonSlugs(userId);
}

async function markLessonComplete(userId, payload) {
  const level = normalizeLevel(payload?.level);
  const lessonNumber = normalizeLessonNumber(payload?.lessonNumber);
  const progress = await progressModel.completeLessonProgress({
    userId,
    level,
    lessonNumber,
  });

  if (!progress) {
    throw createHttpError(404, 'Không tìm thấy bài học.');
  }

  return progress;
}

async function saveLessonQuiz(userId, payload) {
  const level = normalizeLevel(payload?.level);
  const lessonNumber = normalizeLessonNumber(payload?.lessonNumber);
  const correctCount = normalizeQuizCount(payload?.correctCount, 'So cau dung');
  const questionCount = normalizeQuizCount(payload?.questionCount, 'So cau hoi');

  if (questionCount === 0 || correctCount > questionCount) {
    throw createHttpError(400, 'Ket qua bai kiem tra khong hop le.');
  }

  const score = Math.round((correctCount / questionCount) * 100);
  const progress = await progressModel.saveLessonQuizProgress({
    userId,
    level,
    lessonNumber,
    score,
    correctCount,
    questionCount,
    vocabularyResults: normalizeVocabularyResults(payload?.vocabularyResults),
  });

  if (!progress) {
    throw createHttpError(404, 'Khong tim thay bai hoc.');
  }

  return progress;
}

const SUPPORTED_KANA_TYPES = new Set(['hiragana', 'katakana']);

function normalizeKanaType(type) {
  if (typeof type !== 'string') {
    throw createHttpError(400, 'Loại bảng chữ cái kana không hợp lệ.');
  }
  const normalized = type.trim().toLowerCase();
  if (!SUPPORTED_KANA_TYPES.has(normalized)) {
    throw createHttpError(400, 'Bảng chữ cái kana phải là hiragana hoặc katakana.');
  }
  return normalized;
}

function normalizeKanaCharacter(char) {
  if (typeof char !== 'string' || !char.trim()) {
    throw createHttpError(400, 'Ký tự kana không được để trống.');
  }
  const trimmed = char.trim();
  if (trimmed.length > 10) {
    throw createHttpError(400, 'Ký tự kana không hợp lệ.');
  }
  return trimmed;
}

async function getKanaProgress(userId, kanaType = null) {
  const normalizedType = kanaType ? normalizeKanaType(kanaType) : null;
  return progressModel.getMasteredKanaCharacters(userId, normalizedType);
}

async function toggleKanaMastered(userId, payload) {
  const kanaType = normalizeKanaType(payload?.kanaType);
  const character = normalizeKanaCharacter(payload?.character);

  const result = await progressModel.toggleMasteredKana(userId, kanaType, character);
  const masteredList = await progressModel.getMasteredKanaCharacters(userId, kanaType);

  return {
    kanaType,
    character,
    isMastered: result.isMastered,
    masteredCharacters: masteredList,
    message: result.isMastered
      ? `Đã đánh dấu thuộc ký tự "${character}".`
      : `Đã bỏ đánh dấu ký tự "${character}".`,
  };
}

async function syncKanaProgressBatch(userId, payload) {
  const kanaType = normalizeKanaType(payload?.kanaType);
  const rawCharacters = Array.isArray(payload?.characters) ? payload.characters : [];
  const characters = rawCharacters
    .filter((c) => typeof c === 'string' && c.trim())
    .map((c) => c.trim())
    .slice(0, 200);

  const masteredList = await progressModel.syncMasteredKanaBatch(userId, kanaType, characters);

  return {
    kanaType,
    masteredCharacters: masteredList,
    count: masteredList.length,
    message: `Đã đồng bộ tiến độ ${kanaType} vào tài khoản.`,
  };
}

module.exports = {
  getCompletedLessons,
  getKanaProgress,
  getLearningActivity,
  getProgressOverview,
  markLessonComplete,
  saveLessonQuiz,
  syncKanaProgressBatch,
  toggleKanaMastered,
};
