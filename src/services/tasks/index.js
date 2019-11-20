
const tasksQueries = props => {
  const { knex } = props
  return {
    getAll: () => {
      return new Promise((resolve, reject) => {
        knex.select('*').from('tasks')
          .then((rows) => {
            resolve(rows)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    getTask: (id) => {
      return new Promise((resolve, reject) => {
        knex('tasks').where('id', id)
          .then((rows) => {
            resolve(rows)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    newTask: (data) => {
      return new Promise((resolve, reject) => {
        let { title, priority, description, projectId, userId, startDate, status } = data
        console.log(data)
        knex.insert({
          title: title,
          priority: priority,
          description: description,
          projectId: projectId,
          userId: userId,
          startDate: startDate,
          status: status
        }).into('tasks')
          .then((rows) => {
            let response = `new task Id: ${rows}`
            resolve(response)
          })
          .catch((error) => {
            reject(error)
            console.log(error)
          })
      })
    },
    remove: (id) => {
      return new Promise((resolve, reject) => {
        knex('tasks').where('id', id).del()
          .then((rows) => {
            resolve("task removed successfully")
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    update: (data) => {
      return new Promise((resolve, reject) => {
        let { taskId, title, priority, description, userId, startDate, status, endDate } = data
        knex('tasks').where({ id: taskId }).update({
          title: title,
          priority: priority,
          description: description,
          userId: userId,
          startDate: startDate,
          endDate: endDate,
          status: status
        })
          .then((rows) => {
            resolve("updated successfully")
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    chageStatus: (data) => {
      return new Promise((resolve, reject) => {
        let { taskId, status, endDate } = data
        knex('tasks').where({ id: taskId }).update(
          {
            status: status,
            endDate: endDate
          })
          .then((rows) => {
            resolve(`task (id:${taskId}) status changed to ${status} successfully`)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
  }
}

module.exports = tasksQueries