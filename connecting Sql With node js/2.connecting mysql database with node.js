//at first npm i mysql2
// Importing the mysql2 library
const mysql = require('mysql2');

//this is one way of using mysql queries 
//like here show tables


// Creating a connection to the MySQL database
const connection = mysql.createConnection({
  host: 'localhost', // Database host
  user: 'root',      // Database user
  database: 'alvi',  // Database name
  password: 'alvi1234hello' // Database password
});

let q="SHOW TABLES";
try {
  // Executing a query to show all tables in the database
  connection.query(q, (err, result) => {
    if (err) throw err; // Throwing an error if the query fails
    console.log(result); // Logging the result of the query
  });
} catch (err) {
  // Catching any errors that occur in the try block
  console.log(err);
}

// Ending the database connection
connection.end();


//another way is in comment prompt write mysql -u root -p
//then password
//then write the commands as we did in mysql workbench


//another 3rd way is 
//make a file like alvi.sql
//write mysql -u root -p
//then password
//then use database which one you like use alvi or use user
//then the sourse means the file name
//so write source alvi.sql


//this is the 3 ways you can use nodejs with sql