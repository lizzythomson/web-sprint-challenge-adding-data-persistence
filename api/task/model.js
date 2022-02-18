// build your `Task` model here
const db = require('../../data/dbConfig');
const convertIntToBool = require('../convertIntToBool');

async function findTasks() {
  const results = await db('tasks')
    .select('tasks.*', 'projects.project_name', 'projects.project_description')
    .leftJoin('projects', 'tasks.project_id', 'projects.project_id');

  results.forEach((result) => convertIntToBool(result, 'task_completed'));

  return results;
}

async function createTask(task) {
  const [task_id] = await db('tasks').insert(task);
  const result = await db('tasks').where({ task_id }).first();

  convertIntToBool(result, 'task_completed');
  return result;
}

module.exports = {
  findTasks,
  createTask,
};
