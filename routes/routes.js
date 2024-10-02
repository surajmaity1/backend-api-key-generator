const express = require('express');
const apiRouter = express.Router();
const { generateApiKey } = require('../controllers/controllers');

apiRouter.post('/key', generateApiKey);

module.exports = apiRouter;