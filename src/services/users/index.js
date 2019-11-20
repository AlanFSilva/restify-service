
const userQueries = props => {
  const { knex } = props
  return {
    getAll: () => {
      return new Promise((resolve, reject) => {
        knex.select('*').from('users')
          .then((rows) => {
            resolve(rows)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    getUser: (id) => {
      return new Promise((resolve, reject) => {
        knex('users').where('id', id)
          .then((rows) => {
            resolve(rows)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    newUser: (data) => {
      return new Promise((resolve, reject) => {
        let { name, email, password, type } = data
        knex.insert({ name: name, email: email, password: password, type: type }).into('users')
          .then((row) => {
            let response = `new user Id: ${row}`
            resolve(response)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    remove: (id) => {
      return new Promise((resolve, reject) => {
        knex('users').where('id', id).del()
          .then((rows) => {
            resolve("user removed successfully")
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    update: (data) => {
      return new Promise((resolve, reject) => {
        let { userId, name, email, password, type } = data
        knex('users').where({ id: userId }).update({ name: name, email: email, password: password, type: type })
          .then((rows) => {
            resolve("updated successfully")
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
  }
}

module.exports = userQueries