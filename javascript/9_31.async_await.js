// Selecting the <h1> element from the DOM
let h1 = document.querySelector("h1");

// Function to change the color of the <h1> element after a specified delay
function change(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Generate a random number between 1 and 10
            let n = Math.floor(Math.random() * 10) + 1;
            if (n > 4) {
                // If the random number is greater than 4, change the color of <h1>
                h1.style.color = color;
                console.log(`color changed to ${color}`);
                // Resolve the promise with a success message
                resolve("changed");
            } else {
                // If the random number is 4 or less, reject the promise
                reject("Sorry could not change color");
            }
        }, delay);
    });
}

// Asynchronous function to change colors sequentially
async function colorchange() {
    try {
        // Change color to red, wait for 1 second
        await change("red", 1000);
        // Change color to yellow, wait for 1 second
        await change("yellow", 1000);
        // Change color to blue, wait for 1 second
        await change("blue", 1000);
        // Change color to pink, wait for 1 second
        await change("pink", 1000);
    } catch (error) {
        // If any change() function fails, catch and log the error
        console.log(error);
        console.log("Sorry, color change failed.");
    }
}

// Call the colorchange() function to initiate the color changing process
colorchange();

// After 2 seconds, log a message
setTimeout(() => {
    console.log("You can go on now");
}, 2000);
