import { Router } from 'express';

import userRouter from './routes/user.routes.js';
import sessionRouter from './routes/session.routes.js';

const routes = Router();

routes.use('/users', userRouter);
routes.use('/session', sessionRouter);

export default routes;
