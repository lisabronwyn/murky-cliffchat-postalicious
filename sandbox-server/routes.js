const express = require('express')
const router = express.Router()

router.get('/', function(request, response) {
  response.set('content-Type', 'text/plain')
  response.status(200).send('Welcome to Sandbox!')
})

router.get('/search', function(request, response) {
  if ('q' in request.query) {
    response.set('content-Type', 'text/plain')
    response.status(200).send(`You searched for: "${request.query.q}"`)
  } else {
    response.set('content-Type', 'text/plain')
    response.status(400).send("You didn't provide a search query term :(")
  }
})

router.post('/things', function(request, response) {
  response.status(201)
    .set('content-Type', 'text/plain')
      .send('New thing created: flying car!')
})

// Add other routes here

module.exports = router
