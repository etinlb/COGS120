exports.view = function(req, res){

  // console.log("request is ");
  // console.log(req);
  // console.log("params is");
  // console.log(req.params); 
  var user = req.params.user;
  res.render('home', {'user':user});
}
