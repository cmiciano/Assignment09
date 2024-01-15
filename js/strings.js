//STEP 1
// Create an application that prompts the user for their name. Then, find the length of
//  characters in the person’s name. Use the alert method to display the result.

/*
let userName = prompt("What's your name?")
console.log(userName.length)
alert(userName.length)

*/

//STEP 2
//Create an application that prompts the user for their name. Then, prompt the user for a numeric value 
// so that they can find the letter in the string based on the number they specify. Use the alert method to display the result.
/*
let userName = prompt("What's your name?")
let num = prompt("Input a number")

// console.log(userName.charAt(num))
alert(userName.charAt(num))
*/


//STEP 3
//Create an application that prompts the user for their first name. Then, prompt the user for their last
//  name using a second prompt. Use the alert method to display the text "Your name is: " along with the result of the first name and last name concatenated together.
//  You will use a concatenation operator to concatenate the literal string with the result of the String object method’s result.
/*
let firstName = prompt("What's your first name?")
let lastName = prompt("What's your last name?")

// console.log("Your name is: "+ firstName.concat(" ", lastName))
alert("Your name is: "+ firstName.concat(" ", lastName))


*/

//STEP 4
//Create an application that stores the text “The quick brown fox jumps over the lazy dog” within a variable.
//  Then, find and display within an alert the index of the word “fox”.
/*
let text = "The quick brown fox jumps over the lazy dog"
// console.log(text.indexOf("fox"))
alert(text.indexOf("fox"))
*/


//STEP 5
// Create an application that stores the text “The quick brown fox jumps over the lazy fox” within a variable. 
// Then, find and display within an alert the index of the last instance of the word “fox”.
/*
let text = "The quick brown fox jumps over the lazy fox”"
// console.log(text.indexOf("fox"))
alert(text.lastIndexOf("fox"))
*/

//STEP 6
// Create an application that stores the text “The quick brown fox jumped over the lazy dog” within a variable.
//  Then, prompt the user for their full name. Then, replace the text “the lazy dog” in the variable with the name that the user enters within the prompt. Use the alert method to display the result.
/*
let text = "The quick brown fox jumps over the lazy dog"
let fullName = prompt("Enter your full name")
alert(text.replace('the lazy dog', fullName))

*/

//STEP 7
// Create an application that stores the text “The quick brown fox jumps over the lazy dog” within a variable. 
// Then, prompt the user for a word. Next, search for the word within the string that the user enters into the prompt. Use the alert method to display the result.

/*
let text = "The quick brown fox jumps over the lazy dog"
let word = prompt("Enter a word")
alert(text.search(word))
*/

//STEP 8
// Create an application that stores the text “The quick brown fox jumps over the lazy dog” within a variable called old_string.
//  Then, use slice(), substr(), or substring() to extract the words “the lazy dog” from the old_string variable and store that result in a second variable called new_string. 
//Use the alert method to display the uppercase result of new_string.

/*
let old_string = "The quick brown fox jumps over the lazy dog"
//alert(old_string.lastIndexOf("the lazy dog")) //the lazy dog starts at index 31
alert(old_string.lastIndexOf("g")) //g is at index 42, remember indexEnd of substring is exclusive


let new_string = old_string.substring(31, 43)
alert(new_string.toUpperCase())
*/

//STEP 9
// Create an application that stores the text “ THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ” within a variable. Make sure to add space before and after the text so that appears 
// very similar to the text here. Use the alert method to display the lowercase result of the variable once the space has been trimmed off.
/*
let text =  " THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          "
//alert(text) not trimmed if you highlight the alert text box

let trimmed = text.trim(text)
//alert(trimmed)
*/

//STEP 10
// Create an application that stores the text “the quick brown fox jumps over the lazy dog” within a variable. The user clearly forgot to capitalize the first letter in the sentence. 
// Programmatically capitalize the first letter in the sentence and display the result in an alert.

/*
let text =  "the quick brown fox jumps over the lazy dog"
let firstLet = text.charAt(0)
let firstLetUp = firstLet.toUpperCase()
let  remLet = text.slice(1)
let  wholeTextUp = firstLetUp + remLet
alert(wholeTextUp)
*/