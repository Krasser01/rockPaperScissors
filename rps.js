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

function game() {
    for (i = 0; i < 5; i++) {
        const getPlayerChoise = 'rock' // prompt('Enter: rock, paper or scissors ').trim().toLowerCase();
        let playerSelection = `${getPlayerChoise}`;
        let computerSelection = `${getComputerChoice}`;
        console.log(playRound(playerSelection, computerSelection));
    }
}
game();