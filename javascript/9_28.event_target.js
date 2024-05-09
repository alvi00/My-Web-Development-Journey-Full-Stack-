// Selecting the <ul> element in the document
let ul = document.querySelector("ul");

// Adding an event listener to the <ul> element for the 'click' event
ul.addEventListener("click", function(event) {
    // Logging the target of the click event
    console.log(event.target);
    // Logging the nodeName (HTML tag name) of the target element
    console.log(event.target.nodeName);
});
