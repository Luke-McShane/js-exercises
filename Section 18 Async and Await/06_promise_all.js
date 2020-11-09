// We can use the Promise.all([prom1, prom2]) helper method to await all promises contained within the passed array to settle
// This method stops us having to await each promise separately, and instead returns a promise that will resolve if all passed
// promises resolve
async function getPokemon() {
  const prom1 = axios.get('https://pokeapi.co/api/v2/pokemon/1');
  const prom2 = axios.get('https://pokeapi.co/api/v2/pokemon/2');
  const prom3 = axios.get('https://pokeapi.co/api/v2/pokemon/3');

  // This is the usual method of executing the promises in parallel
  // const poke1 = await prom1;
  // const poke2 = await prom2;
  // const poke3 = await prom3;

  // But we can do the same much more succinctly
  const allPokemon = await Promise.all([prom1, prom2, prom3]);
  allPokemon.forEach((pokemon) => console.log(pokemon.data.name));
}

getPokemon();