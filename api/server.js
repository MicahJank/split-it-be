const express = require('express');

const configureMiddleware = require('./configureMiddleware.js');

const apiRouter = require('./apiRouter.js');

const server = express();

// pass in the server to use in the configureMiddleware file
configureMiddleware(server);

server.use('/api', apiRouter);


server.get('/', (req, res) => {
    res.send('<h1>Welcome to Split It API</h1>');
});


module.exports = server;