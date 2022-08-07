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
    return options[Math.floor(Math.random() * options.length)]
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
}


function userLoses(user, computer) {
    computerScore++;
    compScore_div.textContent = computerScore;
    userChoice_p.innerHTML = `Your choice: ${capitalize(user)}`;
    compChoice_p.innerHTML =`Computer choice: ${capitalize(computer)}`;
}
function draw(user, computer) {
    userChoice_p.innerHTML = `Your choice: ${capitalize(user)}`;
    compChoice_p.innerHTML =`Computer choice: ${capitalize(computer)}`;
}



// function game() {
//     let round = 1;
//     let computer = 0;
//     let user = 0;
//     while (round <= 5) {
//         let play = playRound();
//         if (play === "user wins") {
//             user++;
//         } else if (play === "computer wins") {
//             computer++;
//         } 
//         round++;
//     }
//     console.log(`**** Final Score ****\n You: ${user} - Computer: ${computer}`);
//     if (user > computer) {
//         console.log("Congrats! You won!");
//     } else if (user < computer) {
//         console.log("Too bad! You lost :(");
//     } else {
//         console.log("It's a tie.")
//     }
// }

main();    