// Import the mongoose module
const mongoose = require("mongoose");

// Establish a connection to the MongoDB database
main()
  .then((res) => {
    // Log a message if the connection is successful
    console.log("Connection successful");
  })
  .catch((err) => {
    // Log an error message if the connection fails
    console.log(err);
  });

// Asynchronous function to connect to the MongoDB database
async function main() {
  // Connect to the MongoDB database at the specified URL
  await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}

// Define a schema for the Book collection
const bookSchema = new mongoose.Schema({
  // Title of the book, which is required and must be a string
  title: {
    type: String,
    required: true,
    maxLength: 10,
  },
  // Author of the book, which must be a string
  author: {
    type: String,
  },
  // Price of the book, which must be a number with a minimum value of 100
  price: {
    type: Number,
    min: [100, "Change your price"], // Custom error message for validation
  },
  // Discount on the book, which defaults to 0 if not provided
  discount: {
    type: Number,
    default: 0,
  },
  // Category of the book, which must be either "fiction" or "non-fiction"
  category: {
    type: String,
    enum: ["fiction", "non-fiction"], // Enum validator with allowed values
    message: "Out of the list" // Custom error message for validation
  },
  // Genres of the book, which is an array of strings
  genre: {
    type: [String],
  },
});

// Create a model for the Book collection using the defined schema
const Book = mongoose.model("Book", bookSchema);

// Create a new instance of the Book model with specified title, author, price, category, and genres
const Book1 = new Book({
  title: "Ikigai",
  author: "Ahmad Fahmid",
  price: 150,
  category: "non-fiction",
  genre: ["comedy", "fun"],
});

// Save the new book instance to the database
Book1.save()
  .then((res) => {
    // Log the saved book if the save operation is successful
    console.log(res);
  })
  .catch((err) => {
    // Log an error message if the save operation fails
    console.log(err);
  });

// Update multiple documents in the Book collection that match the filter criteria
Book.updateMany({ title: "Ikigai" }, { price: -10 }, { runValidators: true }) // Setting an invalid price to trigger validation error
  .then((res) => {
    // Log the result if the update operation is successful
    console.log(res);
  })
  .catch((err) => {
    // Log an error message if the update operation fails, including the custom error message for the price field
    console.log(err.errors.price.properties.message);
  });
