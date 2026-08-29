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

// 1. input
// 2. Logic
// 3. output

// method 1
// function definiton
// function sum(a, b, c){
//     console.log("Function ran...")
//     let result = a + b + c;
//     return result
// }

// // funciton calling
// let result = sum(2, 4, 5)

// console.log(result)

// method 2
// function expression
// let sum = function (a, b) {
//   let result = a + b;
//   return result;
// };

// let result = sum(1, 2);
// console.log(result);

// method 3
// Arrow function
// let mul = (a, b) => {
//   return a *b;
// };

// let result = mul(2, 4);
// console.log(result);

// shotcut
// let mul = (a, b) => a * b;

// let result = mul(2, 4);
// console.log(result);

// let sqrt = num => num * num;

// console.log(sqrt(3));

// let cube = num => num * num * num

// console.log(cube(2))

// function sum(a, b, c) {
//   let result = a + b + c;
//   return result;
// }

// // console.log(sum)

// // Higher order functions
// function greet(sumFn) {

//   return

// }

// greet(sum);

// Higher order function
// function manager() {
//   let sum = (a, b) => {
//     console.log(a + b);
//   };

//   return sum;
// }

// let returnValue = manager();

// console.log(returnValue);

// let greet = () => {
//   console.log("Hello world");
// };

// function repeatFn(userFn, userCount){
//     for(let i = 1; i <= userCount; i++){
//         userFn()
//     }
// }

// repeatFn(greet, 4)

// let greet = () => {
//   console.log("hello world");
// };

// // create a function that runs children function 3 times

// // repeat: Higher order function
// function repeat3times(userFn, repeatCount) {
//   // let userFn = () => {
//   // console.log("hello world")
//   // }

//   for (let i = 1; i <= repeatCount; i++) {
//     userFn();
//   }
// }

// // greet: callback function
// repeat3times(greet, 10);

// let user1 = {
//   // property = key: value
//   username: "Amir Khan",
//   city: "hyderbad",
//   phoneNumber: 8734343030,
//   // method = function in an object
//   greet: function () {
//     console.log("Hello Amir Khan");
//   },

// };

// user1.city
//  user1.greet()

// let city = 'hyderabad'

// city.slice(1, 2)

let Math = {
  PI: 3.14,
  sum: function (a, b) {
    console.log(a + b);
  },
  mul: (a, b) => {
    console.log(a * b);
  },
  div(a, b) {
    console.log(a / b);
  },
};

Math.div(4, 2)
Math.sum(2, 3)
Math.mul(2, 2)