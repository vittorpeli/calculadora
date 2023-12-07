let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map(button => {
  button.addEventListener('click', (e) => handleButtonClick(e.target.innerText))
})

document.addEventListener('keydown', (e) => {
  const keyPressed = e.key

  const button = buttons.find(btn => btn.innerText === keyPressed)

  if(button) {
    handleButtonClick(keyPressed)
  }
})

function handleButtonClick(value) {
  switch(value) {
    case 'C':
      display.innerText = '';
      break;
    case '=':
      try{
        display.innerText = eval(display.innerText);
      } catch {
        display.innerText = "Error"
      }
      break;
    case 'DEL':
      if(display.innerText) {
        display.innerText = display.innerText.slice(0, -1);
      }
      break;
    default: 
      display.innerText += value;
  }  
}

