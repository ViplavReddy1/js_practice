//arrays

const myArr = [1,2,3,4,5]
//array is resizable in javascript
const myChar = ["chandler","joe"]
const myArr2 = new Array(1,2,3,4);
console.log(myArr[1]);
myArr.push(6)
myArr.push(7)
console.log(myArr);
myArr.pop();
console.log(myArr);
myArr.unshift(9);//unshift insert the element at 0 index
myArr.shift(); //shift delete the element at index 0
const myn1 = myArr.slice(1,3);// It does not inlcude ending range and it does not effect the array
const myn2 = myArr.splice(1,3);// It includes both ranges and it effects the array
//Array stores different types of data at a time
const myn3 = myArr.join(); //convert arrays into strings
myArr.push(myn2);
//pushing an array results in storing the array into the other array
console.log(myArr);
//concatination is used to merge 2 arrays to insert only data from the arrays into a different array
const mynArr = myArr.concat(myn2);
//this is another way of merging elements of two different arrays into an array
const another = [...myArr,...myArr2];
const another_array = [1,2,3,[1,2,4],[4,6,[7,8]]]
const simple = another_array.flat(Infinity); //converts a nested array into a simple array according to the specified depth. Here it is infinity(so that we don't have to check all nested arrays)

console.log(Array.from("fddhbdbd"));// converts different datatypes to array
let c1 = 100;
let c2 = 200;
let c3 = 300;
console.log(Array.of(c1,c2,c3));//converts list of elements into an array





