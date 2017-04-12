const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const port = 3000

const app = express()
const http = require('http').createServer(app)
const server = express.Router()

app.use(bodyParser.text())

app.use(express.static(path.join(__dirname, "public")))

server.get('/', function(req, res) {
  res.set('Content-Type', 'text/plain')
  res.status(200).send('Welcome to Sandbox!')
})

server.get('/search', function(req, res) {
  if ('q' in req.query) {
    res.set('Content-Type', 'text/plain')
    res.status(200).send(`You searched for: "${req.query.q}"`)
  } else {
    res.set('Content-Type', 'text/plain')
    res.status(400).send("You didn't provide a search query term :(")
  }
})

server.post('/things', function(req, res) {
  res.set('Content-Type', 'text/plain')
  res.status(201).send(`New thing created: "${req.body}"!`)
})

// Add other routes here
app.set(port)
http.listen(port)

module.exports = server
