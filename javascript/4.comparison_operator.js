// Define variables 'a' and 'b' with numerical values.
let a = 10;   // 'a' is an integer
let b = 10.2; // 'b' is a floating-point number

// Calculate the sum, difference, modulus, and multiplication of 'a' and 'b'.
let sum = a + b;           // Addition
let dif = a - b;           // Subtraction
let mod = a % b;           // Modulus (remainder of division)
let mul = a * b;           // Multiplication
let exponentiation = 2 ** 2; // Exponentiation or power (2 to the power of 2)

// Define a variable 'ac' with a numerical value and a variable 'ab' with a string value.
let ac = 10;  // 'ac' is a number
let ab = "10"; // 'ab' is a string containing digits

// Check if 'ac' is equal to 'ab' in value but not in type using loose equality comparison (==).
console.log(ac == ab); // Output: true (because it only compares value, not type)

// Check if 'ac' is strictly equal to 'ab' (both value and type) using strict equality comparison (===).
console.log(ac === ab); // Output: false (because they have different types)
