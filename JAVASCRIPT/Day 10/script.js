console.dir(document);

// let document = {
//   all: [
//     {
//       innerText: "Day 10 JS",
//     },
//     {},
//     {},
//     {},
//     {},
//   ],
// };

// reading an object
// console.log(document.all[6].innerText);

// // updating an object value

// document.all[6].innerText = "Hi you are hacked";

// console.log(document);

// 1: selecting an HTML element

// console.log()

// setTimeout(() => {
//   console.log("Testing timeout");
//   document.all[6].innerText = "Hi How are you";
// }, 2000);

// methods
// 1 select elements by tag name

// document.all[6].innerText

// array, collection, nodeList []

// return an array
// const h1Arr = document.getElementsByTagName("h1");

// h1Arr[1].innerText = "Abc"

// 2. select elements by id

// const mainH1 = document.getElementById("main-heading");

// console.log(mainH1);

// mainH1.innerText = "Abc";

// 3. select element by classname

// const liArr = document.getElementsByClassName("list-item");

// console.log(liArr);

// liArr[2].innerText = liArr[2].innerText + " on time";

const liArr = document.querySelectorAll(".list-item");
console.log(liArr);
