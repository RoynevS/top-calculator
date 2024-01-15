const display = document.querySelector(".display");
const numbers = document.querySelectorAll(".number--btn");
const operators = document.querySelectorAll(".operator--btn");
const equal = document.querySelector("#equal");
const clear = document.querySelector("#clear");

const add = (a, b) => Number(a) + Number(b);
const subtract = (a, b) => Number(a) - Number(b);
const multiply = (a, b) => Number(a) * Number(b);
const divide = (a, b) => {
  if (Number(b) !== 0) {
    return Number(a) / Number(b)
  } else {
    return "Please don't destroy the universe!"
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
    display.textContent = operate(num1, operator, num2);
  }
};

const checkDisplay = () => {
  if (displayValue.split(" ").length >= 3) {
    evaluate();
  }
};


numbers.forEach(number => number.addEventListener("click", (event) => {
  display.textContent += `${event.target.textContent}`;
  displayValue = display.textContent;
}));

operators.forEach(operator => operator.addEventListener("click", (event) => {
  checkDisplay()
  display.textContent += ` ${event.target.textContent} `;
}));

clear.addEventListener("click", () => {
  display.textContent = "";
  num1 = undefined;
  num2 = undefined;
  operator = undefined;
  displayValue = undefined;
});

equal.addEventListener("click", evaluate);