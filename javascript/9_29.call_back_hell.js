// Select the first <h1> element in the document and assign it to the variable h1
let h1 = document.querySelector("h1");

// Define a function named alvi that takes three parameters: color, delay, and callback
let alvi = function(color, delay, callback) {
    // Set a timeout to execute the following code after the specified delay
    setTimeout(() => {
        // Change the color of the h1 element to the specified color
        h1.style.color = color;
        // Call the callback function after changing the color
        callback(); 
    }, delay);
}

// Call the alvi function to change the color of the h1 element to red after a delay of 1000 milliseconds
alvi("red", 1000, () => {
    // Inside the callback function, call the alvi function to change the color to blue after a delay of 1000 milliseconds
    alvi("blue", 1000, () => {
        // Inside the callback function, call the alvi function to change the color to green after a delay of 1000 milliseconds
        alvi("green", 1000, () => {
            // Empty function as the last step, since green is the last color change
        });
    });
});

// Select the first <button> element in the document and assign it to the variable button
let button = document.querySelector("button");

// Set the inner text of the button to "alvi"
button.innerText = "alvi"; 
