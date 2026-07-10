// Primitive ==> Call By Value

// 7 types : String, Number, Boolean, Null, undefined, Symbol, BigInt

// Javascript is a dynamically typed Langueage

const score = false
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);





// Reference Type(Non - Primitive) ==>  Arrays, Objects, Functions

const heros = ["Spiderman", "Doga", "IronMan"];
let myObj = {
    name = "Soumen",
    age = 22,
}

const myFunction = function () {
    console.log("Hello");
}
