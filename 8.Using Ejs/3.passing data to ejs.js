const express = require("express");
const path = require("path");
const app = express();
const port = 8080;

// Set the view engine to EJS
app.set("view engine", "ejs");

// Set the directory for views
app.set("views", path.join(__dirname, "/views"));

// Start the server
app.listen(port, () => {
    console.log(`${port} is listening`);
});

// Define the route with a dynamic parameter for dice roll
app.get("/:diceroll", (req, res) => {
    // Generate a random number between 1 and 6
    let random = Math.floor(Math.random() * 6) + 1;
    
    // Render the diceroll.ejs template and pass the random number
    res.render("diceroll", { random });
});





//This is the ejs file
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>dice roll</title>
</head>
<body>
    <h1>Your dice number is <%= random%></h1>
</body>
</html>
