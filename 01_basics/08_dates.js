// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate); // object


// let myCreatedDate = new Date(2026, 10, 7)
let myCreatedDate = new Date("10-07-2026") 
// console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime()); // Miliseconds
console.log(Math.floor(Date.now()/1000)); // Seconds

 
let newDate = new Date() // Declaration of New Date 
console.log(newDate);
console.log(newDate.getDay());


newDate.toLocaleString ('default' , {
    weekday :"long",
})