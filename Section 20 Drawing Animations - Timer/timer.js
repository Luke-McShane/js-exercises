class Timer {
  // Determining the value of 'this'

  // Go down the list of questions - the first one you can answer 'yes' to will give you the answer of 'this':

  // 1: Did you define the function with an arrow function.
  // If so, go above the method to the first valid line, and console.log(this) will give you the value of 'this'
  //eg:  
  /*
  const food = {
    printFood() {

      console.log(this)
      const printThis = () => {
        console.log(this)
      }
      printThis();
  }  
  food.printFood()
  */
  //  Above, because the first console.log(this) will print the food object, so must the second console.log(this)


  // 2: Did you call 'bind', 'call', or 'apply' on the function when you invoked it?
  // 'this' will be equal to the first argument of 'bind', 'call', or 'apply'
  // eg
  /*
  const myFunc = function () {
    console.log(this);
  }

  myFunct.call({ car: 'toyota' });
  myFunct.bind({ car: 'toyota' });
  myFunct.apply({ car: 'toyota' });
  */
  //  Above, the value of 'this' will be the first argument in the 'bind', 'call, or 'apply' invokation 

  // 3: All other cases
  // 'this' will be the value of whatever object/element the function was called on
  // This is equal to whatever is on the left-hand side of the '.' in the method call
  // eg
  /*
  const colours = {
    printColour() {
      console.log(this)
    }
  }

  const randomObject = {}
  randomObject.printColour = colours.printColour;
  randomOjbet.printColour()
  */
  // Above, when we call randomObject.printColour(), the value of 'this' will be randomObject, because this is left to the '.'

  // Another point is that you can use the online compiler Babbel to see how you code is actually run on older browsers using the software

  // Each argument will be a DOM element
  constructor(durationInput, playButton, pauseButton, circle, callbacks) {
    this.durationInput = durationInput;
    this.playButton = playButton;
    this.pauseButton = pauseButton;
    // This check allows the user to not pass in any callbacks
    // We here create methods that reference these callbacks functions
    if (callbacks) {
      this.onStart = callbacks.onStart;
      this.onStop = callbacks.onStop;
      this.onTick = callbacks.onTick;
    }

    // Here, 'this' is the value of the class, so we can access all the class methods
    // console.log(this);
    this.playButton.addEventListener('click', this.start);
    // If we didn't have the start function as an arrow function, we could use bind, which creates a new function that has its 'this' value as the
    // value of the psased argument. So, when we pass in 'this' as the first argument, that will be the value of 'this' in hte newly created function
    // this.playButton.addEventListener('click', this.start.bind(this));

    this.pauseButton.addEventListener('click', this.pause);
  }

  // start() {
  //   // If we invoke this method from outside the class, as we do at timer.start(), then the value of 'this' will be the class
  //   // However, if we invoke this method through the event listener attached to the play button, then the value of 'this' will be the button
  //   console.log('Starting the timer!');
  //   console.log(this);
  // }

  start = () => {
    // However, if we define the method using an arrow function, then there is no binding of 'this'
    // Instead, the value of 'this' always refers to the object that defined the method
    if (this.onStart) {
      this.onStart(this.timeRemaining);
    }
    this.tick();
    // When we call setInterval, we are returned an integer, which is an ID that pertains to this ongoing timer, which we can reference when wanting to pause a timer
    this.intervalId = setInterval(this.tick, 50);

  }

  pause = () => {
    clearInterval(this.intervalId);
  }

  tick = () => {
    // This is the DOM-centric approach, which means that the HTML element holds the value, which is read in the JS code, manipulated, then the HTML element is adjusted accordingly
    // This method of manipulating the DOM is archaic, and the newer method is to attach an event listener to the DOM element we may want to manipulate
    // const timeRemaining = parseFloat(this.durationInput.value);
    // this.durationInput.value = timeRemaining - 1;

    // The left-hand side calls the setterm and automatically passes as an argument the right side of the statement, which calls the getter
    // We don't need to call either Getter or Setter as a function, because the compilers is aware of these being Getters and Setters, which can be treated as instance variabless
    if (this.timeRemaining <= 0) {
      this.onStop();
      this.pause();
      if (this.onComplete) {
        this.onComplete();
      }
    } else {
      this.timeRemaining -= 0.05;

      if (this.onTick) {
        this.onTick(this.timeRemaining);
      }
    }
  }

  // Getters and Setters hide complexity, and allow the information extracted to be used as if it were an instance variable
  get timeRemaining() {
    return this.durationInput.value;
  }

  set timeRemaining(time) {
    this.durationInput.value = time.toFixed(2);
  }

  // Call whenever the user changes the duration value
  onDurationChange() {

  }
}