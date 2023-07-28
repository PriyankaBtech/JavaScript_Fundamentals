/********************* Inheritance ***********************/

// In simple words, how to excess the property of one object to the another object is called inheritance


const studentDetails = {
    name : "priyanka",
    email : "priya@gmail.com"
}

const student = {
    details : true
}

const securityIssues = {
    isAvailable : false
}

const teacherSupport = {
    language : "JavaScript",
    fullTime : true,
    // inside excess
    __proto__ : securityIssues
}

// SHARE INFORMATION ONE OBJECT TO THE ANOTHER OBJECT

// outside excess
student.__proto__ = studentDetails


// MODERN syntax 
// behind the particular function is work on __proto__
Object.setPrototypeOf(student, securityIssues)


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// build function => trueLength()

let userName = "priyanka         "

String.prototype.trueLength = function() {
    console.log(`${this}`) // priyanka  
    //console.log(`${this.name}`) // undefined
    console.log(`True length is: ${this.trim().length}`)
}

userName.trueLength() // True length is: 8

"JavaScript".trueLength() // True length is: 10
"Python  ".trueLength()
// Python  
// True length is: 6


