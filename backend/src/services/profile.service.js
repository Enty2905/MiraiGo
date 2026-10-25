const userModel = require('../models/user.model');
const { hashPassword, verifyPassword } = require('../utils/password');
const { createHttpError } = require('../utils/http-error');

const VALID_LEVELS = new Set(['N5', 'N4', 'N3', 'N2', 'N1']);

async function getMyProfile(userId) {
  const user = await userModel.findUserById(userId);
  if (!user) {
    throw createHttpError(404, 'Không tìm thấy hồ sơ người dùng.');
  }

  return user;
}

async function updateMyProfile(userId, payload = {}) {
  const updates = {};

  if (payload.fullName !== undefined) {
    if (typeof payload.fullName !== 'string' || !payload.fullName.trim()) {
      throw createHttpError(400, 'Họ và tên không được để trống.');
    }
    if (payload.fullName.trim().length > 255) {
      throw createHttpError(400, 'Họ và tên không được vượt quá 255 ký tự.');
    }
    updates.fullName = payload.fullName.trim();
  }

  if (payload.displayName !== undefined) {
    if (payload.displayName === null || payload.displayName === '') {
      updates.displayName = null;
    } else if (typeof payload.displayName === 'string') {
      const trimmed = payload.displayName.trim();
      if (trimmed.length > 255) {
        throw createHttpError(400, 'Tên hiển thị không được vượt quá 255 ký tự.');
      }
      updates.displayName = trimmed;
    }
  }

  if (payload.currentLevel !== undefined) {
    if (payload.currentLevel === null || payload.currentLevel === '') {
      updates.currentLevel = null;
    } else {
      const levelUpper = String(payload.currentLevel).trim().toUpperCase();
      if (!VALID_LEVELS.has(levelUpper)) {
        throw createHttpError(400, 'Cấp độ tiếng Nhật phải là N5, N4, N3, N2 hoặc N1.');
      }
      updates.currentLevel = levelUpper;
    }
  }

  if (payload.avatarUrl !== undefined) {
    if (payload.avatarUrl === null || payload.avatarUrl === '') {
      updates.avatarUrl = null;
    } else if (typeof payload.avatarUrl === 'string') {
      updates.avatarUrl = payload.avatarUrl.trim();
    }
  }

  if (payload.timezone !== undefined && typeof payload.timezone === 'string') {
    updates.timezone = payload.timezone.trim();
  }

  const updatedUser = await userModel.updateUserProfile(userId, updates);
  if (!updatedUser) {
    throw createHttpError(404, 'Không tìm thấy hồ sơ người dùng.');
  }

  return updatedUser;
}

async function changeMyPassword(userId, { currentPassword, newPassword, confirmPassword } = {}) {
  if (!currentPassword || typeof currentPassword !== 'string' || !currentPassword.trim()) {
    throw createHttpError(400, 'Vui lòng nhập mật khẩu hiện tại.');
  }

  if (!newPassword || typeof newPassword !== 'string' || newPassword.length < 6) {
    throw createHttpError(400, 'Mật khẩu mới phải có ít nhất 6 ký tự.');
  }

  if (newPassword !== confirmPassword) {
    throw createHttpError(400, 'Mật khẩu xác nhận không trùng khớp.');
  }

  if (newPassword === currentPassword) {
    throw createHttpError(400, 'Mật khẩu mới không được trùng với mật khẩu hiện tại.');
  }

  const user = await userModel.findUserWithPasswordById(userId);
  if (!user) {
    throw createHttpError(404, 'Không tìm thấy hồ sơ người dùng.');
  }

  const isCurrentValid = await verifyPassword(currentPassword, user.passwordHash);
  if (!isCurrentValid) {
    throw createHttpError(400, 'Mật khẩu hiện tại không chính xác.');
  }

  const newHash = await hashPassword(newPassword);
  await userModel.updateUserPassword(userId, newHash);

  return {
    success: true,
    message: 'Đổi mật khẩu thành công.',
  };
}

module.exports = {
  getMyProfile,
  updateMyProfile,
  changeMyPassword,
};
