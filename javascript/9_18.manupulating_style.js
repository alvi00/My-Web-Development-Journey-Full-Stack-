// Select the first <h1> element in the document.
let alvi = document.querySelector("h1");

// Set the color of the text within the <h1> element to green.
alvi.style.color = "green";

// Set the cursor style to "help" when hovering over the <h1> element.
alvi.style.cursor = "help";

// Set the text decoration of the <h1> element to underline.
alvi.style.textDecoration = "underline";

// Select all <a> elements with the class "pubInfo" in the document.
let alvi = document.querySelectorAll(".pubInfo a");
// Loop through each <a> element in the collection.
for (let i = 0; i < alvi.length; i++) {
    // Set the text decoration of each <a> element to "none", removing any underline.
    alvi[i].style.textDecoration = "none";
    // Set the color of each <a> element to red.
    alvi[i].style.color = "red";
}
