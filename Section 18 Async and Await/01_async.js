// As we can see here, with a standard get request, if we try and console.log the request outside the .then(),
// we simply print the promise, which is in the pending state.
// If we want to print out the data that is returned from a resolved promise, we must do so within the .then() function
// function axiosRequest() {
//   const request = axios.get('https://swapi.dev/api/planets/')
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));
//   console.log(request);
// }

// axiosRequest();

// With the async keyword (that must be placed before the 'function' keyword),
// we are changing the behaviour of the function, making it so it will always return a promise
// So even if we return a value, it will actually return a resolved promise

async function greet() {
  return 'Hello there!';
}

// Here we are returned a fulfilled promise, with the result that is the returned value
// console.log(greet());

// If we were wanted to return a promise without the async keyword:
function myName(name) {
  return new Promise((res, rej) => {
    if (typeof (name) !== 'string' || name !== 'Luke') {
      rej(name + ' is not your name!');
    } else {
      res('Yes! Your name is indeed ' + name);
    }
  })
}

// This is how we would do the same, using the async keyword
async function myNameAsync(name) {
  if (typeof (name) !== 'string' || name !== 'Lukey') {
    throw (name + ' is not your name!');
  } else {
    return ('Yes! Your name is indeed ' + name);
  }
}

myName('Bobby')
  .then((res) => console.log('Promise Resolved!', res))
  .catch((err) => console.log('Promise Rejected!', err));

myName('Luke')
  .then((res) => console.log('Promise Resolved!', res))
  .catch((err) => console.log('Promise Rejected!', err));

myNameAsync('Stevie')
  .then((res) => console.log('Async Promise Resolved!', res))
  .catch((err) => console.log('Async Promise Rejected!', err));

myNameAsync('Lukey')
  .then((res) => console.log('Async Promise Resolved!', res))
  .catch((err) => console.log('Async Promise Rejected!', err));
