
const projectsQueries = props => {
  const { knex } = props
  return {
    getAll: () => {
      return new Promise((resolve, reject) => {
        knex.select('*').from('projects')
          .then((rows) => {
            resolve(rows)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    getProject: (id) => {
      return new Promise((resolve, reject) => {
        knex('projects').where('id', id)
          .then((response) => {
            resolve(response)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    newProject: (data) => {
      return new Promise((resolve, reject) => {
        let { company, name, team } = data
        console.log(data)
        knex.insert({ company: company, name: name, team: team }).into('projects')
          .then((row) => {
            let response = `new project Id: ${row}`
            resolve(response)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    remove: (id) => {
      return new Promise((resolve, reject) => {
        knex('projects').where('id', id).del()
          .then((rows) => {
            if (rows == 1) {
              knex('tasks').where('projectId', id).del()
                .then((rows) => {
                  resolve("project removed successfully")
                })
                .catch((error) => {
                  reject(error)
                })
            }
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    update: (data) => {
      return new Promise((resolve, reject) => {
        let { projectId, company, name, team } = data
        knex('projects').where({ id: projectId }).update({ company: company, name: name, team: team })
          .then((rows) => {
            resolve("updated successfully")
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    manageTeam: (data) => {
      return new Promise((resolve, reject) => {
        const { projectId, teamMember, opt } = data
        knex.select('*').from('projects').where({ id: projectId }).then((rows) => {
          if (rows.length >= 1) {
            const team = JSON.parse(rows[0].team)
            const member = parseInt(teamMember)

            if (opt == "ADD") {
              team.push(member)
            }
            else {
              const index = team.indexOf(member)
              if(index > -1){
                team.splice(index, 1)
              }
            }
            knex('projects').where({ id: projectId }).update({ team: JSON.stringify(team) })
              .then((rows) => {
                let action = opt == "ADD"? "added" : "removed"
                resolve(`team member (userId:${member}) ${action} successfully`)
              })
              .catch((error) => {
                reject(error)
              })
          }else{
            resolve("Project Not Found")
          }
        })
      })
    },
  }
}

module.exports = projectsQueries