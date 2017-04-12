const express = require('express')
const router = express.Router()

router.get('/', function(req, res) {
  res.set('Content-Type', 'text/plain')
  res.status(200).send('Welcome to Sandbox!')
})

router.get('/search', function(req, res) {
  if ('q' in req.query) {
    res.set('Content-Type', 'text/plain')
    res.status(200).send(`You searched for: "${req.query.q}"`)
  } else {
    res.set('Content-Type', 'text/plain')
    res.status(400).send("You didn't provide a search query term :(")
  }
})

router.post('/things', function(req, res) {
  res.set('Content-Type', 'text/plain')
  res.status(201).send(`New thing created: "${req.body}"!`)
})

// Add other routes here

module.exports = router
