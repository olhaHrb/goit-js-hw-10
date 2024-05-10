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
                resolve(delayTime)
            } else {
                reject(delayTime)
            }
        }, delayTime);
    });
    promise
        .then(value => {
            iziToast.info({
            message: (`✅ Fulfilled promise in ${delayTime}ms`),
            }); 
    })
        .catch(error => {
            iziToast.info({
            message: (`❌ Rejected promise in ${delayTime}ms`),
            });
    });
};




