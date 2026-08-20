// console.log("hello world")

// 1. for - loop // 100

// initialization ; condition ; updation value

// let counter = 0;

// counter++
// counter++
// counter++

// console.log(counter)

// 1-10

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// 100 - 150

// for (let i = 100; i <= 150; i++) {
//   console.log(i);
// }

// 1 - 10 , only even numbers

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

// for (let i = 1; i <= 10; i += 2) {
//   console.log(i);
// }

// 20 - 30 // odd numbers

// for (let i = 21; i <= 30; i += 2) {
//   console.log(i);
// }

// 10 - 1

// for (let i = 10; i >= 1; i--) {
//   console.log(i);
// }

// 2. While loop // condition

// let userPassword = prompt("enter your password: ");
// let counter = 0;

// while (userPassword !== "secret123") {
//   console.log("Wrong password");
//   counter++;
//   userPassword = prompt("enter password again");
// }

// console.log("congrats: Now, you get it right.");
// console.log(`you got it ${counter} attempts`);

// for loop - counter controlled loop
// while loop - conditional controlled loop

// let counter = 1;

// while (counter <= 10) {
//   console.log(counter);
//   counter++;
// }

// let favCar = "Honda";

// let userInput = prompt("Guess my fav car brand, Enter you guess:");

// while (userInput !== favCar) {
//   console.log("You guessed wrong 😑");
//   userInput = prompt("Guess again:");
// }

// if (userInput == favCar) {
//   console.log("now, you guessed it right ⭐️");
// }

// do while loop -

// let userInput;

// do {
//   userInput = prompt("enter my fav car brand: ");
// } while (userInput !== "honda");

// if (userInput === "honda") {
//   console.log("you guessed right");
// } else {
//   console.log("you guessed wrong");
// }

// for (let i = 1; i <= 4; i++) {
//   for (let j = 1; j <= 3; j++) {
//     console.log(`(${i}) (${j})`);
//   }
// }

// for (let i = 1; i <= 100; i++) {
//   if (i == 7) {
//     break;
//   }
//   console.log(i);
// }

for (let i = 1; i <= 100; i++) {
  if (i >= 7 && i <= 10) {
    continue;
  }
  console.log(i);
}
