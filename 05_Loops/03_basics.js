// for of

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);    
}


// Map

const map = new Map() 
map.set('IN', "India")
map.set('Fr', "France")

// console.log(map);

for (const [key,value] of map) {
    // console.log(key, ':-' , value);   
}

const myObject = {
    'game1' : "FF",
    'game2' : "COC"
}

// for (const [key,value] of myObject) {
 
// }