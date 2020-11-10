// When we capitalize the first letter of a function, we are showing that we are defining a class
// A class should be called with the 'new' keyword, to show that we're creating an object from this class
// If we don't use the new keyword, the 'this' statements within the class will point to the window object
// With the new keyword, however, a new object is implicitly created within the the object, and the 'this'
// statements reference this
// At the end of the execution with the class, this object is returned
// This 'class' is known as a constructor function, as it is constructing a new object for us
// We can also add functions and properties that are shared between all objects of this type, by calling
// Function.prototype.newFunction/newProperty

function Colour(r, g, b) {
  this.r = r;
  this.g = g;
  this.b = b;
}

Colour.prototype.rgb = function () {
  const { r, g, b } = this;
  return `rgb(${r}, ${g}, ${b})`;
}

Colour.prototype.hex = function () {
  const { r, g, b } = this;
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

Colour.prototype.rgba = function (a = 1.0) {
  const { r, g, b } = this;
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}

const colour1 = new Colour(123, 52, 215);
const colour2 = new Colour(22, 221, 152);
const colour3 = new Colour(243, 194, 25);

// Although each function contains 'this', the 'this' points to the individual object referencing it, so we don't just get
// the same values - the functions are contained within the prototype that each object inherits from

console.log(colour1.rgb());
console.log(colour2.rgb());
console.log(colour3.rgb());
console.log(colour1.rgb === colour2.rgb);

console.log(colour1.hex());
console.log(colour2.hex());
console.log(colour3.hex());
console.log(colour2.hex === colour3.hex);

console.log(colour1.rgba());
console.log(colour2.rgba());
console.log(colour3.rgba());
console.log(colour1.rgba === colour3.rgba);