const { Router } = require('express');

const PasswordController = require('../controllers/PasswordController.js');

const passwordRouter = Router();

passwordRouter.post('/forgot', PasswordController.sendMailForgot);
passwordRouter.patch('/reset', PasswordController.resetPassword);

module.exports = passwordRouter;
