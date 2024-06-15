const express=require("express");
const app=express();
const port =8080;
app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.listen(port,()=>{
    console.log(`${port} is listenting`);
});

app.get("/",(req,res)=>{
    res.send("Hello");
});


app.get("/register",(req,res)=>{
    let { name, password } = req.query;
    console.log(name); 
    res.send("Get request");
});

app.post("/register",(req,res)=>{
    let { name, password } = req.body;
    console.log(name); 
    res.send("Post request");
});


//Here is the html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>get and post</title>
</head>
<body>
<h3>Get request</h3>
    <form action="http://localhost:8080/register" method="get">
        <input type="text" name="name" placeholder="Enter you name">
        <input type="password" name="password" placeholder="Enter you password">
        <button>Submit</button>
    </form>
<hr>
    <h3>Post request</h3>
    <form action="http://localhost:8080/register" method="post">
        <input type="text" name="name" placeholder="Enter you name">
        <input type="password" name="password" placeholder="Enter you password">
        <button>Submit</button>
    </form>

</body>
</html>
