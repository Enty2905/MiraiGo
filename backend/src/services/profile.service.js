const userModel = require('../models/user.model');
const { hashPassword, verifyPassword } = require('../utils/password');
const { createHttpError } = require('../utils/http-error');

async function getMyProfile(userId) {
  const user = await userModel.findUserById(userId);
  if (!user) {
    throw createHttpError(404, 'Không tìm thấy hồ sơ người dùng.');
  }

  return user;
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
  changeMyPassword,
};
