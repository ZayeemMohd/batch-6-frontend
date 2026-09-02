// const student = {
//   name: "Ali",
//   rollNo: 22,
//   english: 70,
//   math: 40,
//   physics: 50,

//   printAvg: function () {
//     let average = (this.english + this.math + this.physics) / 3;
//     console.log("Student average: ", average);
//   },
// };

// student.printAvg();

// global space

// alert("Hello world");

// method > parent properties nai milre the

// const student1 = {
//   name: "Ali",
//   english: 22,
//   math: 33,
//   physics: 50,
//   printAvg: function () {
//     let result = (this.english + this.math + this.physics) / 3;
//     console.log("student avg marks: ", result);
//   },
// };

// const student2 = {
//   name: "Mehmood",
//   english: 82,
//   math: 93,
//   physics: 100,
//   getAvg() {
//     let result = (this.english + this.math + this.physics) / 3;
//     return result;
//   },
// };

// student1.printAvg();

// const result = student2.getAvg();
// console.log(result);

// console.log("first line");

// try {
//   console.log(username);
// } catch (error) {
//   console.log("something went wrong", error);
// }

// console.log("1000th line");
// console.log("1000th line");
// console.log("1000th line");
// console.log("1000th line");
// console.log("1000th line");
// console.log("1000th line");
// console.log("1000th line");

// function printName(){
//   console.log("hi my name is khan")
// }

// function expression
// const printName = function(){
//   console.log("hi my name is khan")
// }

// const printName = () => {
//    console.log("hi my name is khan")
// }

/// explicit return (manual return)  or implicit return (auto return)

// standard function > manual return
// function sum(a, b){
//   let result = a + b
//   return result
// }

// arrow function > auto return

// const square = a =>  a * a

// settimeout()

// .slice(2, 4)
// .splice( 1, 2, "apple",)

// function printMe() {
//   console.log("Hello my name is khan");
// }

// printMe();

// higher order fn
// setTimeout(printMe, 1000);

// console.log(2 + 2);

//

// setTimeout(() => {
//   console.log("Hello my name is khan");
// }, 1000);

function sum(a, b) {
  console.log(a + b);
}

function sum(a, b) {
  return a + b;
}

// const result = sum(1, 2)

// console.log(result)

// const intervelid1 = setInterval(() => {
//   console.log("Hi");
// }, 1000);

// setTimeout(() => {
//   clearInterval(intervelid1);
// }, 3000);

// Anonomous function (callback function)

// setTimeout: Higher order function

// setTimeout(() => {
//   console.log("Hello world")
// }, 1000)

// let count = 0; // 1 , 2 , 3

// const intervalId1 = setInterval(() => {
//   console.log(count);
//   count = count + 1;

//   if (count > 10) {
//     console.log("Inside if statement");
//     clearInterval(intervalId1);
//   }
// }, 1000);



// const student1 = {
//   name: "Mohd",
//   marks: 90,

//   printMarks: function () {
//     console.log(this.marks);
//   },

//   delayedPrintMarks: function () {

//     setTimeout( () => {
//       console.log(this.marks);
//     }, 1000);

//   },
// };

// student1.delayedPrintMarks();
