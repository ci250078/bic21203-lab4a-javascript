
const userInput = document.getElementById("userInput");
const checkBtn = document.getElementById("checkBtn");
const result = document.getElementById("result");

function checkInput() {

    const inputValue = userInput.value.trim();

    if (inputValue === "") {
        result.textContent = "Please enter a valid number!";
    }

    else if (isNaN(Number(inputValue))) {
        result.textContent = "Please enter a valid number!";
    }

    else if (Number(inputValue) < 10) {
        result.textContent = "The number is lesser than 10";
    }

    else if (Number(inputValue) > 10) {
        result.textContent = "The number is more than 10";
    }

    else {
        result.textContent = "The number is equals to 10";
    }
}

checkBtn.addEventListener("click", checkInput);