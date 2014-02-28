exports.view = function(req, res){
  if(req.session.user){
    res.render('home');
  }else{
    res.redirect('/log_in');
  }
}
