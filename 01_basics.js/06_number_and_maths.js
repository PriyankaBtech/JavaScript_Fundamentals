/******************************* Number *********************************/

const score = 500
console.log(score)

// another way to declare Number
const balance = new Number(200)
console.log(balance);

// functions of Number

console.log(balance.toString());// 200
console.log(balance.toString().length) // 3
console.log(balance.toFixed(1)); // 200.0
console.log(balance.toFixed(2)); // 200.00

const otherName = 23.8966 
console.log(otherName.toPrecision(3)); // 23.9 // give precised value
// 123.8966 => 124
// 1123.8966 => 1.12e+3

const hundreds = 100000
console.log(hundreds.toLocaleString('en-IN')); // 1,00,000


/**************************** Maths ************************************/


console.log(Math); // Object [Math] {}

console.log(Math.abs(-5)); // 5, abs => means absoluate value(- to +, not + to -)

console.log(Math.round(4, 5)); // 4, round => round-of value

console.log(Math.ceil(4.3)) // 5 give upper value
console.log(Math.floor(4.9)) // 4 give lower value

console.log(Math.min(3, 4, 5, 6, 7, 7, 4)); // 3
console.log(Math.max(3, 4, 5, 6, 7, 7, 4)); // 7

console.log(Math.random()); // 0.4905950483921817 (value always comes between 0 and 1)
console.log((Math.random()*10) + 1)

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // important note


