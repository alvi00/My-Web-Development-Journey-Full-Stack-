//first npm init
//then install express
//then install nodomon
//then install ejs

// Import the Express module
const express = require("express");

// Create an instance of Express
const app = express();

// Import the 'path' module to handle and transform file paths
const path = require("path");

// Define the port number for the server to listen on
const port = 8080;

// Set the view engine to 'ejs' for rendering EJS templates
app.set("view engine", "ejs");

// Set the directory where the EJS template files are located
// '__dirname' is a global variable that contains the directory name of the current module
app.set("views", path.join(__dirname, "/views"));

// Start the server and listen on the defined port
app.listen(port, () => {
    // Log a message to the console once the server is up and running
    console.log(`${port} is listening`);
});

// Define a route handler for the root URL ("/")
// This will render and respond with the 'home.ejs' template when the root URL is accessed
app.get("/", (req, res) => {
    //make a file calles views
    //in side that have this home.ejs file with html
    res.render("home.ejs");
});
