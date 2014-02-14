exports.view = function(req, res){
  var pollId = req.params.user;
  console.log(pollId);
  console.log("testing where is profile");
  res.render('home');
}
