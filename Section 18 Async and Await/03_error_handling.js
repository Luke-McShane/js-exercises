// We could use standard promise error handling using .catch(), yet, if we want to handle errors within the specific async function,
// we can use a try/catch block to catch the rejected promise

async function getPlanets() {
  try {
    const planets = await axios.get('https://swapi.dev/api/plffanets/');
    console.log(planets.data.results);
  } catch (err) {
    console.log('PROMISE REJECTED WITH', err);
  }
}

getPlanets();