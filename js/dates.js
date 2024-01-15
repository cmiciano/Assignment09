//STEP 1


// Create an application that gets the number of days in a month. Display that result within the console window.

// Month in JavaScript is 0-indexed (January is 0, February is 1, etc), 
// but by using 0 as the day it will give us the last day of the prior
// month. So passing in 1 as the month number will return the last day
// of January, not February
/*
let date = prompt("Enter date in format MM/YYYY")
let splitDate = date.split("/")
let partDate = new Date(splitDate[1], splitDate[0], 0)
let numDaysInMonth = partDate.getDate()
console.log(partDate.getDate())
*/
  
  
//STEP 2
// Create an application that gets the month name from a particular date. Display that result within the console window.
/*
let inpDate = prompt("Input date in format MM/DD/YYYY:")
let partDate = new Date(inpDate)
let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
let inpMonthInd = partDate.getMonth()
let inpMonthName = monthNames[inpMonthInd]
console.log(inpMonthName)
*/


//STEP 3
// Create an application that tests whether a date is a weekend. Display that result within the console window.
/*
let inpDate = prompt("Input date in format MM/DD/YYYY:")
let partDate = new Date(inpDate)
let day = partDate.getDay()
let isWeekend = false
if (day == 0 || day == 6) {
    isWeekend = true
}

console.log(isWeekend)
*/

//STEP 4
// Create an application that gets yesterday’s day of the week. For instance, if today is Tuesday, the console window should display Monday.
/*
let today = new Date()
let yesterday = new Date(today)
yesterday.setDate(yesterday.getDate() - 1)

let yDay = yesterday.getDay()
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
console.log(days[yDay])
*/
//STEP 5
// Create an application that gets the current day of the week. The twist here is that I want only the first letter of the day. If today is Tuesday, the letter T should be displayed in the console window.
/*
let today = new Date()
let tDay = today.getDay()
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let todayName = days[tDay]
console.log(todayName[0])

*/