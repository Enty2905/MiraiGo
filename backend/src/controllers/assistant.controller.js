const {
  getAssistantSessionMessages,
  getAssistantSessions,
  sendAssistantMessage,
  streamAssistantMessage,
} = require('../services/assistant.service');

async function sendAssistantMessageController(req, res, next) {
  try {
    const result = await sendAssistantMessage(req.authUser.id, req.body || {});

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
}

async function streamAssistantMessageController(req, res, next) {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache, no-transform');
  res.setHeader('Connection', 'keep-alive');
  res.setHeader('X-Accel-Buffering', 'no');
  res.flushHeaders?.();

  try {
    const generator = streamAssistantMessage(req.authUser.id, req.body || {});

    for await (const event of generator) {
      res.write(`data: ${JSON.stringify(event)}\n\n`);
    }

    res.write('data: [DONE]\n\n');
    res.end();
  } catch (error) {
    res.write(`data: ${JSON.stringify({ type: 'error', error: error.message || 'Lỗi xử lý câu hỏi.' })}\n\n`);
    res.end();
  }
}

async function getAssistantSessionsController(req, res, next) {
  try {
    const sessions = await getAssistantSessions(req.authUser.id);

    res.status(200).json({
      sessions,
    });
  } catch (error) {
    next(error);
  }
}

async function getAssistantSessionMessagesController(req, res, next) {
  try {
    const result = await getAssistantSessionMessages(req.authUser.id, req.params.sessionId);

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getAssistantSessionMessagesController,
  getAssistantSessionsController,
  sendAssistantMessageController,
  streamAssistantMessageController,
};
