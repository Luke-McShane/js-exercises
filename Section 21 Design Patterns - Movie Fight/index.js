const getMovies = async (key, movieTitle) => {
  // With the second parameter, the .get method automatically forms the string for us, appending the arguments to the API request appropriately
  const response = await axios.get('http://www.omdbapi.com/', {
    params: {
      apikey: key,
      s: movieTitle
    }
  });

  printMovies(response);
}

const getMovie = async (key, movieTitle) => {
  const response = await axios.get('http://www.omdbapi.com/', {
    params: {
      apikey: key,
      t: movieTitle
    }
  });

  printMovies(response);
}

const printMovies = ({ data }) => {
  console.log(data);

  // for (let film of data.result) {
  //   console.log(film);
  // }
}

getMovies('4d28104b', 'manhattan');
getMovie('4d28104b', 'manhattan');