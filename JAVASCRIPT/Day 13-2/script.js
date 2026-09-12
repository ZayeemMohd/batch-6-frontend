// Example 5: fetchStudentData function and printStudentData function (lab work)

// Example 6: Register → Send Email → Update Database → Send Welcome SMS (lab work)

// Example 7: Simple save messages to db functions

// Example 8: Advance save messages to db (handle db rejection situations)

// Introduction to promises (creating and consuming promises)
// Introduction to promise chaining

// no problem scenarie
// sync
// console.log("First line")

// // async function
// setTimeout(() => {
//     console.log("second line")
// }, 1000);

// // sync
// console.log("third line")

// problem scenarie

// step 1: wrap the sync(2nd function) in an ananomous function (wrapper function)

// Example 1: greet function (async fn) and goodBye function (sync fn)

// async function
// function greet(callback) {
//   setTimeout(() => {
//     console.log("Hello HI");

//     callback(); // goodBye();
//   }, 5000);
// }

// // sync function

// function goodBye() {
//   console.log("Bye");
// }

// greet(() => {
//   // some code
//   goodBye();
// });

// console.log("remaing 1000 lines of code");

// Example 2: calculate sum function and print the sum function

// let result; // 22

// // async function sum
// function calculateSum(callback) {
//   setTimeout(() => {
//     console.log("calculate sum function ran...");
//     result = 22;

//     callback(); // printSum();
//   }, 2000);
// }

// function printSum() {
//   console.log("Print sum function ran...");
//   console.log(result);
// }

// // async
// calculateSum(() => {
//     // sync
//   printSum();
// });

// Example 3: Food delivery simulator functions

// confirm async function hai
// function orderBooked(callback) {
//   let delay = Math.floor(Math.random() * 4); // 0 - 3
//   setTimeout(() => {
//     console.log("Order booked successfully:: ", delay);

//     callback(); // orderPrepared();
//   }, delay * 1000);
// }

// function orderPrepared(callback) {
//   let delay = Math.floor(Math.random() * 5); // 0 - 4
//   setTimeout(() => {
//     console.log("Order prepared successfully:: ", delay);

//     callback(); // orderDelivered();
//   }, delay * 1000);
// }

// function orderDelivered(callback) {
//   let delay = Math.floor(Math.random() * 5); // 0 - 4
//   setTimeout(() => {
//     console.log("Order delivered successfully:: ", delay);

//     callback(); //  console.log("all steps of order completed");
//   }, delay * 1000);
// }

// orderBooked(() => {
//   orderPrepared(() => {
//     orderDelivered(() => {
//       console.log("all steps of order completed");
//     });
//   });
// });

// Example 4: Color change functions
// const h1 = document.querySelector("h1");

// function changeToRed(callback) {
//   let delay = Math.floor(Math.random() * 5); // 0 - 4
//   setTimeout(() => {
//     h1.style.color = "red";

//     callback(); //   changeToYellow();
//   }, delay * 1000);
// }

// function changeToYellow(callback) {
//   let delay = Math.floor(Math.random() * 5); // 0 - 4
//   setTimeout(() => {
//     h1.style.color = "yellow";

//     callback(); //  changeToGreen();
//   }, delay * 1000);
// }

// function changeToGreen(callback) {
//   let delay = Math.floor(Math.random() * 5); // 0 - 4
//   setTimeout(() => {
//     h1.style.color = "green";

//     callback(); // console.log("all colors applied...")
//   }, delay * 1000);
// }

// changeToRed(() => {
//   changeToYellow(() => {
//     changeToGreen(() => {
//       console.log("all colors applied...");
//     });
//   });
// });

// Example 7: Simple save messages to db functions

function saveMsg1(callback) {
  let delay = Math.floor(Math.random() * 5); // 0 - 4
  setTimeout(() => {
    console.log("Msg 1 saved...");

    callback(); //  saveMsg2();
  }, delay * 1000);
}

function saveMsg2(callback) {
  let delay = Math.floor(Math.random() * 5); // 0 - 4
  setTimeout(() => {
    console.log("Msg 2 saved...");

    callback(); // saveMsg3();
  }, delay * 1000);
}

function saveMsg3(callback) {
  let delay = Math.floor(Math.random() * 5); // 0 - 4
  setTimeout(() => {
    console.log("Msg 3 saved...");

    callback(); //  console.log("All messages saved successfully...")
  }, delay * 1000);
}

saveMsg1(() => {
  saveMsg2(() => {
    saveMsg3(() => {
      console.log("All messages saved successfully...");
    });
  });
});

// sync
// console.log("js")
// for()



// async
// setTimeout()
// fetch();
// setInterval()