# murky-cliffchat-postalicious
Team Murky Cliffchat with Debrena (teqnickels) and Lisa (lisabronwyn) for goal #194 Postalicious

---
authors:
- "tannerwelsh"
team_size: 2
goal_id: 194
title: Postalicious - Demystifying HTTP
created_at: '2017-03-06T00:52:33Z'
labels:
- practice
- foundational
published: true
level: '1'
redirect_from: "/goals/194"
---

# Postalicious - Demystifying HTTP

## Challenge Rating

This goal will likely be within your ZPD if you...

- Can build basic websites with HTML & CSS
- Can build simple apps and scripts with Node.js and npm
- Have set up a web server with Node.js and Express
- Are familiar with the concept of web servers and clients
- Are interested in understanding the web at a deeper level
- Are interested in learning more about HTTP

## Description

Build a loose clone of the [Postman extension][postman-extension] for Google Chrome. Let's go early aughts style and call it... _Postalicious_.

Postalicious is an app that lets you send custom HTTP requests to a server and inspect both the request and the response messages. In this way, it lets you control things like request parameters, headers, and the message body, and then you can see the raw response from the server.

Here's a wireframe of the Postalicious interface that you can use to design around:

<img alt="Postalicious mockup" width="800" src="https://cloud.githubusercontent.com/assets/709100/23727389/d4195ca8-0425-11e7-8a02-fe42d4938b9a.png">

In order to give Postalicious something to practice on, you'll also build a simple HTTP server using Node.js and [Express][express] (we'll just call this the "sandbox server"). This server won't do much, but it will provide a range of response to different kinds of requests so that your Postalicious app has a good sandbox to play with.

