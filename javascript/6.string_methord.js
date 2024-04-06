// Prompt the user to enter their password and store the input in the variable 'password'
let password = prompt("Enter your password");

// Trim the whitespace from the beginning and end of the password using the trim() method
let alvi = password.trim();
//here it doesnt make change to the main str. it make a copy of the str, make changes and give the new string.
// Log the trimmed password to the console
console.log(alvi);


// Declare a variable 'str' and assign it the value "alvi"
let str = "alvi";

// Convert the string 'str' to uppercase using the toUpperCase() method
let a = str.toUpperCase();

// Log the uppercase version of the string to the console
console.log(a);



// Declare a variable 'str1' and assign it the value "ALVI"
let str1 = "ALVI";

// Convert the string 'str1' to lowercase using the toLowerCase() method
let b = str1.toLowerCase();

// Log the lowercase version of the string to the console
console.log(b);

// Declare a variable 'str' and assign it the value "alvi"
let str = "alvi";

// Find the index of the character 'l' in the string 'str' using the indexOf() method
let a = str.indexOf('l');

// Log the index of 'l' in the string to the console
console.log(a);


// Declare a variable 'str1' and assign it the value "anas is a brother of alvi"
let str1 = "anas is a brother of alvi";

// Find the index of the substring "alvi" in the string 'str1' using the indexOf() method
let a1 = str1.indexOf("alvi");

// Log the index of the substring "alvi" in the string to the console
console.log(a1);

//if not found it will pass -1

// Declare a variable 'msg' and assign it the value "          alvi                   "
let msg = "          alvi                   ";

// Call the trim() method on 'msg' to remove leading and trailing whitespace
// Then, call the toUpperCase() method to convert the resulting string to uppercase
let a = msg.trim().toUpperCase();

// Log the resulting string, which has been trimmed and converted to uppercase, to the console
console.log(a);
