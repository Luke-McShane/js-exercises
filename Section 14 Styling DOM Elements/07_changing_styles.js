// When trying to read style properties from elements, you won't be able to read much/anything unless the styles are defined inline
// If we set a style property through selecting the element and altering its style property, then it will add inline styling
const h1 = document.querySelector('h1');
// This sets inline styling in the HTML
h1.style.color = 'aqua';

// If we want to edit a property that is made up of more than one word, then it is camel-cased, rather than kebab-cased, as you
// would see in a CSS document.
h1.style.backgroundColor = 'orchid';

// Inline styling overrides other methods of styling
const allLIs = document.querySelectorAll('li');
const colours = [ 'red', 'green', 'purple', 'orange', 'green', 'teal', 'orchid', 'grey' ];
allLIs.forEach((li, i) => {
	const colour = colours[i];
	li.style.backgroundColor = colour;
});
