const form = document.querySelector('#submit-form');
const cardVal = document.querySelector('#card');
const termsVal = document.querySelector('#terms');
const carsVal = document.querySelector('#cars');
const list = document.querySelector('#list');

form.addEventListener('submit', function (e) {
  // preventDefault() prevents the default behaviour of the selected element.
  // Here, then, the default behaviour of the event (the form) is to submit the data and refresh the page,
  // but this will no longer happen
  e.preventDefault();
  alert('The form has been submitted');
  console.log(`Card Number: ${cardVal.value} \nAgreed to Terms: ${termsVal.checked} \n
               Car Selected: ${carsVal.value}`);

  let l1 = document.createElement('li');
  l1.innerText = cardVal.value;
  let l2 = document.createElement('li');
  l2.innerText = termsVal.checked;
  let l3 = document.createElement('li');
  l3.innerText = carsVal.value;

  list.appendChild(l1);
  list.appendChild(l2);
  list.appendChild(l3);

})