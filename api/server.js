const express = require('express');

const configureMiddleware = require('./configureMiddleware.js');

const apiRouter = require('./apiRouter.js');

const server = express();


server.use('/api', apiRouter);


server.get('/', (req, res) => {
    res.send('<h1>Welcome to Split It API</h1>');
});


module.exports = server;