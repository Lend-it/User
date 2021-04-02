import { Router } from 'express';

import UserController from '../controllers/UserController.js';

const userRouter = Router();

userRouter.get('/', UserController.list);

userRouter.get('/:useremail', UserController.show);

userRouter.post('/', UserController.create);

export default userRouter;
