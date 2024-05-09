//````````````````````````````````````//
//       Event Bubbling               //
//````````````````````````````````````//


// Selecting the first div element in the document
let div = document.querySelector("div");

// Selecting the first ul element in the document
let ul = document.querySelector("ul");

// Selecting all elements with the class "alvi" and storing them in an array-like NodeList
let li = document.querySelectorAll(".alvi");

// Adding an event listener to the div element for the 'click' event
div.addEventListener("click", function(event) {
    // Preventing event propagation to higher elements
    event.stopPropagation();
    // Logging a message indicating that the div was clicked
    console.log("div was clicked");
});

// Adding an event listener to the ul element for the 'click' event
ul.addEventListener("click", function(event) {
    // Preventing event propagation to higher elements
    event.stopPropagation();
    // Logging a message indicating that the ul was clicked
    console.log("ul was clicked");
});

// Iterating over each li element in the li NodeList
for (lis of li) {
    // Adding an event listener to each li element for the 'click' event
    lis.addEventListener("click", function(event) {
        // Preventing event propagation to higher elements
        event.stopPropagation();
        // Logging a message indicating that the li was clicked
        console.log("li was clicked");
    });
}



//````````````````````````````````````//
//       Event Bubbling               //
//````````````````````````````````````//
