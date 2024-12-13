const { log } = require("console"); // Importing 'log' function from the built-in 'console' module
const express = require("express"); // Importing Express framework
const app = express(); // Creating an instance of Express
const path = require("path"); // Importing 'path' module for file path operations
const port = 8080; // Port number on which the server will listen

// Setting view engine to EJS (Embedded JavaScript) for rendering dynamic content
app.set("view engine", "ejs");

// Serving static files (CSS and JavaScript) from respective directories to the ejs file 
app.use(express.static(path.join(__dirname, "public/js"))); // Serving JS files from '/public/js' directory
app.use(express.static(path.join(__dirname, "public/css"))); // Serving CSS files from '/public/css' directory

// Setting the directory for views (EJS templates)
app.set("views", path.join(__dirname, "views"));

// Starting the server to listen on specified port
app.listen(port, () => {
    console.log(`${port} is listening`); // Logging a message when the server starts listening
});

// Handling GET request for the root URL '/'
app.get("/", (req, res) => {
    res.render("home.ejs"); // Rendering 'home.ejs' template when '/' is accessed
});

// Handling GET request for '/insta/:username' URL pattern
app.get("/insta/:username", (req, res) => {
    // Loading mock data from 'data.json' (replace with actual data source in production)
    const data = require("./data.json");
    let username = req.params.username; // Extracting 'username' parameter from URL
    let user = data[username]; // Retrieving user data based on 'username'
    res.render("insta.ejs", { user }); // Rendering 'insta.ejs' template with 'user' data
});

// Explanation comments:
// - The code sets up an Express server that listens on port 8080.
// - It configures EJS as the view engine for rendering dynamic HTML content.
// - Static files (CSS and JS) are served using the express.static middleware.
// - Views (EJS templates) are expected to be located in the '/views' directory.
// - There are two routes defined:
//   1. GET '/' renders 'home.ejs' template.
//   2. GET '/insta/:username' renders 'insta.ejs' template, passing user data fetched from 'data.json'.
// - 'data.json' is used to simulate a data source; in a real application, this would be a database or API.
// - The server logs a message to the console when it starts listening on port 8080.



//this is the ejs file

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="/style.css">
</head>
  <body>
    <h1>Your username is <%=user.name%></h1>
    <h1>Your followes are <%= user.followers %></h1>
    <h1>Your are following <%= user.following %></h1>
    <hr>
    <h1>Your posts are</h1>
    <% for(let i of user.posts) { %>
     <img src="<%= i.image %>" alt="">
     <h1>likes <%= i.likes %></h1>
     <h1>comments <%= i.comments %></h1>
    <% } %>
  </body>
  <script src="/app.js"></script>
</html>

//this is the css file

img{
    height: 150px;
    width: 150px;
}
body{
    background-color: aqua;
}

//this is the js file
let btns=document.querySelectorAll("h1");
for(let i of btns){
    i.addEventListener("click",()=>{
        console.log("Clicked");
    });
}
