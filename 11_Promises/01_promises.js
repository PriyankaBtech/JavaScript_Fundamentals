/********************** Promises *************************/
// promise is  object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// HOW TO CREATE PROMISES :

const promiseOne = new Promise(function(resolve, reject){
    // do an async task
    // DB calls, crypto, network request
    setTimeout(function(){
        console.log("Async task is completed")
        // call the resolve and connect to .then()
        resolve()
    }, 1000)    
})

// consuming of promises

// .then() => have connection to resolve
promiseOne.then(function() {
    console.log("Promise Consumed")
})

/* OUTPUT :
Async task is completed
Promise Consumed
*/


// let's go little advance
new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log("Async Task 2")
        resolve()
    }, 1000)
}).then(function() {
    console.log("Second Promise consumed")
})


// third promise
const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(function() {
        // pass the value to .then()
        resolve({userName: "priyanka", userEmail: "priyanka@gmail.com"})        
        
    }, 1000)
})

promiseThree.then(function(user) {
    console.log(user) // { userName: 'priyanka', userEmail: 'priyanka@gmail.com' }
})


// fourth promise | Practical way

const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = false
        if (!error) {
            resolve({userName: "Pankaj", userEmail: "pankaj@gmail.com"})            
        } else {
            reject("ERROR : Something went wrong")
        }
    }, 1000)
})

promiseFour
.then(function(user) {
    console.log(user)
    return user.userName
})
.then(function(userName) {
    console.log(userName)
})
.catch(function(error) {
    console.log(error)
})
.finally(function() {
    console.log("The Pormise is either resolved or rejected")
})

// OUTPUT : Pankaj
// The Pormise is either resolved or rejected
// IF false : ERROR : Something went wrong


// Fifth Promises | with async and await

const promiseFive = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true
        if (!error) {
            resolve({userName: "Pinki", userEmail: "pinki@gmail.com"})            
        } else {
            reject("ERROR found")
        }
    }, 1000)
})

// let's using async and await instead of .then(), .catch()

// async function consumePormiseFive() {
//     const response = await promiseFive
//     console.log(response)
// }
// NOTE : this way, the reject(error code) part not handle 


// SO WE ARE USING try and catch method with async and await

async function consumePormiseFive() {
    try {
        const response = await promiseFive
        console.log(response)
    } catch(error) {
        console.log(error)
    }
    finally {
        console.log("Error come")
    }    
}
consumePormiseFive() // Error come



