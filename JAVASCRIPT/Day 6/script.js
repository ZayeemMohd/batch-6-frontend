// console.log("hello world")

// let users = ["Ali", "Mehmood", "Shahrukh", "Adnan"];

// // CRUD

// // Read
// console.log(users[0]);

// // create add
// users.push("Salman");
// console.log(users);

// // update existing
// users[0] = "Ali Khan";
// console.log(users);

// // delete
// // users.shift();
// // console.log(users);
// users.splice(2, 1)
// console.log(users)

// let users = ["Ali", "Mehmood", "Shahrukh", "Adnan"];
// users[0]
// let ages = [26, 33, 66, 40];

// let users = []

// const user1 = {
//   username: "Ali",
//   age: 26,
//   gender: "male",
//   city: "Hyderabad",
//   isVerified: false
// };

// CRUD

// Read
// console.log(user1.username, user1.age);
// console.log(user1.age);
// console.log(user1.gender);
// console.log(user1.city);
// console.log(
//   `User name is: ${user1.username}, his age is: ${user1.age}, he is ${user1.gender}, he lives in ${user1.city}`,
// );

// let caption = "It a sunny day"

const post1 = {
  caption: "It a sunny day",
  username: "itz_crazy_xyz",
  date: "12-08-2026",
  imageURL:
    "https://ik.imagekit.io/acrrubsd0/charminar.jpg?updatedAt=1784190842445",
  likeCount: 2,
  tags: ["#cool", "#super", "#crazy", "#hyderabad"],
  comments: {
    hidden_123: "wow, nice photo",
    khaja_26: "nice, photo",
  },
};

// add
post1.city = "hyderabad";

//update value
post1.username = "itz_crazy_abc";
console.log(post1);

// update value
post1.likeCount = post1.likeCount + 1;

//delete

delete post1.date
console.log(post1)

// console.log(post1.comments.hidden_123);
// console.log(post1.comments.khaja_26);

// console.log(post1.tags);
// console.log(post1.tags[0]);
// console.log(post1.tags[1]);
// console.log(post1.tags[2]);
// console.log(post1.tags[3]);
