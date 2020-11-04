console.log('I print first');
setTimeout(() => {
  console.log('I print after 2 seconds'),
    2000
});
console.log('I print second');

// We've discussed how the JS interpreter can handle only one thing at a time, so how can it manage keeping track of the timer whilst
// continuing past and printing out 'I print second'? Well, the JS interpreter is NOT keeping track of this timer! Instead, the browser
// takes care of the timing in this case and, when the time has elapsed, the broswer hands back the callback function by adding it to the
// top of the stack.
// This is the same for requests to APIs, saving to databases, and even event listeners: JS just hands these processes to the browser to
// manage/run. So, when we have an event listener, constantly listening for something, and many elements have listeners, it is the
// browser that is taking care of these jobs. And when an event occurs and a callback function must be run, the browser simply adds
// the function to the call stack for the JS interpreter to execute.
// We hand over these callback functions to 'Web APIs', which is basically just the browser's way of executing callbacks.

// Use this resource for demonstration:
// http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D