let display = document.getElementById('display');
let currentValue = '';

function handleButtonClick(value) {
  switch(value) {
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

document.addEventListener('keydown', (e) => {
  const keyPressed = e.key

  if (keyPressed === 'c' || keyPressed === 'C'){
    handleButtonClick('C');
  }else if (keyPressed === 'Backspace') {
    handleButtonClick('DEL');
  }else if(!isNaN(keyPressed) || ['+', '-', '*','/', '%', '.'].includes(keyPressed)) {
    handleButtonClick(keyPressed)
  }else if (keyPressed === 'Enter') {
    handleButtonClick('=')
  }
})

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.forEach(button => {
  button.addEventListener('click', () => handleButtonClick(button.innerText))
})