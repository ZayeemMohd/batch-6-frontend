// Selectors -
// .getElementById()
// .getElementsByClassName()
// .getElementsByTagName()
// .querySelector()
// .querySelectorAll()

// indirect-way of selecting an element's object
// step 1: select the one you recognize
// step 2: Apply one of these properties
//          - .parentElement
//          - .children
//          - previousElementSibling
//          - nextElementSibling

// -- DOM manipulation
// 1. Text of Element object
// 2. Attributes of Element object
// 3. style of Element object
// 4. classList of Element object

// -- creating and adding new elements in HTML through javascript
// Step 1: Creating an element :: document.createElement("tagName")

// Step 2: Append it into HTML

// 1.  Some Properties of Element Objects:

// .innerText
// .innerHTML
// .textContent

// 2.  Attributes

// const heading1 = document.querySelector("#heading1");

// console.dir(heading1);

// const idAttr = heading1.getAttribute("class");
// console.log(idAttr);

// setInterval(() => {

//     setTimeout(() => {
//         heading1.setAttribute("class", "red");
//     }, 500);

//      heading1.setAttribute("class", "green");

// }, 1000);

// const imgArr = document.querySelectorAll(".oldImg");

// console.log(imgArr);

// [{}, {}, {}]
// let srcAttr = imgArr[0].getAttribute("src");
// console.log(srcAttr);

// imgArr[0].setAttribute("src", "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkTN2WS2ksvhiPODyyh0NjJ1CFBXUBtAdX8PpOML3JF0GnpioEoNmZgr8bSJxcuL2jvMgJZHYi1_hJvtXXEnq-em84kMGfqVTujzpkguVe7ZHBxVNPU4MQWtBJgpo-UPNSFpm-Eww=s1360-w1360-h1020-rw");

// forEach, map, reduce, filter

// imgArr.forEach((elem)=>{
//     elem.setAttribute("src", "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkTN2WS2ksvhiPODyyh0NjJ1CFBXUBtAdX8PpOML3JF0GnpioEoNmZgr8bSJxcuL2jvMgJZHYi1_hJvtXXEnq-em84kMGfqVTujzpkguVe7ZHBxVNPU4MQWtBJgpo-UPNSFpm-Eww=s1360-w1360-h1020-rw")
// })

// imgArr[0].setAttribute()
// imgArr[1].setAttribute()
// imgArr[2].setAttribute()

// 3.  style (inline)

// const heading1 = document.querySelector("#heading1");

// heading1.style.color = "red";

// heading1.style.backgroundColor = "white"
// heading1.style.borderRadius = "20px"

// console.log(heading1);

// forward css (normal css)

// reverse css

// const heading1 = document.querySelector("#heading1");

// heading1.setAttribute("class", "main-text");

// const h2Elem = document.querySelector("h2");

// h2Elem.setAttribute("class", "main-text");

// const heading1 = document.querySelector("#heading1");

// heading1.setAttribute("class", "green");

// heading1.setAttribute("class", "underline");

// class="green underline"

// heading1.classList.add("green");
// heading1.classList.add("underline");
// heading1.classList.add("blueBorder");

// setTimeout(() => {
//   heading1.classList.remove("blueBorder");
// }, 1000);

// const answer = heading1.classList.contains("green");
// console.log(answer);

// setInterval(()=>{
//     heading1.classList.toggle("green")
// }, 1000)

// const heading1 = document.querySelector("#heading1");

// const parentOfHeading = heading1.parentElement;

// parentOfHeading.classList.add("yellowBg");

// const imgDiv = document.querySelector(".images");

// const childrenArr = imgDiv.children;

// console.log(childrenArr);

// const heading1 = document.querySelector(`#heading1`)

// const nextSib = heading1.previousElementSibling
// console.log(nextSib)

// step 1: Creating an element and adding content to it
const newParaElem = document.createElement("p"); // <p></p>
newParaElem.innerText = "I am paragraph 1 created using js";

const newParaElem2 = document.createElement("p");
newParaElem2.innerText = "I am paragraph 2 created using js";
// step 2: Appending it to the HTML

// const bodyElem = document.querySelector("body");
// bodyElem.appendChild(newParaElem)
// bodyElem.append(newParaElem, newParaElem2);

const heading1 = document.querySelector("#heading1");
heading1.insertAdjacentElement("afterbegin", newParaElem);
