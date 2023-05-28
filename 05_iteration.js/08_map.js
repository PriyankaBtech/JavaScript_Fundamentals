// map()

// map() is also a high order function
// Array.prototype.map()
// its creates a new array in result

//SYNTAX :
// map(callbackFn)
// map(callbackFn, thisArg)

// map() => also return the value


const integers = [1, 2, 3, 4, 5]

const newIntegers = integers.map((num) => num * 2)
console.log(newIntegers) // [ 2, 4, 6, 8, 10 ] => return Array



const numbers = [1, 4, 9, 36]

const roots = numbers.map((num) => {
    return Math.sqrt(num) // with {}, we use return
})
console.log(roots) // [ 1, 2, 3, 6 ]



const myNumers = [1, 2, 3, 4, 5, 6, 7, 8]

const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 2)
                .filter( (num) => num >= 40)

console.log(newNums) // [ 42, 52, 62, 72, 82 ]

