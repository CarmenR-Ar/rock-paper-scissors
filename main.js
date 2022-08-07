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
        userWins();
    } else if(computerChoice === "rock" && userChoice === "scissors" || computerChoice === "scissors" && userChoice === "paper" || computerChoice === "paper" && userChoice === "rock") {
        userLoses();
    } else if (computerChoice === "rock" && userChoice === "rock" || computerChoice === "paper" && userChoice === "paper" || computerChoice === "scissors" && userChoice === "scissors") {
        draw();
    }
}



function userWins() {}
function userLoses() {}
function draw() {}



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