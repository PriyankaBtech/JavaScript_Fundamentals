// # primitive 

// 7 types : string, Number, Boolean, null, undefiend, bigInt, symbol 

// # Reference type (non-primitive)

// Array
// Objects
// functions

const id = Symbol(100)
const anotherId = Symbol(100)

console.log(id);
console.log(anotherId);
console.log(id === anotherId); // false , means its not same

// const bigNumber = 62683797493747739793937937n
console.log(typeof bigNumber) // undefined

const heros = ["doremon", "bheem", "banten", "haggimaru", "marukochen"]

/*
{
    name = "priyanka",
    age = 23,
    place ="Delhi",
}
*/

// values which come inside the currly braces is called object.

// function(){} 

//function treat as variable 

const myFunction = function(){
    console.log("hello friends")
}

console.log(typeof myFunction) // function and also called function object



/****************************** Memory ***************************************/

// stack (primitive datatypes)
// heap (non-primitiv datatypes)

// example of stack
let myName = "priyanka"

let anothername = myName
anothername = "developer" // change the copy name

console.log(myName); // priyanka
console.log(anothername); // developer


// example of heap
let userOne = {
    email : "user@gmail.com",
    user : "user@ybl"
}

let userTwo = userOne // give original value
userTwo.email = "priyanka@gmail.com"

console.log(userOne);
console.log(userTwo); // both have same result







