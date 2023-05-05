// var, let and const

// store information in memory ==> some memories are constant and some varies time to time.


const accountId = 1444553
let accountEmail = "priyanka@google.com"
var accountPassword = "12345"
accountCity = "Delhi"

//accountId = 2 // not allowed

accountEmail = "priya@google.com"
accountPassword = "2121212121"
accountCity = "Mumbai"
let accountState

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

//difference between let and var 

/* 
prefer not to use var
because of issue in block and functional scope
*/

