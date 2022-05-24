const express = require("express")
const ejs = require("ejs");
const expressLayouts = require("express-ejs-layouts")

const app = express()

app.set("view engine","ejs" )
app.use(express.static("public"));
app.use(expressLayouts);

app.get('/', function(req, res) {
  res.render("home", 
  );
});

app.get("/about", function(req, res) {
  res.render("about", 

  );
});

app.get("/works", function(req, res) {
  res.render("works", 
);
});





app.listen(3000, ()=> {
    console.log("server is running on port 3000")
})