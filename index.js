//install method overload from npm
//install method overload from npm

const { log } = require("console");
const express = require("express");
const methodOverride = require("method-override");
const app = express();
const port = 8080;
const path = require("path");
const { v4: uuidv4 } = require("uuid");

app.listen(port, () => {
  console.log(`${port} is listenting`);
});

app.use(methodOverride("_method"));
// Setting view engine to EJS (Embedded JavaScript) for rendering dynamic content
app.set("view engine", "ejs");

// Serving static files (CSS and JavaScript) from respective directories to the ejs file
app.use(express.static(path.join(__dirname, "public/js"))); // Serving JS files from '/public/js' directory
app.use(express.static(path.join(__dirname, "public/css"))); // Serving CSS files from '/public/css' directory

// Setting the directory for views (EJS templates)
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let arr = [
  {
    id: uuidv4(),
    username: "Alvi",
    content: "I am alvi",
  },
  {
    id: uuidv4(),
    username: "Anas",
    content: "I am foodie",
  },
  {
    id: uuidv4(),
    username: "Suuu",
    content: "I am messi fan",
  },
];
app.get("/posts", (req, res) => {
  res.render("index.ejs", { arr });
});

app.get("/posts/new", (req, res) => {
  res.render("new_post.ejs");
});
app.post("/posts", (req, res) => {
  console.log(req.body);
  let { username, content } = req.body;
  let id = uuidv4();
  arr.push({ id, username, content });
  res.redirect("/posts");
});
app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    let a = arr.find((item) => item.id === id);
    console.log(a);
    res.render("show_post.ejs", { a });
  });

app.get("/posts/:id/edits", (req, res) => {
  let { id } = req.params;
  let a = arr.find((item) => item.id === id);
  console.log(a);
  res.render("edit_post.ejs", { a });
});

app.patch("/posts/:id/edits", (req, res) => {
  let { id } = req.params;
  let newcontent = req.body.content;
  let a = arr.find((item) => item.id === id);
  a.content = newcontent;
  res.redirect("/posts");
});

app.delete("/posts/:id/delete",(req,res)=>{
    let { id } = req.params;
    arr = arr.filter((item) => item.id !== id);
    res.redirect("/posts");
});