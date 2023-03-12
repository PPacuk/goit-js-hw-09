function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  
  const startBtn = document.querySelector('button[data-start]');
  const stopBtn = document.querySelector('button[data-stop]');
  const body = document.querySelector('body');
  let timerId = null;

  stopBtn.disabled = true;

  const colorBtnHandler = () => {
    timerId = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor();
    }, 1000);
    startBtn.disabled = true;
    stopBtn.disabled = false;
};

const stopBtnHandler = () => {
    clearInterval(timerId);
    startBtn.disabled = false;
    stopBtn.disabled = true;
};

  startBtn.addEventListener('click', colorBtnHandler);
  stopBtn.addEventListener('click', stopBtnHandler);
