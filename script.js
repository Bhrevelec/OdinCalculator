//math operators
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

//values typed in calculator
let operand1;
let operand2;
let operator;

//display value
let displayValue = "0";
const display = document.querySelector("#screenText");

//actual calculation
const operate = (operat, num1, num2) => {
  if (operat === "+") {
    return add(num1, num2);
  } else if (operat === "-") {
    return subtract(num1, num2);
  } else if (operat === "*") {
    return multiply(num1, num2);
  } else if (operat === "/") {
    return divide(num1, num2);
  }
};

//populate the display upon clicking buttons
const numbers = document.querySelectorAll(".number");
addEventListenerList(numbers, "click", (event) => {
  if (displayValue === "0") {
    displayValue = event.target.textContent;
  } else {
    displayValue += event.target.textContent;
  }
  display.textContent = displayValue;
});

//add event listeners to a nodelist
function addEventListenerList(list, event, fn) {
  for (var i = 0, len = list.length; i < len; i++) {
    list[i].addEventListener(event, fn, false);
  }
}
