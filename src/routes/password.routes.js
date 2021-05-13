import { Router } from 'express';

import PasswordController from '../controllers/PasswordController.js';

const passwordRouter = Router();

passwordRouter.post('/forgot', PasswordController.sendMailForgot);
// passwordRouter.post('/reset', PasswordController.resetPassword);

export default passwordRouter;
