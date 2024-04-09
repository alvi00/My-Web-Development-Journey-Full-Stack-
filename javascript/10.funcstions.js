//----------------------------------------------------------------------

// Define a function 'malti' that takes a parameter 'a'
function malti(a) {
    // Iterate from 1 to 10
    for (let i = 1; i <= 10; i++) {
        // Multiply 'a' by the current iteration value 'i' and print the result
        console.log(`${a} * ${i} = ${a * i}`);
    }
}

// Call the 'malti' function with an argument of 5
malti(5);

//----------------------------------------------------------------------

//----------------------------------------------------------------------

// Define a function 'sum' that takes two parameters 'a' and 'b'
function sum(a, b) {
    // Return the sum of 'a' and 'b'
    return a + b;
}

// Call the 'sum' function with arguments 10 and 20, and log the result to the console
console.log(sum(10, 20)); // Output: 30

//----------------------------------------------------------------------

//----------------------------------------------------------------------

// Define a function 'sum' that takes two parameters 'a' and 'b' and returns their sum
function sum(a, b) {
    return a + b;
}

// Call the 'sum' function with arguments 1 and 3, then call 'sum' again with the result (4) and the argument 2
// Store the final result in the variable 'a'
let a = sum(sum(1, 3), 2);

// Log the value of 'a' to the console
console.log(a); // Output: 6

//----------------------------------------------------------------------
