var data = require('../employer_prof.json');
var user;
exports.view = function(req, res){
    if(!req.session.user){
        res.redirect('/log_in');
        res.send();
    }
	console.log("profile data :: ");
    console.log("session user is " + req.session.user);
    // user = req.params.user; 
  
	res.render('employer_profile' ,{'data':data['employer_profiles'][req.session.user]} );
	
}

function projectClick(e) {
    // prevent the page from reloading 
    log("clicked on email");
    e.preventDefault();
    // In an event handler, $(this) refers to 
    // the object that triggered the event 
}

exports.edit = function(req, res) 
{

    console.log( "\n\n IN EDIT EMPLOYER BIOTCH \n\n");
    console.log(req.body);
    console.log(req.session.user);
    var user = req.session.user;

    
    var set = req.body;
    var name;
    for (name in set) 
    {
        console.log("key = " + name + " val = " + set[name]);
        console.log(data['employer_profiles'][user][name]);  
        if ( set[name].length > 0 )
        data['employer_profiles'][user][name] = set[name];
    }
    //data['profiles'][user][]
    res.redirect("/employer_profile");
}