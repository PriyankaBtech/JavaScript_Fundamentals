/***************************** Static Property(prop) *****************************/

class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`User Name : ${this.username} `)
    }
    // attached
    // static => static keyword stop the function or property to excess
    static createID() {
        return `0123`
    }
}

const person = new User("priyanka")

// before static
//console.log(person.createID()) // 0123

// after static
//console.log(person.createID()) // TypeError: person.createID is not a function


class student extends User {
    constructor(username, email) {
        super(username)
        this.email = email
    }
}

const book = new student("Life", "life@gmail.com")

book.logMe() // User Name : Life 

console.log(book.createID()) // error 
// static function not give power to excess to anyone