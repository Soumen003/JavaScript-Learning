const marvel_heros = ["thor", "IronMan", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);

//  const allHeros = marvel_heros.concat(dc_heros) 
// console.log(allHeros);



const all_new_heros = [...marvel_heros, ...dc_heros] // .... ==> spread method
// console.log(all_new_heros);


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_array = another_array.flat(Infinity)
console.log(real_array);


console.log(Array.isArray("Soumen"))
console.log(Array.from("soumen")); // Creates an array of the the Word 
console.log(Array.from({name : "soumen"}));  // returns empty array ******


let score1 = 100 
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));