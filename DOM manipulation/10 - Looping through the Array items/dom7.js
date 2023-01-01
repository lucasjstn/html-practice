const output = document.querySelector("div");

const myInput = document.querySelector("input");

const btn = document.querySelector("button");

btn.onclick = btnClicked;

myInput.value = "Laurence";
const eles = document.querySelectorAll("div div");
console.log(eles);

const arr = [];

for (let i = 0; i < 10; i++) {
  output.innerHTML += `<div>${i} Test Div</div>`;
}
