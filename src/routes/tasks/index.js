const db = require('../../services/knex')
const utils = require('../../utils')

const taskRoutes = (server) => {

    server.get('/tasks/all', (req, res, next) => {
        db.tasks().getAll().then((response) => {
            res.send(response)
            return next()
        })
            .catch((error) => {
                res.send(error)
                return next()
            })
    });

    server.get('/tasks/:id', (req, res, next) => {
        const { id } = req.params
        db.tasks().getTask(id).then((response) => {
            res.send(response)
            return next()
        })
            .catch((error) => {
                res.send(error)
                return next()
            })
    });

    server.post('/tasks', (req, res, next) => {
        //let {taskId, title, priority, description, projectId, userId, status} = req.body
        let data = { ...req.body, startDate: utils.getTimeStamp() }
        data.priority = utils.getPriorityValue(data.priority)
        data.endDate = data.status === "DONE" ? utils.getTimeStamp() : null
        if (data.priority !== "ERROR") {
            db.tasks().update(data).then((response) => {
                res.send(response)
                return next()
            })
                .catch((error) => {
                    res.send(error)
                    return next()
                })
        }
        else {
            res.send("Error: Invalid priority format")
            return next()
        }
    });

    server.put('/tasks', (req, res, next) => {
        //let {title, priority, description, projectId, userId, status} = req.body
        const data = { ...req.body, startDate: utils.getTimeStamp() }
        data.priority = utils.getPriorityValue(data.priority)
        if (data.priority !== "ERROR") {
            db.tasks().newTask(data).then((response) => {
                res.send(response)
                return next()
            })
                .catch((error) => {
                    res.send(error)
                    return next()
                })
        }
        else {
            res.send("Error: Invalid priority format")
            return next()
        }
    });

    server.del('/tasks/:id', (req, res, next) => {
        const { id } = req.params
        db.tasks().remove(id).then((response) => {
            res.send(response)
            return next()
        })
            .catch((error) => {
                res.send(error)
                return next()
            })
    });

    server.post('/tasks/change-status', (req, res, next) => {
        //let {taskId, status} = req.body
        let data = { ...req.body }
        data.endDate = data.status === "DONE" ? utils.getTimeStamp() : null
        db.tasks().chageStatus(data).then((response) => {
            res.send(response)
            return next()
        })
            .catch((error) => {
                res.send(error)
                return next()
            })
    });

    server.get('/tasks/search', (req, res, next) => {
        //let {searchBy, term, orderBy, direction} = req.query
        const data = utils.objectToLowerCase(req.query)
        db.tasks().searchTasks(data).then((response) => {
            res.send(response)
            return next()
        })
            .catch((error) => {
                res.send(error)
                return next()
            })
    });
}

module.exports = taskRoutes