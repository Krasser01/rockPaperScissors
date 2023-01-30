// Functions
// ? Explained
// ! H1 
// TODO 
// * important 
//// No longer importantn, but to document the progcess!
// =====================================================================================================================================================================================
//! **Solved** JavaScript is showing reference error 'Prompt is not defined'
const prompt=require("prompt-sync")({sigint:true});

// ! Array
//TODO  Explain, why to declare a varible with the keyword `const`
const rps = ['rock', 'paper', 'scissors'] //? Array; All posoble options!

////const computerSelection = ['rock', 'paper', 'scissors']
// Function `computerSelection` randomly retun item of array
/*  Will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. */

//! `computerSelection` return random intem of array
let computerSelection = rps[Math.floor(Math.random() * rps.length)];
//? let computerSelection = rps[Math.floor(Math.random() * 3)]; // Alternative to code 

//! Get user input\
// Prompt user for input
// playerSelection is case-insensitive
// remove any whitespaces from playerSelection
// TODO Expalin, why .trim() and .toLowerCase() is placed after the string and not after prompt?

playerSelection = prompt('Pick Your Weapon Wisely Soldir ').trim().toLowerCase();
// TODO Make sure player picks a valid option.
// If playerSelection != one of the items in the array
// Return: `${playerSelecttion}` is not a weapon. Pick either: rock, paper or scissors to continue playing. 

//! Play a single round
function playRound(playerSelection, computerSelection) {
   if (playerSelection === computerSelection) {
    //nothing.
   } else if (
            (playerSelection === 'rock'  && !(computerSelection === 'paper')) ||
            (playerSelection === 'scissors' && !(computerSelection === 'rock')) ||
            (playerSelection === 'paper' && !(computerSelection === 'scissors'))
        ) {
            playerScore = x++
   } else {
    computerScore = x++
   }
}
    
//! Function
function game(playRound) {
    for (let i = 0; i < 5; i++) {
    let playerScore = 0;
    let computerScore = 0;
    if (playerScore > computerScore) {
        return 'You Won'
    } else {
        'You Lost'
    }
    }
}
// TODO Explain, why to include the varibles?
console.log(game(playRound));