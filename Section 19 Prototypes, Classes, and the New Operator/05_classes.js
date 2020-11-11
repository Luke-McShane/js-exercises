// Classes help is keep everything together, so that we don't have to separately have to define the constructor function
// and then define the prototype properties/methods outside of the constructure function definition
// This is syntactical sugar, meaning that the same outcome is achieved, but the complexities are hidden away behind the scenes
// Whenever inside the class definition, the 'this' keyword will be referencing the individual instance of the class (the object)

// The methods that each object instance will have will be found in the __proto__ property of the instance, because they have
// inherited those methods from the class

// The constructor is always automatically run whenever you instantiate a new object from the respective class
// The properties within the constructor are automatically added as properties to that object instance

class Colour {
  constructor(r, g, b, name) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.name = name;
  }

  innerRGB() {
    const { r, g, b } = this;
    return `${r}, ${g}, ${b}`;
  }

  rgba(a = 1.0) {
    return `rgba(${this.rgba()}, ${a})`;
  }

  rgb() {
    return `rgb(${this.innerRGB()})`;
  }

  hex() {
    const { r, g, b } = this;
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }
}

const colour1 = new Colour(255, 255, 255, 'white');