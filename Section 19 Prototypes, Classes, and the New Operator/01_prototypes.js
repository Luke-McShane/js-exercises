// Prototypes are templates/blueprints that all JS objects inherit methods and properties from
// So, for example, the Array prototype has a select number of methods and properties that every
// array you create will inherit
// Every array, for example, will have a __proto__ property, which is a direct link to this prototype
// object, meaning it has acccess to all the inherited properties and methods

// Here we have defined a string, and below we have created a new function for the string prototype,
// which this string inherits from. Thus, we can perform this method on this string!
const myStr = 'Hello';
String.prototype.yell = function () { return `${this.toUpperCase()}!!! WHY AM I YELLING?!?!` };
console.log(myStr.yell());