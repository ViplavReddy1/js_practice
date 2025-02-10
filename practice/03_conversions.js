let score = "22a";

let score1 = null;

console.log(typeof score1)
console.log(typeof(score))

let value = Number(score)
let value1 = Number(score1)

console.log(typeof value+ " ")
console.log(typeof value1)
console.log(value+" ")
console.log(value1)
/*
 String to number => if characters are present it gives Nan value
 null to number => 0
 undefined to number =>Nan
 boolean to number =>1 or 0
*/

let isNum = undefined
let bool = Boolean(isNum)

console.log(bool)
/*
number to boolean => if 0 false else true
string to boolean => if empty 0 else true
null to boolean => false
undefined to boolean => false
*/
