const { test } = require('node:test');
const assert = require('node:assert/strict');
const {
  getGroqModel,
  sanitizeAssistantOutput,
  createJapaneseTutorStream,
} = require('../src/services/groq.service');

test('sanitizeAssistantOutput strips <think> blocks and extra markdown symbols', () => {
  const input = '<think>internal reflection</think>## Tiêu đề\n\n**Từ vựng:** こんにちは';
  const sanitized = sanitizeAssistantOutput(input);
  assert.equal(sanitized.includes('internal reflection'), false);
  assert.equal(sanitized.includes('##'), false);
  assert.match(sanitized, /Từ vựng: こんにちは/);
});

test('getGroqModel returns default or configured model', () => {
  const model = getGroqModel();
  assert.ok(typeof model === 'string' && model.length > 0);
});

test('createJapaneseTutorStream yields chunks for simulated/fallback tutor', async () => {
  const messages = [{ role: 'user', content: 'Xin chào' }];
  const chunks = [];

  for await (const chunk of createJapaneseTutorStream(messages, { level: 'N5' })) {
    chunks.push(chunk);
    if (chunks.length >= 3) break;
  }

  assert.ok(chunks.length >= 3);
  assert.ok(chunks.some((c) => c.length > 0));
});
