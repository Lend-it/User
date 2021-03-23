import { Router } from 'express';

import UserController from '../controllers/UserController.js';

const userRouter = Router();

userRouter.post('/', UserController.create);

export default userRouter;
