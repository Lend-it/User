import { Router } from 'express';
import verifyToken from '../middlewares/auth.js';

import UserController from '../controllers/UserController.js';

const userRouter = Router();

userRouter.get('/', UserController.list);

userRouter.get('/:useremail', UserController.show);

userRouter.post('/', UserController.create);

userRouter.put('/', verifyToken, UserController.update);

export default userRouter;
