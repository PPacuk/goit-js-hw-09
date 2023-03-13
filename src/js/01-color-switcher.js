function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  
  const startBtn = document.querySelector('button[data-start]');
  const stopBtn = document.querySelector('button[data-stop]');
  const body = document.querySelector('body');
  const btns = document.createElement('div');
  body.append(btns);
  btns.append(startBtn, stopBtn);
  btns.style.display = 'flex';
  btns.style.gap = '20px';
  btns.style.justifyContent = 'center';
  btns.style.marginTop = '200px';
  startBtn.style.height = '40px';
  startBtn.style.width = '100px';
  stopBtn.style.height = '40px';
  stopBtn.style.width = '100px';
  
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
