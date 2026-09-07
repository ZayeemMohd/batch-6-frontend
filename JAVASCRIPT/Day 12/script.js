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

// document.addEventListener("keydown", (event) => {
//   //   console.log("event is clicked and this event object recieved:: ", event);

//   if (event.code === "ArrowUp") {
//     btn1.style.top = parseInt(btn1.style.top) - 10 + "px";
//   } else if (event.code === "ArrowDown") {
//     btn1.style.top = parseInt(btn1.style.top) + 10 + "px";
//   } else if (event.code === "ArrowLeft") {
//     console.log("moving left");
//   } else if (event.code === "ArrowRight") {
//     console.log("moving right");
//   }
// });

const form = document.querySelector("form");
const emailBox = document.querySelector("#email-inp");
const passBox = document.querySelector("#pass-inp");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const inputVal = emailBox.value;
  const passVal = passBox.value;

  console.log(inputVal, passVal);

  // backend call
});
