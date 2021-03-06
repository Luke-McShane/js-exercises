// Here we will see how we can chain promises, and can do so with multiple .then() calls on the same level, without having to nest them

// When we call makeRequest, we can pass in an argument that we can use to determine was is passed back in the resolved function
const makeRequest = (page) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      // So, if '/users' is passed as an argument, this array of objects will be passed back as an argument when the resolved callback is called
      const pages = {
        '/users': [
          { id: 1, username: 'Big Steve' },
          { id: 2, username: 'Aupfred' },
          { id: 3, username: 'XxRandomk1dxX' }
        ],
        '/users/1': {
          name: 'Steve',
          location: 'Lithuania',
          diet: 'Vegan',
          favouriteBook: 'How Not To Die',
          bookId: 2482
        },
        '/users/2': {
          name: 'Fred',
          location: 'Scotland',
          diet: 'Carnivore',
          favouriteBook: 'The Intelligent Investor',
          bookId: 2928
        },
        '/users/3': {
          name: 'Callum',
          location: 'China',
          diet: 'Gluten Free',
          favouriteBook: 'Lord of the Rings',
          bookId: 1754
        },
        '/books/2482': {
          title: 'How Not To Die',
          author: 'Michael Greger',
          publishedYear: 2015,
          genre: 'Non-Fiction: Health'
        },
        '/books/2928': {
          title: 'The Intelligent Investor',
          author: 'Benjamin Graham',
          publishedYear: 1949,
          genre: 'Non-Fiction: Finance'
        },
        '/books/1754': {
          title: 'Lord of the Rings',
          author: 'J. R. R. Tolkien',
          publishedYear: 1954,
          genre: 'Fiction: Fantasy'
        },
      };

      const data = pages[page];

      // If there is a page extant, then pass the relevant data into the resolved function
      if (data) {
        res({ value: 200, data });
      } else rej({ value: 200 });
    }, 1500)
  })
}

// We don't need to nest the .then() functions because at the end of each .then() we are actually returning the makeRequest Promise, meaning we leave that level of calling
// When we return this, we immediately append the .then() onto it and it is run so that, if this returned Promise is resolved, we will go into this new .then() callback with
// the returned response (res), and do the same here.
// Because we are only ever one level deep, we only need one catch statement
const request = makeRequest('/users')
  .then((res) => {
    console.log('FIRST REQUEST');
    console.log(`Status Code: ${res.value}`);
    console.log(`User ID: ${res.data[2].id}`);
    console.log(`Username: ${res.data[2].username}\n`);
    return makeRequest(`/users/${res.data[2].id}`);
  })
  .then((res) => {
    console.log('SECOND REQUEST')
    console.log(`Status Code: ${res.value}`);
    console.log(`Name: ${res.data.name}`);
    console.log(`Location: ${res.data.location}`);
    console.log(`Diet: ${res.data.diet}`);
    console.log(`Favourite Book: ${res.data.favouriteBook}\n`);
    return makeRequest(`/books/${res.data.bookId}`);
  })
  .then((res) => {
    console.log('THIRD REQUEST');
    console.log(`Status Code: ${res.value}`);
    console.log(`Book Author: ${res.data.author}`);
    console.log(`Year Published: ${res.data.publishedYear}`);
    console.log(`Genre: ${res.data.genre}`);
  })
  .catch((err) => {
    console.log('REQUEST FAILED');
    console.log(`Status Code: ${err.value}`);
  });