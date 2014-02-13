exports.view = function(req, res){
  var pollId = req.params.user;
  console.log(pollId);
  res.render('home');
}
