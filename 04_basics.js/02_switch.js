/********************** Switch Statment ******************************/

/* 
BASIC SYNTAX :-

switch (key) {
    case value:
        
        break;

    default:
        break;
}
*/

const month = 3

switch (month) {
    case 1:
        console.log("January")        
        break;
    case 2:
        console.log("Febuary")        
        break;
    case 3:
        console.log("march")        
        break;
    case 4:
        console.log("April")        
        break;
    default:
        console.log("Default")
        break;
}
// Note :- if the break removed, when whole code execute, expect default