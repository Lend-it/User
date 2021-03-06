const { Router } = require('express');

const userRouter = require('./routes/user.routes.js');
const sessionRouter = require('./routes/session.routes.js');
const passwordRouter = require('./routes/password.routes.js');

const routes = Router();

routes.use('/users', userRouter);
routes.use('/session', sessionRouter);
routes.use('/password', passwordRouter);

module.exports = routes;
