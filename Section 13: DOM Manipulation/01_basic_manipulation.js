// This is a basic script that can be used to randomly move and rotate all children of the viewport on a webpage.
// Try adding this as a Chrome snippet (in the inspector) and observe the results
const allEls = document.getElementById('viewport').children;
for (let el of allEls) {
	el.style.transition = 'all 2s ease-in-out';
}

setInterval(function() {
	for (let el of allEls) {
		let x = Math.floor(Math.random() * document.body.clientWidth);
		let y = Math.floor(Math.random() * document.body.clientHeight);
		let deg = Math.floor(Math.random() * 360);
		el.style.transform = `translate(${x}px, ${y}px) rotate(${deg}deg`;
	}
}, 2000);
