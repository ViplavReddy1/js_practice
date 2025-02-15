//dates

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);
// type of date is object
let myCreate = new Date(2023,0,23);
let myCreate1 = new Date(2023,0,23,5,3);
let myCreate2 = new Date("2023-01-14");

console.log(myCreate.toDateString());
console.log(myCreate1.toLocaleString());
console.log(myCreate2.toLocaleString());
//give milliseconds from 1970
console.log("Time Stamp");

let myTime = Date.now()
console.log(myTime);
console.log(myCreate2.getTime());
//milliseconds to seconds
console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday: "long"
})
console.log(newDate);











