// Add your code here
let interval;
const time = document.querySelector('input');

window.onload = (event) => {
randomColor();  
};

function changeBackground() {
  if (!interval) {
    if (time.value >= 1) {
      interval = setInterval(randomColor, time.value * 1000);
    }
    else {
      interval = setInterval(randomColor, 0.5 * 1000);
    }
  }
}

function randomColor() {
  const randomBackground = document.getElementById('page-background')
  const range = 266;
  randomBackground.style.backgroundColor = `rgba(${Math.random() * range}, 
  ${Math.random() * range}, 
  ${Math.random() * range}, 
  ${Math.random() * 0.8})`;
}

function startAndStop() {
  mode = document.getElementById('start-and-stop');
  if(mode.innerHTML === 'Start') {
    mode.innerHTML = 'Stop';
    mode.classList.remove('btn-primary');
    mode.classList.add('btn-danger');
    
    changeBackground();
  }
  else if(mode.innerHTML === 'Stop') {
    mode.innerHTML = 'Start';
    mode.classList.remove('btn-danger');
    mode.classList.add('btn-primary');
    clearInterval(interval);
    interval = null;
  }
} 

document.getElementById('start-and-stop').addEventListener('click', startAndStop);