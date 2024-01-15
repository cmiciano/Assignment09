//STEP 1
//Create an application that prompts the user for a number. Regardless of whether they enter a negative or positive number, 
// make sure to display the positive version of that number in the console window. If I enter -15 in the prompt and -15 is displayed in the console window, you did this one wrong.
/*
let inpText = prompt("Enter a number")
let inpNum = parseInt(inpText)
console.log(Math.abs(inpNum))
*/

//STEP 2
// Create an application that prompts the user for a floating point value (decimal).
// Store the result of that input in a variable and then round it up to the nearest whole number. Display the result within a console window.
/*
let inpText = prompt("Enter a floating point number")
let inpNum = parseFloat(inpText)
console.log(Math.ceil(inpNum))
*/

//STEP 3
// Create an application that prompts the user for a floating point value (decimal). 
// Store the result of that input in a variable and then round it down to the nearest whole number. Display the result within a console window.
/*
let inpText = prompt("Enter a floating point number")
let inpNum = parseFloat(inpText)
console.log(Math.floor(inpNum))
*/

//STEP 4
// Create an application that prompts the user for 5 numbers. Ask them to comma delimit each number so you get 1,2,3,4,5 for example. 
// Store the result of that input in a variable and then find the largest and smallest numbers in that list. Display both of those numbers within a console window.
/*
let inpNumText = prompt("Input 5 numbers in a comma-delimited fashion, for example 1,2,3,4,5")
let numArrayText = inpNumText.split(',');
//console.log(numArrayText)
let numArrayInt = numArrayText.map(x => parseInt(x))
//console.log(numArrayInt)
console.log(Math.max(...numArrayInt))
console.log(Math.min(...numArrayInt))

*/

//STEP 5
// Create an application that prompts the user for a number. Now find the square root of that number and display the result within a console window.
/*
let inpText = prompt("Input a number")
let inpNum = parseFloat(inpText)
console.log(Math.sqrt(inpNum))
*/