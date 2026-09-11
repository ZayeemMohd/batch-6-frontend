// console.log("hello world");

// setTimeout(() => {
//   console.log("hi");
// }, 0);

// console.log("Bye ");

// hello world -- 2s -> hi -> bye

// console.log("hello");

/// time consuming line // blocking problem

// for (let i = 0; i < 10000000000; i++) {} // blocking problem

// console.log("second line");

// console.log("bye");

// console.log("hello")

// // time consuming function, blocking
// setTimeout(() => {
//     console.log("after 4 seconds")
// }, 4000);

// console.log("bye")

// hello - 4s - after 4 seconds -> bye

// setTimeout(() => {
//     h1.style.color = "red";
// }, 1000);

// setTimeout(() => {
//   h1.style.color = "yellow";
// }, 1000);

// Db call

// setTimeout(() => {

//   console.log("db call started")

//   let userData = {
//     username: "mohd",
//     age: 30,
//     marks: 22
//   }

//   console.log("db call finished")

// }, 3000);

// console.log("Printing the data", userData)

const h1 = document.querySelector("h1");

// problem

setTimeout(() => {
  h1.style.color = 'red'
}, 2000);

setTimeout(() => {
  h1.style.color = 'yellow'
}, 2000);

setTimeout(() => {
  h1.style.color = 'green'
}, 2000);

console.log("finished")

// function changeColor(color, callback) {

//   // first 1: color: red, callback: changeColor('yellow')

//   // second 2: color: yellow, callback: changeColor("green")

//   // third 3: color: green, callback: ()=>{clg("finished")}
//   setTimeout(() => {
//     h1.style.color = color;

//     callback();
//   }, 2000);
// }

// changeColor("red", () => {
//   changeColor("yellow", () => {
//     changeColor("green", ()=>{
//       console.log("finished")
//     });
//   });
// });
