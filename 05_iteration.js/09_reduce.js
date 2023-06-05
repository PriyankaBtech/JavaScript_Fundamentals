// reduce()

// Array.prototype.reduce()
// it is also a HOF


const number = [1, 2, 3, 4]

const totalNum = number.reduce(function(acc, currValue){
    console.log(`acc : ${acc} and currvalue : ${currValue}`)
    return acc + currValue
}, 0)

// acc : 0 and currvalue : 1
// acc : 1 and currvalue : 2
// acc : 3 and currvalue : 3
// acc : 6 and currvalue : 4

console.log(totalNum) // 10


// reduce() with ARROW FUNCTION

const myNums = number.reduce((acc, curr) => acc + curr, 2)
console.log(myNums) // 12


// A Good Example

const shoppingCart = [
    {
        itemName: "JavaScript course",
        price: 2999
    },
    {
        itemName: "python course",
        price: 999
    },
    {
        itemName: "Android dev course",
        price: 3999
    },
    {
        itemName: "Data science course",
        price: 12999
    },
]

const totalPay = shoppingCart.reduce((acc, item) => (acc + item.price), 0)
console.log(totalPay) // 20996


