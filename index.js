let display = document.getElementById('display');
let currentValue = '';

const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');
const multiplyBtn = document.getElementById('multiply');
const divideBtn = document.getElementById('divide');
const percentBtn = document.getElementById('percent');

function handleButtonClick(value) {
  switch(value) {
    case '+':
      currentValue += '+';
      break;
    case '-':
      currentValue += '-';
      break;
    case 'x':
      currentValue += '*';
      break;
    case '÷': 
      currentValue += '/';
      break;
    case '%':
      currentValue = (parseFloat(currentValue) / 100).toString();
      break;
    case 'C':
      currentValue = '';
      break;
    case '=':
      try{
        currentValue = eval(currentValue);
      } catch {
        currentValue = "Error"
      }
      break;
    case 'DEL':
      currentValue = currentValue.slice(0, -1)
      break;
    default: 
      currentValue += value;
  }  
  updateDisplay();
}

function updateDisplay() {
  display.innerText = currentValue || '0'
}

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.forEach(button => {
  button.addEventListener('click', () => handleButtonClick(button.innerText))
})