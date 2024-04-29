//````````````````````````//
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



//````````````````````````````//
//get data from form
//``````````````````````````````//

// Select the first <form> element in the document and assign it to the variable fo
let fo = document.querySelector("form");

// Define a function named okita that takes an event object as a parameter
let okita = function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
    
    // Select the element with the id "alvi" and assign it to the variable alvi
    let alvi = document.querySelector("#alvi");
    
    // Select the element with the id "anas" and assign it to the variable anas
    let anas = document.querySelector("#anas");

    // Log the value of the "alvi" input field to the console
    console.dir(alvi.value);
    
    // Log the value of the "anas" input field to the console
    console.log(anas.value);
}

// Add an event listener to the <form> element for the "submit" event,
// which will call the okita function when the form is submitted
fo.addEventListener("submit", okita);

