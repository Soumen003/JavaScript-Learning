const coding = ["js", "py", "java"]

// coding.forEach(function (item) {
//     // console.log(item);   
// });


// coding.forEach((item) => {
//     console.log(item);
// })


// function printMe(item) {
//     console.log(item);
// }

// coding.forEach(printMe)



// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);

// })


const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "JS"

    },
    {
        languageName: "Python",
        languageFileName: "Py"

    },
    {
        languageName: "Java",
        languageFileName: "Java"

    },

]



myCoding.forEach((item) => {
    console.log(item.languageName);
})