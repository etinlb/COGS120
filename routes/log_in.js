var dorthy = require('../profile.json');

exports.view = function(req, res){
  res.render('log_in');
}

exports.authenticate = function(req, res){
  console.log(dorthy['profiles']);
  console.log(dorthy['profiles'][req.query.user]);
  var user_info = dorthy['profiles'][req.query.user];
  if (user_info){
    console.log('SUCCESS MOFO!');
    if(user_info['password'] == req.query.password){
      res.redirect('/home/' + user_info['name'] );
    }
    else{
      res.redirect('/log_in');
    }
  }else{
    console.log("BAD, TYPE A REAL USER!");
    res.redirect('/log_in');
  }

}
