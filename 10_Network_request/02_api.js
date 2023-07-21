// fetch() | Handle APIs with async and await 
// fatch() => object

async function getAllUser() {
   try {
    const response = await fetch('https://randomuser.me/api/')
    //console.log(response)
    // console.log(typeof response)
    // convert the response in JSON if it in string form
    const data = await response.json()
    console.log(data)

   } catch {
    console.log("ERROR :", error)
   }
}

// with try and catch
getAllUser()

// without try and catch
//getAllUser() // Promise { <pending> }



// let's write same code with .then() .catch() format

fetch('https://randomuser.me/api/')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data)
})
.catch((error) => {
    console.log(error)
})
