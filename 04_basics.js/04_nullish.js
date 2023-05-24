// Nullish Coalescing Operator (??): null undefined

let value;
// value = 5 ?? 10 // 5
// value = null ?? 10 // 10
// value = undefined ?? 20 // 20
// value = null ?? 25 ?? 50 // 25

console.log(value)
// NOTE : Nullish are different then ternary operator


// Ternary operator

// SYNTAX :  condition ? true : false

const bookPrize = 250

bookPrize >= 200 ? console.log("Buy the Book") : console.log("Don't Buy the Book")
// Buy the Book
