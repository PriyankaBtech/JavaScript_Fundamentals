/**************************** Class Inheritance ******************************/

class User {
    constructor(username) {
        this.username = username
    }
    //function
    logMe() {
        return `USERNAME IS ${this.username}`
    }
}

// extends

class Teacher extends User {
    constructor(username, email, password) {
        super(username)
        this.email
        this.password
    }

    addCourse() {
        console.log(`A new course is added by ${this.username}`)
    }
}

// const person = Teacher("Priyanka", "priya@gmail.com", "123") // TypeError: Class constructor Teacher cannot be invoked without 'new'
const person = new Teacher("Priyanka", "priya@gmail.com", "123")

person.addCourse() // A new course is added by Priyanka


const anotherPerson = new User("Rahul", "rahul@gmail.com", "4546")

console.log(anotherPerson.logMe()) // USERNAME IS Rahul
person.logMe() // USERNAME IS Rahul


// Important check

console.log(person === anotherPerson) // false
console.log(person === Teacher) // false

// instanceOf
console.log(person instanceof Teacher) // true
console.log(person instanceof User) // true