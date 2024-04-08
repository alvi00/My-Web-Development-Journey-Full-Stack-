//----------------------------------------------------------------------

// Define a constant object 'a' with properties 'name', 'roll', and 'mark'
const a = {
    name: "alvi",
    roll: "123",
    mark: 12
};

// Log the contents of object 'a' to the console
console.log(a);

// Define a variable 'item' with properties 'name', 'price', and 'color'
let item = {
    name: "pencil",
    price: 10,
    color: ["red", "pink"]
};

// Log the contents of object 'item' to the console
console.log(item);

// Log the value of the 'price' property of object 'item' to the console
console.log(item.price);

//----------------------------------------------------------------------

//----------------------------------------------------------------------

// Define an object 'song' with properties 'name', 'played', and 'tag'
let song = {
    name: "somwhere obly we know",
    played: 100,
    tag: ["lazna", "Sami"]
};

// Access the 'name' property of the 'song' object using dot notation
console.log(song.name); // Output: "somwhere obly we know"

// Access the 'name' property of the 'song' object using bracket notation
console.log(song["name"]); // Output: "somwhere obly we know"

// Define a variable 'a' and assign it the value "played"
let a = "played";

// Access the property of the 'song' object using a variable ('a') that holds the property name
console.log(song[a]); // Output: 100

//----------------------------------------------------------------------

//----------------------------------------------------------------------

// Define a constant object 'student' with properties 'name', 'id', and 'city'
const student = {
    name: "Ahmad Fahmid",
    id: 2232502642,
    city: "faridpur"
};

// Access the 'name' property of the 'student' object using bracket notation
console.log(student["name"]); // Output: "Ahmad Fahmid"

// Modify the 'name' property of the 'student' object using bracket notation
student["name"] = "Sadnun Sami";

// Access the 'name' property of the 'student' object using dot notation after modification
console.log(student.name); // Output: "Sadnun Sami"

// Add a new property 'gender' to the 'student' object using bracket notation
student["gender"] = "male";

// Access the newly added 'gender' property of the 'student' object using dot notation
console.log(student.gender); // Output: "male"

// Use the delete operator to remove the 'name' property from the 'student' object
delete student.name;

// Log the modified 'student' object to the console
console.log(student);

//----------------------------------------------------------------------

//----------------------------------------------------------------------

// Define a constant object 'students' with properties representing individual students
const students = {
    alvi: {
        gender: "male",
        grade: "A"
    },
    sami: {
        gender: "Male",
        grade: "B+"
    },
    shefa: {
        gender: "Female",
        grade: "A"
    }
};

// Log the entire 'students' object to the console
console.log(students);

// Access the 'gender' property of the 'alvi' object using dot notation
console.log(students.alvi.gender); // Output: "male"

//----------------------------------------------------------------------


//----------------------------------------------------------------------

// Define an array 'students' containing three objects
const students = [
    {
        name: "Ahmad Fahmid",
        Grade: "A"
    },
    {
        name: "Sanun Aaai"
    },
    {
        gender: "Male"
    }
];

// Log the entire 'students' array to the console
console.log(students);

// Log the first object in the 'students' array to the console
console.log(students[0]);

// Access the 'name' property of the first object in the 'students' array using bracket notation
console.log(students[0]["name"]); // Output: "Ahmad Fahmid"

//----------------------------------------------------------------------

//----------------------------------------------------------------------

// Log the mathematical constant 'e' to the console
console.log(Math.E); // Output: 2.718281828459045

// Log the mathematical constant 'π' (pi) to the console
console.log(Math.PI); // Output: 3.141592653589793

// Log the absolute value of -2 to the console
console.log(Math.abs(-2)); // Output: 2

// Log the result of 2 raised to the power of 3 to the console
console.log(Math.pow(2, 3)); // Output: 8

// Log the largest integer less than or equal to 2.79 to the console
console.log(Math.floor(2.79)); // Output: 2

// Log the smallest integer greater than or equal to 5.23 to the console
console.log(Math.ceil(5.23)); // Output: 6

// Log a random floating-point number between 0 (inclusive) and 1 (exclusive) to the console
console.log(Math.random()); // Output: Random floating-point number between 0 and 1

//----------------------------------------------------------------------


