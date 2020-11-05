const btn = document.querySelector('button');

//This function moves an element "amount" number of pixels after a delay.
//If the element will stay on screen, we move the element and call the onSuccess callback function
//If the element will move off screen, we do not move the element and instead call the onFailure callback
const moveX = (element, amount, delay, onSuccess, onFailure) => {
  setTimeout(() => {
    const bodyBoundary = document.body.clientWidth;
    const elRight = element.getBoundingClientRect().right;
    const currLeft = element.getBoundingClientRect().left;
    if (elRight + amount > bodyBoundary) {
      // Each time we call moveX, we pass in an onFailure callback function, which is run if this condition is met
      onFailure();
    }
    else {
      element.style.transform = `translateX(${currLeft + amount}px)`;
      // We also pass an onSuccess function, which is run if this condition is met.
      // Because of the amount of times we want to move the item if the success condition is met, we must do some serious nesting,
      // which gets very ugly, very quickly
      onSuccess();
    }
  }, delay);
};

// Recall that a callback is simply a function we pass as an argument into another function, with the intention of
// calling this passed function at some point in the main function
moveX(
  btn,
  300,
  1000,
  () => {
    //success callback
    moveX(
      btn,
      300,
      1000,
      () => {
        //success callback
        moveX(
          btn,
          300,
          1000,
          () => {
            //success callback
            moveX(
              btn,
              300,
              1000,
              () => {
                //success callback
                moveX(
                  btn,
                  300,
                  1000,
                  () => {
                    //success callback
                    alert('YOU HAVE A WIDE SCREEN!');
                  },
                  () => {
                    //failure callback
                    alert('CANNOT MOVE FURTHER!');
                  }
                );
              },
              () => {
                //failure callback
                alert('CANNOT MOVE FURTHER!');
              }
            );
          },
          () => {
            //failure callback
            alert('CANNOT MOVE FURTHER!');
          }
        );
      },
      () => {
        //failure callback
        alert('CANNOT MOVE FURTHER!');
      }
    );
  },
  () => {
    //failure callback
    alert('CANNOT MOVE FURTHER!');
  }
);
