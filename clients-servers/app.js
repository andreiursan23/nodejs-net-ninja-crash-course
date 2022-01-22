const express = require("express");

// set up express app
const app = express();

// register view engine - ejs
app.set("view engine", "ejs");

// listen for req
app.listen(3000);

app.use((req, res) => {
  console.log("new req made");
  console.log("host: ", req.hostname);
  console.log("path: ", req.path);
  console.log("method: ", req.method);
  console.log("---------------------");
})

app.get("/", (req, res) => {
  // this method sets up the req header automatically
  // res.send("<p>Home page</p>");
  // res.sendFile("./views/index.html", { root: __dirname });
  const blogs = [
    {title: "Phenomenal programmer learns back-end", snippet:"Lorem ipsum dolor sit amet consectetur"},
    {title: "Front-end interviews", snippet:"Lorem ipsum dolor sit amet consectetur"},
    {title: "NextJS is the next big thing", snippet:"Lorem ipsum dolor sit amet consectetur"},
  ]

  res.render("index", { title: "Home", blogs });
});

app.get("/about", (req, res) => {
  // res.send("<p>About page</p>");
  // res.sendFile("./views/about.html", { root: __dirname });

  res.render("about", { title: "About" });
});

// redirects
// app.get("/about-us", (req, res) => {
//   res.redirect("/about");
// });

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create new Blog" });
});

// 404 -- trebuie sa fie mereu ultimul din lista de routare, e ca un default cand folosim switch si case
app.use((req, res) => {
  // res.status(404).sendFile("./views/404.html", { root: __dirname });
  res.status(404).render("404", { title: "404" });
});
