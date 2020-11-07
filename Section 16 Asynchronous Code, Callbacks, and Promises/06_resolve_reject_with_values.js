// We can also pass in values when resolving and rejecting promises

// const makePromise = () => {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       const rand = Math.random();
//       rand < 0.5 ? res('Success') : rej('Failure');
//     }, 1500);
//   });
// }

// const workPromise = makePromise().then((value) => { console.log(`This promise was a ${value}`) }).catch((value) => { console.log(`This promise was a ${value}`) });


const makeRequest = (page) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const pages = {
        '/about': 'This is my about page!',
        '/contact': { name: 'Luke', email: 'lukejsmcshane@gmail.com', mobile: '+61492822268' },
        '/home': 'This is my home page!'
      };
      const data = pages[page];
      if (data) {
        res({ status: 200, data });
      } else { rej({ status: 404 }) };
    }, 1500)
  })
}

const homeRequest = makeRequest('/home')
  .then((response) => {
    console.log(`Status: ${response.status}\nData: ${JSON.stringify(response.data)}\nRequest Succeeded`)
  })
  .catch((response) => { console.log(`Status: ${response.status}\nRequest to Home page Failed`) });

const contactRequest = makeRequest('/contact')
  .then((response) => {
    console.log(`Status: ${response.status}\nData: ${JSON.stringify(response.data)}\nRequest Succeeded`)
  })
  .catch((response) => { console.log(`Status: ${response.status}\nRequest to Contact page Failed`) });

const aboutRequest = makeRequest('/about')
  .then((response) => { console.log(`Status: ${response.status}\nData: ${response.data}\nRequest Succeeded`) })
  .catch((response) => { console.log(`Status: ${response.status}\nRequest to About page Failed`) });

const shopRequest = makeRequest('/shop')
  .then((response) => { console.log(`Status: ${response.status}\nData: ${response.data}\nRequest Succeeded`) })
  .catch((response) => { console.log(`Status: ${response.status}\nRequest to Shop page Failed`) });