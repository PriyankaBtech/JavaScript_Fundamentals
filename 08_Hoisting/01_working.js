
// Hoisting

var x = 1
one()
two()
console.log(x)

function one() {
    var a = 10
    console.log(a)    
}

function two() {
    var b = 20
    console.log(b)    
}

/*
OUTPUT :
10
20
1
*/