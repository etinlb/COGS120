exports.view = function(req, res){

  var user = req.params.user;
  res.render('home', {'user':user});
}
