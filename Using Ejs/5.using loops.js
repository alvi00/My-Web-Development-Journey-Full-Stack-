const express=require("express");
const app=express();
const path=require("path");
const port=8080;
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
app.listen(port,()=>{
    console.log(`${port} is listening`);
});

app.get("/",(req,res)=>{
    res.render("home.ejs");
});

app.get("/insta/:username",(req,res)=>{
    let username=req.params.username;
    let arr=["Alvi","Sami","Sakib","Takib"];
    res.render("insta.ejs",{username,arr});
})




//this is the ejs file

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1>Your username is <%= username %></h1>
    <h2>People who follow you</h2>
    <ul>
      <% for(let i of arr) {%> 
        <li><%= i %></li>  
      <% } %>
    </ul>
  </body>
</html>
