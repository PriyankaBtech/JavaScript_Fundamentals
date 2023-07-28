/************************* call ****************************/

function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("call")
}

function createUser(username, email, password){
    // SetUsername(username) // createUser { email: 'pinki@gmail.com', password: '123' }
    SetUsername.call(this, username)

    // call => hold the reference of variable
    // use the "this" of setUsername

    //this.username = username // out source this work to the upper function
    this.email = email
    this.password = password
}

const person = new createUser("pinki", "pinki@gmail.com", "123")
console.log(person) 
// createUser {username: 'pinki', email: 'pinki@gmail.com', password: '123'}