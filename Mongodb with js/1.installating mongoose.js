//at first npm init -y
//then npm install mongoose --save
//then mongosh
//https://mongoosejs.com/docs/guide.html read documentation from herw

// Import the Mongoose library
const mongoose = require('mongoose');

// Call the main function and handle the promise returned
main()
  .then((res) => {
    // Log a success message if the connection is successful
    console.log("Connection successful");
  })
  .catch((err) => {
    // Log an error message if there is an error
    console.log(err);
  });

// Define an asynchronous function to connect to MongoDB
async function main() {
  // Use mongoose to connect to a MongoDB instance running on localhost
  // and connect to the 'test' database
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}
