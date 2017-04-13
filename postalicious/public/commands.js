// link the javascript file to the html file via the script tag
// then we link the dom button to the build request function.

function build() {
  // grab the dom value from te inputs
  const method = document.getElementById('method').value
  const url = document.getElementById('url').value
  // get the container to populate with our request
  const requestContainer = document.getElementsByClassName('flex-item-requestBody')[0]

  // inserting our build request into the container
  requestContainer.innerText = `
    HTTP/1.1 ${method}
    host: ${url}
    pathname: ${url}
  `

  // return that built request for our buildRequest function to use.
  return {
    method,
    url
  }
}

function buildRequest() {
  const {method, url} = build()

  // set headers for the server to recognize
  const headers = new Headers()
  headers.append('Content-Type', 'application/json')

  // options for our fetch request
  const options = {
    method: 'POST',
    headers,
    body: JSON.stringify({
      method,
      url
    })
  }

  // our actual fetch request
  return fetch('/getdata', options)
    .then(response => {
      console.log(response);
      response.json()
    })
    .then(response => {
      console.log(response);
      const responseContainer = document.getElementsByClassName('flex-item-responseBody')
      responseContainer[0].innerText = response
    })
    .catch(error => {
      console.log(error);
    })
}
