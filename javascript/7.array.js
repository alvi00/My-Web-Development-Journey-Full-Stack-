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


// Declare two arrays 'num1' and 'num2'
let num1 = [1, 2, 3, 4, 5];
let num2 = [6, 7, 8, 9, 10];

// Use the concat() method to merge 'num1' and 'num2' into a new array 'num3'
let num3 = num1.concat(num2);

// Log the concatenated array 'num3' to the console
console.log(num3); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Use the reverse() method to reverse the order of elements in the array 'num3'
// Note: reverse() modifies the original array and also returns the reversed array
console.log(num3.reverse()); // Output: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]







// Declare an array 'arr' containing a mix of strings and numbers
let arr = ["Alvi", 1, "anas", 2];

// Use the slice() method to extract a portion of the array from index 1 to index 3 (not including index 3)
console.log(arr.slice(1, 3)); // Output: [1, "anas"]

// Use the slice() method with no arguments, which returns a shallow copy of the entire array
console.log(arr.slice()); // Output: ["Alvi", 1, "anas", 2]

// Use the slice() method to extract the last two elements of the array
console.log(arr.slice(-2)); // Output: ["anas", 2]

// Use the slice() method to extract a portion of the array from index 2 to the end
console.log(arr.slice(2)); // Output: ["anas", 2]


// Declare an array 'arr' containing strings
let arr = ["alvi", "anas", "Sami", "sakib"];

// Use the splice() method to remove all elements starting from index 1 (inclusive)
arr.splice(1);
console.log(arr); // Output: ["alvi"]

// Declare an array 'arr1' containing strings
let arr1 = ["alvi", "anas", "Sami", "sakib"];

// Use the splice() method to remove one element starting from index 1
arr1.splice(1, 1);
console.log(arr1); // Output: ["alvi", "Sami", "sakib"]

// Declare an array 'arr2' containing strings
let arr2 = ["alvi", "anas", "Sami", "sakib"];

// Use the splice() method to remove two elements starting from index 2 and add two new elements "fahim" and "okita"
arr2.splice(2, 2, "fahim", "okita");
console.log(arr2); // Output: ["alvi", "anas", "fahim", "okita"]


// Declare an array 'arr' containing strings
let arr = ["a", "d", "e", "g", "c"];

// Use the sort() method to sort the elements of the array 'arr'
arr.sort();
console.log(arr); // Output: ["a", "c", "d", "e", "g"]

// Declare an array 'arr1' containing numbers
let arr1 = [100, 12, 4, 2, 1, 3];

// Use the sort() method to sort the elements of the array 'arr1'
// By default, sort() sorts elements as strings, so it will sort them alphabetically, not numerically
arr1.sort();
console.log(arr1); // Output: [1, 100, 12, 2, 3, 4]
