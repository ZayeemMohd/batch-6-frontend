// step 1: creating a function
// function definition
// parameter
// function printIntro(username, city) {

//     // let city = "Hyderabad"

//   console.log("Hello");
//   console.log(`I am ${username}`);
//   console.log(`I live in ${city}`);
//   console.log("Bye");
// }

// // step 2: calling a function

// // arguments
// printIntro("Abdul Rahman", "Hyderabad");
// printIntro("Abdul Raheem", "Mumbai");
// printIntro("Abdul Kareem", "Delhi")

// printIntro("Abdul Raheem");

// printIntro("Abdul Kareem");

// repeatation
// DRY (Don't repeat yourself)

// print no b/w 1-6
// function rollDice() {
//   let result = Math.floor(Math.random() * 6 + 1);
//   console.log(result);
// }

// let result1 = Math.floor(Math.random() * 6 + 1);
// console.log(result1);

// let result2 = Math.floor(Math.random() * 6 + 1);
// console.log(result2);

// rollDice();
// rollDice();
// rollDice();
// rollDice();
// rollDice();
// rollDice();

// parameter
// function printMessage(username, age) {
//   console.log(`My name is ${username}, and I am ${age} years old.`);
// }

// printMessage("Abdul rahman", 22);

// printMessage("Abdul raheem", 52);

// printMessage("Abdul Kareem", 67);

// .splice(2, 1, "apple")

// .slice(2, 3)

// function sum(num1, num2) {
//   let result = num1 + num2;
//   return result
// }

// let returnValue = sum(2, 2);

// console.log(result)

// function mul(num1, num2) {
//   let result = num1 * num2;
//   return result
// }

// sum(2, 5);
// mul(2, 4);

// let result = 22;

// let result = 34;

// 1. Input? -
// 2. Logic? -
// 3. Output? -

// function definition
// function getAverage(num1, num2, num3) {
//   let avg = (num1 + num2 + num3) / 3;

//   return avg;
// }

// // function calling
// const result = getAverage(20, 20, 20);
// console.log(result);

// function printAverage(){

// }

// Global scope

// function div(a, b){
//   // function scope
//   let username = "Khalid"
// }

// function sum(a, b){
//   console.log(username)
//   let result = a + b
//   return result
// }

// sum(1,3)

// console.log(result)

// function mul(a, b){
//   let result = a * b

//   return result
// }

// let result = 323
// let result = 222

// for(let i = 0; i<10; i++){

// }

// console.log(i)

// {
//   // block scope
//   const age = 22;
// }

// console.log(age);

// function parentFn() {
//   let x = 22;

//   function childFn() {
//     console.log("x value in child fn: ",x);

//     function grandChildFn(){
//       console.log("x value in grand child fn", x)
//     }

//     grandChildFn()

//   }

//   childFn();
// }

// parentFn();

// function sum() {}

// // function expression
// let firstVar = function (a, b) {
//   console.log("hello");
// };

// // console.log(firstVar);

// firstVar();
