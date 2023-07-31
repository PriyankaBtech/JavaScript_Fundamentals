
const User = {
    _email: 'priyanka@.com',
    _password: "xyz",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

// Factory function
const customer = Object.create(User) // give reference of User to customer

console.log(customer.email) // PRIYANKA@.COM
console.log(customer._email) // priyanka@.com