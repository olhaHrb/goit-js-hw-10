import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const form = document.querySelector(".form")
form.addEventListener("submit", handleSubmit);
function handleSubmit (event) {
    event.preventDefault();
    const delayTime = form.elements.delay.value;
    const state = form.elements.state.value;
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
            iziToast.success({
            message: (`✅ Fulfilled promise in ${delayTime}ms`),
            }); 
    })
        .catch(error => {
            iziToast.error({
            message: (`❌ Rejected promise in ${delayTime}ms`),
            });
    });
};




