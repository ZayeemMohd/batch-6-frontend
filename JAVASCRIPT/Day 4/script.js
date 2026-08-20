// let str1 = "   Hyderbad   "

// console.log(str1)
// console.log(str1.trim());

// const city = prompt("Enter you city: ");

// let newCity = city.trim();

// console.log(city)
// console.log(newCity)

// let city = "hyderabad";

// const newCity = city.toUpperCase();

// console.log(newCity);

// let city = "HYDERABAD";

// const newCity = city.toLowerCase();

// console.log(newCity);

// let str = "Javascript";

// let foundIndex = str.indexOf("a");

// console.log(foundIndex);

// let message = "I love javascript";

// let word = "Javascript";

// const index = message.indexOf(word);

// console.log(index);

// let para =
//   " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, amet laudantium sequi magnam iure voluptatem repellendus, dolorem voluptates expedita quos est porro maiores ad impedit pariatur eum modi eligendi non";

// let userWord = prompt("Enter the word to find indexOf: ");

// const indexResult = para.indexOf(userWord);

// // console.log(indexResult)

// if (indexResult === -1) {
//   console.log("Word not found");
// } else {
//   console.log(`Word found at this index: ${indexResult}`);
// }

// let str1 = "    HYDERABAD   ";

// let trimmedStr = str1.trim();

// let finalStr = trimmedStr.toLowerCase();

// console.log(finalStr);

// let str1 = "    HYDERABAD   ";

// const finalStr = str1.trim().toLowerCase();

// console.log(finalStr)

// console.log(str1)

// const message = "Hello World";

// let slicedWord = message.slice(0, 5);

// console.log(slicedWord);

// const word = "Javascript hello";

// // const letter = word.slice(9, 10);

// // const letter = word.slice(4);

// const letter = word.slice(-1);

// console.log(letter);

// let message = "Hello, where are you?";

// let result = "Hi, where are you?".replace("Hi", "Hello") ;

// console.log(result)

// let fruit1 = "green apple"

// let fruit2 = "orange"

// let fruit3 = "banana"

// let fruit4 = "grapes"

// let fruit5 = "dragon fruit"

// console.log(fruit5)

// CRUD operations: Create, Read, Update, Delete

// let fruits = ["green apple", "orange", "banana", "grapes", "dragon fruit", "kiwi"]

// const count = fruits.length;

// console.log(count)

// Read Operation
// let targetFruit = fruits[1]

// console.log(targetFruit)

// let fruits = ["apple", "banana", "pineapple", "orange"];

// let count = fruits.length

// console.log(count);

// let numbers = [12, 22, 1, 3, 5];

// let isLogin = [true, false, true, true]

// let user1 = ["kahlid", 24, true]

// let users = ["Khalid", "abdul rahman", "Omar", "abdullah"];

// // Read operation:
// // let user1 = users[1]
// // console.log(user1)

// // update operation:

// users[1] = "Abdul Raheem"

// console.log(users)

// let str1 = "Hyderabad"

// str1[0] = "c"

// console.log(str1)

// read
// update

// create / add / insert

// let users = ["Khalid", "abdul rahman", "Omar", "abdullah"];

// // .push()

// users.push("Qhadeer")

// users.push("Ali")

// console.log(users)

// .pop()

// users.pop()

// console.log(users)

// Add = start

// let users = ["Khalid", "abdul rahman", "Omar", "abdullah"];

// let deletedValue = users.pop()

// users.unshift(deletedValue)

// console.log(users)

// .shift()

// console.log(users)

// const deletedVal = users.shift();

// console.log(`Value deleted from array:: ${deletedVal}`)

// console.log(users)

// add / remove
// push / pop
// unshift / shift
// starting / ending

// let colors = ["red", "yellow", "blue", "green", "black"];

// let userInput = prompt("Enter the color you want find index of: ");

// let foundIndex = colors.indexOf(userInput);

// if(foundIndex === -1){
//     console.log("Color not found");
// } else {
//     console.log(`Color exists at index:: ${foundIndex}`)
// }

