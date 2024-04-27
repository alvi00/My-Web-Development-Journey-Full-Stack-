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




// Define an array of student objects, each containing a 'name' and a 'marks' property
let students = [
    {
        name: "alvi",
        marks: 20
    },
    {
        name: "sakib",
        marks: 200
    }
];

// Use the 'map' method to create a new array based on the original 'students' array
// For each student object 'el' in 'students', divide the 'marks' property by 10 and return the result
let alvi = students.map((el) => (
    el.marks / 10
));

// Output the new array containing marks divided by 10 for each student
console.log(alvi); // Output: [2, 20]






//--------------------------------------/
   //filer
//-------------------------------------//

// Define an array containing integers from 1 to 10
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Use the 'filter' method to create a new array containing only even numbers from the original array 'arr'
// For each element 'el' in 'arr', the condition 'el % 2 === 0' checks if it's even
// If the condition is true, the element is included in the new array, otherwise, it's filtered out
let even = arr.filter((el) => (
    el % 2 === 0
));

// Output the new array containing only even numbers
console.log(even); // Output: [2, 4, 6, 8, 10]



//--------------------------------------/
   //every
//-------------------------------------//


// Define an array containing integers 1, 3, 5, and 9
let arr = [1, 3, 5, 9];

// Use the 'every' method to check if every element in the array 'arr' satisfies the condition
// The condition checks if each element 'el' is odd (not divisible by 2)
let alvi = arr.every((el) => (el % 2 !== 0));

// Output the result of the 'every' method, which is a boolean indicating whether all elements are odd
console.log(alvi); // Output: true



//--------------------------------------/
   //some
//-------------------------------------//

// Define an array containing integers 1, 3, 5, 9, and 6
let arr = [1, 3, 5, 9, 6];

// Use the 'some' method to check if at least one element in the array 'arr' satisfies the condition
// The condition checks if each element 'el' is odd (not divisible by 2)
let alvi = arr.some((el) => (el % 2 !== 0));

// Output the result of the 'some' method, which is a boolean indicating whether at least one element is odd
console.log(alvi); // Output: true



//--------------------------------------/
   //reduce
//-------------------------------------//

// Define an array containing integers 1, 2, 3, and 4
let arr = [1, 2, 3, 4];

// Use the 'reduce' method to calculate the sum of all elements in the array 'arr'
// The arrow function passed to 'reduce' takes two parameters: 'res' (the accumulator) and 'el' (the current element)
// On each iteration, 'res' accumulates the sum of the previous elements, and 'el' represents the current element being processed
let finalval = arr.reduce((res, el) => (res + el));

// Output the final value, which is the sum of all elements in the array
console.log(finalval); // Output: 10



// Define an array containing integers
let arr = [3, 4, 2, 5, 6, 3, 2, 1];

// Use the 'reduce' method to find the maximum value in the array 'arr'
// The arrow function passed to 'reduce' takes two parameters: 'max' (the accumulator) and 'el' (the current element)
// On each iteration, the arrow function compares the current element 'el' with the accumulator 'max'
// If the current element is greater than the accumulator, it becomes the new accumulator (the maximum value so far)
let final = arr.reduce((max, el) => {
    if (max < el) {
        return el; // If the current element is greater than the accumulator, return the current element
    } else {
        return max; // Otherwise, return the accumulator
    }
});

// Output the final value, which is the maximum value in the array
console.log(final); // Output: 6



//--------------------------------------/
   //default perameter
//-------------------------------------//


// Define a function named 'sum' with two parameters, 'a' and 'b'
function sum(a, b = 3) {
    // If 'b' is not provided when calling the function, it defaults to 3
    // This is achieved using default parameter syntax: 'b = 3'
    
    // Return the sum of 'a' and 'b'
    return a + b;
}

// Call the 'sum' function with 'a' set to 3 and 'b' not explicitly provided
// Since 'b' is not provided, it defaults to 3
console.log(sum(3)); // Output: 6 (3 + 3)

