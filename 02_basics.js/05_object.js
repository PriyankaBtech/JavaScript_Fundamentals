// De-Structure of object

let bookShop = {
    name : "thinkAndGrowRich",
    prize : "free",
    numberOfBooks : 100
}

// ORDINARY WAT to extract the data from object => increase the line of codes

 console.log(bookShop.prize)// free

// LATEST WAY to extract the data from object => short and clean way to code

// syntax => (const {} = variable name)

const {prize} = bookShop
console.log(prize) // free => observe during writing you can easily write direct name


const {name : kitaab} = bookShop // you can change the key name in object and use like this
console.log(kitaab) // thinkAndGrowRich







