const btn = document.querySelector('button');

const moveX = (element, amount, delay) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const bodyBoundary = document.body.clientWidth;
      const elRight = element.getBoundingClientRect().right;
      const currLeft = element.getBoundingClientRect().left;
      if (elRight + amount > bodyBoundary) {
        rej({ bodyBoundary, elRight, amount });
      }
      else {
        element.style.transform = `translateX(${currLeft + amount}px)`;
        res();
      }
    }, delay);
  })
};

// We can implicitly return promises as such, making the code elegant and very readable
// We are also able to pass information when we call the reject callback, meaning the catch function is able to print out useful information to the user about the error
moveX(btn, 300, 1000)
  .then(() => moveX(btn, 300, 1000))
  .then(() => moveX(btn, 300, 1000))
  .then(() => moveX(btn, 300, 1000))
  .then(() => moveX(btn, 300, 1000))
  .then(() => moveX(btn, 300, 1000))
  .then(() => moveX(btn, 300, 1000))
  .then(() => moveX(btn, 300, 1000))
  .catch((data) => {
    console.log(`Element is currently ${data.elRight} pixels across, while the screen is only ${data.bodyBoundary} pixels wide! Cannot move another ${data.amount}`);
  })

// moveX(
//   btn,
//   300,
//   1000,
//   () => {
//     //success callback
//     moveX(
//       btn,
//       300,
//       1000,
//       () => {
//         //success callback
//         moveX(
//           btn,
//           300,
//           1000,
//           () => {
//             //success callback
//             moveX(
//               btn,
//               300,
//               1000,
//               () => {
//                 //success callback
//                 moveX(
//                   btn,
//                   300,
//                   1000,
//                   () => {
//                     //success callback
//                     alert('YOU HAVE A WIDE SCREEN!');
//                   },
//                   () => {
//                     //failure callback
//                     alert('CANNOT MOVE FURTHER!');
//                   }
//                 );
//               },
//               () => {
//                 //failure callback
//                 alert('CANNOT MOVE FURTHER!');
//               }
//             );
//           },
//           () => {
//             //failure callback
//             alert('CANNOT MOVE FURTHER!');
//           }
//         );
//       },
//       () => {
//         //failure callback
//         alert('CANNOT MOVE FURTHER!');
//       }
//     );
//   },
//   () => {
//     //failure callback
//     alert('CANNOT MOVE FURTHER!');
//   }
// );
