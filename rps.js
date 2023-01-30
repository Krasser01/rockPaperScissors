const prompt=require("prompt-sync")({sigint:true});  /* FIX: ReferenceError: prompt is not defined */
const items = ['rock', 'paper', 'scissors'];
let computerSelection;
let playerSelection;
let computerScore = 0;
let playerScore = 0;

computerSelection = items[Math.floor(Math.random() * items.length)]; // Return random item
playerSelection = prompt('Enter: rock, paper or scissors ').trim().toLowerCase();

function game(computerSelection, playerSelection) {
    if (playerSelection === computerSelection) { 
            return 'Draw'
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')) {
            return 'Player Won'
    } else {
            return 'Computer Won'
    }

}

// Output
console.log(computerSelection);
console.log(playerSelection);
console.log(game(computerSelection, playerSelection));