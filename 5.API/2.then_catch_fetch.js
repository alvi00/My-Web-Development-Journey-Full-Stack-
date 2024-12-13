// URL of the API endpoint to fetch cat facts
let url = `https://catfact.ninja/fact`;

// Fetching data from the API using the fetch() function
fetch(url)
  .then((resolve) => {
    // The first .then() block handles the resolved promise from the fetch() function
    // The resolve parameter represents the Response object returned by the API
    // We convert the Response object to JSON format and return the result
    return resolve.json();
  })
  .then((data)=>{
    // The second .then() block handles the JSON data received from the API
    // We log the fetched cat fact to the console
    console.log(data.fact);
    // We make another fetch request to the same URL to fetch another cat fact
    return fetch(url);
  })
  .then((resolve)=>{
    // The third .then() block handles the resolved promise from the second fetch request
    // We convert the Response object to JSON format and return the result
    return resolve.json();
  })
  .then((data)=>{
    // The fourth .then() block handles the JSON data received from the second fetch request
    // We log the fetched cat fact to the console
    console.log(data.fact);
  })
  .catch((reject) => {
    // The .catch() block handles any errors that occur during the fetch operation
    // We log the error to the console
    console.log(reject);
  });
