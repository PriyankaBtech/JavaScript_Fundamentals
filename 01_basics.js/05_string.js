const name = "priyanka"
const age = 23

// console.log(name + age + " she is from Delhi") // old method 

// Modern way to concetinate
//console.log(`Hello my name is ${name} and my age is ${age}`)

// # another way to declare string
const myName = new String("priyanka")
//console.log(Myname)

console.log(myName.__proto__) // {}
console.log(myName[0]); // p
console.log(myName.toUpperCase())
console.log(myName.charAt(2))
console.log(myName.indexOf("a"))

const newString = myName.substring(0, 4)
console.log(newString); // priy

const anotherString = myName.slice(-8, 2)
console.log(anotherString) // pr

const newStringOne = "   priyanka    "
console.log(newStringOne)
console.log(newStringOne.trim())

const url ="https://priyanka@gmail.com/20%priya"
console.log(url.replace('20%', "-")) // https://priyanka@gmail.com/-priya
console.log(url.includes('sunder')) // false

// split






