// The call stack is what is used to help the JS interpreter understand where in the code it
// currently is. It provides knowledge of what function is currently being called and what inner-
// functions are being called. It calls multiple functions, and operates on a LIFO basis. So, when
// a new function is called and added to the call stack, it will be the first the be executed, that
// is, until another is added before this one is executed.

const multiply = (x, y) => x * y;

const square = x => multiply(x, x);

const isRightTriangle = (a, b, c) => {
  return (square(a) + square(b) === square(c));
}

console.log(isRightTriangle(3, 4, 5));

// In this example, the first function added to the call stack is isRightTriangle.
// From here, the function square is called, and so is added onto the call stack, and then
// multiply is called. Because multiply returns a value, it is popped from the stack. And now
// square can return a value, and is thus popped from the stack. But we cannot pop isRightTriangle
// from the stack, because we still have functions to call. So the same is now done with square(b)
// and square(c), until isRightTriangle can return a boolean value, whereafter it is popped from
// the call stack.

// Understanding the call stack is vital for understanding how asynchronous in JS works

// We can see the call stack in real-time using the dev tools in Chrome:
// Dev Tools --> Sources --> your js file --> Add breakpoint on line by clicking line number
// --> Step into each function call and watch the call stack change as you run through
// your code

// Finally, understand the JS is single-threaded, meaning that, at most, only a single line of code
// is ever running