// Cách 1: Dùng document.getElementById()
const heading = document.getElementById("heading");

heading.innerHTML = "Xin chào các bạn!!!";

// Cách 2: Dùng document.getElementsById()
const heading1 = document.querySelector(".heading2");
heading1.innerHTML = "JV231101";

// Cách 3: Dùng document.querySelector()

const heading2 = document.querySelector(".heading");

// Cách 4:
const heading3 = document.querySelector(".heading3");
console.log(heading3.innerHTML);
console.log(heading3.innerText);
console.log(heading3.textContent);

// Cách để tạo một phần tử trong DOM
const listItem = document.querySelector("#listItem");
const liElement1 = document.createElement("li");
const liElement2 = document.createElement("li");
liElement1.innerHTML = "JV231101";
liElement2.innerHTML = "JV231102";

listItem.appendChild(liElement1);
listItem.appendChild(liElement2);

// liElement2.remove();
liElement1.setAttribute("class", "item");
