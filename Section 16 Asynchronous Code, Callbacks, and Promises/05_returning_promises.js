// We can also simply return promises from functions, as below, if we wanted multiple of the same promise

const makeSweetPromise = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const rand = Math.random;
      rand < 0.5 ? rej() : res();
    }, 3000)
  })
}

const sweetPromise1 = makeSweetPromise().then(() => console.log('I got the first sweet!')).catch(() => console.log('I did not get the first sweet!'));
const sweetPromise2 = makeSweetPromise().then(() => console.log('I got the second sweet!')).catch(() => console.log('I did not get the second sweet!'));