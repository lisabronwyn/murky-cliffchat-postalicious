const express = require('express')
// const bodyParser = require('body-parser')
// const path = require('path')
// const port = 3000
const routes = require('./routes')
const server = express()
// const http = require('http').createServer(server)

server.use('/', routes)

server.get('/', (request, response) => {
  response.set('content-type', 'text/plain')
  response.status(200).send('Welcome to Sandbox!')
})

server.get('/search', (request, response) => {
  if ('q' in request.query) {
    response.set('content-type', 'text/plain')
    response.status(200).send(`You searched for: "${request.query.q}"`)
  } else {
    response.set('content-type', 'text/plain')
    response.status(400).send("You didn't provide a search query term :(")
  }
})

server.post('/things', (request, response) => {
  response.status(201)
    .set('content-type', 'text/plain')
      .send('New thing created: flying car!')
})

server.get('/somefile', (request, response) => {
  response.set('content-type', 'text/plain')
    response.status(200).send('This is a plain text file')
})

server.get('/somefiles', (request, response) => {
  response.set('content-type', 'text/html')
    response.status(200).send('<!DOCTYPE html><html><body>This is an HTML file</body></html>')
})


server.get('/myjsondata', function(request, response) {
  response.set('content-type', 'application/json')
    response.status(200).send({"title":"some JSON data"})
})

// server.get('/old-page', function(request, response) {
//   response.status(301)
//   response.location('http://localhost:3000/newpage')
// })

server.post('/admin-only', (request, response) => {
  response.status(403).end();
})

server.get('/not-a-page', (request, response) => {
  response.status(404).end();
})

server.get('/server-error', (request, response) => {
  response.status(500).end();
})

server.listen(3000, (request, response) => {
  console.log("LISTENING ON 3000");
})
module.exports = server
