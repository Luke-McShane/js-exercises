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



  // Each argument will be a DOM element
  constructor(durationInput, playButton, pauseButton) {
    this.durationInput = durationInput;
    this.playButton = playButton;
    this.pauseButton = pauseButton;

    // Here, 'this' is the value of the class, so we can access all the class methods
    // console.log(this);
    this.playButton.addEventListener('click', this.start);
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
    console.log(this);
    console.log('Starting the timer!');
  }

  pause() {

  }

  // Call whenever the user changes the duration value
  onDurationChange() {

  }

  tick() {

  }
}

const durationInput = document.querySelector('#time');
const playButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');

const timer = new Timer(durationInput, playButton, pauseButton);
timer.start();