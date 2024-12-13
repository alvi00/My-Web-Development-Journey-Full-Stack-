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

// Output a message indicating that this is a setInterval function demonstration
console.log("This is a code setinterval function");

// Set an interval to execute a piece of code (in this case, logging "Hello World") every 1000 milliseconds (1 second)
let id = setInterval(() => {
    console.log("Hello World");
}, 1000);

// Output the ID of the interval timer to the console
console.log(id); // Output: (some numeric value representing the interval ID)


// Clear the interval timer specified by its ID
clearInterval(id);



//--------------------------------------------//
//----------------------------------------------//

// Set up an interval to log "Hello World" every 2 seconds
let id = setInterval(() => {
    console.log("Hello World");
}, 2000);

// After 10 seconds (10000 milliseconds), clear the interval and log "Stopped"
setTimeout(() => {
    clearInterval(id); // Clear the interval using its ID
    console.log("Stopped");
}, 10000);


