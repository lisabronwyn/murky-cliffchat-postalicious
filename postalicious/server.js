const express = require('express')
const server = express()
const http = require('http').createServer(server)
const path = require('path')
const logger = require('morgan')
const bodyParser = require('body-parser')
const requestPromise = require('request-promise')
const port = process.env.PORT || 3001
const index = require('./form_routes.js')

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({extended: false}))
server.use(express.static(path.join(__dirname, 'public')))
server.use('/', index)

server.use(logger("combined"))
server.set(port)
http.listen(port)

module.exports = server
