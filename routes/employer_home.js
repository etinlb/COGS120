exports.view = function(req, res){
  if(!req.session.user){
    res.redirect('/log_in');
    res.send();
  }
  if(req.query.post_job){
    res.render('employer_home', {'user':user, suc_msg:'1'});
  }
  res.render('employer_home', {'user':user});

}
