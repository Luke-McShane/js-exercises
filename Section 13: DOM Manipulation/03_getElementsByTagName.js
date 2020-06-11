// When using a method like getElementsByTagName (note the plural 'elements'), a collection will always be returned
// A collection is an array-like object that is not an array. We can do some things with it that we can do with an array,
// such as accessing elements using indices, but we cannot use array methods on it
// We can convert the collectio into an array using the spread syntax

let paragraphs = document.getElementsByTagName('p');
let paraArray = [ ...paragraphs ];
console.dir(paraArray);
