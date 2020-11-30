const key = '4d28104b';
let timeoutId;

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

const debounce = (func, delay = 1000) => {
  return (...args) => {
    console.log(args);
    // This first line of code checks if there is a timeoutId set and, if so, clears it, which means that this timeout will no longer execute
    if (timeoutId) clearInterval(timeoutId);

    // After the timeout has cleared, we setup a new timeoutId, which will only run if the user doesn't trigger this event for an entire second because,
    // if they do, then the timeout will be cleared and reset to a new timeout - this recurs until the user doesn't anything for a whole second
    // This process is called debouncing, which means the browser waits for some time until executing a function after a user event, to reduce
    // the load for the processor
    timeoutId = setTimeout(() => {
      // This line calls the function with all the arguments passed through, as it takes an array of arguments (...args) and spreads them out separately
      func.apply(null, args);
    }, delay)
  }
}

const onInput = (e) => {
  getMovies(key, e.target.value);
}

// We call the debounce and pass through the onInput function.
// Calling debounce returns a function with all the arguments that were passed into the called function
// So, here, the ...args in debounce will represent 'e' in the onInput function. We use ...args so that
// we can reuse this debounce function with different lengths of parameters
document.querySelector('input').addEventListener('input', debounce(onInput, 1000));