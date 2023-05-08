// FUNCTIONS

// console.log("P")
// console.log("r")
// console.log("i")
// console.log("y")
// console.log("a")
// console.log("n")
// console.log("k")
// console.log("a")

function myName() {
    console.log("P")
    console.log("r")
    console.log("i")
    console.log("y")
    console.log("a")
    console.log("n")
    console.log("k")
    console.log("a")
}
// myName => reference , used in DOM and React
//myName() => excution

function addTwoNumber (num1, num2) { // parameters
    console.log(num1 + num2)
}

addTwoNumber() // NaN
addTwoNumber(3, 5) // 8 (arguments)
addTwoNumber(3, "5") // 35 (3 is converted in string through js)
addTwoNumber(3, null) // 3
addTwoNumber(3, undefined) // NaN


//console.log(typeof addTwoNumber(10,15)) // undefined

const result = addTwoNumber(5, 5)
//console.log(result) //undefined, beacuse of this we use "return" in function

function addTwoIntegers(num1, num2) {
    return num1 + num2
}
const result2 = addTwoIntegers(5, 5)
//console.log(result2) // 10 , this way we use return in function, you can store in variable and use it effectively.

// practical example

function loginUserMessage(user) { // you can also include the default value(user = "name")
    if (user === undefined){
     return `Please Enter Your Username`  
    }
    return `${user} logged in Successfully`
}
loginUserMessage("priyanka") // nothing come, because you not printed
console.log(loginUserMessage("priyanka")) // priyanka logged in Successfully
console.log(loginUserMessage()) // Please Enter Your Username


// SHOPPING CART 
// function with Rest operator
function calculateCartPrice(...num) {
    return num
}
console.log(calculateCartPrice(100, 300, 500, 50, 600)) // [ 100, 300, 500, 50 ] => Array

//Another example
function calculateCart(val1, val2, ...num) {
    return num
}
console.log(calculateCart(10, 20, 60, 100, 50, 90)) // rest value [ 60, 100, 50, 90 ]
 // val1 = 10, val2 = 20


 // FUNCTION WITH OBJECT

 const userDetail = {
    name : "priyanka",
    id : "priya@gmail.com",
    age : 23
 }

 function handleObject(anyObject) { // use any of object
    console.log(`User name is ${anyObject.name} and ID is ${anyObject.id}`)
 }

 handleObject(userDetail) // User name is priyanka and ID is priya@gmail.com

 //direct way
 handleObject({
    name : "Chinki",
    id : "chiki@gmail.com"
 }) 
 // User name is Chinki and ID is chiki@gmail.com


 // FUNCTION WITH ARRAY

 const basket = ["apple", "mango", "banana", "pineapple", "orange"]

 function newBasket(getFruits) {
    return getFruits[3]
 }
 console.log(newBasket(basket)) // pineapple
 // direct use
 console.log(newBasket([10, 50, 100, 90, 150])) // 90