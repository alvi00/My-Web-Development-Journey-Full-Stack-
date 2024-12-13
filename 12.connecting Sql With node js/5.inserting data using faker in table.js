// Importing the faker library
const { faker } = require('@faker-js/faker');

// Importing the mysql2 library
const mysql = require('mysql2');

// Creating a connection to the MySQL database
const connection = mysql.createConnection({
  host: 'localhost',      // Database host
  user: 'root',           // Database user
  database: 'alvi',       // Database name
  password: 'alvi1234hello' // Database password
});

// Function to create a random user
let createRandomUser = () => {
  return [
    faker.string.uuid(),    // Generating a random UUID for id
    faker.internet.userName(), // Generating a random username
    faker.internet.email(),   // Generating a random email address
    faker.internet.password() // Generating a random password
  ];
}

// Array to hold the random user data
let data = [];
for (let i = 1; i <= 100; i++) {
  data.push(createRandomUser()); // Adding 100 random users to the data array
}

// SQL query to insert multiple rows into the fakeusers table
let q = "INSERT INTO fakeusers (id, username, email, password) VALUES ?";

try {
  // Executing the SQL query with the data array
  connection.query(q, [data], (err, result) => {
    if (err) throw err; // Throwing an error if the query fails
    console.log(result); // Logging the result of the query
  });
} catch (err) {
  console.log(err); // Logging any errors that occur
}

// Ending the database connection
connection.end();
