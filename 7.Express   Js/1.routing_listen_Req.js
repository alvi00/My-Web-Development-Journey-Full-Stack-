//At first, i have to do npm init
//then I have to install Express js


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

//``````````````````````````````//
//This part is routing
//`````````````````````````````//

// Define a route for GET requests to the root path ("/")
app.get("/", (req, res) => {
  // Send an HTML response with a message
  res.send("<h1>This is root</h1>");
});

// Define a route for POST requests to the root path ("/")
app.post("/", (req, res) => {
  // Send an HTML response with a message
  res.send("<h1>This is root</h1>");
});

// Define a route for GET requests to the "/search" path
app.get("/search", (req, res) => {
  // Send an HTML response with a message
  res.send("<h1>This is search</h1>");
});

// Define a route for GET requests to the "/help" path
app.get("/help", (req, res) => {
  // Send an HTML response with a message
  res.send("<h1>This is help</h1>");
});

// Define a wildcard route for all other GET requests
// This route will match any path not previously matched
app.get("*", (req, res) => {
  // Send an HTML response with a default message
  res.send("<h1>This is default</h1>");
});

