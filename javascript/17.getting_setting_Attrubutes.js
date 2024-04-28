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


//```````````````````````//
//changing src attribute
//```````````````````````//
// Select the first <img> element in the document.
let alvi = document.querySelector("img");

// Retrieve the value of the "src" attribute of the selected <img> element.
console.log(alvi.getAttribute("src"));

// Set the value of the "src" attribute of the selected <img> element to "Assets/Man.png".
alvi.setAttribute("src", "Assets/Man.png");
