 // FOR LOOP

 for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 6) {
        console.log("Sixer")        
    }
    console.log(element)    
 }


 for (let i = 0; i <= 10; i++) {
    //console.log(`Outer Loop ${i}`)
    for (let j = 0; j <= 10; j++) {
        //console.log(`Inner Loop ${j} Inner loop Value ${i}`)
       // console.log(i + "*" + j + "=" + i*j)        
    }    
 }

 let fruits = ["apple", "mango", "orange", "pineapple"]

 for (let index = 0; index < fruits.length; index++) {
    const element = fruits[index];
    console.log(element)
    
 }


 // Break and Continue

 for (let index = 1; index < 20; index++) {
    if (index == 6) {
        console.log(`Sixer`)
        break        
    }
    console.log(`Value of index ${index}`)
    
 }


// continue (skip)

 for (let index = 1; index < 20; index++) {
    if (index == 6) {
        console.log(`Sixer`)
        continue        
    }
    console.log(`Value of index ${index}`)
    
 }