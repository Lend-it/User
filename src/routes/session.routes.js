import { Router } from 'express';

import SessionController from '../controllers/SessionController.js';

const sessionRouter = Router();

sessionRouter.post('/', SessionController.create);

export default sessionRouter;
