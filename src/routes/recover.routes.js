import { Router } from 'express';

import RecoverRouter from '../controllers/RecoverController.js';

const recoverRouter = Router();

recoverRouter.patch('/', RecoverRouter.forgotPassord);

export default recoverRouter;
