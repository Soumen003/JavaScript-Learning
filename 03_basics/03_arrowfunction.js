const user = {
    username: "Soumen",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username} , Welcome to Website`)
        console.log(this);
    }
}

// user.welcomeMessage()

// user.username = "Sam"
// user.welcomeMessage()

// console.log(this);


// function chai() {
//     console.log(this);
// }

// chai()

const chai = () => {
    let username = "Soumen"
    console.log(this);
}


chai()


// ARROW FUNCTION
// M1
// const addTwo = (num1 , num2) => {
//     return num1 + num2
// }

// Implicit Return
// const addTwo = (num1 , num2) =>  num1 + num2 // M2
// const addTwo = (num1, num2) => (num1 + num2)  M3

const addTwo = (num1 , num2) =>  ({usernmae:  "Soumen"})
console.log(addTwo(3, 4));


// const myArray = [1,2,3,4,5]
// myArray.forEach()