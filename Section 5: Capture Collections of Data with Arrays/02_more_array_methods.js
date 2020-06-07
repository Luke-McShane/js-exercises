let fruits = [ 'apple', 'banana', 'pear' ];
let vegetables = [ 'cabbage', 'peas' ];
let meats = [ 'chicken breat', 'steak' ];

// This is how we concatenate multiple arrays together; we can pass multiple arrays to join
// multiple arrays simultaneously
let fruitAndVeg = fruits.concat(vegetables);
let allFood = fruits.concat(vegetables, meats);

console.log(fruitAndVeg);
console.log(allFood);

// We can check if an array contains a certain value and also where (if so) that value is
// in the array (its index value). We can also specify from which point in the array to search from
console.log(allFood.includes('cabbage', 5));
console.log(allFood.includes('cabbage', 0));

console.log(allFood.indexOf('cabbage', 5));
console.log(allFood.indexOf('cabbage', 0));

// We can also reverse an array. Please note that this mutates the array the method is performed on
console.log(allFood.reverse());
console.log(allFood);

let myArr = [ 12.32, false, NaN, undefined, 'test', null ];

// We can join array elements, and can determine with what character(s) they are joined using
console.log(myArr.join(' '));

// Here we are slicing an array based on the two integers we give it, responding to the start and endpoints of where to slic
// The start index is first item, but we must specify one after the index where we want to finish the slice
let animals = [ 'shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise' ];

let swimmers = animals.slice(0, 3);

let mammals = animals.slice(2, 4);

// let reptiles = animals.slice(4, 6);
let reptiles = animals.slice(4);

let quadruped = animals.slice(-3);

// We can directly copy the array, as well
let animalsCopy = animals.slice();

console.log(`Swimmers: ${swimmers}`);
console.log(`Mammals: ${mammals}`);
console.log(`Reptiles: ${reptiles}`);
console.log(`4-legged animals: ${quadruped}`);
console.log(`A copy of the animals array: ${animalsCopy}`);

// At index 2, delete nothing and add the value given
animals.splice(2, 0, 'octopus');

// At index 2, delete 2 items and replace them with the two given
animals.splice(2, 2, 'orca', 'tuna');

// Doesn't sort based on the int type, but converts to a string and compares the UTF values
let nums = [ 1, 10000, 33, 44, 2939 ];
nums.sort();
