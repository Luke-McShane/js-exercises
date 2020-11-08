// Here, instead of nesting the .then(), we simply return the promise and define the resolve function one the same level as the initial request
// We can continue to access different URLs within the returned (and parsed) data, and thus continue chaining our .then() functions
// because we are returning a promise at each stage
const starWarsRequest = fetch('https://swapi.dev/api/planets/')
  .then((res) => {
    if (!res.ok) {
      throw new Error(`Status Code: ${res.status}`);
    } else return res.json();
  })
  .then((data) => {
    for (let planet of data.results) { console.log(planet.name) };
    const filmURL = data.results[0].films[0];
    return fetch(filmURL);
  })
  .then((filmRes) => {
    if (!filmRes.ok) {
      throw new Error(`Status Code: ${filmRes.status}`);
    } else return filmRes.json();
  })
  .then((filmData) => {
    console.log(`Film Title: Star Wars - ${filmData.title}`);
  })
  .catch((err) => console.log(err));