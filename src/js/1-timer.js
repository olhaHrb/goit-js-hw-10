import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";



const button = document.querySelector('button[data-start]');
const inputDate = document.querySelector("#datetime-picker");
const clockfaceDays = document.querySelector(".value[data-days]");
const clockfaceHours = document.querySelector(".value[data-hours]");
const clockfaceMins = document.querySelector(".value[data-minutes]");
const clockfaceSeconds = document.querySelector(".value[data-seconds]");

button.addEventListener("click", start);

let userSelectedDate = 0;
let intervalId = null;

button.disabled = true;
inputDate.disabled = false;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    button.disabled = false;
  //  if (inputDate.disabled) {
  //    return;
  //  };
    if (selectedDates[0].getTime() < Date.now()) {
      button.disabled = true;
      iziToast.error({
        title: 'Error',
        message: 'Please choose a date in the future',
      });
    } else {
      userSelectedDate = selectedDates[0];
    };
  }, 
};

flatpickr(inputDate, options);


function start() {
  if(button.disabled) {
    return;
  }
  const startTime = userSelectedDate;
  if ((startTime - Date.now()) <= 0) {
    return;
  };

  intervalId = setInterval(() => {
    const deltaTime = startTime - Date.now();
    if (deltaTime <= 0) {
    button.disabled = false;
    inputDate.disabled = false;
    clearInterval(intervalId);
    return;
    }
    const time = getTime(deltaTime);
    updateClockface(time);
  }, 1000);

  button.disabled = true;
  inputDate.disabled = true;
  
};


function getTime(time) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = pad(Math.floor(time / day));
  // Remaining hours
  const hours = pad(Math.floor((time % day) / hour));
  // Remaining minutes
  const minutes = pad(Math.floor(((time % day) % hour) / minute));
  // Remaining seconds
  const seconds = pad(Math.floor((((time % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}
function pad(value) {
  return String(value).padStart(2, "0");
};

function updateClockface({ days, hours, minutes, seconds }) {
  clockfaceDays.innerHTML = `${days}`;
  clockfaceHours.innerHTML = `${hours}`;
  clockfaceMins.innerHTML = `${minutes}`;
  clockfaceSeconds.innerHTML = `${seconds}`;
};
