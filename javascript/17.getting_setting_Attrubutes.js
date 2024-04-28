// Select the first element with the class "oldimg" in the document.
let alvi = document.querySelector(".oldimg");

// Retrieve the value of the "id" attribute of the selected element.
let anas = alvi.getAttribute("id");

// Log the value of the "id" attribute to the console.
console.log(anas);

// Set the value of the "id" attribute of the selected element to "okita".
alvi.setAttribute("id", "okita");

// Log the updated value of the "id" attribute to the console.
console.log(alvi.getAttribute("id"));
