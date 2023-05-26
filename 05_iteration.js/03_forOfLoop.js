/*********************** For of Loop***********************/

// generally used for iterate over the Array

// ["", "", "", "", ""]
// [{}, {}, {}, {}, {}]
// => this type of array data most of time handle by developers


const numbers = [1, 2, 3, 4, 5]

for (const num of numbers) {
    console.log(num)    
}


//another example

const myName = "Priyanka"

for (const name of myName) {
    console.log(`char of my name ${name}`)    
}