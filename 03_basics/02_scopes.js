// GLOBAL SCOPE
let a = 300




//BLOCK SCOPE
if (true) {
    let a = 10
    const b = 20
    console.log("Inner : ", a);
}


console.log(a);
// console.log(b);
// console.log(c);

function one () {
    const username = "Soumen"

    function two() {
       const website = "Youtube"
       console.log(username); 
    }

    two()
}

// one()


if(true) {
    const username = "Soumen"
    if(username === "soumen") {
        const website = " Youtube"
        // console.log(username + website);
    }

    // console.log(website); ==> Out of Scope
}

// console.log(username);


// +++++++++++++++++ Interesting +++++++++++++++++++
console.log(addOne(5))

function addOne(num) {
    return num + 1 
}


console.log(addTwo(5)); // Cannot use Before Defination
const addTwo = function(num) {
    return num + 2
}


