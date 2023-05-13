/************************* Arrow function **********************************/

// NORMAL FUNCTION
/* 
const myName = function() {
    let name = "priyanka"
    console.log(name)
}
console.log(myName) // [Function: myName]
myName() // priyanka
*/

// ARROW FUNCTION
const myName = () => {
    let name = "priyanka"
    console.log(name)
}
myName() // priyanka


// this IN ARROW FUNCTION
const bookName = () => {
    let name = "thinkAndGrowRich"
    console.log(this)
    //console.log(this.name) => undefined
}
bookName()// {}

// BASIC SYNTAX OF ARROW FUNCTION => (() => {})

// arrow function store in variable
const addTwo = (num1, num2) => {
    return num1 + num2 // explicit return
}
console.log(addTwo(5, 10)) // 15


// without return arrow function => called Implicit returns
const multipleTwo = (num1, num2) => num1 * num2
//const multipleTwo = (num1, num2) => (num1 * num2) // you can also add ()
console.log(multipleTwo(4, 5)) // 20


// OBJECT with arrow function
const addValue = () => ({name : "priyanka"}) // {name: "priyanka"} => give error without ()
console.log(addValue()) // { name: 'priyanka' }

