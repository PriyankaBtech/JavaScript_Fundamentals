/*************************** this *******************************/

const bookShop = {
    bookName : "thinkAndGrowRich",
    price : 300,

    printName : function() {
        console.log(`${this.bookName}, is a great book`) // this => refers the current contex
        //console.log(this)
    }
}
//console.log(bookShop)
console.log(bookShop.printName) // [Function: printName]
//bookShop.printName() // thinkAndGrowRich, is a great book

bookShop.bookName = "DoEpicShit" // book name change
//bookShop.printName() // DoEpicShit, is a great book

// IN NODEjs
//console.log(this) // {} 

// IN BROWSER
//console.log(this) // => in browser this will give window object


function test() {
    console.log(this)
}
//test() // multiple values come in result

function myName() {
    let name = "priyanka"
    console.log(this.name)
}
//myName() //undefined =>  'this' is not work in function, its works properly with object


