const express = require('express');
const { getMyProfileController, changePasswordController } = require('../controllers/profile.controller');

const profileRouter = express.Router();

profileRouter.get('/me', getMyProfileController);
profileRouter.put('/password', changePasswordController);

module.exports = {
  profileRouter,
};
