const express = require('express')
const router = express.Router()

router.post('/', (request, response) => {
  response.render('index')
})

module.exports = router
