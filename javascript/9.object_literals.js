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
