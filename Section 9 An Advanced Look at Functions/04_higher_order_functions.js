// A higher order function is one that operates with/on other functions, meaning they can accept functions
// as arguments and return functions as the return value

function run() {
	console.log('I AM RUNNING!');
}

function walk() {
	console.log('i am walking,');
}

function runFunc(action, num) {
	for (let i = 0; i < num; i++) {
		action();
	}
}

runFunc(run, 12);
runFunc(walk, 2);
