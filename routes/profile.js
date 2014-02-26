var data = require('../profile.json')
var user;
exports.view = function(req, res){
	if(!req.session.user){
		res.redirect('/log_in');
		res.send();
	}
	console.log("profile data :: ");
  console.log("session user is " + req.session.user);
  // user = req.session.user; 

  
	res.render('profile', {'data':data['profiles'][req.session.user]} );
	
}


exports.edit = function(req, res) 
{

	console.log( "\n\n IN EDIT BIOTCH \n\n");
	console.log(req.body);
	console.log(req.session.user);
	var user = req.session.user;

	
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
	res.redirect("/profile" );
}
