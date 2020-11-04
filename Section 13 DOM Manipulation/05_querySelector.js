// This method is able to select through any method already mentioned.
// We can select using the tag name, the class, or the ID
// .querySelector only returns a single element, while .querySelectorAll returns a collection

// If we wanted to select the first paragraph
const firstPara = document.querySelector('p');

// If we wanted to select all the paragraphs
const allParas = document.querySelectorAll('p');

// Selecting by ID
const title = document.querySelector('#title');

// Selecting by Class
const specialItems = document.querySelectorAll('.special-item');

// We can also be more specific, targeting items just like we would in CSS
const firstSpecial = document.querySelector('li.special');

// If we wanted to target a class item in another part of the document, we can still use our CSS to be more specific
const otherSpecial = document.querySelector('section ul li.special');

// If we had a form and we wanted to target a specific input, we can do that
const submitType = document.querySelector('input[type="submit"]');

// With .querySelectorAll, we get returned a NodeList, which is another lightweight array-like container, but we can use more methods,
// such as forEach, on it.
// However, inner NodeList items can only be accessed using an index number, while items within a HTMLCollection can be accessed with
// an index number along with the name or ID or the inner elements
