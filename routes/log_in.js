var dorthy = require('../profile.json');
var dorthy_emps = require('../employer_prof.json');

exports.view = function(req, res){
  if(req.query.err){
    res.render('log_in', {err_msg:req.query.err});
  }
  res.render('log_in');
}


exports.authenticate = function(req, res){
  var post = req.body;
  console.log(post);
  var user_info = dorthy['profiles'][post.user];
  if (user_info){
    console.log('SUCCESS MOFO!');
    if(user_info['password'] == post.password){
      console.log(user_info['name']);
      req.session.user = user_info['name'];
      res.redirect('/home');
      res.send();
      console.log("I can go this far");
    }
    else{
      var err_msg = "Wrong password Mother fucker";
      res.redirect('/log_in?err=' + err_msg);
      res.send();
    }
  }else{
    var employer_info = dorthy_emps['employer_profiles'][post.user];
  }


  if (employer_info){
    console.log('SUCCESS MOFO!');
    if(employer_info['password'] == post.password){
      console.log(employer_info['name']);
      req.session.user = employer_info['name'];
      res.redirect('/employer_home');
      res.send();
    }
    else{
      var err_msg = "Wrong password Mother fucker";
      res.redirect('/log_in?err=' + err_msg);
      res.send();
    }
  }else{
    console.log("BAD, TYPE A REAL USER!");
    var err_msg = "Couldn't find a user, are you a real person?"
    res.redirect('/log_in?err=' + err_msg);
    res.send();
  }
}
exports.logout = function(req, res){
  delete req.session.user;
  res.redirect('/');
}


