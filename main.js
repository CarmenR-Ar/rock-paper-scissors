let userScore = 0;
let computerScore = 0;
const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const scissors_div = document.getElementById('scissors');
const userChoice_p = document.querySelector('#user-result');
const compChoice_p = document.querySelector('#comp-result');
const userScore_div = document.getElementById('user-score');
const compScore_div = document.getElementById('comp-score');



function main() {
    rock_div.addEventListener('click', function() {
        play('rock');
    });
    paper_div.addEventListener('click', function() {
        play('paper');
    });
    scissors_div.addEventListener('click', function() {
        play('scissors');
    });
}


function computerPlay() {
    const options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * options.length)];
}


function play(userChoice) {
    let computerChoice = computerPlay();
    
    if (userChoice === "rock" && computerChoice === "scissors" || userChoice === "scissors" && computerChoice === "paper" || userChoice === "paper" && computerChoice === "rock") {
        userWins(userChoice, computerChoice);
    } else if(computerChoice === "rock" && userChoice === "scissors" || computerChoice === "scissors" && userChoice === "paper" || computerChoice === "paper" && userChoice === "rock") {
        userLoses(userChoice, computerChoice);
    } else if (computerChoice === "rock" && userChoice === "rock" || computerChoice === "paper" && userChoice === "paper" || computerChoice === "scissors" && userChoice === "scissors") {
        draw(userChoice, computerChoice);
    }
}


function capitalize (word) {
    return word[0].toUpperCase() + word.slice(1);
}



function userWins(user, computer) {
    userScore++;
    userScore_div.textContent = userScore;
    userChoice_p.innerHTML = `Your choice: ${capitalize(user)}`;
    compChoice_p.innerHTML =`Computer choice: ${capitalize(computer)}`;
    const userBoard_div = document.getElementById('user-board');
    userBoard_div.classList.add('shine');
    setTimeout(() => {userBoard_div.classList.remove('shine')}, 400);
}


function userLoses(user, computer) {
    computerScore++;
    compScore_div.textContent = computerScore;
    userChoice_p.innerHTML = `Your choice: ${capitalize(user)}`;
    compChoice_p.innerHTML =`Computer choice: ${capitalize(computer)}`;
    const compBoard_div = document.getElementById('comp-board');
    compBoard_div.classList.add('shine');
    setTimeout(() => {compBoard_div.classList.remove('shine')}, 400);
}
function draw(user, computer) {
    userChoice_p.innerHTML = `Your choice: ${capitalize(user)}`;
    compChoice_p.innerHTML =`Computer choice: ${capitalize(computer)}`;
}



main();    