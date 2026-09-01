// const numbers = [2, 5, 7, 9];

// function operation(a) {
//   return a * 10;
// }

// let resultArr = [];

// for (let num of numbers) {
//   const result = operation(num);
//   resultArr.push(result);
// }

// console.log(resultArr);

// const numbers = [2, 5, 7, 9];

// // method: higher order method
// numbers.forEach((elem) => {
//   console.log("hello", elem)
// })

// let students = ["Ali", "Rahman", "Khalid", "Saber", "Khaja"];

// students.forEach((elem) => {
//   console.log("Hello", elem);
// });

// const numbers = [2, 5, 7, 9];

// const returnArr = numbers.map((elem) => {
//   let result = elem * 10;
//   return result; // 20, 50, 70, 90
// });

// console.log(returnArr);

// let numbers = [1, 2, 3, 4];

// // [2, 4, 6, 8]
// const newArr = numbers.map((elem)=>{
//       return elem * 2
// })

// console.log(newArr)

// let names = ["alice", "bob", "charlie"];

// const newArr = names.map((elem) => {
//   return elem.toUpperCase();
// });

// // ['ALICE', 'BOB', 'CHARLIE']

// console.log(newArr);

// let students = [
//   { name: "John", age: 20 },
//   { name: "Sarah", age: 22 },
//   { name: "Mike", age: 21 },
// ];

// const resultArr = students.map((elemObj) => {
//   return elemObj.name;
// });

// console.log(resultArr);

// let prices = [100, 200, 150];

// // [118, 236, 177]
// let pricesWithTax = prices.map((price) => {
//   // 18 percent tax
//   let taxWalaPrice = price * 1.18;
//   return taxWalaPrice;
// });

// console.log(pricesWithTax);

let prices = [100, 200, 150];

let priceWithTaxes = prices.map( price => price * 1.18)

console.log(priceWithTaxes)