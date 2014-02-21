var data = require('../profile.json')

exports.view = function(req, res){
	console.log("profile data :: ");
	console.log(data['profiles'][req.params.user])
  console.log("session user is " + req.session.user);
  var user = req.params.user; 
	//$("#email").click(function(){console.log("shit worked");});
	res.render('profile' ,{'user':user,  'data':data['profiles'][req.params.user]} );
	
}
  
