import { Router } from 'express';

import userRouter from './routes/user.routes.js';
import sessionRouter from './routes/session.routes.js';
import recoveryUser from './routes/recover.routes.js';

const routes = Router();

routes.use('/users', userRouter);
routes.use('/session', sessionRouter);
routes.use('/recovery', recoveryUser);
routes.use('/resetPassword', recoveryUser);

export default routes;
