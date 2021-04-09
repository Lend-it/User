import { Router } from 'express';
import verifyToken from '../middlewares/auth.js';
import uploadConfig from '../config/upload.js';
import multer from 'multer';

import UserController from '../controllers/UserController.js';

const userRouter = Router();

const upload = multer(uploadConfig.upload('./tmp'));

userRouter.get('/', UserController.list);

userRouter.get('/:useremail', UserController.show);

userRouter.post('/', UserController.create);

userRouter.put('/', verifyToken, UserController.update);

userRouter.patch('/avatar', verifyToken, upload.single('avatar'), UserController.updateAvatar);

export default userRouter;
