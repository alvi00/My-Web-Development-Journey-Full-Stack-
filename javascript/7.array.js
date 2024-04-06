// Declare an array 'arr' containing a mix of strings and numbers
let arr = ["anas", 1, 2, "alvi"];

// Print the entire array 'arr'
console.log(arr); // Output: ["anas", 1, 2, "alvi"]

// Access and print the first element of the array 'arr'
console.log(arr[0]); // Output: "anas"

// Access and print the second character of the first element of the array 'arr' ("anas")
console.log(arr[0][1]); // Output: "n"

// Access and print the length of the first element of the array 'arr' ("anas")
console.log(arr[0].length); // Output: 5

// Declare an empty array 'arr2'
let arr2 = [];

// Array 'arr1' is declared and initialized with values
let arr1 = [1, 2, 3, 4];

// Modify the first element of 'arr1' to be 1000
arr1[0] = 1000;
console.log(arr1); // Output: [1000, 2, 3, 4]

// Assign a value to the 10th index of 'arr1'
// JavaScript arrays are dynamically sized, so this will create empty slots from index 4 to 9
arr1[10] = 10;
console.log(arr1); // Output: [1000, 2, 3, 4, <6 empty items>, 10]


// Declare an array 'followers' containing names
let followers = ["Alvi", "Anas", "Sami", "Sakib"];

// Print the initial array 'followers'
console.log(followers); // Output: ["Alvi", "Anas", "Sami", "Sakib"]

// Add new elements "fahim" and "shefa" to the end of the 'followers' array
followers.push("fahim", "shefa");
console.log(followers); // Output: ["Alvi", "Anas", "Sami", "Sakib", "fahim", "shefa"]

// Remove the last element from the 'followers' array
followers.pop();
console.log(followers); // Output: ["Alvi", "Anas", "Sami", "Sakib", "fahim"]

// Add new element "okita" to the beginning of the 'followers' array
followers.unshift("okita");
console.log(followers); // Output: ["okita", "Alvi", "Anas", "Sami", "Sakib", "fahim"]

// Remove the first element from the 'followers' array
followers.shift();
console.log(followers); // Output: ["Alvi", "Anas", "Sami", "Sakib", "fahim"]


// Declare a variable 'a' and assign it the value of the first element removed from the 'followers' array
let a = followers.shift();
//this funcstions not only removes but also returns the deleted value also with pop too
// Log the value of the removed element to the console
console.log(a);


// Declare an array 'arr' containing several strings
let arr = ["alvi", "fahim", "anas", "shefa"];

// Use the indexOf() method to find the index of the element "alvi" in the array 'arr'
let a = arr.indexOf("alvi");

// Log the index of "alvi" to the console
console.log(a); // Output: 0 (since "alvi" is at index 0 in the array)

// Use the includes() method to check if the element "alvi" is present in the array 'arr'
let b = arr.includes("alvi");

// Log whether "alvi" is present in the array to the console
console.log(b); // Output: true (since "alvi" is present in the array)

