import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

let userSelectedDate = 0;

const now = new Date();
console.log (now);

const date = document.querySelector("#datetime-picker");
date.addEventListener("click", event => {
  
});


const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        console.log(selectedDates[0]);
    },
};



//flatpickr(selector, options);
