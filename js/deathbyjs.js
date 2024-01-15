// Solve the following string/math/number/function/array-related problems.
// Each solution should be written within its own function and the output should be displayed within a console window. The display should be the return value of the function call.



//STEP 1

// Write a JavaScript function that returns a passed string with letters in alphabetical order. Assume punctuation and number symbols are not included in the passed-in string.
/*
let exampString = "webmaster"

function alphaOrder(inpString) {
    let strArray = exampString.match(/\w/g)
    let alphaArr = strArray.sort()
    let alphaStr = strArray.join("")
    console.log(alphaStr)
    return alphaStr
}

alphaOrder(exampString)

*/

//STEP 2
// Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string to upper case.
/*
let exampString =  'The quick brown white-haired, A.B.C fox'

function capitalCase(inpString) {
    let strArray = exampString.split(" ")
    for (let i = 0; i < strArray.length; i++) {
        let word = strArray[i]
        let cappedWord = word[0].toUpperCase() + word.substring(1)
        strArray[i] = cappedWord
    }
    let cappedString = strArray.join(" ")
    console.log(cappedString)
    return cappedString
}


capitalCase(exampString)

*/
//STEP 3
// Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.

/*
function numVowels(inpString) {
    let vowels = ["A", "E", "I", "O", "U"]
    inpString = inpString.toUpperCase()
    let count = 0
    for (let i=0; i < inpString.length; i++) {
        let letPos = inpString.charAt(i)
        if (vowels.includes(letPos)) {
            count = count + 1
        }

    }
    console.log(count)
    return count
}
exampString =  'The quick brown fox'
numVowels(exampString)

*/

//STEP 4
// Write a JavaScript function that generates a string id (specified length) of random characters.
/*
function genRandString(inpNumChars) {
    let numChars = parseInt(inpNumChars)
    const randomCharString ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let outStr = []

    for (let i = 0; i < numChars; i++) {
        let randomInd = Math.ceil(Math.random() * randomCharString.length)
        let randomChar = randomCharString.charAt(randomInd)
        outStr.push(randomChar)
    }
    console.log(outStr.join(""))
    return outStr.join("")

}

genRandString("9")
*/
//STEP 5
// Write a JavaScript function that accepts a list of country names as input and returns the longest country name as output.
// Sample function: Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output: "United States of America"
/*
function longestCountryName(inpCountryArray) {
    let currHighLength = 0
    let longestCountry = ""
    for (word of inpCountryArray) {
        if (word.length > currHighLength) {
            longestCountry = word
            currHighLength = word.length
        }

    }
    console.log(longestCountry)
    return longestCountry

}

let exampArray = ["Australia", "Germany", "United States of America", ]
longestCountryName(exampArray)
*/