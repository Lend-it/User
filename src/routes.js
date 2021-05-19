const { Router } = require('express');

const userRouter = require('./routes/user.routes.js');
const sessionRouter = require('./routes/session.routes.js');

const routes = Router();

routes.use('/users', userRouter);
routes.use('/session', sessionRouter);

module.exports = routes;
