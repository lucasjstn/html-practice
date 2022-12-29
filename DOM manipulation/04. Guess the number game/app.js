const output = document.querySelector("div");
const btn = document.querySelector("button");
const myInput = document.querySelector("input");

let hiddenNumber = 1;
let lowValue = 10;
let highValue = 0;
output.innerHTML = "";

btn.onclick = starter;

function starter() {
  myInput.value = "";
  lowValue = randomNumber(0, 5);
  highValue = randomNumber(lowValue + 1, 50);
  hiddenNumber = randomNumber(lowValue, highValue);
  output.innerHTML += `<div>Guess a number between ${lowValue} and ${highValue}</div>`;
  btn.onclick = clickedMe;
  myInput.setAttribute("type", "number");
  myInput.setAttribute("min", lowValue);
  myInput.setAttribute("max", highValue);
}

function clickedMe() {
  const valInput = myInput.value;
  if (valInput == hiddenNumber) {
    output.innerHTML = `<div>Correct it was ${hiddenNumber}</div>`;
    starter();
  } else {
    let message;
    if (valInput < hiddenNumber) {
      message = `${valInput} was wrong, go Highger`;
      lowValue = valInput;
    } else {
      message = `${valInput} was wrong, go Lower!`;
      highValue = valInput;
    }

    output.innerHTML = `<div>${message}<div>`;
    console.log(hiddenNumber);
    myInput.value = "";
    output.innerHTML += `<div>Guess Again between ${lowValue} and ${highValue}!</div>`;
  }
}

function randomNumber(min, max) {
  return Math.round(Math.random() * (max - min + 1) + min);
}

// myInput.value = 10;
