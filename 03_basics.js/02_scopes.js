/*********************** LOCAL AND GLOBAL SCOPE**********************************/

// let a = 10
// const b = 20
// var c = 30

// {} => called Scope, its used with functions and condition. When its use with object then its not call a scope.

//var c = 200
let a = 500

if (true) {
    let a = 10
    //console.log("inner", a) // 10

    const b = 20
    //var c = 30   
}
//console.log(a) // a is not defined
//console.log(b) // b is not defined
//console.log(c) // 30 // this the reason developer use let and const

// GLOBAL SCOPE => when value not written inside {}
// LOCAL SCOPE => when value written inside {}


//NESTED SCOPE

function one() {
    const userName = "priyanka"

    function two() {
        const id = "priyanka@gmail.com"
        console.log(userName)
    }
    //console.log(id) // error

    two()
}
//one() //priyanka
//ice-cream example

if (true) {
    const userName = "priyanka"
    if(userName === "priyanka"){
        const place = " Delhi"
        //console.log(userName + place)
    }
    //console.log(place) // Error

}
//console.log(userName) // userName is not defined


/************************* Intrested example *******************************/

console.log(addOne(5)) // 6
function addOne(num) {
    return num + 1
}
//addOne(5)


addTwo(5) //  Cannot access 'addTwo' before initialization
const addTwo = function(num){
    return num + 2
} // sometimes this types of function called Expression

   
