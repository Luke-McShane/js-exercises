// Axios uses fetch behind the scenes, but makes it easier to use with its inclusion of different methods and classes
// Axios can also be used server-side, with nodeJS, which fetch cannot do - thus fetch is client-side only, whilst
// Axios is bother client- and server-side
// Axios returns already-parsed data after making a request, meaning that we don't have to use .json() to parse data
// Axios also throws an error when there is a none-200 status code (when the status code is not ok), which is different
// to the standard fetch, wherein a 404 code, for example, will still be present in a resolved promise
const getPlanets = (url = 'https://swapi.dev/api/planets/') => axios.get(url);
const printPlanets = ({ data }, first = false) => {
  if (first) {
    console.log('FIRST 10 PLANETS');
  } else console.log('\nNEXT 10 PLANETS');
  for (let planets of data.results) {
    console.log(planets.name);
  }
  return Promise.resolve(data.next);
}


getPlanets()
  .then((res) => printPlanets(res, true))
  .then(getPlanets)
  .then(printPlanets)
  .then(getPlanets)
  .then(printPlanets)
  .then(getPlanets)
  .then(printPlanets)
  .catch((err) => console.log(err));