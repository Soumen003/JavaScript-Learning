// Arrays Declaration


const myArr = [1, 2, 4, 5, 6]
const MyHeros = ["IronMan"]


const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[0]);

// Array Methods

// myArr.push(7); push ==> Add numbers
// myArr.pop()  pop ==> Removes the last value

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(6));

const newArr = myArr.join() // ==> Joins the array But Changes its type to a String

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr); // String



// Slice Method

console.log("A", myArr);

const myn1 = myArr.slice(1, 3);
console.log(myn1);

console.log("B ", myArr);


// Splice Method
const myn2 = myArr.splice(1, 3); // ==> Original Array ko bhi change krtaa hai
console.log("C ", myArr);
console.log(myn2);


