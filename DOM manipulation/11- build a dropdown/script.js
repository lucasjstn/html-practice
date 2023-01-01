"use strict";
class Queue {
  constructor() {
    this.items = [];
  }
  push(element) {
    this.items.push(element);
  }

  dequeue() {
    this.items.shift();
  }
}

class Stack {
  constructor() {
    this.items = [];
  }
  push(element) {
    this.items.push(element);
  }
  pop() {
    this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  size() {
    return this.items.length;
  }
}

// const expression = "57/3+5+(9*3)";
// const expression = "(5*4+3*2)-1";
// const expression = "9*3+8*7";
// const expression = "";
// const expression = "(8-1+3)*6-((3+7)*2)";

let output = new Queue();
let operator = new Stack();

// console.log(main.length);

const expression = "(8-1+3)*6-((3+7)*2)^3*3";
const main = untangled(expression);
// console.log(main);

for (let index = 0; index < main.length; index++) {
  if (!isOperator(main[index]) && main[index] != ")") {
    output.push(main[index]);
  } else if (main[index] == ")") {
    let found = true;
    while (
      operator.items[operator.size() - 1] != "(" &&
      operator.size() != 0 &&
      found
    ) {
      output.push(operator.peek());
      operator.pop();
      if (operator.peek() == "(") {
        operator.pop();
        found = false;
      }
    }
  } else {
    if (
      index !== 0 &&
      operator.peek() != "(" &&
      operator.peek() != ")" &&
      operator.peek() &&
      main[index] != "("
    ) {
      if (precedence(main[index], operator.peek())) {
        operator.push(main[index]);
      } else {
        output.push(operator.peek());
        operator.pop();
        operator.push(main[index]);
      }
    } else {
      operator.push(main[index]);
    }
  }

  if (index == main.length - 1 && operator.peek()) {
    while (operator.peek()) {
      output.push(operator.peek());
      operator.pop();
    }
  }
}

console.log(expression);
console.log(output.items);
//se tem algum token
function isThereTokens(array) {
  return array.length !== 0;
}

function precedence(current, previous) {
  const p = {
    "+": 0,
    "-": 1,
    "*": 2,
    "/": 3,
    "^": 4,
  };
  if (p[current] > p[previous]) {
    return true;
  }
  // console.log(main[index]);
}

//verificar se é sinal ou numero
function isOperator(element) {
  const pattern = /[*\+\-\/\\(^]/;
  return pattern.test(element);
}
//separar tudo
function untangled(object) {
  // console.log("untangling");
  const a = separateVariables(object);
  const b = cleanWhiteSpaces(a);
  return b;
}
//separar as variaveis e sinais em uma array
function separateVariables(object) {
  return object.split(/([)(/*+-\^])/g);
}
//limpar os espaços em branco que os paranteses deixam
function cleanWhiteSpaces(object) {
  return object.filter(function (element) {
    return element !== "";
  });
}
