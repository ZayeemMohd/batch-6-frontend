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
console.log(document.all[6].innerText);

// updating an object value

document.all[6].innerText = "Hi you are hacked";

console.log(document);
