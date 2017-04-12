const express = require('express')
const router = express.Router()

router.get('/', function(request, response) {
  response.set('content-type', 'text/plain')
  response.status(200).send('Welcome to Sandbox!')
})

router.get('/search', function(request, response) {
  if ('q' in request.query) {
    response.set('content-type', 'text/plain')
    response.status(200).send(`You searched for: "${request.query.q}"`)
  } else {
    response.set('content-type', 'text/plain')
    response.status(400).send("You didn't provide a search query term :(")
  }
})

router.post('/things', function(request, response) {
  response.status(201)
    .set('content-type', 'text/plain')
      .send('New thing created: flying car!')
})

router.get('/somefile', function(request, response) {
  console.log(request.headers)
  response.set('content-type', 'text/plain')
    response.status(200).send('This is a plain text file')
})

router.get('/somefile', function(request, response) {
  console.log(request.headers)
  response.set('content-type', 'text/html')
    response.status(200).send('<!DOCTYPE html><html><body>This is an HTML file</body></html>')
})


// Add other routes here

module.exports = router
