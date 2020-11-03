const input = document.querySelector('#username');

// A keydown event occurs when a key is depressed in the input.
// So, for example, if we tab into the input, the keydown event will not trigger
// due to the tab key being pressed outside of the element
input.addEventListener('keydown', function() {
	console.log('A key has been pressed down!');
});

// This is triggered when a key is released in the element
input.addEventListener('keyup', () => console.log('a key has been released!'));

// This is triggered when a character is appended to the element.
// So, for example, holding down the shift key will not trigger this event
input.addEventListener('keypress', () => console.log('keypress event'));

const addItemInput = document.querySelector('#addItem');
const items = document.querySelector('#items');

addItemInput.addEventListener('keypress', function(e) {
	if (e.key === 'Enter') {
		if (!this.value) return;
		const li = document.createElement('li');
		li.innerText = this.value;
		items.appendChild(li);
		this.value = '';
	}
});
