const chai = require('chai')
const expect = chai.expect
const chaiHttp = require('chai-http')
const server = require('../sandbox-server/server.js')
chai.use(chaiHttp)
const should = require('chai').should()


//
// chai.should()

describe('sandbox-server', () => {
    context('homepage, onload', () => {
      it('Should respond with a status code of 200', (done) => {
        chai.request(server)
      .get('/')
      .end((error, response) => {
        expect(response).to.have.status(200)
        expect(response.text).to.equal('Welcome to Sandbox!')
        expect(response).to.have.header('content-type', 'text/plain; charset=utf-8')
        done()
})
})
})
    context('Search for doodads', () => {
      it('Should respond with a status code of 200', (done) => {
        chai.request(server)
      .get('/search')
      .query({'q':"doodads"})
      .end((error, response) => {
        expect(response).to.have.status(200)
        expect(response.text).to.equal('You searched for: \"doodads\"')
        expect(response).to.have.header('content-type', 'text/plain; charset=utf-8')
        done()
})
})
})
    context('Bad request', () => {
      it('Should respond with a status code of 400', (done) => {
        chai.request(server)
      .get('/search')
      .end((error, response) => {
        expect(response).to.have.status(400)
        expect(response.text).to.equal('You didn\'t\ provide a search query term :(')
        expect(response).to.have.header('content-type', 'text/plain; charset=utf-8')
        done()
})
})
})
    context('Flying car post', () => {
      it('Should respond with a status code of 201', (done) => {
        chai.request(server)
      .post('/things')
      .send({'New thing created': 'flying car'})
      .end((error, response) => {
        expect(response).to.have.status(201)
        expect(response.text).to.equal('New thing created: flying car!')
        expect(response).to.have.header('content-type', 'text/plain; charset=utf-8')
        done()
    })
  })
})
    context('Get some file', () => {
      it('Should respond with a status code of 200', (done) => {
        chai.request(server)
      .get('/somefile')
      .set('Accept', 'text/plain')
      .end((error, response) => {
        expect(response).to.have.status(200)
        expect(response.text).to.equal('This is a plain text file')
        expect(response).to.have.header('content-type', 'text/plain; charset=utf-8')
        done()
    })
  })
})
    context('Get HTML file', () => {
      it.only('Should respond with a status code of 200', (done) => {
        chai.request(server)
      .get('/somefile')
      .end((error, response) => {
        expect(response).to.have.status(200)
        expect(response.text).to.equal('<!DOCTYPE html><html><body>This is an HTML file</body></html>')
        expect(response).to.have.header('content-type', 'text/html; charset=utf-8')
        done()
    })
  })
})
    context('Get JSON data', () => {
      it('Should respond with a status code of 200', (done) => {
        chai.request(server)
      .get('application/json')
      .end((error, response) => {
        expect(response).to.have.status(200)
        expect(response.text).to.equal('{ "title": "some JSON data" }')
        expect(response).to.have.header('Content-type', 'application/json')
        done()
    })
  })
})
    context('Get old page', () => {
      it('Should respond with status code of 301', (done) => {
        chai.request(server)
        .get('/old-page')
        .end((error, response) => {
          expect(response).to.have.status(301)
          expect(response.header['Content-location']).to.have.header('http://localhost:3000/newpage')
          done()
    })
  })
})
    context('Admin only post', () => {
      it('Should respond with the status code of 403', (done) => {
        chai.request(server)
        .post('/admin-only')
        .end((error, response) => {
          expect(response).to.have.status(403)
          done()
    })
  })
})
    context('Not a page', () => {
      it('Should respond with the status code of 404', (done) => {
        chai.request(server)
        .get('/not-a-page')
        .end((error, response) => {
          expect(response).to.have.status(404)
          done()
    })
  })
})
    context('Server error', () => {
      it('Should respond with the status code of 500', (done) => {
        chai.request(server)
        .get('/server-error')
        .end((error, response) => {
          expect(response).to.have.status(500)
          done()
    })
  })
})
})
