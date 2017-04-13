const express = require('express')
const server = express()
const path = require('path')
const http = require('http').createServer(server)

server.use('/', express.static(path.join(__dirname, 'public')))

server.get('/', (request, response) => {
  response.send('HELLO THEREEEEEEE')
})

server.listen(3001, (request, respose) => {
  console.log("LISTENING ON PORT 3001");
})

module.export = server
