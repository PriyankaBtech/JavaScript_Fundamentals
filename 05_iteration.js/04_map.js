/**************************** High Order Array Loop *****************************/

// Maps

//Map object holds key-value pairs and remembers the original insertion order of the keys.
//only occur unique value


const basket = new Map()

basket.set('fruit1', "apple")
basket.set('fruit2', "mango")
basket.set('fruit3', "orange")
basket.set('fruit4', "banana")
basket.set('fruit4', "banana") //only occur unique value

//The set() method adds or updates an entry in a Map
// syntax : set(key, value)

console.log(basket.size) // 4
console.log(basket.has) // [Function: has]
console.log(basket.get('fruit3')) // orange
console.log(basket.delete('fruit4')) // true
console.log(basket.size) //3


//Another Example
const contacts = new Map();

contacts.set("Priyanka", { phone: "213-555-1234", address: "123 N 1st Ave" });
contacts.has("Priyanka"); // true
contacts.get("Riya"); // undefined
contacts.set("Riya", { phone: "617-555-4321", address: "321 S 2nd St" });
contacts.get("Priyanka"); // {phone: "213-555-1234", address: "123 N 1st Ave"}
contacts.delete("Sanju"); // false
contacts.delete("Priyanka"); // true
console.log(contacts.size); // 1



// Apply for-of loop over Map

//const basket = new Map()

for (const fruits of basket) {
    console.log(fruits)    
}
// OUTPUT :
// [ 'fruit1', 'apple' ]
// [ 'fruit2', 'mango' ]
// [ 'fruit3', 'orange' ]


for (const [fruits, name] of basket) {
    console.log(fruits, ':-', name)    
}
// OUTPUT :
// fruit1 :- apple
// fruit2 :- mango
// fruit3 :- orange


// Apply  for-of loop over Object

const vegetables = {
    veg1 : "Tomato",
    veg2 : "Potato",
    veg3 : "Onion",
}

for (const veg of vegetables) {
    //console.log(veg)  // TypeError: vegetables is not iterable  
} 

// Note : for-of loop not work in object
// for iterate over the object we use : For-in loop (open the next file)