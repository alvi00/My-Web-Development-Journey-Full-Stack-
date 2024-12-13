// Import the Express module
const express = require('express');

// Create an instance of Express
const app = express();

// Define the port number for the server to listen on
const port = 8080;

// Start the server and listen on the defined port
app.listen(port, () => {
    // Log a message to the console once the server is up and running
    console.log(`${port} is listening`);
});

// Define a route handler for the root URL ("/")
// This will respond with a simple text message when the root URL is accessed
app.get("/", (req, res) => {
    res.send("I AM ROOT");
});

// Define a route handler for URLs with two dynamic parameters: username and id
// For example, accessing "/john/123" will trigger this route
app.get('/:username/:id', (req, res) => {
    // Extract the username from the route parameters
    let username = req.params.username;
    
    // Log the query parameters to the console
    console.log(req.query);
    
    // Extract the 'q' query parameter from the query string
    let { q } = req.query;
    
    // Create a response string using the username and the query parameter
    let responseMessage = `I am ${username} and the query is ${q}`;
    
    // Send the response message to the client
    res.send(responseMessage);
});
