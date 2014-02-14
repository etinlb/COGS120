var data = require('../profile.json')

exports.view = function(req, res){
  
console.log("profile data :: " + req.params.user + " " + data['profiles']['eparreir@ucsd.edu']);
  res.render('profile');

  

}