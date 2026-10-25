const { getMyProfile, updateMyProfile, changeMyPassword } = require('../services/profile.service');

async function getMyProfileController(req, res, next) {
  try {
    const profile = await getMyProfile(req.authUser.id);

    res.status(200).json({
      profile,
    });
  } catch (error) {
    next(error);
  }
}

async function updateMyProfileController(req, res, next) {
  try {
    const profile = await updateMyProfile(req.authUser.id, req.body);

    res.status(200).json({
      success: true,
      message: 'Cập nhật hồ sơ thành công.',
      profile,
    });
  } catch (error) {
    next(error);
  }
}

async function changePasswordController(req, res, next) {
  try {
    const result = await changeMyPassword(req.authUser.id, req.body);

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getMyProfileController,
  updateMyProfileController,
  changePasswordController,
};
