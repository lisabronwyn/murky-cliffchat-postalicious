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
  console.log("======>THIS",request.body.url)
  fetchUrl(request.body.url, function(error, meta, body){
    if(error) response.json({error})

    response.status(200).json({meta, body})
  })
})

server.listen(3001, (request, response) => {
  console.log("LISTENING ON PORT 3001");
})

module.export = server
