// This is the basic syntax for a while loop. It's not great practice to declare the variable outside the while loop
// We wouldn't use a while loop for the below example, for we know the exact amount of times we want the loop to run.
// A while loop is best for when we don't have an initially known amount of times we want the loop to run
let num = 0;
while (num <= 5) {
	console.log(num);
	num++;
}

// Breakdown of the while loop:
// While(some condition)
//  in the while loop, update some states that may make that condition false, and repeat until the condition is false

const target = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);

while (guess !== target) {
	guess = Math.floor(Math.random() * 10);
	console.log(`Target: ${target}   Guess: ${guess}`);
}
console.log('CONGRATS! YOU WIN!');
