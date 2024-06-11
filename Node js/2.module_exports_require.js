
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




//`````````````````````````````````````````//
//In this process you can export informations between two directories
//Suppose i have a files calles fruits then i can a js file there called apple
//in that i saved all my info of apple
//then i have to export the info to the index.js file
//index.js will require and export it
//then other directory can require the info

//```````````````````````````````````````//

//in fruits directory
//in apple.js file

// Define an object 'obj' representing an apple with its name and color
let obj = {
    name: "Apple",
    color: "Red"
};

// Export the 'obj' object so it can be used in other files
module.exports = obj;

//in bannana.js file
// Define an object 'obj' representing a banana with its name and color
let obj = {
    name: "Banana",
    color: "Yellow"
};

// Export the 'obj' object so it can be used in other files
module.exports = obj;

//in index.js file
// Import the 'apple' object from 'apple.js'
let apple = require("./apple");

// Import the 'banana' object from 'banana.js'
let banana = require("./banana");

// Create an array 'arr' containing the 'apple' and 'banana' objects
let arr = [apple, banana];

// Export the 'arr' array so it can be used in other files
module.exports = arr;


//in other directory

// Import the 'arr' array from the 'fruits' directory
const fruits = require("./fruits");

// Print the name of the first fruit in the array to the console
console.log(fruits[0].name);

