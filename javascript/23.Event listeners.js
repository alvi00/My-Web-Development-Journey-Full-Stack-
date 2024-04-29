//`````````````````````````````````//
//Adding Event listerners
//``````````````````````````````````//
// Select the first <button> element in the document
let btn = document.querySelector("button");

// Define a function named sayhello that logs "Hello" to the console
let sayhello = () => {
    console.log("Hello");
};

// Define a function named hru that logs "How are You" to the console
let hru = () => {
    console.log("How are You");
};

// Add an event listener to the button for the "click" event,
// which will call the sayhello function when the button is clicked
btn.addEventListener("click", sayhello);

// Add an event listener to the button for the "mouseenter" event,
// which will call the hru function when the mouse enters the button
btn.addEventListener("mouseenter", hru);
