var data = require('../profile.json')
var user;
exports.view = function(req, res){
	console.log("profile data :: ");
	console.log(data['profiles'][req.params.user])
  console.log("session user is " + req.session.user);
  user = req.params.user; 

  
	res.render('profile', {'user':user,  'data':data['profiles'][req.params.user]} );
	
}


exports.edit = function(req, res) 
{

	console.log( "\n\n IN EDIT BIOTCH \n\n");
	console.log(req.body);
	console.log(user);

	
	var set = req.body;
	var name;
	for (name in set) 
	{
		console.log("key = " + name + " val = " + set[name]);
		console.log(data['profiles'][user][name]);	
		if ( set[name].length > 0 )
		data['profiles'][user][name] = set[name];
	}
	//data['profiles'][user][]
	res.redirect("/profile/" + user );
}
