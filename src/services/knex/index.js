const knex = require('knex')({
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      user : 'root',
      password : '123456',
      database : 'rest-service'
    }
});

const usersQueries = require('../users')({knex})
const tasksQueries = require('../tasks')({knex})
const projectsQueries = require('../projects')({knex})

module.exports = {
    users: () => usersQueries,
    tasks: () => tasksQueries,
    projects: () => projectsQueries
}