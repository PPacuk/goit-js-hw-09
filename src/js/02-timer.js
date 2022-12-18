import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const startBtn = document.querySelector('[data-start]');
const daysCouner = document.querySelector('[data-days]');
const hoursCouner = document.querySelector('[data-hours]');
const minutesCouner = document.querySelector('[data-minutes]');
const secondsCouner = document.querySelector('[data-seconds]');
const inputTime = document.querySelector('#datetime-picker');
let selectedData;

startBtn.setAttribute('disabled', true);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    startBtn.removeAttribute('disabled');
    selectedData = selectedDates[0].getTime();
  },
};

const flatP = new flatpickr(inputTime, options);

const timeRemaining = () => {
  startBtn.setAttribute('disabled', true);
  inputTime.setAttribute('disabled', true);

  const timeId = setInterval(() => {
    const data = Date.now();
    const timeCounter = selectedData - data;
    const { days, hours, minutes, seconds } = convertMs(timeCounter);

    if (timeCounter < 0) {
      clearInterval(timeId);
      return Notify.failure('Please choose a date in the future');
    }

    addLeadingZero({ days, hours, minutes, seconds });
  }, 1000);
};

startBtn.addEventListener('click', timeRemaining);

const addLeadingZero = ({ days, hours, minutes, seconds }) => {
  daysCouner.textContent = `${days}`.padStart(2, '0');
  hoursCouner.textContent = `${hours}`.padStart(2, '0');
  minutesCouner.textContent = `${minutes}`.padStart(2, '0');
  secondsCouner.textContent = `${seconds}`.padStart(2, '0');
};
