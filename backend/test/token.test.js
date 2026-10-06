const { test } = require('node:test');
const assert = require('node:assert/strict');
const crypto = require('node:crypto');
const { createAccessToken, verifyAccessToken } = require('../src/utils/token');

const user = { id: '42', email: 'learner@example.com', role: 'student' };

test('token round trip supports PostgreSQL bigint IDs', () => {
  assert.equal(verifyAccessToken(createAccessToken(user)).sub, '42');
});

test('rejects malformed and tampered tokens', () => {
  const token = createAccessToken(user);
  for (const input of [null, '', 'invalid', token + '.extra', token + 'x']) {
    assert.equal(verifyAccessToken(input), null);
  }
});

test('rejects signed payloads with invalid claims', () => {
  const now = Date.now();
  const valid = { sub: '42', email: user.email, role: user.role, iat: now - 1000, exp: now + 60000 };
  const secret = process.env.AUTH_SECRET?.trim() || 'dev-auth-secret';
  for (const payload of [null, [], { ...valid, sub: '0' }, { ...valid, role: 'owner' },
    { ...valid, email: '' }, { ...valid, exp: now - 1 },
    { ...valid, iat: now + 60000 }, { ...valid, exp: 'tomorrow' }]) {
    const encoded = Buffer.from(JSON.stringify(payload)).toString('base64url');
    const signature = crypto.createHmac('sha256', secret).update(encoded).digest('base64url');
    assert.equal(verifyAccessToken(encoded + '.' + signature), null);
  }
});

test('production refuses to sign tokens without a configured secret', (t) => {
  const originalEnvironment = { NODE_ENV: process.env.NODE_ENV, AUTH_SECRET: process.env.AUTH_SECRET };
  t.after(() => {
    for (const [key, value] of Object.entries(originalEnvironment)) {
      if (value === undefined) delete process.env[key];
      else process.env[key] = value;
    }
  });
  process.env.NODE_ENV = 'production';
  process.env.AUTH_SECRET = '  ';
  assert.throws(() => createAccessToken(user), /AUTH_SECRET/);
});
