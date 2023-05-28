/************************** filter() **************************/

// filter is a high order function
//Array.prototype.filter()
// its  creates a shallow copy of a portion of a given array
// filter() => filtered  the elements from the given array that pass under coditions or functions

// SYNTAX :
// filter(callbackFn)
// filter(callbackFn, thisArg)


// NOTE : its return the value

const number = [10, 20, 30, 40, 50, 60, 70, 80]

const newNumber = number.filter((num) => num > 30)
console.log(newNumber) // [ 40, 50, 60, 70, 80 ]

// const newNumber = number.forEach((num) => num > 30)
// console.log(newNumber) // undefined => forEach not return the value


const fruits = ["apple", "banana", "grapes", "mango", "orange"];

const newfruits = fruits.filter((item) => {
    //item.length > 5 // []
    return item.length > 5 // [ 'banana', 'grapes', 'orange' ] => must use return if you write inside {}
})
console.log(newfruits) 



// same fruit example with forEach()
const fruitBasket = []

fruits.forEach((item) => {
    if (item.length > 5) {
        fruitBasket.push(item)        
    }
})
console.log(fruitBasket) // [ 'banana', 'grapes', 'orange' ] => same result

// you can chose any of method to solve this problems


// this of data generally come from data base (book example)

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
]

let userBooks = books.filter( (bk) => bk.genre === 'History')

userBooks = books.filter( (bk) => { 
  return bk.publish >= 1995 && bk.genre === "History"
})
console.log(userBooks)



//Filtering out all small values

function bigNumber(value) {
    return value >= 10
}  
const filtered = [12, 5, 8, 130, 44].filter(bigNumber)
console.log(filtered) // //[12, 130, 44]

  