// build your `Task` model here
const db = require('../../data/dbConfig');

function findTasks() {
  return db('tasks');
}

async function createTask(task) {
  console.log('here 2');
  const [task_id] = await db('tasks').insert(task);
  console.log('here 3');
  return findTasks().where({ task_id }).first();
}

module.exports = {
  findTasks,
  createTask,
};
