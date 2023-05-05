// Array

const myArr = [0, 1, 2, 3, 4, 5,]
/*
 javaScript are :-
 re-sizeable
 not asscoiative arrays
 zero-based indexing
 Array-copy operations create shallow copies (heap memory)
 note :-  Deep copy means change in dublicate copy (stack memory)

 */

 // way to declare a array
 const mySweets = ["laddu", "burfi"]
 //console.log(mySweets) // undefined //  ["laddu", "burfi"] ["jalebi", "rasgulla"]

 const myAnotherSweets = new Array("jalebi", "rasgulla", "pedda")
 //console.log(myAnotherSweets);

 // Array Methods 

 // push()
myAnotherSweets.push("laddu")
console.log(myAnotherSweets); // [ 'jalebi', 'rasgulla', 'pedda', 'laddu' ]


// pop()
myAnotherSweets.pop()
console.log(myAnotherSweets); // [ 'jalebi', 'rasgulla', 'pedda' ]


// unshift()
myAnotherSweets.unshift("Halwa")
console.log(myAnotherSweets) // [ 'Halwa', 'jalebi', 'rasgulla', 'pedda' ] => add in first postition


// shift()
myAnotherSweets.shift()
console.log(myAnotherSweets) // [ 'jalebi', 'rasgulla', 'pedda' ] => remove the first element


// include() => question method
console.log(myAnotherSweets.includes("rasgulla")); // true
console.log(myAnotherSweets.includes("ice-cream")); // false


// indexOf() => give the index number
console.log(myAnotherSweets.indexOf("pedda")) // 2 
console.log(myAnotherSweets.indexOf("ice-cream"))  // -1


// join() => combined the value and convert into the string
const newArr = mySweets.join()
//const mySweets = ["laddu", "burfi"]
console.log(newArr) // laddu,burfi
console.log(typeof newArr) // string
console.log(mySweets); // [ 'laddu', 'burfi' ] => original array not chnage
console.log(typeof mySweets); // object


// slice(), Splice() => understand difference
const numbers = [0, 1, 2, 3, 4, 5, 6]
console.log("A", numbers) // A [0, 1, 2, 3, 4, 5, 6]

const sweets = numbers.slice(1,3)
console.log(sweets); // [ 1, 2 ]
console.log("B", numbers); // B [0, 1, 2, 3, 4, 5, 6] => change not happen in original array

const sweets2 = numbers.splice(1,3)
console.log(sweets2) // [ 1, 2, 3 ]
console.log("C", numbers); // C [ 0, 4, 5, 6 ] => change happen in original array