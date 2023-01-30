const prompt=require("prompt-sync")({sigint:true});  /* FIX: ReferenceError: prompt is not defined */
// Start 
function game() {
    const items = ['rock', 'paper', 'scissors'];
    const getComputerChoice = items[Math.floor(Math.random() * items.length)]
    const getPlayerChoise = 'paper' // prompt('Enter: rock, paper or scissors ').trim().toLowerCase();
    const computerSelection = `${getComputerChoice}`;
    const playerSelection = `${getPlayerChoise}`;
    let computerScore = 0;
    let playerScore = 0;
    function playRound(playerSelection, computerSelection) {
        for (let i  = 0; i < 5; i++) {
            if (playerSelection === computerSelection) { 
                    // Increase playerScore by one and repeat loop
            } else if (
                (playerSelection=== 'rock' && computerSelection === 'scissors') ||
                (playerSelection === 'paper' && computerSelection === 'rock') ||
                (playerSelection === 'scissors' && computerSelection === 'paper')) {
                    playerScore += 1;
            } else {
                    computerScore += 1;
            }
        }
    }
}