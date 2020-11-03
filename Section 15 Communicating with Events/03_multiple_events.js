const colours = [ 'Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet' ];

const container = document.querySelector('#container');
const h1 = document.createElement('h1');
h1.innerText = 'I AM BLACK';
h1.addEventListener('mouseover', function() {
	console.log(this.innerText);
});
document.body.prepend(h1);
// Create a div element for each element in colour
for (colour of colours) {
	const box = document.createElement('div');
	box.classList.add('box');
	box.style.backgroundColor = colour;
	// Adding the function so it is called on the event stated
	box.addEventListener('mouseover', changeColour);
	container.append(box);
}

// This function is called on the event added to the box
function changeColour() {
	// We change the styling of the heading
	h1.innerText = `I AM ${this.style.backgroundColor.toUpperCase()}`;
	h1.style.color = this.style.backgroundColor;
}
