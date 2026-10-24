const express = require('express');
const {
  completeLessonController,
  getKanaProgressController,
  getLearningActivityController,
  getCompletedLessonsController,
  getProgressOverviewController,
  saveLessonQuizController,
  syncKanaProgressBatchController,
  toggleKanaMasteredController,
} = require('../controllers/progress.controller');

const progressRouter = express.Router();

progressRouter.get('/overview', getProgressOverviewController);
progressRouter.get('/activity', getLearningActivityController);
progressRouter.get('/lessons', getCompletedLessonsController);
progressRouter.post('/lesson-complete', completeLessonController);
progressRouter.post('/lesson-quiz', saveLessonQuizController);

progressRouter.get('/kana', getKanaProgressController);
progressRouter.get('/kana/:kanaType', getKanaProgressController);
progressRouter.post('/kana/toggle', toggleKanaMasteredController);
progressRouter.post('/kana/sync', syncKanaProgressBatchController);

module.exports = {
  progressRouter,
};
