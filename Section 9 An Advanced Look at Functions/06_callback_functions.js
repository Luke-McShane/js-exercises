// A callback functions is a function that is passed to another function as a parameter
// and executed within that function it was passed into

function helloWorld() {
	console.log('Hello World!');
}

// This function accepts a function and a timeout as parameters.
// The function passed is executed after the timeout
setTimeout(helloWorld, 2500);

// Here we are passing an anonymous function
setTimeout(function() {
	console.log('Woul ya look at that!');
}, 3500);
