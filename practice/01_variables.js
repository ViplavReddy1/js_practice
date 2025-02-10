const id = 123
let mail = "viplav@gmail.com"
var password = "12345"
city = "hyderabad"
let state
// id = 123 once it is assigned to const we cannot reassign the same variable
mail = "reddy@gmail.com"
password = "234"
city = "maryville"
console.log(id)
/**
 * always try to use let
 * don't declare a variable without keywords
 */
console.table([mail,password,city,state])