const test = require('node:test');
const assert = require('node:assert/strict');
const { updateMyProfile } = require('../src/services/profile.service');
const userModel = require('../src/models/user.model');
const { pool } = require('../src/config/db');

test('updateMyProfile service unit tests', async (t) => {
  const originalUpdate = userModel.updateUserProfile;

  t.after(async () => {
    userModel.updateUserProfile = originalUpdate;
    await pool.end();
  });

  let savedUpdates = null;
  userModel.updateUserProfile = async (id, updates) => {
    savedUpdates = updates;
    return {
      id,
      email: 'student@miraigo.com',
      fullName: updates.fullName || 'Học viên MiraiGo',
      displayName: updates.displayName || null,
      avatarUrl: updates.avatarUrl || null,
      currentLevel: updates.currentLevel || 'N5',
    };
  };

  await t.test('fails when fullName is empty', async () => {
    await assert.rejects(
      async () => {
        await updateMyProfile('1', { fullName: '   ' });
      },
      (err) => {
        assert.equal(err.status, 400);
        assert.match(err.message, /Họ và tên không được để trống/);
        return true;
      }
    );
  });

  await t.test('fails when currentLevel is invalid', async () => {
    await assert.rejects(
      async () => {
        await updateMyProfile('1', { currentLevel: 'N9' });
      },
      (err) => {
        assert.equal(err.status, 400);
        assert.match(err.message, /N5, N4, N3, N2 hoặc N1/);
        return true;
      }
    );
  });

  await t.test('succeeds with valid updates', async () => {
    const result = await updateMyProfile('1', {
      fullName: 'Phan Bảo Huyền',
      displayName: 'Huyen-san',
      avatarUrl: '🌸',
      currentLevel: 'n5',
    });

    assert.equal(result.fullName, 'Phan Bảo Huyền');
    assert.equal(savedUpdates.fullName, 'Phan Bảo Huyền');
    assert.equal(savedUpdates.displayName, 'Huyen-san');
    assert.equal(savedUpdates.avatarUrl, '🌸');
    assert.equal(savedUpdates.currentLevel, 'N5');
  });
});
