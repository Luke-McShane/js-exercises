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
    // Here we ensure the h, s, and l values are present after the initialization of the object
    this.calcHSL();
  }

  innerRgb() {
    const { r, g, b } = this;
    return `${r}, ${g}, ${b}`;
  }

  rgba(a = 1.0) {
    return `rgba(${this.innerRgb()}, ${a})`;
  }

  rgb() {
    return `rgb(${this.innerRgb()})`;
  }

  hex() {
    const { r, g, b } = this;
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }

  hsl() {
    const { h, s, l } = this;
    return `hsl(${h},${s}%, ${l}%)`;
  }

  fulllySaturated() {
    const { h, l } = this;
    return `hsl(${h},100%, ${l}%)`;
  }

  opposite() {
    const { h, s, l } = this;
    const newHue = (h + 180) % 360;
    return `hsl(${newHue},${s}%, ${l}%)`;
  }

  calcHSL() {
    let { r, g, b } = this;
    // Make r, g, and b fractions of 1
    r /= 255;
    g /= 255;
    b /= 255;

    // Find greatest and smallest channel values
    // What is important here is that these values are present only within this class call,
    // but later, when we assign, for example, this.h = h, then we are creating a new property for the object
    let cmin = Math.min(r, g, b),
      cmax = Math.max(r, g, b),
      delta = cmax - cmin,
      h = 0,
      s = 0,
      l = 0;
    if (delta == 0) h = 0;
    else if (cmax == r)
      // Red is max
      h = ((g - b) / delta) % 6;
    else if (cmax == g)
      // Green is max
      h = (b - r) / delta + 2;
    else
      // Blue is max
      h = (r - g) / delta + 4;

    h = Math.round(h * 60);

    // Make negative hues positive behind 360°
    if (h < 0) h += 360;
    // Calculate lightness
    l = (cmax + cmin) / 2;

    // Calculate saturation
    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

    // Multiply l and s by 100
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);
    this.h = h;
    this.s = s;
    this.l = l;
  }
}

const red = new Colour(255, 67, 89, 'tomato');
red.hsl();
red.opposite();
red.rgba(0.3);
const white = new Colour(255, 255, 255, 'white');