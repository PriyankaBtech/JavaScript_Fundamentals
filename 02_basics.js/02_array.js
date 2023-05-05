

const fruitBasket = ["apple", "mango", "pineapple", "banana", "orange"]
const indianSweets = ["jalebi", "rashgulla", "burfi", "laddu", "gulabjamun"]

//fruitBasket.push(indianSweets)
//console.log(fruitBasket) // array inside array, its take array as datatype

//console.log(fruitBasket[5][1]) // rashgulla

//fruitBasket.concat(indianSweets)
//console.log(fruitBasket) 

const completeSweet = fruitBasket.concat(indianSweets)
//console.log(completeSweet)

// effective method to combine two array is SPREAD OPERATOR 
// its work like dropping the class on the floor and water become spread, same way this operator spread the elements of the array

// example
const allSweets = [...fruitBasket, ...indianSweets]
//console.log(allSweets)

// complex problem
const newArray = [1, 2, 3, [4, 5, 6], 7, [8, 9, [10, 11]]]
const chnageNewArray = newArray.flat(Infinity) // all elements convert into single array
//console.log(chnageNewArray) // [ 1, 2, 3, 4,  5, 6, 7, 8, 9, 10, 11]


// more useful methods
console.log(Array.isArray("priyanka")) // false
// isArray => check is array or not

console.log(Array.from("priyanka")) // ['p', 'r', 'i', 'y', 'a', 'n', 'k', 'a']
// from => convert anytype of datatype into Array => intresting concept

// console.log(Array.from({name : "priyanka"}))  // []
// console.log(Array.from(123)) // []
// console.log(Array.from(true)) // []


const score1 = 100
const score2 = 200
const score3 = 300
console.log(Array.of(score1, score2, score3)) // [ 100, 200, 300 ]





