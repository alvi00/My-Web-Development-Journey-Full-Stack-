//````````````````````````//
//Keyboard events
//also others from mdn
//```````````````````````//
// Select the first <input> element in the document and assign it to the variable inp
let inp = document.querySelector("input");

// Define a function named alvi that takes an event object as a parameter
let alvi = (event) => {
    // Log the event object to the console, displaying its properties
    console.dir(event);

    // Check if the key code of the pressed key is "ArrowUp"
    if (event.code == "ArrowUp") {
        // If the pressed key is the up arrow key, log "YOO" to the console
        console.log("YOO");
    }

    // Log "Key is pressed" to the console regardless of which key is pressed
    console.log("Key is pressed");
};

// Add an event listener to the <input> element for the "keydown" event,
// which will call the alvi function when a key is pressed
inp.addEventListener("keydown", alvi);

// Add an event listener to the <input> element for the "keyup" event,
// which will also call the alvi function when a key is released
inp.addEventListener("keyup", alvi);
