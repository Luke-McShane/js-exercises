// Promises are not supported in a 'XHR' (XMLHttpRequest), which means that there may be many nested callbacks
// The syntax is also clunky
// Although it says XML in the name, it is not limited to such, and we may receive JSON in a response

// Create the XMLHttpRequest object
const request = new XMLHttpRequest();

// Setup an event listener for then the request has succeeded and has 'loaded' the response
// Note that we here reference 'request' and not 'this' because we use an arrow function.
// We could rewrite the code using 'function() {console.log(this.responseText)}'
request.addEventListener('load', () => {
  console.log('The request worked!');
  const data = JSON.parse(request.responseText);
  console.log(request);
  Object.entries(data).forEach(([key, val]) => console.log(`${key}: ${val}`))
});

// If the request results in an error, run this code
request.addEventListener('error', () => {
  console.log('The request failed!');
});

// Whilst the request is in progress, run this code
request.addEventListener('progress', (e) => {
  if (e.lengthComputable) {
    console.log(`Received ${e.loaded} of ${e.total} bytes`);
  } else console.log(`Received ${e.loaded} bytes`);
});

// Before we send the request, we can setup some header information
// Here we state that the type of request will be a 'GET' request, and we point the request to the appropriate address
request.open('GET', 'https://swapi.dev/api/planets/3/');

// Finally, send the request
request.send();