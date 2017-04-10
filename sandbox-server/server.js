const express = require('express')
const bodyParser = require('body-parser')
const http = require('http')

const app = express()
const port = 3001

app.use(bodyParser.text())

app.get('/', function(req, res) {
  res.set('Content-Type', 'text/plain')
  res.status(200).send('Welcome to Sandbox!')
})

app.get('/search', function(req, res) {
  if ('q' in req.query) {
    res.set('Content-Type', 'text/plain')
    res.status(200).send(`You searched for: "${req.query.q}"`)
  } else {
    res.set('Content-Type', 'text/plain')
    res.status(400).send("You didn't provide a search query term :(")
  }
})

app.post('/things', function(req, res) {
  res.set('Content-Type', 'text/plain')
  res.status(201).send(`New thing created: "${req.body}"!`)
})

// Add other routes here

app.listen( function() {
  console.log('Listening on port ' + port)
})
