// The extends keyword is used by a class to inherit functionality that will be common across multiple classes
// It helps reduce repeated code, making it more D.R.Y

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {
    return `${this.name} is eating!`;
  }
}

class Dog extends Animal {
  bark() {
    return 'WOOF!';
  }

  // When we call dogInstance.eat(), this method will be called, because the interpreter first checks the Dog class for the method,
  // and only if it doesn't find it here will it go up to the class inherited from
  eat() {
    return `${this.name} wolfs down his food!`;
  }
}

class Cat extends Animal {
  // Because we are defining the constructor here, the inherited one would usually not be called.
  // However, because we call super from within the constructor, the corresponding method (the constructor function) from within the
  // extended class will be call, with the corresponding parameters
  constructor(name, age, livesLeft = 9) {
    super(name, age);
    this.livesLeft = livesLeft;
  }

  meow() {
    return 'MEOW!';
  }
}