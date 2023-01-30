/* ************************************************************************** */
/*    Rock Paper Scissors                                                     */
/*  > Minimalism is the way to go!                                            */
/*    Koka 20230130                                                           */
/* ************************************************************************** */
const prompt=require("prompt-sync")({sigint:true});  /* FIX: ReferenceError: prompt is not defined */

//--------------------------------------Step ONE---------------------------------------------------------
// Randomly return item of array
const items = ['rock', 'paper', 'scissors'];
const getComputerChoice = items[Math.floor(Math.random() * items.length)]

//--------------------------------------Step TWO---------------------------------------------------------
// Play one round
const getPlayerChoise = 'paper' // prompt('Enter: rock, paper or scissors ').trim().toLowerCase();
const computerSelection = `${getComputerChoice}`;
const playerSelection = `${getPlayerChoise}`;

    let playerScore = 0;    
    let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) { 
            return 'DRAW'
    } else if (
        (playerSelection=== 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')) {
            return 'You won'
    } else {
            return 'Computer Won'
    }
}

//--------------------------------------STEP FINALE---------------------------------------------------------
// Play five rounds

function 



console.log(playRound(playerSelection, computerSelection));