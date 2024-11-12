"use strict";
console.log("hello");

let number = 1;
const button = document.querySelector(".button");
const span = document.querySelector(".span");

button.addEventListener("click", function () {
  span.textContent = number++;
  span.style.color = "blue";
});
