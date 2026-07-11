// Introduction To Function

function sayMyName() {
    console.log("s");
    console.log("0");
    console.log("u");
    console.log("m");
    console.log("e");
    console.log("n");
}

// sayMyName() ==> Execution

// function addTwo(num1, num2) {  parameters num1 and num 2
//     console.log(num1 + num2);
// }

function addTwo(num1, num2) {
    // M1
    // let rseult = num1 + num2
    // return result;


    // M2
    return num1 + num2

}

const rseult = addTwo(2, 2) // arguments (2,2)


function loginUserMessage(username) {
    if (username === undefined) {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}


// console.log(loginUserMessage("Soumen"));
console.log(loginUserMessage()); // Undefined


function calculateCartPrice (val1, val2 ,...num1) { // rest operator ==> ...
        return num1
}

 console.log(calculateCartPrice(200,400,500)) ; // Array Dega


 const user = {
    username : "Soumen",
    price : 199
 }

 function handleObejct(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
 }

//  handleObejct(user)

handleObejct ({
    username: "sam",
    price : 399
})



const mynewArray = [100,200,300]


function retuernSecondValue(getArray) {
    return getArray[1]
}

// console.log(retuernSecondValue(mynewArray));


console.log(retuernSecondValue([100,200,300]));