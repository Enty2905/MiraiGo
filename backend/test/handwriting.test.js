const test = require('node:test');
const assert = require('node:assert/strict');
const { getHandwritingHealth, predictHandwriting } = require('../src/services/handwriting.service');

const image = { imageDataUrl: 'data:image/png;base64,AA==' };
const stroke = { x: [10, 20], y: [20, 30], t: [0, 10] };
const json = (body, status = 200) => new Response(JSON.stringify(body), {
  status, headers: { 'Content-Type': 'application/json' },
});

test('supports the bundled JSON endpoint after a multipart endpoint 404', async (t) => {
  const calls = [];
  t.mock.method(globalThis, 'fetch', async (url, options) => {
    calls.push(new URL(url).pathname);
    if (calls.length === 1) return json({ detail: 'Not Found' }, 404);
    assert.deepEqual(JSON.parse(options.body), { imageData: image.imageDataUrl });
    return json({ candidates: [{ character: '学', confidence: 0.8 }] });
  });
  const result = await predictHandwriting(image);
  assert.deepEqual(calls, ['/predict/text', '/v1/recognize']);
  assert.equal(result.text, '学');
  assert.equal(result.average_confidence, 0.8);
});

test('preserves compatibility with multipart model servers', async (t) => {
  t.mock.method(globalThis, 'fetch', async (_url, options) => {
    assert(options.body instanceof FormData);
    return json({ text: '学', character_count: 1, average_confidence: 0.9 });
  });
  assert.equal((await predictHandwriting(image)).text, '学');
});

test('missing local model returns a service unavailable error', async (t) => {
  let calls = 0;
  t.mock.method(globalThis, 'fetch', async () => ++calls === 1
    ? json({}, 404) : json({ error: { message: 'No adapter' } }, 503));
  await assert.rejects(predictHandwriting(image), error => error.status === 503);
});

test('local liveness alone does not mark a missing model as ready', async (t) => {
  t.mock.method(globalThis, 'fetch', async url => new URL(url).pathname === '/health'
    ? json({ status: 'ok', service: 'miraigo-handwriting-ai' })
    : json({ model: { loaded: false } }, 503));
  const health = await getHandwritingHealth();
  assert.equal(health.connected, true);
  assert.equal(health.modelLoaded, false);
});

test('unreachable local service does not claim a verified cloud connection', async (t) => {
  t.mock.method(globalThis, 'fetch', async () => { throw new Error('offline'); });
  const health = await getHandwritingHealth();
  assert.equal(health.connected, false);
  assert.equal(health.modelLoaded, false);
});

test('cloud recognition never invents a confidence score', async (t) => {
  t.mock.method(globalThis, 'fetch', async () => json(['SUCCESS', [['id', ['学', '字']]]]));
  const result = await predictHandwriting({ strokes: [stroke] });
  assert.equal(result.text, '学');
  assert.deepEqual(result.candidates, ['学', '字']);
  assert.equal(result.average_confidence, null);
});

test('invalid strokes and canvas sizes fail before making an external request', async (t) => {
  const fetchMock = t.mock.method(globalThis, 'fetch', async () => { throw new Error('unexpected fetch'); });
  for (const payload of [
    { strokes: [null] }, { strokes: [{ ...stroke, y: [] }] },
    { strokes: [{ ...stroke, x: ['10', 20] }] },
    { strokes: [stroke], width: -1 }, { strokes: [stroke], height: 0 },
    { strokes: [stroke], width: 'invalid' }, { strokes: Array(129).fill(stroke) },
  ]) {
    await assert.rejects(predictHandwriting(payload), error => error.status === 400);
  }
  assert.equal(fetchMock.mock.callCount(), 0);
});

test('cloud service failures are distinguished from a legitimate empty result', async (t) => {
  t.mock.method(globalThis, 'fetch', async () => json(['SUCCESS', [['id', []]]]));
  assert.equal((await predictHandwriting({ strokes: [stroke] })).text, '');
  globalThis.fetch.mock.mockImplementation(async () => json(['ERROR']));
  await assert.rejects(predictHandwriting({ strokes: [stroke] }), error => error.status === 502);
  globalThis.fetch.mock.mockImplementation(async () => new Response('{invalid', {
    headers: { 'Content-Type': 'application/json' },
  }));
  await assert.rejects(predictHandwriting({ strokes: [stroke] }), error => error.status === 502);
});

test('invalid base64 images fail before contacting a model server', async (t) => {
  const fetchMock = t.mock.method(globalThis, 'fetch', async () => json({ text: 'unexpected' }));
  for (const encoded of ['AAAA!', 'AA==junk', 'A', 'AA=A']) {
    await assert.rejects(
      predictHandwriting({ imageDataUrl: `data:image/png;base64,${encoded}` }),
      error => error.status === 400,
    );
  }
  assert.equal(fetchMock.mock.callCount(), 0);
});

test('null upstream error payload is mapped to a gateway error', async (t) => {
  t.mock.method(globalThis, 'fetch', async () => json(null, 500));
  await assert.rejects(predictHandwriting(image), error => error.status === 502);
});

test('the 4 MB image boundary is enforced before uploading larger images', async (t) => {
  const fetchMock = t.mock.method(globalThis, 'fetch', async () => json({ text: '学' }));
  const imageDataUrl = 'data:image/png;base64,' + Buffer.alloc(4 * 1024 * 1024).toString('base64');
  assert.equal((await predictHandwriting({ imageDataUrl })).text, '学');
  await assert.rejects(predictHandwriting({
    imageDataUrl: 'data:image/png;base64,' + Buffer.alloc(4 * 1024 * 1024 + 1).toString('base64'),
  }), error => error.status === 400);
  assert.equal(fetchMock.mock.callCount(), 1);
});
