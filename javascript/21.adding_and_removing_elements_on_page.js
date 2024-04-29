//````````````````//
// Create a new <button> element.
let alvi = document.createElement("button");

// Set the inner text of the <button> element to "Click Me".
alvi.innerText = "Click Me";

// Add the class "anas" to the <button> element.
alvi.classList.add("anas");

// Select an element with the class "box".
let box = document.querySelector(".box");

// Append the newly created <button> element to the "box" element as its last child.
box.appendChild(alvi);

// Select an element with the class "box ul".
let anas = document.querySelector(".box ul");

// Append the newly created <button> element to the "box ul" element as its last child.
anas.append(alvi);

// Prepend the newly created <button> element to the "box ul" element as its first child.
anas.prepend(alvi);
