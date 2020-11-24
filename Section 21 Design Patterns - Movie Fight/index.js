const getMovies = (url) => axios.get(url);
const printMovies = ({ data }) => {
  debugger;
  console.log(data);

  // for (let film of data.result) {
  //   console.log(film);
  // }
}

getMovies('http://www.omdbapi.com/?apikey=4d28104b&t=manhattan')
  .then((res) => printMovies(res))
  .catch((err) => console.log(`OH NO: ${err}`));