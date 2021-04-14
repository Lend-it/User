import { Router } from 'express';

import RecoverController from '../controllers/RecoverController.js';

const recoverRouter = Router();

recoverRouter.patch('/', RecoverController.forgotPassword);
//recoverRouter.post('/', RecoverController.resetPassword);

export default recoverRouter;
