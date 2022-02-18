// build your `/api/resources` router here
const express = require('express');
const resourceModel = require('./model');

const router = express.Router();

router.get('/', (req, res, next) => {
  resourceModel
    .findResource()
    .then((resources) => {
      res.json(resources);
    })
    .catch(next);
});

router.post('/', (req, res, next) => {
  resourceModel
    .createResource(req.body)
    .then((resource) => {
      res.status(201).json(resource);
    })
    .catch(next);
});

module.exports = router;
