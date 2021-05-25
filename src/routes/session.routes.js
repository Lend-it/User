const { Router } = require('express');

const SessionController = require('../controllers/SessionController.js');

const sessionRouter = Router();

sessionRouter.post('/', SessionController.create);

module.exports = sessionRouter;
