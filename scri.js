// script.js
let currentInput = '';
let currentOperation = '';
let previousInput = '';

function appendNumber(number) {
  currentInput += number.toString();
  updateDisplay();
}

function clearDisplay() {
  currentInput = '';
  previousInput = '';
  currentOperation = '';
  updateDisplay();
}

function setOperation(operation) {
  if (currentInput === '') return;
  if (previousInput !== '') {
    calculateResult();
  }
  currentOperation = operation;
  previousInput = currentInput;
  currentInput = '';
}

function calculateResult() {
  if (previousInput === '' || currentInput === '') return;
  
  let result;
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);

  switch (currentOperation) {
    case '+':
      result = prev + current;
      break;
    case '-':
      result = prev - current;
      break;
    case '*':
      result = prev * current;
      break;
    case '/':
      if (current === 0) {
        result = 'Error';
      } else {
        result = prev / current;
      }
      break;
    default:
      return;
  }

  currentInput = result.toString();
  currentOperation = '';
  previousInput = '';
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('display').value = currentInput;
}

