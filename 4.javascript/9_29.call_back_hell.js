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




//````````````````````````````````````````//

//Another example
//````````````````````````````````````````````//

// Define a function named savetodb that takes three parameters: data, success callback function, and failure callback function
function savetodb(data, success, failure) {
    // Generate a random number between 1 and 10 to simulate the insertion speed
    let intertspeed = Math.floor(Math.random() * 10) + 1;
    // If the insertion speed is greater than 4, call the success callback function
    if (intertspeed > 4) {
        success();
    } else {
        // If the insertion speed is 4 or less, call the failure callback function
        failure();
    }
}

// Call the savetodb function with the data "Alvi is a good boy"
savetodb("Alvi is a good boy", () => {
    // Success callback function: Log a success message to the console when the data is saved
    console.log("Your data is saved");
    // Call the savetodb function again with another data
    savetodb("This is second data", () => {
        // Success callback function: Log a success message to the console when the second data is saved
        console.log("Your data is saved again");
    }, () => {
        // Failure callback function: Log a failure message to the console if the second data could not be saved
        console.log("Your data could not be saved again");
    });
}, () => {
    // Failure callback function: Log a failure message to the console if the first data could not be saved
    console.log("Your data could not be saved");
});


