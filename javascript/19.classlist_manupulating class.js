//reason to use classlist insted of setattributes is
//in classlist we can give lot of class
//in setattribute we can only give one class and after giving one class previous all added classes are gone

// Select the first <h1> element in the document.
let alvi = document.querySelector("h1");

// Log the list of classes of the selected <h1> element to the console.
console.log(alvi.classList);

// Add the class "green" to the selected <h1> element.
alvi.classList.add("green");

// Log the updated list of classes of the selected <h1> element to the console.
console.log(alvi.classList);

// Remove the class "green" from the selected <h1> element.
alvi.classList.remove("green");

// Log the updated list of classes of the selected <h1> element to the console.
console.log(alvi.classList);

// Check if the selected <h1> element has the class "green", and log the result to the console.
console.log(alvi.classList.contains("green"));

// Check if the selected <h1> element has the class "anc", and log the result to the console.
console.log(alvi.classList.contains("anc"));

// Toggle the class "green" on the selected <h1> element (remove it if present, add it if absent).
console.log(alvi.classList);
alvi.classList.toggle("green");

// Log the updated list of classes of the selected <h1> element to the console.
console.log(alvi.classList);

// Toggle the class "anc" on the selected <h1> element (remove it if present, add it if absent).
console.log(alvi.classList);
alvi.classList.toggle("anc");

// Log the updated list of classes of the selected <h1> element to the console.
console.log(alvi.classList);
