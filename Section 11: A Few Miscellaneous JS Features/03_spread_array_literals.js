// We can spread array literals just as we spread objects being passed into a function
const a = [ 'a', 'b', 'c' ];
const b = [ 'd', 'e', 'f' ];
const c = [ ...a, ...b ];

// One thing to note is that this only copies the first layer of the object, and does not go layers deep.
// This is significant if we have nested objects and arrays, for, even if we clone the array/object,
// the nested objects will not be cloned but their references will instead be cloned

const arr1 = [ [ 'abc' ], [ 'def' ] ];
const arr2 = [ ...arr1 ];
console.log(arr2);

// So, with the above example, 'arr1 === arr2' is false, because we have created a new object in memory
// to store arr2. However, 'arr1[1] === arr2[1]' is true, because we have copied these references from arr1 over
// to arr 2
