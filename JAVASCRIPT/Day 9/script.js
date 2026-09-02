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

// let prices = [100, 200, 150];

// let priceWithTaxes = prices.map( price => price * 1.18)

// console.log(priceWithTaxes)

// advanced array methods

// forEach(callbackFn)

// Print hello message with each element of an array

// let students = ["Khalid", "Abdullah", "Shahid", "Ali"];

// const newArr = students.forEach((e, index)=>{
//     console.log(index + 1, "hello" , e)
// })

// console.log("check new ARRAY", newArr)

// 2. .map()

// let fruits = ["apple", "banana", "orange", "mango"];

// const newArr = fruits.map((fruit) => {
//   return fruit.toUpperCase();
// });

// console.log(newArr)

// 3. Filter()

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// a new array with only even numbers

// const filteredArray = numbers.filter((elem)=>{
//     if(elem % 2 == 0){
//         return true
//     } else {
//         return false
//     }
// })

// const filteredArray = numbers.map((elem) => {
//   if (elem % 2 == 0) {
//     return elem;
//   }
// });

// console.log(filteredArray);

// let filteredArray = []

// numbers.forEach((elem) => {
//   if (elem % 2 == 0) {
//     filteredArray.push(elem)
//   }
// });

// console.log(filteredArray)

// let filteredArray = numbers.filter((e) => {

//         return e % 2 == 0

// })

// console.log(filteredArray)

// let filteredArray = numbers.filter((e) => e % 2 == 0);

// console.log(filteredArray);

// .every()

// let ages = [20, 25, 13, 30];

// let finalAns = ages.every((elem)=>{
//     if(elem >= 18){
//         return true
//     } else {
//         return false
//     }
// })

// console.log(finalAns)

// let ages = [20, 25, 19, 30];

// let finalAns = ages.every(elem => elem >= 18);

// console.log(finalAns);

// .some()
// let ages = [12, 10, 19, 10];

// let finalAns = ages.some((elem)=>{
//     if(elem >= 18){
//         return true
//     } else {
//         return false
//     }
// })

// .reduce

// accumulator pattern

// let prices = [200, 250, 170, 300];

// let sum = 0;

// for (let price of prices) {
//   sum = sum + price;
// }

// console.log(sum);

// let prices = [200, 250, 170, 300];

// let sum = prices.reduce((acc, price) => acc + price, 0);

// console.log(sum);

// function definition
// default parameters
// function printSum(num1 = 0 , num2 = 0) {

//     // let num1 = 3
//     // let num2 = 0

//   let result = num1 + num2;
//   console.log(result);
// }

// printSum(3)

function printMax(a, ...num) {
  console.log(num);
  console.log(a);
}

printMax(1, 2, 3, 4, 5, 6);
