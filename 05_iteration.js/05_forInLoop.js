// for-in loop 

// Generally used for loop over the Object

const mySweets = {
    box1 : "Laddu",
    box2 : "Burfi",
    box3 : "Jalebi",
    box4 : "Rasgulla",
}

for (const sweets in mySweets) {
    console.log(sweets)    
}
// OUTPUT : 
// box1
// box2
// box3
// box4

for (const sweets in mySweets) {
    console.log(mySweets[sweets])    
}
// OUTPUT : 
// Laddu
// Burfi
// Jalebi
// Rasgulla

for (const sweets in mySweets) {
    console.log(`${sweets} have ${mySweets[sweets]}`)    
}
// OUTPUT : 
// box1 have Laddu
// box2 have Burfi
// box3 have Jalebi
// box4 have Rasgulla


// CAN WE USE for-in LOOP IN ARRAY

const colors = ["Red", "Green", "Blue", "Pink"]

for (const key in colors) {
    console.log(key) // index number come
}
// OUTPUT :
// 0
// 1
// 2
// 3

//how to get key values
for (const key in colors) {
    console.log(colors[key]) 
}
// OUTPUT :
// Red
// Green
// Blue
// Pink


// CAN WE APPLY for-in LOOP OVER THE Maps

const basket = new Map()

basket.set('fruit1', "apple")
basket.set('fruit2', "mango")
basket.set('fruit3', "orange")
basket.set('fruit4', "banana")

for (const fruits in basket) {
    console.log(fruits)  
}
// OUTPUT : Nothing come in result
// reason => Map is not iterable
