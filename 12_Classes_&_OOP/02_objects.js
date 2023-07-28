/************************** Object(Prototype) ******************************/

// JavaScript only has one construct: objects. Each object has a private property which holds a link to another object called its prototype. 
// That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype.



// prototye in functions 

function addNum(num) {
    return num + num    
}

addNum.power = 2
console.log(addNum(5)) // 10
console.log(addNum.power) // 2
console.log(addNum.prototype) // {}

// Learning : function in Javascript also a Object

function createUser(userName, age) {
    this.userName = userName
    this.age = age   
}

// Do we inject our own function => YES
// example
createUser.prototype.increment = function() {
    this.age++
}
// two people call at same time

createUser.prototype.myAge = function() {
    console.log(`My age is ${this.age}`)
}


const person = new  createUser("Pinki", 20)
//const person =  createUser("Pinki", 20) // undefined

const anotherPerson = new createUser("Chinki", 25)

console.log(person) // createUser { userName: 'Pinki', age: 20 }

person.increment()
anotherPerson.myAge() // My age is 25


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/