// Conditions and Operators

// example
const temperature = 43

if(temperature > 49) {
    console.log("temperature is less then 49")
}
else {
    console.log("temperature is greater then 49")
}

// example
const score = 200

if(score > 100) {
    let country = "India"
    console.log(`Match Winner ${country}`)
}
// Match Winner India


//example
const marks = 85
// implicit scope => without {}
if(marks > 75) console.log("Good Marks");  // Good Marks 
// => but you cannot write the multiple line , its works but not good way to code


//example
const userLoggedIn = true
const debitCart = true
const phoneNumber = true
const userIsLoggedInEmail = false
const userIsLoggedInGoogle = true

if(userLoggedIn && debitCart && phoneNumber) {
    console.log("You are allow to buy course")
}
//You are allow to buy course


if(userIsLoggedInEmail || userIsLoggedInGoogle) {
    console.log("Logged In")
}
//Logged In
