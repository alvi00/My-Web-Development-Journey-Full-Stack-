// Import the Express module
const express = require('express');

// Create an instance of an Express application
const app = express();

// Define the port number the server will listen on
const port = 3000;

// Start the server and listen on the specified port
// The callback function is executed once the server starts successfully
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// Define a middleware function that handles all incoming requests
// The middleware logs the request and sends a JSON response
app.use((req, res) => {
  // Log a message to the console when a request is received
  console.log("Request received");

  // Define a response object with some user information
  let code = {
    name: "Alvi",
    id: "2232502642"
  };

  // Send the response object as JSON to the client
  res.send(code);
});
