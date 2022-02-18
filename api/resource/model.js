// build your `Resource` model here
const db = require('../../data/dbConfig');

function findResource() {
  return db('resources');
}

async function createResource(resource) {
  const [resource_id] = await db('resources').insert(resource);
  return findResource().where({ resource_id }).first();
}

module.exports = {
  findResource,
  createResource,
};
