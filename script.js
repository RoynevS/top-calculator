const display = document.querySelector(".display");
const numbers = document.querySelectorAll(".number--btn");
const operators = document.querySelectorAll(".operator--btn");
const equal = document.querySelector("#equal");
const clear = document.querySelector("#clear");
const backspace = document.querySelector("#remove");
const decimalPoint = document.querySelector("#decimal");

const add = (a, b) => Number(a) + Number(b);
const subtract = (a, b) => Number(a) - Number(b);
const multiply = (a, b) => Number(a) * Number(b);
const divide = (a, b) => {
  if (Number(b) !== 0) {
    return Number(a) / Number(b);
  } else {
    return "Please don't destroy the universe!";
  }
}; 

let num1;
let num2;
let operator;
let displayValue;

const operate = (num1, operator, num2) => {
  switch (operator) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "*":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
  }
}

const evaluate = () => {
  if (displayValue.split(" ").length === 3) {
    [num1, operator, num2] = displayValue.split(" ");
    display.textContent = Math.round(operate(num1, operator, num2) * 100) / 100;
    if (checkNoDecimalPoint()) {
      decimalPoint.removeAttribute("disabled");
    }
  }
};

const checkDisplay = () => {
  if (displayValue.split(" ").length >= 3) {
    evaluate();
  }
};

const checkNoDecimalPoint = () => {
  const displayText = display.textContent;
  const displayArray = displayText.split(" ");
  if (!displayArray[displayArray.length - 1].includes(".")) {
    return true;
  } else {
    return false;
  }
};


numbers.forEach(number => number.addEventListener("click", (event) => {
  display.textContent += `${event.target.textContent}`;
  displayValue = display.textContent;
}));

operators.forEach(operator => operator.addEventListener("click", (event) => {
  checkDisplay()
  display.textContent += ` ${event.target.textContent} `;
  decimalPoint.removeAttribute("disabled")
}));

clear.addEventListener("click", () => {
  display.textContent = "";
  num1 = undefined;
  num2 = undefined;
  operator = undefined;
  displayValue = undefined;
  decimalPoint.removeAttribute("disabled");
});

equal.addEventListener("click", () => {
  if (display.textContent !== "") {
    evaluate();
  }
});

decimalPoint.addEventListener("click", () => {
  if (checkNoDecimalPoint()) {
    display.textContent += ".";
    decimalPoint.setAttribute("disabled", "");
  }
});

backspace.addEventListener("click", () => {
  const displayTextContent = display.textContent;
  if (displayTextContent[displayTextContent.length - 1] === " ") {
    display.textContent = displayTextContent.slice(0, displayTextContent.length - 3);
  } else {
    display.textContent = displayTextContent.slice(0, displayTextContent.length - 1);
  }
  if (checkNoDecimalPoint()) {
    decimalPoint.removeAttribute("disabled");
  } else if (!checkNoDecimalPoint()) {
    decimalPoint.setAttribute("disabled", "");
  }
});