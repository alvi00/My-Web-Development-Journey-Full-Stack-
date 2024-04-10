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


//----------------------------------------------------------------------

// Define the 'alvi' function
function alvi() {
    // Declare a variable 'x' (but it is not initialized in this code)
    let x;

    // Define the 'anas' function inside the 'alvi' function
    function anas() {
        // Log the value of 'x' to the console
        // Note: 'x' is not initialized within the 'alvi' function, so it's undefined here
        console.log(x); // This is lexical scope; 'anas' can access 'x' from its parent function 'alvi'
    }
}

//----------------------------------------------------------------------

//----------------------------------------------------------------------

// Define a function expression assigned to the variable 'alvi'
let alvi = function(a, b) {
    // Return the sum of 'a' and 'b'
    return a + b;
}

// Call the 'alvi' function with arguments 1 and 2, and log the result to the console
console.log(alvi(1, 2)); // Output: 3

//----------------------------------------------------------------------

//----------------------------------------------------------------------

// Define the 'alvi' function
let alvi = function() {
    // Log "Hello" to the console
    console.log("Hello");
}

// Define the 'anas' function that takes a function 'func' and a number 'n' as arguments
let anas = function(func, n) {
    // Iterate 'n' times
    for (let i = 0; i < n; i++) {
        // Call the provided function 'func'
        func();
    }
}

// Call the 'anas' function with 'alvi' as the function argument and '10' as the number of times to call 'alvi'
anas(alvi, 10); // Output: "Hello" printed 10 times

//----------------------------------------------------------------------

//----------------------------------------------------------------------

// Define the 'anas' function that takes a function 'func' and a number 'n' as arguments
let anas = function(func, n) {
    // Iterate 'n' times
    for (let i = 0; i < n; i++) {
        // Call the provided function 'func'
        func();
    }
};

// Call the 'anas' function with an anonymous function as the first argument and '1000' as the number of times to call it
anas(function() {
    // This is an anonymous function that logs "Hello" to the console when called
    console.log("Hello");
}, 1000); // Output: "Hello" printed 1000 times

//----------------------------------------------------------------------

//----------------------------------------------------------------------

// Define an object 'a' with two methods: 'add' and 'sub'
const a = {
    // Define the 'add' method that takes two parameters 'a' and 'b' and returns their sum
    add: function(a, b) {
        return a + b;
    },

    // Define the 'sub' method that takes two parameters 'a' and 'b' and returns their difference
    sub: function(a, b) {
        return a - b;
    }
};

// Call the 'add' method of object 'a' with arguments '1' and '2', and log the result to the console
console.log(a.add(1, 2)); // Output: 3 (1 + 2)

//----------------------------------------------------------------------
