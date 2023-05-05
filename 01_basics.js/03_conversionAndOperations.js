let score = "33abc" 

//console.log(typeof score)
//console.log(typeof(score));

// COVERT STRING TO NUMBER

let valueInNumber = Number(score)
//console.log(typeof valueInNumber) // number
//console.log(valueInNumber) // NaN

let marks = null // undefined ==> will give you NaN
let marksInNumber = Number(marks)
//console.log(marksInNumber) // 0


// "33" => 33
//"33abc" => NaN
// true => 1; false => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn)

/* 
conversion to boolean
1 => true
0 => false
"" => false
"priyanka" => true
*/

let someNumber = 22

let stringNumber = String(someNumber)
//console.log(stringNumber); // 22
//console.log(typeof stringNumber); // string


/*************************  Operations  **********************/

let value = 5
let negValue = -value
//console.log(negValue) // -5


let str1 = "hello"
let str2 = " priyanka"
let str3 = str1 + str2
//console.log(str3)

/*
console.log("1" + 2); // 12
console.log(1 + "2"); // 12 
console.log("1" + 2 + 2); // 122
console.log(1 + 2 + "2"); // 32  => there is some guidlines in EcmaScript
*/

// confusing conversations

// console.log(+true) // 1
// console.log(true+) // error
// console.log(+"") // 0

let num1, num2, num3
num1 = num2 = num3 = 2 + 2  // not good practice
// console.log(num1) // 4

let gameCounter = 100
//gameCounter++; 101
//++gameCounter; 101
// console.log(gameCounter)  // but actual there is difference, must read in documentation





