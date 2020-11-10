// Classes help is keep everything together, so that we don't have to separately have to define the constructor function
// and then define the prototype properties/methods outside of the constructure function definition
// This is syntactical sugar, meaning that the same outcome is achieved, but the complexities are hidden away behind the scenes
// Whenever inside the class definition, the 'this' keyword will be referencing the individual instance of the class (the object)

class Coiour {
  constructor(r, g, b, name) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.name = name;
  }

  rgb() {
    const { r, g, b } = this;
    return `rgb(${r}, ${g}, ${b})`;
  }

  hex() {
    const { r, g, b } = this;
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }
}

const colour1 = new Colour(255, 255, 255, 'white');