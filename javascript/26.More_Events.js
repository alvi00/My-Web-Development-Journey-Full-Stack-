// Select the first <form> element in the document and assign it to the variable fo
let fo = document.querySelector("form");

// Define a function named okita that takes an event object as a parameter
let okita = function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
}

// Add an event listener to the <form> element for the "submit" event,
// which will call the okita function when the form is submitted
fo.addEventListener("submit", okita);

// Select the element with the id "alvi" and assign it to the variable alvi
let alvi = document.querySelector("#alvi");

// Add an event listener to the "input" event of the alvi input field,
// which will call a function when the value of the input field changes
//input listerner helps to see small changes
alvi.addEventListener("input", function() {
    // Log a message to the console indicating that the value has changed
    console.log("Value changed");
    // Log the current value of the input field to the console
    console.log(alvi.value);
});

// Add an event listener to the "change" event of the alvi input field,
// which will call a function when the value of the input field changes and the field loses focus
//changes help to see end changes in the text
alvi.addEventListener("change", function() {
    // Log a message to the console indicating that the value has changed
    console.log("Value changed");
    // Log the current value of the input field to the console
    console.log(alvi.value);
});




//Small practise

// Select the first <h1> element in the document and assign it to the variable h
let h = document.querySelector("h1");

// Select the element with the class "area" and assign it to the variable area
let area = document.querySelector(".area");

// Select the first <p> element in the document and assign it to the variable p
let p = document.querySelector("p");

// Add an event listener to the "input" event of the area input field,
// which will call a function whenever the value of the input field changes
area.addEventListener("input", function() {
    // Set the text content of the <p> element to the value of the input field
    p.innerText = area.value;
});
