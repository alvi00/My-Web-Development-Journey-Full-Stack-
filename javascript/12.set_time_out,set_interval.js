//--------------------------------------------//
//----------------------------------------------//
// Output a message indicating that this is a setTimeout function demonstration
console.log("This is a code settimeout function");

// Define an arrow function 'alvi' that takes two parameters 'a' and 'b' and returns their sum
let alvi = (a, b) => (a + b);

// Call the setTimeout function to delay the execution of a piece of code
setTimeout(() => {
    // Inside the setTimeout callback function
    // Call the 'alvi' function with arguments 10 and 20, then log the result
    console.log(alvi(10, 20)); // Output: 30
}, 1000); // Execute after 1000 milliseconds (1 second)

// Output a message indicating that the code execution is completed
console.log("End code");

//--------------------------------------------//
//----------------------------------------------//



