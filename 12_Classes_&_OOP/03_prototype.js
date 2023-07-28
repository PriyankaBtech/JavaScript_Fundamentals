/**************************** Prototype ******************************/

//string
const myName = "Priyanka    "

console.log(myName.length) // 12
console.log(myName.trueLength) // undefined

// HOW CAN BUILD OUR METHOD FOR OUR OWN CONVENIENCE (ex. trueLength)


const popularSweetsOfState = ["UP","delhi", "kolkata"]

const sweetsName = {
    UP : "Jalebi",
    delhi : "Burfi",
    kolkata : "Rasgulla",

    nationSweet : function() {
        console.log(`National Sweet of India is ${this.UP}`)
    }
}

// apply your own inbuild method like => sweetsName.priyanka()

// sweetsName.prototype.priyanka = function() {} => not this way

// another way | Inject directly inside Object 
Object.prototype.priyanka = function() {
    console.log("Priyanka is present in all Object")    
}

sweetsName.priyanka() // Priyanka is present in all Object

// In Array
popularSweetsOfState.priyanka() // Priyanka is present in all Object


// IF WE GIVE POWER TO ARRAY, DO OBJECT HAVE EXCESS TO USE IT?
Array.prototype.helloPriyanka = function() {
    console.log("Hello Priyanka")
}

//sweetsName.helloPriyanka() // TypeError: sweetsName.helloPriyanka is not a function

popularSweetsOfState.helloPriyanka() // Hello Priyanka
// Note : the function we inject in Array are only excessable by array
