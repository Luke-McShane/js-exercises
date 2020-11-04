// The .createElement() method creates a HTML element based on the tag name we pass as an argument
// The .createElement() doesn't add the newly created object to the document, but just creates it in JS
// We must thus use the .appendChild() method, passing in the newly created object, to add the object to the DOM.
// We call .appendChild() on whatever DOM object we want to append the child object to

// When we .appendChild(), the appended child is appended to the end of the parent, after the other children
const h2 = document.createElement('h2');
h2.innerText = 'I am thus born!';

document.querySelector('section').appendChild(h2);
