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
  
