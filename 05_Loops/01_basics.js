// For Loop
for (let i = 1; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        console.log("5 is the best number");

    }
    // console.log(element);

}

for (let i = 1; i <= 10; i++) {
    console.log(`Outer loop Value ${i}`)
    for (let j = 1; j <= 10; j++) {
        //console.log(`Inner loop Value ${j}`)
        console.log(i + '*' + j + '=' + i * j);
    }
}


let myArray = ["falsh", "bat", "Whoo"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);

}



// Continue and Break 

// Break Statement
for (let index = 1; index <= 20; index++) {
     
    if (index == 5) {
        console.log("Detected 5");
        break 
    }
    console.log(`Value of index is ${index}`)

}


// Continue Statement
for (let index = 1; index <= 20; index++) {
     
    if (index == 5) {
        console.log("Detected 5");
        continue
    }
    console.log(`Value of index is ${index}`)

}