// Steps to create a new element and add it into the webpage
// step 1: Creating an element and adding content to it
// step 2: Appending it to the HTML

// Day 12: DOM Events

// const btn = document.createElement("button");
// btn.innerText = "Click Me";

// const heading = document.querySelector("#heading");
// heading.insertAdjacentElement("afterend", btn);

// console.log(btn)
// btn.onclick = () => {
//   console.log("Button is clicked...");
// };

// btn.onclick = () => {
//     console.log("Clicking button again...")
// }

// const btnfun = () => {
//   console.log("Clicked happend");
// };

// btn.addEventListener("mouseleave", btnfun);

// btn.addEventListener("click", ()=>{
//     console.log("Again clicked...")
// })

// const btn = document.createElement("button");
// btn.innerText = "Like";
// btn.classList.add("like-btn")

// const heading = document.querySelector("#heading");
// heading.insertAdjacentElement("afterend", btn);

// const para = document.createElement("p");
// para.innerText = 0;

// btn.insertAdjacentElement("afterend", para)

// let likeCount = 0;

// btn.addEventListener("click", ()=>{
//     likeCount++
//     para.innerText = likeCount
// })

// toggle implementation

// const btn = document.createElement("button");
// btn.innerText = "Like";

// const heading = document.querySelector("#heading");
// heading.insertAdjacentElement("afterend", btn);

// let isLiked = false;

// btn.addEventListener("click", () => {
//   if (isLiked === false) {
//     isLiked = true;
//     btn.classList.add("like-btn");
//   } else {
//     isLiked = false;
//     btn.classList.remove("like-btn");
//   }
// });

// const heading = document.querySelector("#heading");
// const para = document.querySelector("#para");
// const btn1 = document.querySelector("#btn-1");
// const btn2 = document.querySelector("#btn-2");

// function changeColor() {
//   this.style.backgroundColor = "blue";
// }

// heading.addEventListener("click", changeColor);

// para.addEventListener("click", changeColor);

// btn1.addEventListener("click", changeColor);

// btn2.addEventListener("click", changeColor);

// const inputBox = document.querySelector("#input-box");

// const btn1 = document.querySelector("#btn-1");
// btn1.style.display = "inline-block";
// btn1.style.height = "100px";
// btn1.style.width = "200px";
// btn1.style.position = "absolute";
// btn1.style.top = "0px";
// btn1.style.bottom = "0px";

document.addEventListener("keydown", (event) => {
  //   console.log("event is clicked and this event object recieved:: ", event);

  if (event.code === "ArrowUp") {
    btn1.style.top = parseInt(btn1.style.top) - 10 + "px";
  } else if (event.code === "ArrowDown") {
    btn1.style.top = parseInt(btn1.style.top) + 10 + "px";
  } else if (event.code === "ArrowLeft") {
    console.log("moving left");
  } else if (event.code === "ArrowRight") {
    console.log("moving right");
  }
});

// const form = document.querySelector("form");
// const emailBox = document.querySelector("#email-inp");
// const passBox = document.querySelector("#pass-inp");

// form.addEventListener("submit", (event) => {
//   event.preventDefault();

//   const inputVal = emailBox.value;
//   const passVal = passBox.value;

//   console.log(inputVal, passVal);

//   // backend call
// });

// const heading1 = document.querySelector("#heading1");
// console.log(heading1.innerText);

// const form = document.querySelector("form");

// form.addEventListener("submit", (event) => {
//   event.preventDefault();

//   // step1: getting input value
//   const emailInp = document.querySelector("#email-inp");
//   const passInp = document.querySelector("#pass-inp");

//   const user = {
//     email: emailInp.value,
//     password: passInp.value,
//   };

//   // backend call send this user object
//   console.log(user);

//   emailInp.value = "";
//   passInp.value = "";
// });

// some events realted to input box

// const searchBox = document.querySelector("#sample-inp");

// searchBox.addEventListener("change", () => {
//   const userInput = searchBox.value;

//   console.log("Generating suggestions for input:: ", userInput);
// });

// const inputBox = document.querySelector("#text-inp");
// const paraBox = document.querySelector("#para");

// inputBox.addEventListener("input", () => {
//   paraBox.innerText = inputBox.value;
// });

// const box = document.querySelector("#box");
// const para = document.querySelector("#para")
// const btn = document.querySelector("#btn")

// btn.addEventListener("click", ()=>{

//   const red = Math.floor(Math.random() * 256) // 0-255
//   const green = Math.floor(Math.random() * 256) // 0-255
//   const blue = Math.floor(Math.random() * 256) // 0-255

//   box.style.backgroundColor = `rgb(${red}, ${green}, ${blue})` // "rgb(233, 234, 9)"
//   para.innerText = `rgb(${red}, ${green}, ${blue})`
// })

const inputBox = document.querySelector("#input-box");
const addTodoBtn = document.querySelector("#add-todo-btn");

function deleteFn() {
  console.log("delete button clicked");
}

let counter = 0;

addTodoBtn.addEventListener("click", () => {
  const div = document.createElement("div");
  div.setAttribute("id", counter);

  counter++;

  const newParaTag = document.createElement("p");
  newParaTag.innerHTML = inputBox.value;

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.setAttribute("onclick", "deleteFn()");

  const editBtn = document.createElement("button");
  editBtn.innerText = "Edit";

  div.insertAdjacentElement("afterbegin", editBtn);
  div.insertAdjacentElement("afterbegin", deleteBtn);
  div.insertAdjacentElement("afterbegin", newParaTag);

  addTodoBtn.insertAdjacentElement("afterend", div);

  inputBox.value = "";
});
