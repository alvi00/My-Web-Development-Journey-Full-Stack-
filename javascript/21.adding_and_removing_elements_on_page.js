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


// Create a new button element
let alvi = document.createElement("button");
alvi.innerText = "Click ME";

// Select the .box element
let anas = document.querySelector(".box");

// Insert the button before the .box element
anas.insertAdjacentElement("beforebegin", alvi.cloneNode(true));

// Insert the button as the first child of the .box element
anas.insertAdjacentElement("afterbegin", alvi.cloneNode(true));

// Insert the button as the last child of the .box element
anas.insertAdjacentElement("beforeend", alvi.cloneNode(true));

// Insert the button after the .box element
anas.insertAdjacentElement("afterend", alvi.cloneNode(true));
