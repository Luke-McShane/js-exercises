// When we create a variable for an array, the variable stores a pointer that points to a
// space in memory. So, when we set newNums to nums, we are setting newNums to have the
// same pointer as nums, meaning that, when we change the value of nums, we also change
// the value of newNums because we are altering the value that the pointer points to
let nums = [ 1, 2, 3 ];

let newNums = nums;

console.log(newNums);

nums.push(4);

console.log(newNums);

// Because the array value is the place in storage, we can change what values that
// place in storage holds, but cannot change the reference value.
const myArr = [ 'cat', 'dog', 'turtle' ];
myArr.push('horse'); // This is fine, for we are not changing the pointer value
myArr = [ 'tortoise', 'frog' ]; // Not okay, because we are creating a new array, and thus a new pointer
