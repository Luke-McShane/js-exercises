// We can perform multiple requests in parallel within an async function by not awaiting the promise to resolve
// until we have sent off multiple requests.
// This is useful for when proceeding requests are not dependent on previous requests, and we thus don't want to
// have to wait on previous requests to settle before moving on

function changeBody(colour, delay) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (typeof (colour) === 'string') {
        document.body.style.backgroundColor = colour;
        res();
      } else rej();
    }, delay);
  })
}

// SEQUENTIAL EXECUTION
// Here, each function call must wait until the previous one has been resolved,
// meaning that the operations are carried out sequentially
async function lightShowSequential() {
  await changeBody('blue', 1000);
  await changeBody('pink', 1000);
  await changeBody('green', 1000);
  await changeBody('red', 1000);
}

// PARALLEL EXECUTION
// Here, however, the requests are being sent off as fast as the JS interpreter can manage,
// which is near-enough instantaneously.
// This means that the await statements result in all promise being fulfilled basically simultaneously,
// which results in the body being changed to red without having to wait for all the other requests to happen first
async function lightShowParallel() {
  const promise1 = changeBody('blue', 1000);
  const promise2 = changeBody('pink', 1000);
  const promise3 = changeBody('green', 1000);
  const promise4 = changeBody('red', 1000);
  console.log(promise1);
  await promise1;
  console.log(promise1);
  await promise2;
  await promise3;
  await promise4;
}

// lightShowSequential();
lightShowParallel();