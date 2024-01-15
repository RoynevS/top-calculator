const display = document.querySelector(".display");
const numbers = document.querySelectorAll(".number--btn");
const operators = document.querySelectorAll(".operator--btn");
const equal = document.querySelector("#equal");

const add = (a, b) => Number(a) + Number(b);
const subtract = (a, b) => Number(a) - Number(b);
const multiply = (a, b) => Number(a) * Number(b);
const divide = (a, b) => Number(a) / Number(b); 

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


numbers.forEach(number => number.addEventListener("click", (event) => {
  display.textContent += `${event.target.textContent}`;
  displayValue = display.textContent;
}));

operators.forEach(operator => operator.addEventListener("click", (event) => {
  display.textContent += ` ${event.target.textContent} `;
}));

equal.addEventListener("click", () => {
  [num1, operator, num2] = displayValue.split(" ");
  display.textContent = operate(num1, operator, num2);
});