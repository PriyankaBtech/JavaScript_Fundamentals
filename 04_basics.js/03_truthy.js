/***************************** Truthy and Falsy Values *********************************/

// Confusing situation
const book = "ThinkAndGrowRich"

if(book) {
    console.log("Book is Available")
}
else{
    console.log("Book is not Available")
}
/* OUTPUT:-
"ThinkAndGrowRich" => Book is Available
[] => Book is Available
0 => Book is not Available
" " => Book is Available
*/



/*
# falsy VALUES
=> false, 0, -0, BigInt 0n, "", null, undefined, NaN
   remaining values all are truthy

# truthy VALUES
=> "0", 'false', " ", {}, [], function(){}

*/

// check in ARRAY
if (book.length === 0) { 
    console.log("Array is Empty")
    
}

// check in Object
const emptyObj = {}

if (Object.keys(emptyObj.length === 0)) { // return array
    console.log("Object is Empty")
    
}

