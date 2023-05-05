// confusing comparison ==> involved comparison and equality check, they both are different

// console.log("2" > 1); // true
// console.log("02" > 1); // true
// javaScript default convert this string in Number
// remember => you should always compare the value with same datatypes , typscript also give the same rule

console.log(null > 0) // false
console.log(null == 0) // false
console.log(null >= 0) // true
// comparisons covert null to a number, treating it as 0, the reason its true

console.log(undefined == 0); // false
console.log(undefined > 0); // false 
console.log(undefined < 0); // false

// ===  (check both datatype and value )


