const chai = require('chai')
const expect = chai.expect
const chaiHttp = require('chai-http');
const server = require('../sandbox-server/server.js')
chai.use(chaiHttp);
const should = chai.should()

describe('Routes', () => {
  it('should return a json with the property title Express', (done) => {
    chai.request(server)
      .get('/')
      .end((error, response) => {
        response.should.have.status(200)
        done()
      })
  })
})
