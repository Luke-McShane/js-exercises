const durationInput = document.querySelector('#time');
const playButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');

// We pass in an object that holds a number of callback functions
// Doing this saves us from adding such methods inside the Timer class, which would add unnecessary complexity
const timer = new Timer(durationInput, playButton, pauseButton, {
  onStart() {
    console.log('Timer started!');
  },
  onStop() {
    console.log('Timer stopped!')
  },
  onTick() {
    console.log('TICK!');
  }
});