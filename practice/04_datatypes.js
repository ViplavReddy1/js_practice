// Primitive - call by value

/*
These are divided into 7 categories
1. String
2. Number
3. Boolean
4. Null
5. Undefined
6. Symbol - It makes a value unique
7. BigInt - has a larger range than Number
*/

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const temp = null;
let useremail

const id = Symbol('13')
const id1 = Symbol('13')

console.log(id===id1)// even if the values are same symbol datatype makes it unique

const big = 111111111111111111111111111111111111111111111n// add n at the end of the number to make it bigInt datatype

// Non-Primitive - call by reference

/*
1. Array
2. Objects
3. Functions
*/

//This is an array
const arr= ["vip", "var", "vam"]
// This is an object which stores values in key value pairs
let myobj = {
    name:"viplav",
    age: 22
}
//This is function and return type is object function but display as function
const myFunc = function(){
    console.log("Hello World")
    
    
}

console.log(typeof null);

// Javascript is dynamically typed.