//--------------------------------------/
  //for each
//-------------------------------------//

// Define an array containing integers from 1 to 8
let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// Define a function named 'alvi' using arrow function syntax
// This function takes a parameter 'el' and logs it to the console
let alvi = (el) => {
    console.log(el);
};

// Iterate over each element of the array 'arr' using the 'forEach' method
// For each element, call the 'alvi' function, which logs the element to the console
arr.forEach(alvi);

// Log "Second way" to the console, separating the output from the previous 'forEach' call
console.log("Second way");

// Alternative approach: Iterate over each element of the array 'arr' using 'forEach'
// Instead of passing the 'alvi' function directly, define an anonymous function inside 'forEach'
// This anonymous function accomplishes the same task as 'alvi' - logging each element to the console
arr.forEach(function(el) {
    console.log(el);
});



// Define an array of objects, each containing a 'name' and an 'id' property
const arr = [
    {
        name: "alvi",
        id: 22
    },
    {
        name: "Sami",
        id: 1112
    }
];

// Define a function named 'anas' using arrow function syntax
// This function takes an object 'el' as a parameter and logs its 'name' property to the console
let anas = (el) => {
    console.log(el.name);
};

// Iterate over each object in the 'arr' array using the 'forEach' method
// For each object, call the 'anas' function, which logs the 'name' property of the object to the console
arr.forEach(anas);






//--------------------------------------/
   //map
//-------------------------------------//


// Define an array containing integers from 1 to 8
let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// Use the 'map' method to create a new array based on the original array 'arr'
// For each element 'el' in 'arr', double it and return the result
let double = arr.map((el) => (
    el * 2
));

// Output the new array containing doubled elements
console.log(double); // Output: [2, 4, 6, 8, 10, 12, 14, 16]




//--------------------------------------/
   
//-------------------------------------//


