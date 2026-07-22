let score = "33abc"

console.log(typeof score);
console.log(typeof (score));


let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber); // NaN => Not a Number 


// "33" => 33
// "33abc" => NaN
// true => 1 ; 

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// "" => False
// "Soumen" = > true
// 1 => true , 0 => False


let someNumber = 33

let stringNumber = String(someNumber)
console.log(typeof stringNumber);


// ******************** Operations *************************

let value = 3
let negValue = -value

// console.log(negValue);
// console.log(2+2);
// console.log(2*2);
// console.log(2/2);
// console.log(2**2);
// console.log(2%2);

let str1 = "soumen";
let str2 = "Barick";


let str3 = str1 + str2;
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

console.log(+true); // 1
console.log(+""); // 0

let num1 , num2, num3 

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
gameCounter++;
console.log(gameCounter);