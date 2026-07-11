// if 
// Operators ==> <, >, <=, >=, ==, ===, !=


const isUserloggedin = true
if (isUserloggedin) {
    console.log("Logged In");
}


const temperature = 69
if (temperature === 49) {
    console.log("Temperataure less than 50");
} else {
    console.log("Temperataure grater than 50");
}


const score = 200 

if(score > 100) {
    const power = "fly"
     console.log(`User Power : ${power}`);
}


ShortHand
 const balance = 1000
if(balance > 500) console.log("test") // Explicit


 const balance = 1000

 if(balance > 500) {
    console.log("Less than");
 } else if(balance < 750) {
    console.log("Less than 750");
 } else {
    console.log("Less than 1200");
 }



const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true


if (userLoggedIn && debitCard) {
    console.log("Allow to buy");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User Logged In Successfully");
}


