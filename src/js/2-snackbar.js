import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


let delayTime = 0;
let state = 0;

const input = document.querySelector(".form-number");
input.addEventListener("blur", () => {
    delayTime = input.value;
});

const fieldRadio = document.querySelector("fieldset");
fieldRadio.addEventListener("click", handleClick);
function handleClick(event) {
    if (event.target.value === "fulfilled" || event.target.value === "rejected") {
        state = event.target.value;
    } 
};

const form = document.querySelector(".form")
form.addEventListener("submit", handleSubmit);
function handleSubmit (event) {
    event.preventDefault();

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (state === "fulfilled") {
                resolve(`✅ Fulfilled promise in ${delayTime}ms`)
            } else {
                reject(`❌ Rejected promise in ${delayTime}ms`)
            }
        }, delayTime);
    });
    promise
        .then(value => {
            iziToast.info({
            message: value,
            });
//        console.log(value); 
    })
        .catch(error => {
            iziToast.info({
            message: error,
            });
//        console.log(error); 
    });
};




