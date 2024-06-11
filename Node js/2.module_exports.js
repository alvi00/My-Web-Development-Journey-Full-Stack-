
//````````````````````````````````````````//

// This is process you can export any information within the directory between files

//`````````````````````````````````````````//

// This file will set the values

// Define an arrow function 'sum' that takes two arguments (a, b) and returns their sum
let sum = (a, b) => (
    a + b
);

// Define an arrow function 'multi' that takes two arguments (a, b) and returns their product
let multi = (a, b) => (
    a * b
);

// Define a constant 'g' with the value 9.8
const g = 9.8;

// Create an object 'obj' that holds the 'sum' function, 'multi' function, and 'g' constant
let obj = {
    sum: sum,
    multi: multi,
    g: g
};

// Export the 'obj' object so it can be used in other files
module.exports = obj;

// This part is in another file which will get the values

// Import the 'obj' object from the '2.module_exports.js' file
const obj = require("./2.module_exports");

// Print the imported 'obj' object to the console
console.log(obj);
