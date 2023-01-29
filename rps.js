// Invoke function that with variables for the game.
const input = ['rock', 'paper', 'scissors']; 

// Generate random variable for computerSelection
let computerSelection = input[Math.floor(Math.random() * 3)];

// let playerSelection = input[1]; Will select paper every time
// !Edditlater Prompt user for input
// Make input case sensitive by making everything lowercase.
const prompt=require("prompt-sync")({sigint:true}); 
let playerSelection = prompt('You do');

//  Play a single round and declare a winner.







console.log(computerSelection);
console.log(playerSelection);