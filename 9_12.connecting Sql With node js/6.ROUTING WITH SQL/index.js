const { log } = require("console");
const express = require("express");
const mysql = require('mysql2');
const methodOverride = require("method-override");
const app = express();
const port = 8080;
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const { faker } = require('@faker-js/faker'); // Correctly importing faker

app.listen(port, () => {
  console.log(`${port} is listening`);
});

app.use(methodOverride("_method"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public/js")));
app.use(express.static(path.join(__dirname, "public/css")));
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'user',
  password: 'alvi1234hello'
});

let createRandomUser = () => {
  return [
    faker.datatype.uuid(),    // Generating a random UUID for id
    faker.internet.userName(), // Generating a random username
    faker.internet.email(),   // Generating a random email address
    faker.internet.password() // Generating a random password
  ];
};

//this is part is commented as the data has been saved in the database

// let data = [];
// for (let i = 1; i <= 100; i++) {
//   data.push(createRandomUser());
// }

// let q = "INSERT INTO fakeuser (id, username, email, password) VALUES ?";

// try {
//   connection.query(q, [data], (err, result) => {
//     if (err) throw err;
//     console.log(result);
//   });
// } catch (err) {
//   console.log(err);
// }

// connection.end();


app.get("/", (req, res) => {
    
  let q =`select count(*) from fakeuser`;

try {
   connection.query(q,(err, result) => {
    if (err) throw err;
   
    res.render("home.ejs",{result});
  });
} catch (err) {
  console.log(err);
  res.send("There are some problem in the database");
}
  });


app.get("/user",(req,res)=>{

  let q=`select *from fakeuser`;

  try {
    connection.query(q,(err, result) => {
     if (err) throw err;
   
     res.render("showuser.ejs",{result});
   });
 } catch (err) {
   console.log(err);
   res.send("There are some problem in the database");
 }


});

app.get("/user/edit/:id",(req,res)=>{
  let { id } = req.params;
  console.log(id);
  let q=`select *from fakeuser where id='${id}'`;
  try {
    connection.query(q,(err, result) => {
     if (err) throw err;
     let user=result[0];
     res.render("edit.ejs",{user});
   });
 } catch (err) {
   console.log(err);
   res.send("There are some problem in the database");
 }
});


app.patch("/user/edit/:id",(req,res)=>{
  let { id } = req.params;
  let {username:newusername,password:newpassword}=req.body;
  let q=`select *from fakeuser where id='${id}'`;
  try {
    connection.query(q,(err, result) => {
     if (err) throw err;
     let user=result[0];
     if(user.password===newpassword){

      let q2=`update fakeuser set username='${newusername}' where id='${id}'`;
      try {
        connection.query(q2,(err, result) => {
         if (err) throw err;
         res.redirect("/user");
       });
     } catch (err) {
       console.log(err);
       res.send("There are some problem in the database");
     }

     }else{
      res.send("Wrong password");
     }

   });
 } catch (err) {
   console.log(err);
   res.send("There are some problem in the database");
 }
});

