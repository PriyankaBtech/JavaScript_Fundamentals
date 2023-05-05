// singleton

// basic syntax of declare Object and both are right

//let instaUser = new Object() // singleton
let instaUser = {}  // non-singleton

instaUser.Id = "priya@123"
instaUser.Name = "priyanka"
instaUser.isLoggedIn = true

//console.log(instaUser) // { Id: 'priya@123', Name: 'priyanka', isLoggedIn: true }

const mydetails = {
    email : "priya@123.com",
    name : {
        fullName : {
            firstName : "priyanka",
            lastName : "kaushal"
        }
    }
}

//console.log(mydetails)
/* OUTPUT :
{
  email: 'priya@123.com',
  name: { fullName: { firstName: 'priyanka', lastName: 'kaushal' } }
}
  
 */
console.log(mydetails.fullname) // undefine
console.log(mydetails.name) // { fullName: { firstName: 'priyanka', lastName: 'kaushal' } }
console.log(mydetails.name.fullName.firstName) // priyanka

// HOW TO COMBINE TWO OBJECTS

let obj1 = {1 : "a", 2 : "b"}
let obj2 = {3 : "c", 4 : "d"}
let obj3 = {obj1, obj2}
let obj4 = (obj1, obj2)

//console.log(obj3) // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }
//console.log(obj4) // { '3': 'c', '4': 'd' }
// * They both are not right way to combine the objects


// Object.assign()
let obj5 = Object.assign(obj1, obj2)
console.log(obj5) // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

let obj6 = Object.assign({}, obj1, obj2) // {} all source value go inside empty object, effective way
console.log(obj6) // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// SPREAD OPERATOR in object 
let obj7 = {...obj1, ...obj2}
console.log(obj7) // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }


// OBJECT INSIDE ARRAY

let myUser = [
    {id : 1,
    name :"pinki"},
    {id : 2,
    name :"chiki"},
    {id : 3,
    name :"rinki"},
    {id : 4,
    name :"tinki"},
    {id : 5,
    name :"minki"}
]

console.log(myUser[2].name) // rinki
console.log(myUser[4].id)  // 5

// HOW TO EXCESS THE ONLY KEY VALUE IN COBJECT

console.log(Object.keys(instaUser)) // [ 'Id', 'Name', 'isLoggedIn' ]
// NOTE : keys value come in form of Array, during project making you can easily loop over them.

console.log(Object.values(instaUser)) // [ 'priya@123', 'priyanka', true ] => Array come
console.log(Object.entries(instaUser)) // Array inside Array


// CHECK VALUES PRESENT OR NOT IN OBJECT

console.log(instaUser.hasOwnProperty('Name')) // true
console.log(instaUser.hasOwnProperty('fullName'))  // false

