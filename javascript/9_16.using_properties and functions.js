//``````````````````````````````````````//
//uses of innertext, innerhtml,textcontent
//```````````````````````````````````````//


// Select the first <p> element in the document.
let alvi=document.querySelector("p");
console.log(alvi.innerHTML);
//shows text of the webpage with tags like bold tag or anchor tag
console.log(alvi.innerText);
//shows the text that is visible in the webpage
console.log(alvi.textContent);
//shows the text how we wrote the text in the index.html file in vs code

//manupulating texts
// Update the visible text content of the selected <p> element to "I am Iron Nigga".
alvi.innerText = "I am Iron Nigga";

// Update the HTML content of the selected <p> element to "I am Iron <b>Nigga</b>".
alvi.innerHTML = "I am Iron <b>Nigga</b>";


// Select the first <h1> element in the document.
let alvi = document.querySelector("h1");

// Update the HTML content of the <h1> element to wrap its existing content with an underline tag.
alvi.innerHTML = `<u>${alvi.innerHTML}</u>`;

