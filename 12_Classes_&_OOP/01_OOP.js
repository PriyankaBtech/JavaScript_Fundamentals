// OOP

// Object Literal

const user = {
    userName: "priyanka",
    loginCount: 9,
    isLoggedIn: true,

    getUserDetails: function() {
        //console.log("Get the user detail from Database")
       // console.log(`USER NAME : ${userName}`) // userName is not defined
        console.log(`USER NAME : ${this.userName}`)

        // Inside local scope
        console.log(this) // {} => all value inside the object
    }
}

console.log(user.userName)
console.log(user.getUserDetails()) // USER NAME : priyanka

// Inside Global scope
console.log(this) // {}


// Constructor function

// const promise = new Promise()
// const date = new Date()

// new => is called constructor funcions 
// its help to create new context

//Example

function anotherUser(userName, id, loginCount, isLoggedIn) { // assign value
    // this.userName => variable
    this.userName = userName
    this.id = id
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    // also inject the function
    this.greeting = function() {
        console.log(`Hello ${this.userName}`)
    }

    return this
}

// const userOne = anotherUser("Pinki", 10, true)
// const userTwo = anotherUser("Chinki", 5, false)

// console.log(userOne) // overwrite the value
//   userName: 'Chinki',
//   id: 5,
//   loginCount: false,
//   isLoggedIn: undefined

// Because of this overwrite problem constructor functions come in picture
// new keyword => work independently, its your copy, other are not impacted

const userOne = new anotherUser("Pinki", 10, true)
const userTwo = new anotherUser("Chinki", 5, false)

console.log(userOne) // overwrite problem remove because of new keyword
//   userName: 'Pinki',
//   id: 10,
//   loginCount: true,
//   isLoggedIn: undefined


// NOTE : if return this, is not written then this is work same because return is default inside class

console.log(userTwo.constructor) // [Function: anotherUser]
