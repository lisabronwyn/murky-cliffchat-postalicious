const express = require('express')
const server = express()
const path = require('path')
const http = require('http').createServer(server)
const bodyParser = require('body-parser')
const fetchUrl = require("fetch").fetchUrl


server.use(bodyParser.json({ type: 'application/json' }))
server.use(bodyParser.urlencoded({extended: true}))

server.use('/', express.static(path.join(__dirname, 'public')))

server.post('/getdata', (request, response) => {
  console.log(request.body)
  fetchUrl(request.body.url, function(error, meta, body){
      console.log(body.toString())
      response.json(meta)
  })
})



server.listen(3001, (request, respose) => {
  console.log("LISTENING ON PORT 3001");
})

module.export = server