If you are brand-new to HTTP, or just a little rusty, it is highly recommended that you go through some or all of the [courses and tutorials](#courses-tutorials-articles) in the [resources](#resources) section. Don't limit yourself to just these resources — there are lots of good learning materials on the web — but these at least should put you on more solid footing.

It is recommended that you build the sandbox server first, and then the Postalicious app after. However, if you'd like to get a jump start on the sandbox server so that you can spend more time on Postalicious, you can use the provided [Scaffolded Sandbox Server](#scaffolded-sandbox-server) code.

Finally, as a stretch exercise, use Postalicious to send requests to a real-world web API.

### How Postalicious Works

The Postalicious app lets users define HTTP requests to some external server via an HTML form on a web page (i.e. client), and then sends the request from the Postalicious server, reads the response, and sends it back to the client.

These are the steps, simplified and demonstrated in the diagram below:

1. Client sends request with form data to the Postalicious server
2. Postalicious server parses form data and builds a request to an external server (in this case at the url `http://www.foo.com`)
3. Postalicious receives response from external server (`foo.com`)
4. Postalicious sends response to client, showing both the initial request and the final response from `foo.com`

<img alt="Postalicious flow" width="800" src="https://cloud.githubusercontent.com/assets/709100/24780424/379ee40a-1b05-11e7-8c40-20c66368c26a.png">

_Note that the above diagram assumes that Postalicious is sending a request to a site on the world wide web. But you could also send requests to URLs hosted by servers on your own computer, which is exactly what you are doing when you send requests to the sandbox server._

## Context

HTTP is what makes the web work. Well, it's part of what makes the web work. Knowing what it is and how it works is important for any web developer, because it makes everything else that is built _on top of_ HTTP easier to understand, debug, and make sense of.

In this goal, you'll become familiar with terms like `request`, `response`, `client`, `server`, `status code`, `protocol`, `header`, `body`, and `HTTP verb`. You'll also have to deal with the parts of a `URL` (Uniform Resource Locator): the `protocol`, `host`, `port`, (resource) `path`, and `query`.

That may sound like a lot of vocabulary words. It is. But these are the building blocks of the web - if you don't know what they mean, this is a perfect opportunity to find out!

The good news is that HTTP is really not hard to work with - it's built to be human-readable. The following message is an abridged, but not unrelated, version  to what your browser sends every time you search for "hedgehog" on Google:

```http
GET /search?q=hedgehog HTTP/1.1
Host: www.google.com
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36
Accept: text/html

```

Let's break that down quickly and put some of those vocabulary words to use. If you read it left-to-right, top-to-bottom, it can be interpreted like this:

> (1st line): Send a **request** using the GET method/**verb** to the **path** `/search` with a **query** string containing one key `q` having the value `hedgehog`, using version `1.1` of the hypertext transfer protocol (**HTTP**).
> <br>(2nd line): In the **header**, specify the **host** to send this request to the **server** at `www.google.com`\*.
> <br>(3rd line): Include a user agent key in the **header** to identify the **client** as a Chrome browser operating on a Mac computer running OSX 10.12.3.
> <br>(4th line): Use the accept key in the **header** with the value `text/html` to tell the server which content types (also called [MIME types][list-mime-types]) the client can understand so that it sends the appopriate type in the **body** of the **response** message.
> <br>(5th line): Leave a blank line to signal the end of the **message**.

_\*Implied in this message is the fact that this request will be sent to **port** 80 because this is the default for HTTP requests._

If that all sounds like ancient Greek to you, never fear. If you take it one step at a time and dive into each concept, experiment with it in your code, and do your proper research, you'll get to a place where the above makes perfect sense.

## Specifications

**General**

- [x] The artifact produced is a repo with at least two sub-folders: `postalicious/` and `sandbox-server/`.
- [ ] Repository includes a README file with basic installation and setup instructions.
- [x] All dependencies are properly declared in `package.json`.
- [ ] All major features are added via pull requests with a clear description and concise commit messages.
- [ ] Code uses a linter and there are no linting errors.
- [ ] Variables, functions, files, etc. have appropriate and meaningful names.
- [ ] Functions are small and serve a single purpose.
- [x] The artifact produced is properly licensed, preferably with the [MIT license](https://opensource.org/licenses/MIT).

**Sandbox Server**

_Note: to get a jump start on the sandbox server, you can use the provided [Scaffolded Sandbox Server](#scaffolded-sandbox-server) code. It doesen't solve for all of the specs below, but it will get a good amount of the way there._

- [ ] Can run the command `npm run sandbox-server` (or `npm run sb`, if you want to save some typing) to start the sandbox web server at port 3000.
- [x] The sandbox server source code is written using the [Express][express] library.
- [x] Sending a `GET` request to the path `/` responds with...
  - [x] a 200 (OK) status code
  - [x] a plain-text response body with the content `Welcome to Sandbox!`
  - [x] the `Content-Type` header set to `text/plain`
- [x] Sending a `GET` request to the path `/search?q=doodads` responds with...
  - [x] a 200 (OK) status code
  - [x] a plain-text response body with the content `You searched for: "doodads"`
    - NOTE: (it doesn't need to actually do any searching, just return the plain text)
    - NOTE: "doodads" is a placeholder for whatever string is in the `q` query param
  - [x] the `Content-Type` header set to `text/plain`
- [x] Sending a `GET` request to the path `/search` responds with...
  - [x] a 400 (Bad Request) status code
  - [x] a plain-text response body with the content `You didn't provide a search query term :(`
  - [x] the `Content-Type` header set to `text/plain`
- [x] Sending a `POST` request to the path `/things` with a plain text body `flying car` responds with...
  - [x] a 201 (Created) status code
  - [x] a plain-text response body with the content `New thing created: "flying car"!` (it doesn't need to actually create anything, just return the plain text)
    - NOTE: "flying car" is just a placeholder for whatever string is sent in the POST body.
  - [x] the `Content-Type` header set to `text/plain`
- [x] Sending a `GET` request to the path `/somefile` with an `Accept` header of `text/plain` responds with...
  - [x] a 200 (OK) status code
  - [x] a plain-text response body with the content `This is a plain text file`
  - [x] the `Content-Type` header set to `text/plain`
- [x] Sending a `GET` request to the path `/somefile` with an `Accept` header of `text/html` responds with...
  - [x] a 200 (OK) status code
  - [x] an HTML response body with the content `<!DOCTYPE html><html><body>This is an HTML file</body></html>`
  - [x] the `Content-Type` header set to `text/html`
- [x] Sending a `GET` request to the path `/myjsondata` with an `Accept` header of `application/json` responds with...
  - [x] a 200 (OK) status code
  - [x] an HTML response body with the content `{ "title": "some JSON data" }`
  - [x] the `Content-Type` header set to `application/json`
- [] Sending a `GET` request to the path `/old-page` responds with...
  - [ ] a 301 (Moved Permanently) status code
  - [ ] the `Location` header set to `http://localhost:3000/newpage`
- [x] Sending a `POST` request to the path `/admin-only` responds with a 403 (Forbidden) status code
- [x] Sending a `GET` request to the path `/not-a-page` responds with a 404 (Not Found) status code
- [x] Sending a `GET` request to the path `/server-error` responds with a 500 (Internal Server Error) staus code

**Postalicious**

- [ ] Can run the command `npm run postalicious` (or `npm run pl`, if you want to save some typing) to start the Postalicious app at port 3001.
- [ ] Users can visit the main page of the Postalicious site at `http://localhost:3001`.
- [ ] Main page has three main sections:
  - [ ] Request builder HTML form
  - [ ] Raw HTTP request
  - [ ] Raw HTTP response
- [ ] When a user fills out the HTML form and clicks a "Send" button...
  - [ ] A raw HTTP request is generated and shown
  - [ ] An HTTP request is sent using the form data provided, and the raw response message is shown
- [ ] Users can fill out an HTML form to specify HTTP request details.
- [ ] Submitting the form will send the request according to the specified details.
- [ ] Requests are made from the server, not from the browser (this is to avoid [CORS issues](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS)).
- [ ] Using the HTML form, users can specify...
  - [ ] host and path
  - [ ] HTTP verb/method
  - [ ] query parameter keys + values
  - [ ] header keys + values
  - [ ] request body

### Stretch

Use the stretch goals to go deeper into the nuts and bolts of HTTP.

- [ ] Sandbox server is written using _only the core Node.js modules_ (instead of Express, use the built-in [HTTP module][node-http]).
- [ ] Users of Postalicious can "save" their requests in a history panel
- [ ] Clicking on a saved request will re-load it into the form
- [ ] Using Postalicious, create some HTTP requests to various real-world APIs:
  - [ ] Get all issues for a repo through the GitHub API
  - [ ] Get all tweets with the hashtag `#javascript` with the Twitter API
  - [ ] Any other API request(s) of your choice
  - [ ] External HTTP requests are saved in files under a `example-requests/` directory (make sure to obscure any secure information before saving these files, like your password or authentication token)

## Resources

### Courses, Tutorials, Articles

- Treehouse course on [HTTP Basics][treehouse-http] (67-minute Development Tools Course)
- [Overview of HTTP][ntu-http-overview] from NTU Singapore
- [Tips on HTTP][tutsplus-http] from Tuts+
- [Beginner's Guide to HTTP and REST][tutsplus-http-rest] from Tuts+
- Mozilla Developer Network's [Guide to HTTP][mdn-http]
- 30 min course on the [Basics of HTTP][egghead-http-basics]
- Article on [How the Web Works](https://medium.freecodecamp.com/how-the-web-works-a-primer-for-newcomers-to-web-development-or-anyone-really-b4584e63585c#.3l2bffw28)

### Tools

- [Postman][postman-extension] is a nice GUI for building HTTP requests
- [curl][curl] is a super useful tool for making HTTP requests from the command line

### Scaffolded Sandbox Server

If you want to get a jump-start on the sandbox server code, you can use the following Express server code to get you going (note you'll need to install the `express` and `body-parser` packages):

```javascript
const express = require('express')
const bodyParser = require('body-parser')
const http = require('http')

const app = express()
const port = 3000

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

app.listen(, function() {
  console.log('Listening on port ' + port)
})
```

[postman-extension]: https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=en
[express]: http://expressjs.com/
[node-http]: https://nodejs.org/api/http.html

[treehouse-http]: https://teamtreehouse.com/library/http-basics
[ntu-http-overview]: https://www.ntu.edu.sg/home/ehchua/programming/webprogramming/HTTP_Basics.html
[tutsplus-http]: https://code.tutsplus.com/tutorials/http-the-protocol-every-web-developer-must-know-part-1--net-31177
[tutsplus-http-rest]: https://code.tutsplus.com/tutorials/a-beginners-guide-to-http-and-rest--net-16340
[curl]: https://curl.haxx.se/
[mdn-http]: https://developer.mozilla.org/en-US/docs/Web/HTTP
[egghead-http-basics]: https://egghead.io/courses/understand-the-basics-of-http

[list-mime-types]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Complete_list_of_MIME_types
