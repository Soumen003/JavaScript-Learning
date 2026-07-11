const userEmail = "h@gmail.com"

if(userEmail) {
 console.log("Got");
}

// Falsy Value ==>"", false , 0 , -0, BigIng, 0n, null, undefined, NaN


// Truthy Value ==> "0", 'false', " ", [], {}, function(){}

// ==> checking if Arry is empty or not

// if(userEmail.length === 0) {
//    console.log("Array is empty");
// } ==> checking if Arry is empty or not

// ==> checking if Object is empty or not
const emptyObject = {} 

if(Object.keys(emptyObject).length === 0) {
    console.log("Object is Empty");
} 


// Nullish Coalescing Operator(??) : null and Undefined

let val1;
// val1 = 5 ?? 10 
// val1 = null ?? 10 
// val1 = undefined ?? 15

val1 = null ?? 15 ?? 10 // first one ==> 15
console.log(val1);


// Ternnary Operator

// condition ? true : false

const icePrice = 10 
icePrice >= 10 ? console.log("Yeah") : console.log(Nah);
