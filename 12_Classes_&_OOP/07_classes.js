/************************ Class ************************/

// after ES6

class user {
    //important
    constructor(username, email, password) {
        this.username = username
        this.email = email
        this.password = password
    }

    //function
    encryptPassword() {
        return `${this.password} xyz`
    }

    maniputateUserName() {
        return `${this.username.toUpperCase()}`
    }
}

const person = new user("Priyanka", "priyanka@gmail.com", "123")

console.log(person.encryptPassword()) // 123 xyz
console.log(person.maniputateUserName()) // PRIYANKA
console.log(person.maniputateUserName) // [Function: maniputateUserName]



// Behind the scene | convensional way of working

function User(username, email, password) {
    this.username = username
    this.email = email
    this.password = password
}

User.prototype.encryptPassword = function() {
    return `${this.password} xyz`
}

User.prototype.maniputateUserName = function() {
    return `${this.username.toUpperCase()}`    
}

const anotherPerson = new User("Rohit", "rohit@gmail.com", "456")

console.log(anotherPerson.encryptPassword()) // 456 xyz
console.log(anotherPerson.maniputateUserName()) // ROHIT

