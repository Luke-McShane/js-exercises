const cardVal = document.querySelector('#card');
const termsVal = document.querySelector('#terms');
const carsVal = document.querySelector('#cars');

var formData = {};

// Loop through each element
for (let input of [cardVal, termsVal, carsVal]) {
  // Execute a function on the 'target' property of the input, every time the input
  // value is changed
  // The 'change' event means that, for the text input, the event is only triggered when the
  // user either presses enter within the text input, or clicks away (loses focus)
  // input.addEventListener('change', ({ target }) => {
  input.addEventListener('input', ({ target }) => {
    // Destructure the target, extracting these 4 values
    const { name, type, value, checked } = target;
    // If the current element type is checkbox, change the formData checkbox value,
    // else change the car or card data
    formData[name] = type === 'checkbox' ? checked : value;
    console.log(formData);
  })
}

// cardVal.addEventListener('input', (e) => {
//   formData.card = e.target.value;
//   console.log(formData);
// })
// termsVal.addEventListener('input', (e) => {
//   formData.terms = e.target.checked;
//   console.log(formData);
// })
// carsVal.addEventListener('input', (e) => {
//   formData.car = e.target.value;
//   console.log(formData);
// })