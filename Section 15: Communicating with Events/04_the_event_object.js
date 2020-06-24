const colours = [ 'Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet' ];

const container = document.querySelector('#container');
const h1 = document.createElement('h1');
h1.innerText = 'I AM BLACK';

document.body.prepend(h1);
for (colour of colours) {
	const box = document.createElement('div');
	box.classList.add('box');
	box.style.backgroundColor = colour;
	box.addEventListener('mouseover', changeColour);
	container.append(box);
}

// When we add an event listener, the function called from the even is not being called by us, but rather by the event itself
// Because of this, the function called is passed an event object, which we have access to
// This event object captures information about the event, and this information is available in its properties
function changeColour(event) {
	console.log(event);
	h1.innerText = `I AM ${this.style.backgroundColor.toUpperCase()}`;
	h1.style.color = this.style.backgroundColor;
}
