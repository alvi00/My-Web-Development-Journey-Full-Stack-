

// create table users (
//     id varchar(50) primary key,
//     username varchar(50) unique,
//     email varchar(50) unique not null,
//     password varchar(50) not null
//     );
    
    
//this is in alvi.sql by this the tables can be created
//as it is a very big code
//so it is not write to write the code in node js
//like here

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
