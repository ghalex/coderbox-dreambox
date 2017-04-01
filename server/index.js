const Hapi = require('hapi')
const server = new Hapi.Server()
const chalk = require('chalk')
const path = require('path')

server.connection({ host: 'localhost', port: 8080 })

server.register(require('inert'), () => { })
server.register(require('vision'), (err) => {
  if (err) {
    throw err
  }

  // Template engine
  server.views({
    path: __dirname,
    engines: { pug: require('pug') },
    compileOptions: { pretty: true }
  })

  // Static files
  server.route({
    method: 'GET',
    path: '/build/{filename}',
    handler: function (request, reply) {
      return reply.file(path.join(__dirname, '../build', request.params.filename))
    }
  })

  // Images
  server.route({
    method: 'GET',
    path: '/images/{filename}',
    handler: function (request, reply) {
      return reply.file(path.join(__dirname, '../images', request.params.filename))
    }
  })

  // Routes
  server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
      reply.view('index', { title: 'Some test' })
    }
  })

  server.start(() => {
    console.log(chalk.bgCyan('[web]:'), 'server ready on 8080.')
  })
})
