// DOM (Document Object Model) represents the structure of an HTML document as a tree of objects.
//`````````````````````````````````//
//Select elements by ID
//`````````````````````````````````//


// In the following code snippet, we first locate an HTML element with the ID "mainimg" in the DOM.
let imgobj=document.getElementById("mainimg");
//when we select by id then it returns an Object
// Then, we set the 'src' attribute of the found element to "Assets/Man.png".
imgobj.src="Assets/Man.png";


//`````````````````````````````````//
//Select elements by classname
//`````````````````````````````````//

//when selecting an element by classname it returns an collection


// Retrieve all HTML elements with the class name "oldimg" from the DOM.
let images = document.getElementsByClassName("oldimg");

// Loop through each element found with the class name "oldimg".
for (let i = 0; i < images.length; i++) {
    // Update the 'src' attribute of each element to display the image "Man.png" from the "Assets" folder.
    images[i].src = "Assets/Man.png";
    // Log a message indicating the changes made along with the index of the current element.
    console.log(`changes ${i}`);
}




//`````````````````````````````````//
//Select elements by tagname
//`````````````````````````````````//

// Retrieve all <p> elements from the DOM.
let alvi = document.getElementsByTagName("p");

// Log the collection of <p> elements to the console.
console.log(alvi);

// Modify the text content of the first <p> element to "alvi is a good boy".
alvi[0].innerText = "alvi is a good boy";

