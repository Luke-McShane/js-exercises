// Try and not get confused here, and understand that we are passing back colour here, because we have created a function called makeColour,
// not a class called makeColour!
// So when we call, for example, const colour1 = makeColour(12,55,241), we are returned the object that is initialized on the first line within
// the function, and has functions added to it before it is returned

function makeColour(r, g, b) {
  const colour = { r: r, g: g, b: b };

  colour.rgb = function () {
    // Here we are destructuring whatever object is calling this function, meaning we have access to its specific properties
    const { r, g, b } = this;
    return `rgb(${r}, ${g}, ${b})`;
  }

  colour.hex = function () {
    const { r, g, b } = this;
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }
  return colour;
}
