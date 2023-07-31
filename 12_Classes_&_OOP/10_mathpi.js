/************************** Math.PI ******************************/

// first explore the all methods of Object in browser

console.log(Math.PI) // 3.141592653589793
Math.PI = 10
console.log(Math.PI) // 3.141592653589793

const descriper = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descriper)
/**
  OUTPUT :
{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}
*/

//value: The value is a number represented as 3.141592653589793, which is the mathematical constant π (pi) up to a certain precision. It is a non-writable property, meaning you cannot change its value once it's set.

//writable: The property writable is set to false. This means that the value property cannot be changed or reassigned.

//enumerable: The property enumerable is set to false. This means that when the object is iterated (for example, when using for...in loop), this property will not be included in the iteration.

// configurable: The property configurable is set to false. This means that you cannot delete this property from the object, and you also cannot change its attributes (e.g., convert it to writable or enumerable).

// way of create object
const myNewObj = Object.create(null)
console.log(myNewObj) // [Object: null prototype] {}


// simple way
const anotherObj = {
    courseName : "full-stack",
    price : 20000,
    isAvailable : true,

    loggedIn : function() {
        console.log(`Yes you are sucessfully Logged-In`)
    }
}

// check getOwnPropertyDescriptor() 
// console.log(Object.getOwnPropertyDescriptor(anotherObj)) // undefined 
// Note : this method require property(courseName, price, etc) but you give only object

console.log(Object.getOwnPropertyDescriptor(anotherObj, "courseName")) 

/*
{
  value: 'full-stack',
  writable: true,
  enumerable: true,
  configurable: true
}
*/

// You have also power to describe your Object
Object.defineProperty(anotherObj, 'price' , {
    //writable : false,
    enumerable : false,
})

console.log(Object.getOwnPropertyDescriptor(anotherObj, 'price')) 
/**
OUTPUT :
{
  value: 20000,
  writable: false,
  enumerable: false,
  configurable: true
}
*/

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// for (let [key, value] of anotherObj) {
//     console.log(`${key} : ${value}`)    
// }

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// for (let [key, value] of Object.entries(anotherObj)) {
//     console.log(`${key} : ${value}`)    
// }

// courseName : full-stack
// isAvailable : true
// loggedIn : function() {
//     console.log(`Yes you are sucessfully Logged-In`)
// }

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

for (let [key, value] of Object.entries(anotherObj)) {
    if(typeof value !== 'function')
    console.log(`${key} : ${value}`)    
}
// courseName : full-stack
// isAvailable : true


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// if => enumerable : true, then it will properly iterate over the Object

// courseName : full-stack
// price : 20000
// isAvailable : true