// let elemCount = colors.length;

// console.log(elemCount);

// const foundIndex = colors.indexOf("apple");

// console.log(foundIndex);

// let cars = ["hyundai", "toyota", "suzuki", "mg", "maruti"];

// let userInput = prompt("Enter car brand you want to search: ");

// let isFound = cars.includes(userInput);

// if (isFound) {
//   console.log("Yes we do have that car");
// } else {
//   console.log("sorry, we don't have that car");
// }

// let arr1 = ["jan", "feb", "mar"];
// let arr2 = ["apr", "jun", "jul"];

// // let firstHalf = arr1 + arr2; // "jan,feb,marapr,jun,jul"

// returns a new array:::
// let firstHalf = arr1.concat(arr2)

// console.log(firstHalf);

// console.log("arr1 value", arr1)

// let trafficLight = ["red", "yellow", "blue", "green"];

// console.log(trafficLight)

// trafficLight.reverse();

// console.log(trafficLight);

// let fruits =  ["apple", "banana", "mango", "orange", "grape"];

// // doesn't modify the original array, instead returns a new array
// let slicedArr = fruits.slice(4)

// console.log(fruits) // original array
// console.log(slicedArr) // sliced array

// let original = [10, 20, 30];

// // returns a new array
// let copy = original.slice();

// console.log(copy);
// console.log(original);

// let colors = ["red", "green", "blue", "yellow", "purple"];

// // orignal array modify
// let deletedArr = colors.splice(2, 2);

// console.log(colors);

// console.log(deletedArr);

// adding without deleting

// let colors = ["red", "green", "blue", "yellow", "purple"];

// colors.splice(2, 0, "black");

// console.log(colors);

// colors.splice(3, 1, "orange");

// console.log(colors);

// let fruits = ["banana", "apple", "mango", "cherry"];

// // original array modify
// fruits.sort();

// console.log(fruits)

// let numbers = [22, 1, 44, 2, 6];

// numbers.sort();  // only works with strings

// console.log(numbers)

// let scores = [85, 92, 78, 95, 88];

// // sort numbers in asc order
// scores.sort((a, b) => a - b);

// // sort numbers in des order
// scores.sort((a, b) => b - a);

// console.log( scores.length );

// .join()

// let colors = ["red", "green", "blue"];

// // returns a new value
// let result = colors.join(", ");

// console.log(result)

// let cusine = ["mugalai", "chinease", "arabian", "irani"];

// let cusineText = cusine.join(", ");

// console.log(cusineText);

// console.log(cusine.toString());

// let number = 22;
// let copyNum = number;

// copyNum = copyNum + 1

// console.log("org variable", number) // 22
// console.log("copy variable", copyNum); // 23

// shallow copy
// let cars = ["bmw", "feari", "mclaren", "tesla"];

// let copyCars = cars;

// copyCars[1] = "ferrari";

// console.log("Oringal array:: ", cars);
// console.log("copy array:: ", copyCars);

// deep copy

// let cars = ["bmw", "feari", "mclaren", "tesla"];

// let copyCars = cars.slice();

// copyCars[1] = "ferrari";

// console.log("Oringal array:: ", cars);
// console.log("copy array:: ", copyCars);

// let array = [true, "hyderabd", 123, ["red", "green"]];

// console.log(array[0]); // true
// console.log(array[1]); // "hyderabad"
// console.log(array[2]); // 123

// let childArray = array[3][0];
// let value = childArray // 'red'

// console.log(childArray);

let IPLTeams = [
  ["virat", "patidar", "abd"],
  ["rohit", "hardik", "bumra"],
  ["ishan", "abhishek", "cummins"],
];

console.log(IPLTeams[0][0][0]); // "virat"[0]
console.log(IPLTeams[0][1]);
console.log(IPLTeams[0][2]);

console.log(IPLTeams[1][0]);
console.log(IPLTeams[1][1]);
console.log(IPLTeams[1][2]);

console.log(IPLTeams[2][0]);
console.log(IPLTeams[2][1]);
console.log(IPLTeams[2][2]);
