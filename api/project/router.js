// build your `/api/projects` router here
const express = require('express');
const projectModel = require('./model');

const router = express.Router();

router.get('/', (req, res, next) => {
  projectModel
    .findProjects()
    .then((projects) => {
      res.json(projects);
    })
    .catch(next);
});

router.post('/', (req, res, next) => {
  projectModel
    .createProject(req.body)
    .then((project) => {
      res.status(201).json(project);
    })
    .catch(next);
});

module.exports = router;
