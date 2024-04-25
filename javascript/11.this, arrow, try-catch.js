// Define an object named 'alvi'
let alvi = {
    // Properties for subject scores
    eng: 99,    // English score
    math: 100,  // Math score
    phy: 98,    // Physics score

    // Method to calculate average score
    avg: function() {
        // Output 'this', referring to the current object 'alvi'
        console.log(this);

        // Calculate the sum of scores and attempt to output average score
        // The division operation is mistakenly placed outside the console.log() function
        // This will cause only the sum to be logged, and the division result will be printed to the console separately
        console.log(this.eng + this.math + this.phy) / 3;
    }
};

// Call the 'avg' method of the 'alvi' object to calculate and display the average score
alvi.avg();

// Define a function named 'anas'
function anas() {
    // Output 'this', referring to the global object (in a browser environment, it would refer to the 'window' object)
    console.log(this);
}

// Call the 'anas' function
anas();


// Output a message indicating that this is a try and catch block demonstration
console.log("This is a code of try and catch");

// Attempt to access a variable 'a' which is not defined
try {
    console.log(a); // This will throw an error because 'a' is not defined
} catch (e) {
    // If an error occurs, execute this block
    console.log("Error , A is not defined"); // Output a custom error message
    console.log(e); // Output the error object 'e', which contains information about the error
}

// Output a message indicating that the code execution is completed
console.log("Code is done");

