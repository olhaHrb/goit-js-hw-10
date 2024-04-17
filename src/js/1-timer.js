import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

let userSelectedDate = 0;

const now = Date.now();
const button = document.querySelector('button[data-start]');
const btnIsActive = false;
button.addEventListener("click", createTimer);
const date = document.querySelector("#datetime-picker");
date.addEventListener("click", hadleClick);
function hadleClick() {
  flatpickr();
};

function createTimer() {
  
};

const selector = date;
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
      console.log(selectedDates[0].getTime());
      if (selectedDates[0].getTime() < now) {
        window.alert("Please choose a date in the future");
      } else {        
        userSelectedDate = selectedDates[0];
        return userSelectedDate;
      };      
    },
};

flatpickr(selector, options);

console.log(userSelectedDate);

