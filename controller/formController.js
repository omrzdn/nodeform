var bodyparser = require("body-parser");
var mongoose = require("mongoose");

module.exports = function(app) {
  // to configure the body of the request
  
  app.use(bodyparser.json());
  app.get("/form", function(req, res) {
    res.render("form");
  });

  app.post("/form", function(req, res) {
    console.log(req.body);
    var firstname = req.body.firstname;
    var lastname = req.body.lastname;

    console.log(
      "your first name is " + firstname + ", and last name is " + lastname
    );
    res.end("yes");
  });
};
