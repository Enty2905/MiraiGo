const {
  getCompletedLessons,
  getKanaProgress,
  getLearningActivity,
  getProgressOverview,
  markLessonComplete,
  saveLessonQuiz,
  syncKanaProgressBatch,
  toggleKanaMastered,
} = require('../services/progress.service');

async function getProgressOverviewController(req, res, next) {
  try {
    const overview = await getProgressOverview(req.authUser.id);

    res.status(200).json({
      overview,
    });
  } catch (error) {
    next(error);
  }
}

async function getCompletedLessonsController(req, res, next) {
  try {
    const completedLessons = await getCompletedLessons(req.authUser.id);

    res.status(200).json({
      completedLessons,
    });
  } catch (error) {
    next(error);
  }
}

async function getLearningActivityController(req, res, next) {
  try {
    const activity = await getLearningActivity(req.authUser.id);

    res.status(200).json({
      activity,
    });
  } catch (error) {
    next(error);
  }
}

async function completeLessonController(req, res, next) {
  try {
    const progress = await markLessonComplete(req.authUser.id, req.body || {});

    res.status(200).json({
      message: 'Đã lưu tiến độ bài học.',
      progress,
    });
  } catch (error) {
    next(error);
  }
}

async function saveLessonQuizController(req, res, next) {
  try {
    const progress = await saveLessonQuiz(req.authUser.id, req.body || {});

    res.status(200).json({
      message: 'Da luu ket qua bai kiem tra.',
      progress,
    });
  } catch (error) {
    next(error);
  }
}

async function getKanaProgressController(req, res, next) {
  try {
    const data = await getKanaProgress(req.authUser.id, req.params.kanaType || null);

    res.status(200).json({
      data,
    });
  } catch (error) {
    next(error);
  }
}

async function toggleKanaMasteredController(req, res, next) {
  try {
    const result = await toggleKanaMastered(req.authUser.id, req.body || {});

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
}

async function syncKanaProgressBatchController(req, res, next) {
  try {
    const result = await syncKanaProgressBatch(req.authUser.id, req.body || {});

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  completeLessonController,
  getKanaProgressController,
  getLearningActivityController,
  getCompletedLessonsController,
  getProgressOverviewController,
  saveLessonQuizController,
  syncKanaProgressBatchController,
  toggleKanaMasteredController,
};
