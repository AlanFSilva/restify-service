const db = require('../../services/knex')

const projectRoutes = (server) => {

    server.get('/project/all', (req, res, next) => {
        db.projects().getAll().then((response) => {
            res.send(response)
            return next();
        })
            .catch((error) => {
                res.send(error)
                return next()
            })
    })

    server.get('/project/:id', (req, res, next) => {
        const { id } = req.params
        db.projects().getProject(id).then((response) => {
            res.send(response)
            return next();
        })
            .catch((error) => {
                res.send(error)
                return next()
            })
    })

    server.post('/project', (req, res, next) => {
        //let { projectId, company, name, team } = req.body
        db.projects().update(req.body).then((response) => {
            res.send(response)
            return next()
        })
            .catch((error) => {
                res.send(error)
                return next()
            })
    })

    server.put('/project', (req, res, next) => {
        //let { company, name, team } = req.body
        db.projects().newProject(req.body).then((response) => {
            res.send(response)
            return next()
        })
            .catch((error) => {
                res.send(error)
                return next()
            })
    })

    server.del('/project/:id', (req, res, next) => {
        const { id } = req.params
        db.projects().remove(id).then((response) => {
            res.send(response)
            return next()
        })
            .catch((error) => {
                res.send(error)
                return next()
            })
    })

    server.post('/project/manage-team', (req, res, next) => {
        // let { projectId, teamMember, opt } = req.body
        db.projects().manageTeam(req.body).then((response) => {
            res.send(response)
            return next()
        })
            .catch((error) => {
                res.send(error)
                return next()
            })
    })
}

module.exports = projectRoutes