const express = require('express');
const {
  getAssistantSessionMessagesController,
  getAssistantSessionsController,
  sendAssistantMessageController,
  streamAssistantMessageController,
} = require('../controllers/assistant.controller');

const assistantRouter = express.Router();

assistantRouter.get('/sessions/:sessionId', getAssistantSessionMessagesController);
assistantRouter.get('/sessions', getAssistantSessionsController);
assistantRouter.post('/chat', sendAssistantMessageController);
assistantRouter.post('/chat/stream', streamAssistantMessageController);

module.exports = {
  assistantRouter,
};
