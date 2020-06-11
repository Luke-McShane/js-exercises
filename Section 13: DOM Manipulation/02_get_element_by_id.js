// Here is a basic example of getElementById
// We search for a single element with the stated id, which is returned into the corresponding variable
// Remember to use .dir() when wanting to see a document object, otherwise .log() will simply show the HTML

// If you add an ID to an element through JS, you must ensure you add the element into the root document tree, such as
// with Node.insertBefore(), or else you will not be able to access that element with the new ID added to it
// For example
// var element = document.createElement('div');
// element.id = 'testqq';
// var el = document.getElementById('testqq'); // el will be null!

const title = document.getElementById('title');
const main = document.getElementById('main');
console.dir(title);
console.dir(main);
