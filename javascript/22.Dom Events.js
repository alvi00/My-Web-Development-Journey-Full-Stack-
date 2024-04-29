//``````````````````````````````````//
//This is inline way for onclick
//But is is not recommended
//```````````````````````````````````//

<!-- Start of HTML document -->
<html lang="en">
<head>
    <!-- Meta tag specifying character set -->
    <meta charset="UTF-8">
    <!-- Meta tag specifying viewport settings for responsive design -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Title of the webpage -->
    <title>DOM Manipulation</title>
    <!-- Link to an external CSS file for styling -->
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- Start of body content -->
    
    <!-- Button element with an onclick attribute triggering two console.log messages -->
    <button onclick="console.log('Button is clicked'); console.log('Once')" >Click Me!</button>
    
    <!-- Script tag linking to an external JavaScript file -->
    <script src="app.js"></script>
    
    <!-- End of body content -->
</body>
<!-- End of HTML document -->
</html>



//``````````````````````````````````//
//This is how you use onclick by js
//```````````````````````````````````//


// Select the first <button> element in the document
let btn = document.querySelector("button");

// Assign a function to the onclick event handler of the button using an arrow function
btn.onclick = () => {
    // Log a message to the console when the button is clicked
    console.log("The button was clicked");
};

// Select the element with class "alvi"
let btn2 = document.querySelector(".alvi");

// Define a function named alart that displays an alert
let alart = () => {
    alert("This is an alert");
};

// Assign the alart function to the onclick event handler of btn2
btn2.onclick = alert;




//``````````````````````````````````//
//This is how you use on mouse enter by js
//```````````````````````````````````//
