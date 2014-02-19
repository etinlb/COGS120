var dorthy = require('../employer_prof.json');

exports.view = function(req, res){
  var user = req.params.user;
  res.render('employer_profile', {'user':user, 'data': dorthy['employer_profiles'][req.params.user]});
}
