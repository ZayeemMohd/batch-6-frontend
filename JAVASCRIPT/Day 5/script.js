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

// for (let i = 1; i <= 100; i++) {
//   if (i >= 7 && i <= 10) {
//     continue;
//   }
//   console.log("loop", i);
// }

// let cities = ["hyderabad", "mumbai", "delhi", "chennai", "kolkata"];

// // console.log(cities[0]);
// // console.log(cities[1]);
// // console.log(cities[2]);
// // console.log(cities[3]);

// // last_index = length - 1

// for (let i = 0; i < cities.length; i++) {
//   console.log(cities[i]);
// }

// let scores = [85, 92, 78, 95, 88];

// // accumulaor pattern
// let total = 0;

// for (let i = 0; i < scores.length; i++) {
//   total = total + scores[i];
// }

// console.log(total)

// 0 - 10

// let total = 0;

// for (let i = 0; i <= 10; i++) {
//   total += i;
// }

// console.log(total);

// let scores = [85, 92, 78, 95, 88];

// let a = 10;
// let b = 50;
// let c = 2;

// if (a > b) {
//   if (a > c) {
//     console.log("a is maximum");
//   } else {
//     console.log("c is maximum");
//   }
// } else {
//   if (b > c) {
//     console.log("b is maximum");
//   } else {
//     console.log("c is maximum");
//   }
// }

// let scores = [85, 92, 78, 95, 88];

// let max = scores[0];

// for (let i = 0; i < scores.length; i++) {
//   if (scores[i] > max) {
//     max = scores[i];
//   }
// }

// console.log(max)

// special loops: for-of

// let colors = ["Red", "Blue", "Green", "Yellow"];

// for(let color of colors){
//   console.log(color)
// }

// let cities = ["hyderabad", "mumbai", "delhi", "chennai", "kolkata"];

// for (let city of cities) {
//   console.log(city);
// }

// for (let i = 0; i < cities.length; i++) {
//   let city = cities[i];
//   console.log(city);
// }

// let iplTeams = [
//   ["hyderabad", "warangal", "adilabad", "mehboobnagar"],
//   ["mirzapur", "allahbad", "muzaffarnagar"],
// ];

// iplTeams[0][0]
// iplTeams[0][1]
// iplTeams[0][2]

// iplTeams[1][0]
// iplTeams[1][1]
// iplTeams[1][2]

// for (let i = 0; i < iplTeams.length; i++) {
//   for (let j = 0; j < iplTeams[i].length; j++) {
//     console.log(iplTeams[i][j]);
//   }
// }

// let iplTeams = [
//   ["hyderabad", "warangal", "adilabad", "mehboobnagar"],
//   ["mirzapur", "allahbad", "muzaffarnagar"],
// ];

// for(let team of iplTeams){

//   for(let city of team){
//     console.log(city)
//   }

// }

// let city = "Hyderabad";

// for (let i = 0; i < city.length; i++) {
//   console.log(city[i]);
// }

// for(let letter of city){
//   console.log(letter)
// }

let movie = "bahubali";

let userInput = prompt("Enter your guess: ");

let attempts = 0;

while (userInput !== movie && userInput !== "quit") {
  if (attempts < 3) {
    userInput = prompt("Enter you guess again: ");
    attempts++;
  } else {
    break;
  }
}

if (userInput === movie) {
  console.log("congrats you got it right");
} else {
  console.log("You ran out of attempts");
}
