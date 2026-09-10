import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import request from 'supertest';

import { createApp } from '../src/app.js';

describe('health API', () => {
  it('returns liveness metadata', async () => {
    const response = await request(createApp()).get('/api/v1/health').expect(200);

    assert.equal(response.body.status, 'ok');
    assert.equal(response.body.service, 'miraigo-backend');
    assert.match(response.headers['x-request-id'], /^[0-9a-f-]{36}$/);
  });

  it('returns dependency readiness with an appropriate status', async () => {
    const ready = createApp({
      readinessCheck: async () => ({ status: 'ready', dependencies: {} }),
    });
    const unavailable = createApp({
      readinessCheck: async () => ({ status: 'not_ready', dependencies: {} }),
    });

    await request(ready).get('/api/v1/health/ready').expect(200);
    await request(unavailable).get('/api/v1/health/ready').expect(503);
  });

  it('returns a consistent not-found response', async () => {
    const response = await request(createApp()).get('/missing').expect(404);

    assert.equal(response.body.error.code, 'ROUTE_NOT_FOUND');
    assert.ok(response.body.error.requestId);
  });

  it('rejects unknown browser origins with a traceable error', async () => {
    const response = await request(createApp())
      .get('/api/v1/health')
      .set('Origin', 'https://untrusted.example')
      .expect(403);

    assert.equal(response.body.error.code, 'CORS_ORIGIN_DENIED');
    assert.ok(response.body.error.requestId);
  });
});
