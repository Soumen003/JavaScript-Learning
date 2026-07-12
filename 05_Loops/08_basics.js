// Reduce Method


const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currVal) {
//     console.log(`acc : ${acc} and currVal : ${currVal}`);
//     return acc + currVal
// } , 0)


const myTotal = myNums.reduce((acc, curr) => acc + curr, 0)
// console.log(myTotal);


const shoppingCard = [
    {
        itemName : "JS COURSE",
        price : 299
    },
    {
        itemName : "PYTHON COURSE",
        price : 299
    }, 
    {
        itemName : "DSA COURSE",
        price : 1999
    }
]


const Result = shoppingCard.reduce((acc, item) => acc + item.price , 0)
console.log(Result);