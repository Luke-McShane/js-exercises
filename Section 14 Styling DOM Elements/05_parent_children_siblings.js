// Here we can select child, sibling, and parent elements based on the currently selected element
// We can traverse multiple 'generations'/ancestors by using the properties multiple times (.parentElement.parentElement, for example)
// The difference between, for example, nextSibling and nextElementSibling is that the former returns the next node as a text node,
// a comment node, or an element node, while the latter always returns an element node

// Selecting parent elements
const specialLI = document.querySelector('section ul li.special');
console.dir(specialLI.parentElement);
console.dir(specialLI.parentElement.parentElement);

// Displaying the siblings
console.dir(specialLI.nextElementSibling);
// This returns null, for there is no previous element sibling
console.dir(specialLI.previousElementSibling);
const thirdLI = specialLI.nextElementSibling.nextElementSibling;
const secondLI = thirdLI.previousElementSibling;

// Displaying all child elements
const sectionUL = document.querySelector('section ul');
console.dir(sectionUL.children);
