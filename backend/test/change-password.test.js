const test = require('node:test');
const assert = require('node:assert/strict');
const { changeMyPassword } = require('../src/services/profile.service');
const { hashPassword, verifyPassword } = require('../src/utils/password');
const userModel = require('../src/models/user.model');
const { pool } = require('../src/config/db');

test('changeMyPassword service unit tests', async (t) => {
  const originalFind = userModel.findUserWithPasswordById;
  const originalUpdate = userModel.updateUserPassword;

  t.after(async () => {
    userModel.findUserWithPasswordById = originalFind;
    userModel.updateUserPassword = originalUpdate;
    await pool.end();
  });

  const testOldPassword = 'Password123!';
  const testOldHash = await hashPassword(testOldPassword);

  userModel.findUserWithPasswordById = async (id) => {
    if (id === 'user-1') {
      return {
        id: 'user-1',
        email: 'test@example.com',
        fullName: 'Test User',
        passwordHash: testOldHash,
      };
    }
    return null;
  };

  let updatedHash = null;
  userModel.updateUserPassword = async (id, newHash) => {
    updatedHash = newHash;
    return { id, email: 'test@example.com', fullName: 'Test User' };
  };

  await t.test('fails when currentPassword is missing', async () => {
    await assert.rejects(
      async () => {
        await changeMyPassword('user-1', {
          currentPassword: '',
          newPassword: 'NewPassword123!',
          confirmPassword: 'NewPassword123!',
        });
      },
      (err) => {
        assert.equal(err.status, 400);
        assert.match(err.message, /Vui lòng nhập mật khẩu hiện tại/);
        return true;
      }
    );
  });

  await t.test('fails when newPassword is less than 6 chars', async () => {
    await assert.rejects(
      async () => {
        await changeMyPassword('user-1', {
          currentPassword: testOldPassword,
          newPassword: '123',
          confirmPassword: '123',
        });
      },
      (err) => {
        assert.equal(err.status, 400);
        assert.match(err.message, /ít nhất 6 ký tự/);
        return true;
      }
    );
  });

  await t.test('fails when confirmPassword does not match', async () => {
    await assert.rejects(
      async () => {
        await changeMyPassword('user-1', {
          currentPassword: testOldPassword,
          newPassword: 'NewPassword123!',
          confirmPassword: 'MismatchPassword!',
        });
      },
      (err) => {
        assert.equal(err.status, 400);
        assert.match(err.message, /không trùng khớp/);
        return true;
      }
    );
  });

  await t.test('fails when new password is the same as current password', async () => {
    await assert.rejects(
      async () => {
        await changeMyPassword('user-1', {
          currentPassword: testOldPassword,
          newPassword: testOldPassword,
          confirmPassword: testOldPassword,
        });
      },
      (err) => {
        assert.equal(err.status, 400);
        assert.match(err.message, /không được trùng/);
        return true;
      }
    );
  });

  await t.test('fails when current password is incorrect', async () => {
    await assert.rejects(
      async () => {
        await changeMyPassword('user-1', {
          currentPassword: 'WrongPassword123',
          newPassword: 'BrandNewPassword123',
          confirmPassword: 'BrandNewPassword123',
        });
      },
      (err) => {
        assert.equal(err.status, 400);
        assert.match(err.message, /Mật khẩu hiện tại không chính xác/);
        return true;
      }
    );
  });

  await t.test('succeeds with valid passwords', async () => {
    const result = await changeMyPassword('user-1', {
      currentPassword: testOldPassword,
      newPassword: 'BrandNewPassword123',
      confirmPassword: 'BrandNewPassword123',
    });

    assert.equal(result.success, true);
    assert.equal(result.message, 'Đổi mật khẩu thành công.');
    assert.ok(updatedHash);
    const verified = await verifyPassword('BrandNewPassword123', updatedHash);
    assert.equal(verified, true);
  });
});
