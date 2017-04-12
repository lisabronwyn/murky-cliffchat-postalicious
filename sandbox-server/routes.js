const express = require('express')
const router = express.Router()

router.get('/', (request, response) => {
  response.set('content-type', 'text/plain')
  response.status(200).send('Welcome to Sandbox!')
})

router.get('/search', (request, response) => {
  if ('q' in request.query) {
    response.set('content-type', 'text/plain')
    response.status(200).send(`You searched for: "${request.query.q}"`)
  } else {
    response.set('content-type', 'text/plain')
    response.status(400).send("You didn't provide a search query term :(")
  }
})

router.post('/things', (request, response) => {
  response.status(201)
    .set('content-type', 'text/plain')
      .send('New thing created: flying car!')
})

router.get('/somefile', (request, response) => {
  response.set('content-type', 'text/plain')
    response.status(200).send('This is a plain text file')
})

router.get('/somefiles', (request, response) => {
  response.set('content-type', 'text/html')
    response.status(200).send('<!DOCTYPE html><html><body>This is an HTML file</body></html>')
})












router.post('/admin-only', (request, response) => {
  response.status(403).end();
})

router.get('/not-a-page', (request, response) => {
  response.status(404).end();
})

router.get('/server-error', (request, response) => {
  response.status(500).end();
})

// Add other routes here

module.exports = router
