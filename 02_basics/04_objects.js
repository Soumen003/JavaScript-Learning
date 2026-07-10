// const tinderUser = new Object() 
const tinderUser = {}
 tinderUser.id = "123abc"
 tinderUser.name = "Soumen"
 tinderUser.isLoggedIn = false 


//  console.log(tinderUser);

const regularUser = {
    email : "Some@gamil.com",
    fullname : {
        Userfullname : {
            firstname :  "Soumen",
            lastname : "Barick"
        }
    }
}



// console.log(regularUser.fullname);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "e", 6: "f"}

// const obj3 = Object.assign({} , obj1 , obj2, obj4)


const obj3 = {...obj1, ...obj2}
// console.log(obj3);




const users = 
[
    {
        id : 1 , 
        email : 'hd@gmail.com'
    }
]

// users[1].email

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser)); // converts everything to array


console.log(tinderUser.hasOwnProperty("isLoggedIn"));
