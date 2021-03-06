const { Router } = require('express');
const uploadConfig = require('../config/upload.js');
const multer = require('multer');

const UserController = require('../controllers/UserController.js');

const userRouter = Router();

userRouter.get('/', UserController.list);

userRouter.get('/:useremail', UserController.show);

userRouter.post('/', UserController.create);

userRouter.put('/', UserController.update);

userRouter.patch(
  '/avatar',
  upload.single('avatar'),
  UserController.updateAvatar
);
userRouter.patch('/location', UserController.updateLocation);

module.exports = userRouter;
