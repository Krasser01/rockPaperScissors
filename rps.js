const prompt=require("prompt-sync")({sigint:true});  /* FIX: ReferenceError: prompt is not defined */

let computerScore = 0;
let playerScore = 0;

// Start 
const items = ['rock', 'paper', 'scissors'];
const getComputerChoice = items[Math.floor(Math.random() * items.length)]
const getPlayerChoise = prompt('Enter: rock, paper or scissors ').trim().toLowerCase();
const computerSelection = `${getComputerChoice}`;
const playerSelection = `${getPlayerChoise}`;

function game(computerSelection, playerSelection) {
    if (playerSelection === computerSelection) { 
            return 'Draw'
    } else if (
        (playerSelection=== 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')) {
            return 'Player Won'
    } else {
            return 'Computer Won'
    }

}

console.log(computerSelection);
console.log(playerSelection);
console.log(game(computerSelection, playerSelection));