var express = require("express");
var formController = require("./controller/formController");
var app = express();

//setup Template Engine

app.set("view engine", "ejs");

//static files

app.use(express.static("./public"));

//fire controller

formController(app);

//listen to port

app.listen(9000, () => {
  console.log("You are now listining to port 9000");
});
