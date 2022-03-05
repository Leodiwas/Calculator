"use script";

// Switch
const body = document.body;
const calcContainer = document.querySelector(".container");
const totalText = document.querySelector(".current__calc");
const toggleSwitch = document.getElementById("switch");
toggleSwitch.addEventListener("click", (e) => {
  e.preventDefault();
  toggleSwitch.classList.toggle("active");
  body.classList.toggle("active");
  calcContainer.classList.toggle("active");
  totalText.classList.toggle("active");
});
