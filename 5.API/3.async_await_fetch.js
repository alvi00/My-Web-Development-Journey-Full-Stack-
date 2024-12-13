// URL of the API endpoint to fetch cat facts
let url = `https://catfact.ninja/fact`;

// Asynchronous function named "alvi" to fetch cat facts from the API
async function alvi() {
  try {
    // Fetching data from the API using the fetch() function
    let res = await fetch(url);
    // Extracting JSON data from the response using the json() method
    let data = await res.json();
    // Logging the fetched cat fact to the console
    console.log(data.fact);

    // Making another fetch request to the same URL to fetch another cat fact
    let res2 = await fetch(url);
    // Extracting JSON data from the response using the json() method
    let data2 = await res2.json();
    // Logging the fetched cat fact to the console
    console.log(data2.fact);
  } catch (err) {
    // Handling errors that may occur during the fetch operation
    console.log("Sorry");
  }
}

// Calling the "alvi" function to initiate the fetching process
alvi();
