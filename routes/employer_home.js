exports.view = function(req, res){
  var user = req.params.user;
  res.render('employer_home', {'user':user});

}
