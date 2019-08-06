module.exports = function(app){

app.get('/form', function(req, res){

  res.render('form');
});

app.get('/dashboard', function(req, res){

  res.render('dashboard');
});

app.delete('/test', function(res, req){

});

};
