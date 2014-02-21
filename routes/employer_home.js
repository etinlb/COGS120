exports.view = function(req, res){
  var user = req.params.user;
  if(req.query.post_job){
    res.render('employer_home', {'user':user, suc_msg:'1'});
  }
  res.render('employer_home', {'user':user});

}
