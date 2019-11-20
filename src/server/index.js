const restify = require('restify')
const corsMiddleware = require('restify-cors-middleware')
const usersRoutes = require('../routes/users')
const tasksRoutes = require('../routes/tasks')
const projectsRoutes = require('../routes/projects')
const utils = require('../utils')

const server = restify.createServer()

const cors = corsMiddleware({
  preflightMaxAge: 5, //Optional
  origins: ['*'],
  allowHeaders: ['*'],
  exposeHeaders: ['*']
})

server.pre(cors.preflight)
server.use(cors.actual)
server.use(restify.plugins.bodyParser())
server.use(restify.plugins.queryParser());

usersRoutes(server)
tasksRoutes(server)
projectsRoutes(server)

server.get('/', (req, res, next) => {
  const data = utils.getHomeBody()
  res.setHeader('Content-Type', 'text/html')
  res.writeHead(200)
  res.end(data)
  return next()
});


module.exports = server