// A promise is an object that represents the eventual completion - success or failure - of an asynchronous JS operation.
// A promise, because of its being its own object, has callbacks attached to it - so we're not passing callbacks into a function.

// So here we are creating a new promise, with a callback function that calls either resolve or reject.
// If the resovle function is called, then then status of the promise is 'Fulfilled', else the promise is 'Rejected'
const willBuyYouALemon = new Promise((resolve, reject) => {
  const rand = Math.random();
  rand < 0.5 ? resolve() : reject();
});

// We can also determine what action is carried out if the promise is fulfilled, using the '.then()' operation
willBuyYouALemon.then(() => {
  console.log('See, I told you I would buy you a lemon!');
})

// And also determine what action is taken if the promise is rejected, with the '.catch()' operation
willBuyYouALemon.catch(() => {
  console.log('Wait..you actually believed I would be you a lemon? You fool!');
})

// We can write this shorter with, but, if this is rejected, the promise status will still be 'Fulfilled':
const willGoToWork = new Promise((res, rej) => {
  const rand = Math.random;
  rand < 0.5 ? res() : rej();
}
).then(() => { console.log('Here I am - at work!') }
)
  .catch(() => { console.log('Fuck work!') });