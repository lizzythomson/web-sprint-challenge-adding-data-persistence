// build your `/api/tasks` router here
const express = require('express');
const taskModel = require('./model');

const router = express.Router();

router.get('/', (req, res, next) => {
  taskModel
    .findTask()
    .then((tasks) => {
      res.json(tasks);
    })
    .catch(next);
});

router.post('/', (req, res, next) => {
  taskModel
    .create(req.body)
    .then((task) => {
      res.status(201).json(task);
    })
    .catch(next);
});

module.exports = router;
