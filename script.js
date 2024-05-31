//math operators
const add = (a, b) => roundNumber(Number(a) + Number(b));
const subtract = (a, b) => roundNumber(a - b);
const multiply = (a, b) => roundNumber(a * b);
const divide = (a, b) => roundNumber(a / b);

//actual calculation
const operate = (operat, num1, num2) => {
  if (operat === "+") {
    return add(num1, num2);
  } else if (operat === "-") {
    return subtract(num1, num2);
  } else if (operat === "*") {
    return multiply(num1, num2);
  } else if (operat === "/") {
    return num2 === "0" ? "noob" : divide(num1, num2);
  }
};

//Rounding results
const roundNumber = (num) => {
  return Math.round(num * Math.pow(10, 6)) / Math.pow(10, 6);
};

//global variables
let operand1 = null;
let operand2 = null;
let operator = null;
let result = null;
let displayValue = "0";
const display = document.querySelector("#screenText");

//button event listeners
const buttons = document.querySelectorAll("button");
const clickButton = () => {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", () => {
      if (buttons[i].classList.contains("number")) {
        inputOperand(buttons[i].textContent);
        updateDisplay();
      } else if (buttons[i].classList.contains("operator")) {
        inputOperator(buttons[i].textContent);
      } else if (buttons[i].id === "buttonEquals") {
        inputEquals();
      } else if (buttons[i].id === "buttonClear") {
        inputClear();
      } else if (buttons[i].id === "buttonInverse") {
        inputInvert();
        updateDisplay();
      } else if (buttons[i].id === "buttonPercentage") {
        inputPercentage();
        updateDisplay();
      }
    });
  }
};
clickButton();

//update functions
const updateDisplay = () => {
  display.textContent = displayValue;
};

const inputClear = () => {
  displayValue = "0";
  display.textContent = "0";
  operand1 = null;
  operand2 = null;
  operator = null;
};

const inputOperand = (input) => {
  if (!operand1) {
    if (displayValue == "0") {
      displayValue = input;
    } else if (displayValue === operand1) {
      displayValue = input;
    } else {
      displayValue += input;
    }
  } else {
    if (displayValue === operand1 || displayValue == "0") {
      displayValue = input;
    } else {
      displayValue += input;
    }
  }
};

const inputOperator = (input) => {
  if (!operator) {
    operator = input;
    operand1 = displayValue;
    displayValue = "0";
  } else {
    operand2 = displayValue;
    result = operate(operator, operand1, operand2);
    displayValue = result;
    operand1 = result;
    operand2 = null;
    operator = input;
    updateDisplay();
  }
};

const inputInvert = () => {
  if (displayValue === "-") {
    displayValue = "";
  } else if (displayValue === "") {
    displayValue = "-";
  } else if (displayValue != "0") {
    displayValue = -displayValue;
  } else {
    displayValue = "-";
  }
};

const inputPercentage = () => {
  if (displayValue != "0") {
    displayValue /= 100;
  }
};

const inputEquals = () => {
  if (displayValue === "0") {
    console.log("nothing typed yet but pressed enter");
  } else if (operand1 && operator) {
    operand2 = displayValue;
    result = operate(operator, operand1, operand2);
    displayValue = result;
    updateDisplay();
    operand1 = result;
    operand2 = null;
    operator = null;
  }
};
