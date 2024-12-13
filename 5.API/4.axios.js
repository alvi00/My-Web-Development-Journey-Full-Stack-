// Define the URL for the Dog CEO API, which provides a random dog image.
let url = `https://dog.ceo/api/breeds/image/random`;

// Select the <img> element in the HTML with the ID "image" and store it in a variable.
let img = document.querySelector("#image");

// Select the <button> element in the HTML and store it in a variable.
let button = document.querySelector("button");

// Define an asynchronous function named "alvi" that will fetch a random dog image from the API.
async function alvi() {
  try {
    // Send a GET request to the API endpoint defined in the 'url' variable and wait for the response.
    let res = await axios.get(url);
    
    // Extract the URL of the random dog image from the response data.
    let gil = (res.data.message);
    
    // Set the 'src' attribute of the <img> element to the URL of the random dog image.
    img.setAttribute("src", gil);
  } catch (err) {
    // If an error occurs during the API request, log "Sorry" to the console.
    console.log("Sorry");
  }
}

// Add an event listener to the <button> element so that when it is clicked, the 'alvi' function is called.
button.addEventListener("click", alvi);
