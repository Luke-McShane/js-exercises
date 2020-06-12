// We can access and change the values of different element attributes.
// For example, we can change the href of a link, the value of a searchbar, the src of an image, the steps needed for a range,
// the checked status of a checkbox, the placeholder text of an input
const textInput = document.querySelector('input[type="text"]');
textInput.placeholder = 'Input Text Here';

const checkboxInput = document.querySelector('input[type="checkbox"]');
checkboxInput.checked = true;

const passwordInput = document.querySelector('input[type="password"]');
passwordInput.value = 'password';

const google = document.querySelector('#google');
google.href = 'http://www.google.com';
