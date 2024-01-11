//STEP 1
/*
et d = new Date()
console.log(d.getDate()

et d = new Date()
console.log(d.getDay())

et d = new Date()
console.log(d.getMonth())

et d = new Date()
console.log(d.toDateString()
// Create an application that gets the number of days in a month. Display that result within the console window.
*/

// get month
// get days in month
// let d = new Date(year, month, day

let inpDate = prompt("Input date in format MM/DD/YYYY:")
let partDate = new Date(inpDate)
let month = partDate.getMonth()
console.log(new Date(inpDate))
console.log(month)

/*
function daysInMonth(inpMonth) {
    var now = new Date();
    return new Date(now.getFullYear(), now.getMonth()+1, 0).getDate();
  }

  let inputMonth = prompt("Input a month: January, February, March etc. :")
  let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  let inpMonthInd = monthNames.indexOf(inputMonth)


  let now = new Date()
  let justDate = new Date(now.getFullYear(), now.getMonth()+1, 0)
  console.log(justDate)
  console.log(daysInThisMonth())
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

//console.log(part.getDate())

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