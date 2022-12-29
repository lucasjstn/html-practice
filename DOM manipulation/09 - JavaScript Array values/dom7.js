const output = document.querySelector("div");
const myInput = document.querySelector("input");
const btn = document.querySelector("button");

btn.onclick = btnClicked;
myInput.value = "Laurence";

const arr1 = ["One"];
const tempArr = ["onex", "twox", "threex"];
const arr = arr1.concat(tempArr, tempArr);

function btnClicked() {
  const val = myInput.value;
  // console.log(arr);
  let temp = arr.push(val, "LAST");
  console.log(temp);
  temp = arr.pop();
  console.log(temp);
  temp = arr.shift();
  console.dir(temp);
  temp = arr.unshift("First");
  console.dir(temp);
  console.log(arr.length);
  arr[arr.length - 1] = "LAST";
  console.dir(arr);
  arr.push("one1", "two2", "three3");
  temp = arr.splice(1, 3, "Add1", "Add2", "Add3");
  console.dir(temp);
  temp = arr.splice(3, 0, "New1", "New2", "New3");
  console.log("========");
  console.dir(temp);
  temp = arr.slice();
  temp[0] = "TEST";
  console.log(temp);
  console.log(temp.slice(0, 4));
  let myStr = arr.toString();
  console.log(myStr);
  myStr = arr.join("-");
  console.log(myStr);
  output.innerHTML = `<div>${myStr}</div>`;
}
