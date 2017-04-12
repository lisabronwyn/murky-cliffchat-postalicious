const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const port = 3000

const routes = require('./routes.js')

const app = express()

const http = require('http').createServer(app)
const server = express.Router()

server.use(bodyParser.text({
  defaultCharset: 'utf-8',
  type: 'text/plain'
}))

server.use(express.static(path.join(__dirname, "public")))

app.get('/', (request, response) => {
  response.set('content-type', 'text/plain')
  response.status(200).send('Welcome to Sandbox!')
})

server.get('/search', (request, response) => {
  if(request.query.q) {
    response.status(200)
      .type('text/plain')
        .send('You searched for: \"' + request.query.q + '\"')
}
    response.status(400)
      .type('text/plain')
        .send('You didn\'t provide a search query term \:\(')
})

server.post('/things', (request, response) => {
  response.set('Content-Type', 'text/plain')
  response.status(201).send('New thing created: \"' + request.body + '\"!')
})

app.use('/', routes)

http.listen(port)

module.exports = app
