var bodyparser = require('body-parser');
var mongoose = require('mongoose');

module.exports = function(app){

app.get('/form', function(req, res){

  res.render('form');
});

app.post('/form', function(req, res){

  var firstname = req.body.firstname;
  var lastname = req.body.lastname;

  console.log('your first name is ' + firstname +', and last name is ' + lastname);
  res.end('yes');
});

app.delete('/test', function(res, req){

});

};
