const { test } = require('node:test');
const assert = require('node:assert/strict');
const { hashPassword, verifyPassword } = require('../src/utils/password');

test('password hashes are salted and verify only the matching password', async () => {
  const password = 'a-long-test-password';
  const first = await hashPassword(password);
  const second = await hashPassword(password);
  assert.notEqual(first, second);
  assert.equal(await verifyPassword(password, first), true);
  assert.equal(await verifyPassword('wrong-password', first), false);
});

test('rejects malformed stored hashes including trailing segments', async () => {
  const valid = await hashPassword('test-password');
  for (const hash of [null, {}, '', 'salt:hash', valid + ':extra', valid.slice(0, -1),
    valid.replace(':', ':z')]) {
    assert.equal(await verifyPassword('test-password', hash), false);
  }
});

test('invalid password input is rejected without invoking scrypt', async () => {
  for (const password of [undefined, null, {}, [], 123, '']) {
    await assert.rejects(hashPassword(password), TypeError);
    assert.equal(await verifyPassword(password, 'a'.repeat(32) + ':' + 'b'.repeat(128)), false);
  }
});
