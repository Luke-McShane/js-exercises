// This is a very basic way of sending a request, done in 4 lines of code
// We simple send a fetch request, which in turn returns a promise
// If this promise is resolved, we can map the data (which is a 'response object') returned to a variable, which we can then
// resolve to a JavaScript object using the .json() function, which takes the response stream data
// which promises to read the data and parse it
// If successful, we are returned the parsed data, which we console.log() as 'resp'

// Because the Response object's 'body' is a readable stream, we must use another '.then()' because the .json() function
// takes time for it to read the stream to completion
const starWarsPromise = fetch('https://swapi.dev/api/planefts/')
  .then((res) => {
    // Although the Promise will resolve if we provide an invalid URL, the status may still be 404, signifying an error
    // We can thus check this error code, and, if an error status, we can throw an error, which causes the catch statement to run
    // We can then pass the error message and code into the catch statement, and print it, as seen in the catch statemenet below
    if (!res.ok) {
      throw new Error(`Status Error Code: ${res.status}`);
    }
    else {
      console.log(res.json().then((data) => {
        for (let element of data.results) {
          console.log(element.name);
        }
      }));
    }
  })
  // If we provide an invalid URL, the promise will still resolve, even though the status of the response will be
  // 404. This is simply the nature of fetch. It will not fail (and this reject()) unless there's a network failure
  // or if anything prevented the fetch from completing
  .catch((e) => {
    console.log('Fetch request failed', e);
  })