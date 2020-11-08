// The await keyword is one that is reserved for use only within async functions
// The keyword is used in front of an operation that returns a promise, and makes it so that the promise is carried out
// (is resolved or rejected) before moving on.
// This means that we do not have to use a .then() to access the returned value from the promise.
// What happens is that, when we encounter an await, the function execution appears to 'pause' until the promise settles,
// and then resumes with the promise result

async function getPlanets() {
  // Without the await keyword, the proceeding line would return an error, because 'data' is an inaccessible property
  // of a pending promise.
  // If we were to console.log(planets), we would be printing a pending promise
  // Yet with the await keyword, we have access to the settled (in this case successfully resolved) promise
  const planets = await axios.get('https://swapi.dev/api/planets/');
  console.log(planets.data.results);
}

getPlanets();