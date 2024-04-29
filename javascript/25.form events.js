/````````````````````````//
//event listerners for form
  //learn more from mdn
  //`````````````````````````//
  // Select the <form> element in the document and assign it to the variable alvi
let alvi = document.querySelector("form");

// Add an event listener to the <form> element for the "submit" event,
// which will call a function when the form is submitted
alvi.addEventListener("submit", function(event) {
    // Log a message to the console indicating that the form is submitted
    console.log("The form is submitted");
    // Log the event object to the console, displaying its properties
    console.dir(event);
});

// Add another event listener to the <form> element for the "submit" event,
// which will call a function when the form is submitted
alvi.addEventListener("submit", function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
    // Log a message to the console indicating that the form is submitted
    console.log("The form is submitted");
    // Log the event object to the console, displaying its properties
    console.dir(event);
});
