// Define a function named savetodatabase that takes data as a parameter and returns a Promise object
function savetodatabase(data) {
    return new Promise((resolve, reject) => {
      // Generate a random number between 1 and 10 to simulate the success rate
      let n = Math.floor(Math.random() * 10) + 1;
      // If the random number is greater than 5, resolve the Promise with the message "Internet is great"
      if (n > 5) {
        resolve("Internet is great");
      } else {
        // If the random number is 5 or less, reject the Promise with the message "Internet is fucked"
        reject("Internet is fucked");
      }
    });
  }
  
  // Call the savetodatabase function with the data "hello"
  savetodatabase("hello")
  // Chain a then() method to handle the resolved Promise (success case)
  .then((resolve) => {
      // Log a success message to the console when the first data is saved
      console.log("1st one is done");
      // Log the resolved value to the console
      console.log(resolve);
      // Call the savetodatabase function again with the data "gilfoil"
      return savetodatabase("gilfoil");
  })
  // Chain another then() method to handle the resolved Promise (success case)
  .then((resolve) => {
      // Log a success message to the console when the second data is saved
      console.log("2nd one is done");
      // Log the resolved value to the console
      console.log(resolve);
      // Call the savetodatabase function again with the data "dinesh"
      return savetodatabase("dinesh");
  })
  // Chain another then() method to handle the resolved Promise (success case)
  .then((resolve) => {
      // Log a success message to the console when the third data is saved
      console.log("3rd one is done");
      // Log the resolved value to the console
      console.log(resolve);
  })
  // Chain a catch() method to handle the rejected Promise (failure case)
  .catch((reject) => {
      // Log a failure message to the console when any data could not be saved
      console.log("sorry rejected");
      // Log the rejected reason to the console
      console.log(reject);
  });
  







//```````````````````````````````````````````````````````//
//Example
//````````````````````````````````````````````````````````//
// Select the first <h1> element in the document and assign it to the variable h1
let h1 = document.querySelector("h1");

// Define a function named changeColor that takes color and delay as parameters and returns a Promise
function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        // Set a timeout to execute the following code after the specified delay
        setTimeout(() => {
            // Simulate a failure condition (e.g., if color is "black")
            if (color === "black") {
                // If the color is "black", reject the Promise with an appropriate error message
                reject("Failed to change color. Color cannot be black.");
            } else {
                // If the color is not "black", change the color of the h1 element to the specified color
                h1.style.color = color;
                // Resolve the Promise with a success message
                resolve("Color is changed");
            }
        }, delay);
    });
}

// Call the changeColor function with the color "red" and a delay of 1000 milliseconds
chanecolor("red", 1000)
    // Chain a then() method to handle the resolved Promise (success case)
    .then(() => {
        // Log a success message to the console when the color is changed to red
        console.log("Red is done");
        // Call the changeColor function again with the color "yellow" and a delay of 1000 milliseconds
        return changeColor("yellow", 1000);
    })
    // Chain another then() method to handle the resolved Promise (success case)
    .then(() => {
        // Log a success message to the console when the color is changed to yellow
        console.log("Yellow is done");
        // Call the changeColor function again with the color "blue" and a delay of 1000 milliseconds
        return changeColor("blue", 1000);
    })
    // Chain another then() method to handle the resolved Promise (success case)
    .then(() => {
        // Log a success message to the console when the color is changed to blue
        console.log("Blue is done");
        // Call the changeColor function again with the color "black" and a delay of 1000 milliseconds
        return changeColor("black", 1000);
    })
    // Chain another then() method to handle the resolved Promise (success case)
    .then(() => {
        // Log a success message to the console when the color is changed to black
        console.log("Black is done");
    })
    // Chain a catch() method to handle any rejected Promise (failure case)
    .catch(() => {
        // Log a failure message to the console if any color change operation failed
        console.log("The color is not changed");
    });
