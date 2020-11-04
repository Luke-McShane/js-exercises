// Just like getElementsByTagName, this method will return a collection of elements, the elements of which we can apply array methods
// on if we spread the collection into an array
const other = document.getElementsByClassName('other');

// We can also select a HTML element that contains other elements and perform methods on these selected elements
const ul = document.getElementsByTagName('ul')[0];
const specialItem = ul.getElementsByClassName('special-item');

// We don't have access to 'ul.getElementById' because there should only be one ID in the whole document, meaning we need global scope
// to ensure only one item exists
