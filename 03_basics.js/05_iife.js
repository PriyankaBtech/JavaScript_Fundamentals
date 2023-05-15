// Immediately Invoked Function(IIFE)

(function sayMessage() {
    console.log(`Hello Guys`)
})(); //Hello Guys

// this function protect or remove  the pollution of global scope.
// and use for immediate invoking

/*
SYNTAX :
()()
FIRST () => function define inside 
SECOND () => excute the function
*/


//NOTE : must use full-stop(;) otherwise will give error, this function not understand where to stop, this is a reason we must use full stop.

(function greeting(){
    // named IIFE
    console.log(`Welcome to all`);
})(); // Welcome


// IIFE WITH ARROW FUNCTION
// (() => {})()

// unamed IIFE
( () => {
    console.log(`Welcome guys`);
} )(); // Welcome


( (name) => {
    console.log(`Welcome ${name}`);
} )("Priyanka");  // give parameter
// OUTPUT: Welcome Priyanka