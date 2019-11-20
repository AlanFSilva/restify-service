const db = require('../../services/knex')

const userRoutes = (server) => {

    server.get('/user/all', (req, res, next) => {
        db.users().getAll().then((response) => {
            res.send(response)
            return next()
        })
            .catch((error) => {
                res.send(error)
                return next()
            })
    })

    server.get('/user/:id', (req, res, next) => {
        const { id } = req.params
        db.users().getUser(id).then((response) => {
            res.send(response)
            return next()
        })
            .catch((error) => {
                res.send(error)
                return next()
            })
    })

    server.post('/user', (req, res, next) => {
        //let {userId, name, email, password, type} = req.body
        db.users().update(req.body).then((response) => {
            res.send(response)
            return next()
        })
            .catch((error) => {
                res.send(error)
                return next()
            })
    })

    server.put('/user', (req, res, next) => {
        //let {name, email, password, type} = req.body
        db.users().newUser(req.body).then((response) => {
            res.send(response)
            return next()
        })
            .catch((error) => {
                res.send(error)
                return next()
            })
    })

    server.del('/user/:id', (req, res, next) => {
        const { id } = req.params
        db.users().remove(id).then((response) => {
            res.send(response)
            return next()
        })
            .catch((error) => {
                res.send(error)
                return next()
            })
    })
}

module.exports = userRoutes