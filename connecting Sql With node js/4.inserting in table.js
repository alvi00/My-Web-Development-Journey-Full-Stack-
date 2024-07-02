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




//this is how you can insert a user data in the table
//this is only for one user

// SQL query to insert data into the users table with placeholders for values
let q = "INSERT INTO users (id, username, email, password) VALUES (?, ?, ?, ?)";

// Array of values to be inserted into the users table
let alvi = ["1", "alvi", "Alvi@123", "12"];

try {
  // Executing the SQL query with the provided values
  connection.query(q, alvi, (err, result) => {
    if (err) throw err; // Throwing an error if the query fails
    console.log(result); // Logging the result of the query
  });
} catch (err) {
  // Catching any errors that occur in the try block
  console.log(err);
}

// Ending the database connection
connection.end();



//to enter data for multiple users
//this is how you can enter datas for multiple user in a table

const mysql=require('mysql2');

const connection = mysql.createConnection({
  host:'localhost',
  user:'root',
  database:'alvi',
  password:'alvi1234hello'
});
let q="insert into users (id,username,email,password) values ?";
let alvi=[["2","alvi2","Alvi@1232","122"],
        ["3","alvi3","Alvi@1233","123"],
        ["4","alvi4","Alvi@1234","124"]];
try{
connection.query(q,[alvi],(err,result)=>{
  if(err) throw err;
   console.log(result);
 });
}catch(err){
console.log(err);
}

connection.end();

