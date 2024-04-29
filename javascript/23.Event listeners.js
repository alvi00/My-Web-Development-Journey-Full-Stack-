//`````````````````````````````````//
//Adding Event listerners
//There are a lot of other evnet listeners known it from mdn
//``````````````````````````````````//
// Select the first <button> element in the document
let btn = document.querySelector("button");

// Define a function named sayhello that logs "Hello" to the console
let sayhello = () => {
    console.log("Hello");
};

// Define a function named hru that logs "How are You" to the console
let hru = () => {
    console.log("How are You");
};

// Add an event listener to the button for the "click" event,
// which will call the sayhello function when the button is clicked
btn.addEventListener("click", sayhello);

// Add an event listener to the button for the "mouseenter" event,
// which will call the hru function when the mouse enters the button
btn.addEventListener("mouseenter", hru);


//```````````````````````````````//
//adding p as a event listener
//```````````````````````````````//
// Select the <p> element in the document
let para = document.querySelector("p");

// Define a function named alvi that sets the text of the <p> element to "I am clicked"
let alvi = () => {
    para.innerText = "I am clicked";
};

// Define a function named anas that sets the text of the <p> element to "THIS IS A PARA"
let anas = () => {
    para.innerText = "THIS IS A PARA";
};

// Add an event listener to the <p> element for the "mouseenter" event,
// which will call the alvi function when the mouse enters the <p> element
para.addEventListener("mouseenter", alvi);

// Add an event listener to the <p> element for the "mouseleave" event,
// which will call the anas function when the mouse leaves the <p> element
para.addEventListener("mouseleave", anas);
