let currentNumber = randomNumberGenerator();

function randomNumberGenerator() {
    let randomNumber = Math.random() * 100;
    let exactRandomNumber = Math.floor(randomNumber);
    return exactRandomNumber;
}
console.log(currentNumber);


// Number Check Button and History Save.
let userInput = document.getElementById('userInput');
let checkNumberBtn = document.getElementById('checkBtn');
let validNumber = document.getElementById('valid');
let guesses = document.getElementById('guesses');
let guessCount = 1;
userInput.focus();

checkNumberBtn.addEventListener("click", function () {
    let userGuess = Number(userInput.value);
    if (guessCount === 1) {

    }
    guesses.innerHTML += `<div class="text-black w-100 p-2 my-4" style="background-color: rgb(233, 233, 233);">You guess the number ${userGuess + ' '}</div>`;

    if (userInput.value == currentNumber) {
        let text = "You Won The Game"
        validNumber.innerHTML = `<div class="col-2 bg-success text-white text-center w-100 p-4 my-4">${text}</div>`;
        console.log("You are righ")
    }
    else if (userInput.value > currentNumber) {
        let text = "Too High"
        validNumber.innerHTML = `<p class="text-danger">${text}</p>`;
    }
    else if (userInput.value < currentNumber) {
        let text = "Too Low"
        validNumber.innerHTML = `<p class="text-primary">${text}</p>`;
    }

    userInput.value = '';

})

// Reset Button

