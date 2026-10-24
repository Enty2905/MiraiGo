const { test } = require('node:test');
const assert = require('node:assert/strict');
const progressModel = require('../src/models/progress.model');
const { getProgressOverview, getLearningActivity } = require('../src/services/progress.service');

test('Dashboard statistics and daily breakdown formatting', async (t) => {
  const originalGetDates = progressModel.getLearningActivityDates;
  const originalGetToday = progressModel.getUserLocalToday;
  const originalGetWeekly = progressModel.getWeeklyCompletedLessonCount;
  const originalGetRecent = progressModel.getRecentLearningLogs;
  const originalGetLevels = progressModel.getLevelProgressRows;
  const originalGetDaily = progressModel.getDailyActivityBreakdown;
  const originalGetLessonSummary = progressModel.getLessonProgressSummary;
  const originalGetVocabSummary = progressModel.getVocabularyProgressSummary;
  const originalGetKanjiSummary = progressModel.getKanjiProgressSummary;
  const originalGetFlashcards = progressModel.getFlashcardCount;
  const originalGetKanaSummary = progressModel.getKanaMasterySummary;

  t.after(() => {
    progressModel.getLearningActivityDates = originalGetDates;
    progressModel.getUserLocalToday = originalGetToday;
    progressModel.getWeeklyCompletedLessonCount = originalGetWeekly;
    progressModel.getRecentLearningLogs = originalGetRecent;
    progressModel.getLevelProgressRows = originalGetLevels;
    progressModel.getDailyActivityBreakdown = originalGetDaily;
    progressModel.getLessonProgressSummary = originalGetLessonSummary;
    progressModel.getVocabularyProgressSummary = originalGetVocabSummary;
    progressModel.getKanjiProgressSummary = originalGetKanjiSummary;
    progressModel.getFlashcardCount = originalGetFlashcards;
    progressModel.getKanaMasterySummary = originalGetKanaSummary;
  });

  progressModel.getLearningActivityDates = async () => ['2026-10-24', '2026-10-23'];
  progressModel.getUserLocalToday = async () => '2026-10-24';
  progressModel.getWeeklyCompletedLessonCount = async () => ({ completedThisWeek: 3 });
  progressModel.getRecentLearningLogs = async () => [];
  progressModel.getLevelProgressRows = async () => [
    { level: 'N5', totalLessons: 5, completedLessons: 2 },
  ];
  progressModel.getDailyActivityBreakdown = async () => [
    { date: '2026-10-24', lessons: 2, quizzes: 1, flashcards: 5, total: 8 },
  ];
  progressModel.getLessonProgressSummary = async () => ({
    totalLessons: 10,
    completedLessons: 4,
    averageProgress: 40,
  });
  progressModel.getVocabularyProgressSummary = async () => ({
    trackedVocabulary: 30,
    masteredVocabulary: 15,
  });
  progressModel.getKanjiProgressSummary = async () => ({
    trackedKanji: 10,
    masteredKanji: 5,
  });
  progressModel.getFlashcardCount = async () => 12;
  progressModel.getKanaMasterySummary = async () => ({
    hiragana: 46,
    katakana: 20,
    total: 66,
  });

  await t.test('getLearningActivity returns 7 formatted days including daily breakdown', async () => {
    const activity = await getLearningActivity('test-user');
    assert.equal(activity.studyStreak, 2);
    assert.equal(activity.completedThisWeek, 3);
    assert.ok(Array.isArray(activity.dailyBreakdown));
    assert.equal(activity.dailyBreakdown.length, 7);

    const todayEntry = activity.dailyBreakdown.find((d) => d.date === '2026-10-24');
    assert.ok(todayEntry);
    assert.equal(todayEntry.total, 8);
    assert.equal(todayEntry.lessons, 2);
    assert.equal(todayEntry.quizzes, 1);
    assert.equal(todayEntry.flashcards, 5);
  });

  await t.test('getProgressOverview returns flashcard count and kana progress', async () => {
    const overview = await getProgressOverview('test-user');
    assert.equal(overview.flashcards.total, 12);
    assert.equal(overview.kana.hiragana, 46);
    assert.equal(overview.kana.katakana, 20);
    assert.equal(overview.kana.total, 66);
    assert.equal(overview.lessons.total, 10);
    assert.equal(overview.lessons.completed, 4);
  });
});
