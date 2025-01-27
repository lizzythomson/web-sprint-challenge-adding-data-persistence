// build your `Project` model here
const db = require('../../data/dbConfig');
const convertIntToBool = require('../convertIntToBool');

async function findProjects() {
  const results = await db('projects');

  results.forEach((result) => {
    convertIntToBool(result, 'project_completed');
  });

  return results;
}

async function createProject(project) {
  const [project_id] = await db('projects').insert(project);
  const result = await db('projects').where({ project_id }).first();

  convertIntToBool(result, 'project_completed');

  return result;
}

module.exports = {
  findProjects,
  createProject,
};
