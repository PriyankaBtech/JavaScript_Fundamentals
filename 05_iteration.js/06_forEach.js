// ForEach()

// it is a High Order function
// Array.prototype.forEach()
// forEach() method executes a provided function once for each array element.

// SYNTAX :
// forEach(callbackFn)
// forEach(callbackFn, thisArg)


// Examples

const colors = ["Red", "Green", "Blue", "Pink"]

colors.forEach( function(item) {
    //console.log(item)
})
// we not write function name because we don't need to store

// forEach() with arrow function
colors.flatMap((item) => {
    //console.log(item)
})
//OUTPUT : 
// Red
// Green
// Blue
// Pink


function printMe(item) {
    console.log(item)    
}
colors.forEach(printMe) // give reference , not execute(printMe())


// forEach is not only give the elements(item) of array, its also give index and array

colors.forEach((item, index, arr) => {
    console.log(item, index, arr)
})


// forEach() in array object, this kind of values highly handle by forEach
// [{}, {}, {}]

const garden = [
    {
        veg: "tomato",
        fruit : "apple",
        flower : "rose",
    },
    {
        veg : "potato",
        fruit : "mango",
        flower : "sunflower",
    },
    {
        veg : "onion",
        fruit : "banana",
        flower : "lily"
    }
]

garden.forEach((item) => {
    //console.log(item)
    console.log(item.flower) 
})
// OUTPUT :
// rose
// sunflower
// lily



// ForEach() with return

const coding = ["js", "ruby", "java", "python", "cpp"]

const values = coding.forEach( (item) => {
    //console.log(item);
    return item
} )

console.log(values); // undefined

// NOTE : forEach() not return the value




// => Converting a for loop to forEach

const items = ["item1", "item2", "item3"];
const copyItems = [];

// for loop
for (let i = 0; i < items.length; i++) {
  //copyItems.push(items[i]);
}

// with forEach()
items.forEach((item) => {
  copyItems.push(item);
});

console.log(copyItems) // [ 'item1', 'item2', 'item3' ]



// => Modifying the array during iteration

const words = ["one", "two", "three", "four"]

words.forEach((word) => {
  console.log(word);
  if (word === "two") {
    words.shift(); //'one' will delete from array
  }
})

console.log(words); // ['two', 'three', 'four']

