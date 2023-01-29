// invoke the fuction `getComputerChoise`
// A 'collection of items' = 'array'
// In JavaScript an item of an Array is type of an Onject
// Therefore we can use an array in order to invoke our function
// Arrays store data in contiguous and adjacent memory location
// Therefor we can call an element inside the array with the Math.floor(Math.random() *3 ) methode
// Math.random generates a number between 0 and 1 that is neither 0 nor 1 
// To get a numbe between 0 and 10 multiply * 10. Math.floor()*10
// To get it to be a whole number apply Math.floor, which rounds down to the nearest whole nubmer.
var getComputerChoise = ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)]
    console.log(getComputerChoise);
// let computer pick random item from array
// Return computer's chois of array
