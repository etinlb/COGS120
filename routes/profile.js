var data = require('../profile.json')

exports.view = function(req, res){
  
console.log("profile data :: ");
console.log(data['profiles'][req.params.user])
  res.render('profile' , data['profiles'][req.params.user] );
  

}