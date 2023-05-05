// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "priyanka",
    "full name": "priyanka btech", // can not excess through the dot notation
    [mySym]: "mykey1", // write way to declare symbol in object
    age: 18,
    location: "Delhi",
    email: "priyanka@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

// manipulation of object

JsUser.email = "priyanka@chatgpt.com"
// Object.freeze(JsUser) => this method stop the change in object

JsUser.email = "priyanka@microsoft.com" // no change happen because of freeze
// console.log(JsUser); 

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting); //  [Function (anonymous)]
console.log(JsUser.greeting()); // Hello JS user


console.log(JsUser.greetingTwo()); //Hello JS user, priyanka
