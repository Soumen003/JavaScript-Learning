// Singleton ==> 


// object Literals

// Object.create

const mySym = Symbol("key1")



const JsUser = { 
     name : "Soumen",
     "full name" : "Soumen Barick",
     age : 19,
     [mySym] : "mykey1", // Symbol
     email : "baricksoumen6@gmail.com",
     isLoggedIn : false , 
     lastLoginDays : ["Monday" , "Tuesday"]
}


// Acessing Objects 

// console.log(JsUser.email);  M1
// console.log(JsUser["email"]);  M2
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]); ==>If you want the types as symbol



JsUser.email = "baricksoumen@gmail.com"
// Object.freeze(JsUser) ==> freeze the info
// console.log(JsUser);



JsUser.greeting = function () {
    console.log("Hello Bhai");
}

JsUser.greetingTwo = function () {
    console.log(`Hello Bhaii, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());