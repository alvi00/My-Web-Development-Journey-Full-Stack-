//----------------------------------------------------------------------

// Iterate over numbers from 1 to 15
for (let i = 1; i <= 15; i++) {
    // Check if the number is odd by checking if the remainder of division by 2 is not equal to 0
    if (i % 2 != 0) {
        // If the number is odd, log it to the console
        console.log(i);
    }
}

//----------------------------------------------------------------------

// Prompt the user to enter a number and store the input in the variable 'n'
let n = prompt("Enter a number");

// Convert the user input from string to integer using parseInt() and reassign it to 'n'
n = parseInt(n););//no need this line only to understand what this function do

// Iterate over numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
    // Multiply the current value of 'n' by 'i' and log the result to the console
    console.log(i * n);
}

//----------------------------------------------------------------------

// Declare an array 'food' containing a mix of strings and numbers
let food = ["burger", 1, "pizz", 1];

// Iterate over each element of the 'food' array using a for...of loop
for (let i of food) {
    // Log each element to the console
    console.log(i);
}


//----------------------------------------------------------------------

// Declare a string variable 'alvi' containing the value "Ahmad Fahmid Alvi"
let alvi = "Ahmad Fahmid Alvi";

// Iterate over each character of the string 'alvi' using a for...of loop
for (let i of alvi) {
    // Log each character to the console
    console.log(i);
}

