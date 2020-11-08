// We can separate the operations carried out in .then() and place them into their own functions

const fetchPlanets = (url = 'https://swapi.dev/api/planets/') => fetch(url);
const checkAndParse = (res) => {
  if (!res.ok) {
    throw new Error(`Status Code: ${res.status}`);
  } else return res.json();
}
const printPlanets = (data, first = false) => {
  if (first) {
    console.log('FIRST 10 PLANETS:');
  } else console.log('\nNEXT 10 PLANETS');
  for (let planet of data.results) { console.log(planet.name) };
  // To continue the chain of promises, we needed to return a promise here, because returning 'data.next' would not have caused
  // the next .then() to execute, for no promise is being resolved. Thus we needed to resolve a promise, and this is the
  // most efficient way to do it
  return Promise.resolve(data.next);
}

const starWarsRequest = fetchPlanets()
  .then(checkAndParse)
  .then((data) => printPlanets(data, true))
  .then(fetchPlanets)
  .then(checkAndParse)
  .then(printPlanets)
  .then(fetchPlanets)
  .then(checkAndParse)
  .then(printPlanets)
  .catch((err) => console.log(err));