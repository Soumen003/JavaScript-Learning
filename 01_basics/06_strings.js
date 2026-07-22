const name = "Soumen"
const repoCount = 3

// console.log(name + repoCount);

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String ('Soument-ic') // declaretion 
console.log(gameName[0]);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2)); // Position of character
console.log(gameName.indexOf('u'));


const newString = gameName.substring(0,4)
console.log(newString);


const anotherString = gameName.slice(-8 , 4) // negative ka mtlb piche se strt hoga 
console.log(anotherString); 

const newStringOne = "  Soumen   "
console.log(newStringOne.trim()); // Remove Starting and Ending Spaces


const url = "https://soumen.com/soumen%20barick"
console.log(url.replace('%20', '-'));
console.log(url.includes('soumen')); // true


console.log(gameName.split('-')); // split ==> craetes string to array


