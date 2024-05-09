//````````````````````````````//
// Select the first <h4> element in the document.
let alvi = document.querySelector("h4");

// Log the parent element of the selected <h4> element to the console.
console.log(alvi.parentElement);

// Log the children elements of the selected <h4> element to the console.
console.log(alvi.children);

// Log the children elements of the next sibling of the selected <h4> element to the console.
console.log(alvi.nextElementSibling.children);

// Log the previous sibling element of the selected <h4> element to the console.
console.log(alvi.previousElementSibling);

// Select the next sibling element of the selected <h4> element.
let anas = alvi.nextElementSibling;

// Set the background color of the next sibling element to red.
anas.style.backgroundColor = "red";
