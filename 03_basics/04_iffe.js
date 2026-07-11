// Immediately Invoked Function Expressions (IIFE)

(function chai(){

    // named IIFE
    console.log(`DB`)
}) ();


((name) => {
    console.log(`DB ${name}`);
}) ('Soumen')
