// When we return a collection of elements, we can loop through them to change values and styles
const allLIs = document.querySelectorAll('li');

for (li of allLIs) {
	li.innerHTML = 'This is some <b>BOLD</b> text!';
}
