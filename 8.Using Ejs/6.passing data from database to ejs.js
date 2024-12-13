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
    res.render("home.ejs");s
});

app.get("/insta/:username",(req,res)=>{
    const data=require("./data.json");
    let username=req.params.username;
    let user=data[username];
    res.render("insta.ejs",{user});
})



//```````````````````````````````//
//This is ejs file//
//`````````````````````````````//

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
        img{
            height: 100px;
            width: 100px;
        }
    </style>
  </head>
  <body>
    <h1>Your username is <%=user.name%></h1>
    <h1>Your followes are <%= user.followers %></h1>
    <h1>Your are following <%= user.following %></h1>
    <hr>
    <h1>Your posts are</h1>
    <% for(let i of user.posts) { %>
     <img src="<%= i.image %>" alt="">
     <h1>likes <%= i.likes %></h1>
     <h1>comments <%= i.comments %></h1>
    <% } %>
  </body>
</html>


//````````````````````````````````````//

//This is data.json file

//````````````````````````````````````//
{
  "cats": {
    "name": "cats",
    "followers": 25000,
    "following": 5,
    "posts": [
      {
        "image": "https://plus.unsplash.com/premium_photo-1677545182067-26ac518ef64f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2F0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        "likes": 200,
        "comments": 17
      },
      {
        "image": "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        "likes": 312,
        "comments": 19
      },
      {
        "image": "https://images.unsplash.com/photo-1577023311546-cdc07a8454d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2F0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        "likes": 1065,
        "comments": 200
      }
    ]
  },
  "dogs": {
    "name": "dogs",
    "followers": 75000,
    "following": 150,
    "posts": [
      {
        "image": "https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZG9nc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        "likes": 3000,
        "comments": 41
      },
      {
        "image": "https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGRvZ3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        "likes": 2500,
        "comments": 32
      },
      {
        "image": "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRvZ3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        "likes": 500,
        "comments": 6
      }
    ]
  }
}
