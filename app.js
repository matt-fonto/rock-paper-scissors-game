const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let userChoice;
let computerChoice;
let result;

//If I click any of the buttons, I want something to happen
//1. Displaying the User Choice
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    //Whenever I click, I want to get the ID
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
}))

//2.Displaying the Computer Choice
//We want a random number
const generateComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length);
    console.log(randomNumber);
    if (randomNumber === 0) {
        computerChoice = "rock";
    } else if (randomNumber === 1) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    computerChoiceDisplay.innerHTML = computerChoice;
}

//3. Calculating the Result
const getResult = () => {
    if (computerChoice === userChoice) {  //Checking for draw
        result = "It's a draw!";
    } else if (userChoice === "rock" && computerChoice === "scissors") { //Checking for user victory
        result = "User wins! Good one, champ";
    } else if (userChoice === "paper" && computerChoice === "rock") {
        result = "User wins! Good one, champ";
    } else if (userChoice === "scissors" && computerChoice === "paper") {
        result = "User wins! Good one, champ";
    } else { //Computer Wins
        result = "Computer wins! Better luck next time"
    }
    resultDisplay.innerHTML = result;
}
