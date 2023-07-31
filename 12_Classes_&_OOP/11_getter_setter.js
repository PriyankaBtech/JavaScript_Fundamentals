/**************************** Getter and Setter ******************************************/

class User {
    constructor(email, password) {
        this.email = email
        this.password = password
    }

    // get keyword automatically make the property as function (ex. password)
    get password() {
        // excess the password value from set not from constructor
        //return this.password.toUpperCase()
        //return this._password.toUpperCase()

        // also add somthing in password
        return`${this._password} Priyanka`
    }

    get email() {
        return this._email.toUpperCase()
    }
     
    // for setter, you have to set some value 
    set password(value) {
        //this.password = value.toUpperCase()
        // because of password also set in constructor so we change the password variable name

        this._password = value.toUpperCase()
    }

    set email(value) {
        this._email = value.toUpperCase()
    }
}

const person = new User("priyanka@gmail.com", "xyz")

console.log(person) // User { email: 'priyanka@gmail.com', password: 1234 }

// before get 
//console.log(person.password) // xyz

// getter and setter are used for security purpose
// Suppose you dont want to give excess to see the password 

// after get
//console.log(person.password) // TypeError: Cannot set property password of #<User> which has only a getter

// after set
console.log(person.password) // XYZ Priyanka

console.log(person.email) // PRIYANKA@GMAIL.COM