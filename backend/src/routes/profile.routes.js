const express = require('express');
const {
  getMyProfileController,
  updateMyProfileController,
  changePasswordController,
} = require('../controllers/profile.controller');

const profileRouter = express.Router();

profileRouter.get('/me', getMyProfileController);
profileRouter.put('/me', updateMyProfileController);
profileRouter.put('/password', changePasswordController);

module.exports = {
  profileRouter,
};
