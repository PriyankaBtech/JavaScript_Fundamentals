/***************************** Date *********************************/

let myDate = new Date()
console.log(myDate); // 2023-03-12T10:06:03.613Z
console.log(myDate.toString()) // Sun Mar 12 2023 15:37:34 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()) // Sun Mar 12 2023
console.log(myDate.toISOString()) // 2023-03-12T10:10:46.485Z
console.log(myDate.toJSON()) // 2023-03-12T10:10:46.485Z
console.log(myDate.toLocaleDateString()) // 12/3/2023
console.log(myDate.toLocaleString()) // 12/3/2023, 3:40:46 pm

// typeof
console.log(typeof myDate) // object


let myCreateDate = new Date(2023, 0, 23)
console.log(myCreateDate); // 2023-01-22T18:30:00.000Z
console.log(myCreateDate.toDateString()); // Mon Jan 23 2023


let myAnotherDate = new Date(2023, 0, 23, 5, 3)
console.log(myAnotherDate.toLocaleString()) // 23/1/2023, 5:03:00 am

let myThirdDate = new Date("01-14-2023")//("2023-01-14")
console.log(myThirdDate.toLocaleString()) // 14/1/2023, 12:00:00 am

let myTimeStamp = Date.now()
console.log(myTimeStamp); // 1678689293821 => mili-second value

console.log(myThirdDate.getTime()) // 1673634600000

console.log(Math.floor(Date.now()/1000)); // 1678689662

let newDate = new Date()
console.log(newDate) // 2023-03-13T06:43:14.861Z
console.log(newDate.getMonth() + 1) // 3
console.log(newDate.getDay()) // 1


// `${newDate.getDay()} and the time`

newDate.toLocaleString('default', { // important 
    weekday : "long",
})



