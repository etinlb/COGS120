var dorthy = require('../profile.json');

exports.view = function(req, res){
  res.render('log_in');
}

exports.authenticate = function(req, res){
  // var user = req.query.username;
  // var user = req.query.password;
  // console.log(req.query);
  // console.log(req.query['email']);
  // console.log(dorthy);
  console.log(dorthy['profiles']);
  console.log(dorthy['profiles'][req.query.email]);
  var user_info = dorthy['profiles'][req.query.email];
  if (user_info){
    console.log('SUCCESS MOTHER FUCKER!');
    if(user_info['password'] == req.query.password){
      res.redirect('/home/' + user_info['name'] );
    }
    else{
      res.redirect('/log_in');
    }
  }else{
    console.log("SHIT BE TRIPPIN, TYPE A REAL USER!");
    res.redirect('/log_in');
  }
  // console.log(user_info);
  // if (user_info['password'] != req.query.password){
  //   res.render('/log_in');
  // }else{
  //   res.render('/home/' + user_info['name'], user_info );
  // }
  // res.redirect('/home/' + user_info['name'] );
  // res.rendirct('/home/' +, user_info);
}
