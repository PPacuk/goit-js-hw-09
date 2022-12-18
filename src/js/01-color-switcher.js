function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body');
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

let i = 0;
let intervalId = null;

const startInterval = () => {
  intervalId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor(i++);
  }, 1000);

  startBtn.setAttribute('disabled', true);
  stopBtn.removeAttribute('disabled');
};

const stopInterval = () => {
  clearInterval(intervalId);

  stopBtn.setAttribute('disabled', true);
  startBtn.removeAttribute('disabled');
};

startBtn.addEventListener('click', startInterval);
stopBtn.addEventListener('click', stopInterval);
