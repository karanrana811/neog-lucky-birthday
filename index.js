const dob = document.querySelector("#dobInput");
const luckyNumber = document.querySelector("#inputLucky");
const button = document.querySelector(".checkNumber");
const message = document.querySelector("#para");



const calculateSum = (date) => {
    let sum = 0;
    date = date.replaceAll("-", "");
    for (let digit of date) {
        sum = sum + Number(digit);
    }
    return sum;
}

const checkIfNumberLucky = (sumOfDate, numberToCheck) => {
    console.log(sumOfDate, numberToCheck);
    if (sumOfDate % numberToCheck === 0) {
        message.innerText = "It's a lucky number!";
    } else {
    message.innerText = "Number is not that lucky."
    }
}

button.addEventListener('click', () => {
    const date = dob.value;
    const numberToCheck = luckyNumber.value;
    if (date && numberToCheck
        && numberToCheck > 0) {
        const sumOfDate = calculateSum(date);
        checkIfNumberLucky(sumOfDate, numberToCheck);
    } else {
        message.innerText = "Please enter valid inputs.";
    }
});

