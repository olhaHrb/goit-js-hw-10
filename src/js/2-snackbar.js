let delayTime = 0;
let state = 0;

const input = document.querySelector(".form-number");
input.addEventListener("blur", () => {
    delayTime = input.value;
    console.log(delayTime);
});

const fieldRadio = document.querySelector("fieldset");
fieldRadio.addEventListener("click", handleClick);
function handleClick(event) {
    if (event.target.value === "fulfilled" || event.target.value === "rejected") {
        state = event.target.value;
    }
    
};

const form = document.querySelector(".form")
form.addEventListener("submit", () => {
    console.log(state);
    console.log(delayTime);

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (state === "fulfilled") {
                resolve(`✅ Fulfilled promise in ${delay}ms`)
            } else {
                reject(`❌ Rejected promise in ${delay}ms`)
            }
        }, delayTime);
    });
    console.log(promise);
});



