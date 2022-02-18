// build your server here and require it from index.js
const express = require('express');

const projectRouter = require('./project/router');
const resourceRouter = require('./resource/router');
const taskRouter = require('./task/router');

const server = express();

server.use(express.json());

server.use('/api/projects', projectRouter);
server.use('/api/resources', resourceRouter);
server.use('/api/tasks', taskRouter);

server.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: 'Server Error',
    err: err.message,
  });
});

module.exports = server;
