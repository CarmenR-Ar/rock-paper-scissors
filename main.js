let userScore = 0;
let computerScore = 0;
const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const scissors_div = document.getElementById('scissors');
const userChoice_p = document.querySelector('#user-result');
const compChoice_p = document.querySelector('#comp-result');
const userScore_div = document.getElementById('user-score');
const compScore_div = document.getElementById('comp-score');




console.log(rock_div);
console.log(compChoice_p);





function main() {}
function play() {}
function userWins() {}
function userLoses() {}
function draw() {}


// function computerPlay() {
//     const options = ["rock", "paper", "scissors"];
//     return options[Math.floor(Math.random() * options.length)]
// }


// function userPlay() {           
//     while (true) {
//         let choice = prompt("Please, choose rock, paper or scissors");
//         let user_choice = choice.toLowerCase();
//         if (user_choice === "rock" || user_choice === "paper" || user_choice === "scissors") {
//         //console.log(user_choice);
//         return user_choice;
//         } else {
//             alert("Incorrect, try again");
//         }
//     }
    
// }


// function play() {
//     let computer_selection = computerPlay();
//     let player_selection = userPlay();
//     if (player_selection === "rock" && computer_selection === "scissors" || player_selection === "scissors" && computer_selection === "paper" || player_selection === "paper" && computer_selection === "rock") {
//         console.log(`You win! ${player_selection} beats ${computer_selection}`);
//         return "user wins";
//     } else if(computer_selection === "rock" && player_selection === "scissors" || computer_selection === "scissors" && player_selection === "paper" || computer_selection === "paper" && player_selection === "rock") {
//         console.log(`You lose! ${computer_selection} beats ${player_selection}`);
//         return "computer wins";
//     } else {
//         console.log("It's a tie.")
//     }
// }


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

// game();    