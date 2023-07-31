/*********************** Properties of Getter and Setter *******************************/


// get and set inside function | get and set without class

function User(email, password) {
    this._email = email
    this._password = password

    Object.defineProperty(this, 'email', {
        get : function() {
            return this._email.toUpperCase()
        },

        set : function(value) {
            this._email = value
        }
    })

    Object.defineProperty(this, 'password', {
        get : function() {
            return this._password.toUpperCase()
        },

        set : function(value) {
            this._password = value
        }
    })    
}

const person = new User("priyanka10@.ai", "123xyz")

console.log(person.email) // PRIYANKA10@.AI
console.log(person.password) // 123XYZ


// NOte : same think can be done with the function,
// In old time, we done the same task this way
// but in practical world, we use get and set with class constructor because the syntax is more easy and maintainable 


