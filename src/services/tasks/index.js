
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
    searchTasks: (data) => {
      return new Promise((resolve, reject) => {
        const { searchBy, term, orderBy, direction } = data
        const search = searchBy === "user" ? "userId" : searchBy === "project" ? "projectId" : searchBy === "status"? "status" : "invalid"
        const order =  orderBy === "startdate" ? "startDate" :  orderBy === "status" ? orderBy :  orderBy === "priority" ? orderBy : "invalid"
        if(search !== "invalid" && order !== "invalid")
        {
          knex('tasks').where({ [search]: term }).orderBy(order, direction)
          .then((rows) => {
            resolve(rows)
          })
          .catch((error) => {
            reject(error)
          })
        }
        else{
          const errorMessage = search === "invalid"? "The searched term is invalid" : order === "invalid" ? "The order term is invalid": "The order and terms are incorrect" 
          reject(`${errorMessage}, access https://github.com/AlanFSilva/restify-service/ to see the correct way"`)
        }
      })
    },

  }
}

module.exports = tasksQueries