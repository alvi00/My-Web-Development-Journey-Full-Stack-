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


//----------------------------------------------------------------------

//----------------------------------------------------------------------


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

//----------------------------------------------------------------------

//----------------------------------------------------------------------


// Define an arrow function 'alvi' that takes two parameters 'a' and 'b'
const alvi = (a, b) => {
    // Return the sum of 'a' and 'b'
    return a + b;
}

// Call the 'alvi' function with arguments 10 and 20, then log the result
console.log(alvi(10, 20)); // Output: 30

// Define an arrow function 'pow' that takes two parameters 'a' and 'b'
const pow = (a, b) => {
    // Return the product of 'a' and 'b'
    return a * b;
}

// Call the 'pow' function with arguments 2 and 2, then log the result
console.log(pow(2, 2)); // Output: 4

// Define an arrow function 'print' with no parameters
const print = () => {
    // Log a message
    console.log("Alvi is a good boy");
}

// Call the 'print' function to log the message
print(); // Output: Alvi is a good boy


//----------------------------------------------------------------------

//----------------------------------------------------------------------


// Define an arrow function 'alvi' that takes two parameters 'a' and 'b' and returns their sum
const alvi = (a, b) => (
    a + b
);

// Call the 'alvi' function with arguments 1 and 2, then log the result
console.log(alvi(1, 2)); // Output: 3



//----------------------------------------------------------------------

//----------------------------------------------------------------------

const student = {
    name: "Alvi", // Property: Name of the student
    marks: 100,   // Property: Marks of the student
    prop: this,   // Property: 'this' refers to the object being constructed, but not used as intended
    alvi: function() {
        console.log(this);        // Method: Logs the context (student object)
        console.log(this.marks);  // Method: Logs the marks property of the context (student object)
    },
    anas: () => {
        console.log(this);        // Method: Logs the context (usually the global object in this case)
        console.log(this.name);   // Method: Logs the name property of the context (usually undefined)
    }
};

student.alvi(); // Calling the 'alvi' method of the 'student' object
student.anas(); // Calling the 'anas' method of the 'student' object

//----------------------------------------------------------------------

//----------------------------------------------------------------------


const student = {
    name: "Alvi",
    marks: 100,
    prop: this, // This line has no practical effect in this context; it refers to the surrounding context during object creation.

    getinfo: () => {
        setTimeout(() => {
            console.log(this); // This will log the value of 'this' when the arrow function is created, usually the global object.
        }, 2000);
    },

    getinfo1: function() {
        setTimeout(() => {
            console.log(this); // This will log the value of 'this' when the function is executed, which is the 'student' object.
        }, 2000);
    }
};

student.getinfo();  // Logs the global object (usually 'window' in browsers) after 2000ms
student.getinfo1(); // Logs the 'student' object after 2000ms
