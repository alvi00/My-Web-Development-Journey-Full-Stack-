// Define two variables, 'pencil' and 'ease', and assign them the value 10.
let pencil = 10;
let ease = 10;

// Concatenate strings and the sum of variables 'pencil' and 'ease' to form a new string.
// Store the result in the variable 'output'.
let output = "alvi is a good boy" + (pencil + ease) + " okay.";

// Print the value of 'output' to the console.
console.log(output);

// Print a message to the console that consists of the string "alvi is a good boy", 
// followed by the sum of variables 'pencil' and 'ease', followed by the string "okay.".
// This demonstrates concatenating strings and numbers without using template literals.
console.log("alvi is a good boy", pencil + ease, " okay.");

// Define a new variable 'output2' using template literals.
// Inside the template literal, evaluate the expression 'pencil + ease' and insert the result into the string.
let output2 = `alvi is a good boy ${pencil + ease} okay`;

// Print the value of 'output2' to the console.
console.log(output2);
