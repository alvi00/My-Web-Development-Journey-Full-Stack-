// Import the Express module
const express = require('express');

// Create an instance of Express
const app = express();

// Define the port number for the server to listen on
const port = 1000;

// Start the server and listen on the defined port
app.listen(port, () => {
    // Log a message to the console once the server is up and running
    console.log("8080 port is listening"); // Note: This message incorrectly says port 8080 instead of 1000
});

// Define a route handler for the root URL ("/")
// This will respond with a simple HTML message when the root URL is accessed
app.get("/", (req, res) => {
    res.send("<h1>I am Root</h1>");
});

// Define a route handler for URLs with two dynamic parameters: username and id
// For example, accessing "/john/123" will trigger this route
app.get("/:username/:id", (req, res) => {
    // Log the route parameters to the console
    console.log(req.params);
    
    // Destructure the username and id from the route parameters
    let { username, id } = req.params;
    
    // Create an HTML response using the dynamic parameters
    let htmls = `<h1>Welcome ${username} and your id is ${id}</h1>`;
    
    // Send the HTML response to the client
    res.send(htmls);
});

// Define a catch-all route handler for any other paths that do not match the above routes
// This will respond with a "Wrong path" message for any undefined routes
app.get("*", (req, res) => {
    res.send("<h1>Wrong path</h1>");
});
