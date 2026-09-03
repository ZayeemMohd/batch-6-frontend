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

// function printMax(a, ...num) {
//   console.log(num);
//   console.log(a);
// }

// printMax(1, 2, 3, 4, 5, 6);

// function printHello(name = "Abc"){
//   console.log("Hello", name)
// }

// printHello("Ali")

// rest operator ...ParameterName

// fn definition
// function maximum(...numbers){
//       console.log(numbers)
// }

// // calling
// maximum(1, 3, 5, 6, 7 ,2)

// function calculator(opreration, ...numbers) {
//   // let numbers = [3, 4, 6]

//   let sum = numbers.reduce((acc, elem) => {
//     return acc + elem;
//   });

//   if (opreration === "sum") {
//     console.log(sum);
//   }
// }

// calculator("sum", 3, 4, 5, 9);

// let numbers = [2, 3, 4, 6, 9];

// console.log(numbers[0], numbers[1], numbers[2], numbers[3])

// ...numbers = numbers[0], numbers[1], numbers[2], numbers[3]

// console.log(numbers[0], numbers[1], numbers[2], numbers[3]);

//  let numbers = [2, 3, 4, 6, 9];

//  let maximumVal = Math.max(...numbers)

//  console.log(maximumVal)

// let numbers = [2, 3, 4, 6, 9];

// let copyArr = [...numbers]

// console.log(copyArr);

// let numbers = [2, 3, 4];

// let newArray = [1, ...numbers, 5, 6, 7];
// console.log(newArray);

// let city = "hyderabad";
// let cityArr = [...city];

// console.log(cityArr);
// console.log("h", "y")

// let user = {
//   name: "Tony Stark",
//   email: "tony@stark.com",
//   age: 40
// };

// let newUser = {
//   ...user,
//   city: "New York",
//   superPower: "Iron man suit",
// };

// console.log(newUser);

// let colors = ["Red", "Green", "Blue"];

// // let first = colors[0];
// // let second = colors[1]
// // let third = colors[2]

// // console.log(third)

// let [first, second, third] = colors;

// console.log(second);

// let numbers = [1, 2, 3, 4, 5];

// let [, two, , four] = numbers;

// console.log(two, four);

// let student = {
//   name: "Rahul",
//   age: 20,
//   grade: "A",
// };

// let name = student.name

// let username = student.name;
// let userage = student.age;
// let grade = student.grade

// console.log(username);

// let { name, age } = student;

// console.log(name)

// console.log(username);
// console.log(userage)

// Object destructure

// 1. Object destructure with same keys: let { name, age } = student;
// 2. Object destructue with different keys: let {name: username} = student
// 3. Default in destructure

// let student = {
//   name: "Rahul",
//   grade: "A",
//   age: 22
// };

// let { name, age = 18 } = student;

// console.log(name);
// console.log(age);

// let numbers = [1, ];

// let [first, second = 2] = numbers;

// console.log(first);
// console.log(second);


