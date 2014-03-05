var dorthy = require("../jobs.json")
var employer_profs = require("../employer_prof.json")

exports.view = function(req, res){
  console.log("WE ARE SEEING THE JOBS AT THE MOMENT!");
  var user = req.params.user;
  console.log(dorthy);
  console.log(dorthy['jobs']);
  res.render("jobs", {'user': user, "jobs":dorthy['jobs'], 'little_but':false});
}

exports.view2 = function(req, res){
  console.log("WE ARE SEEING THE JOBS2 AT THE MOMENT!");
  var user = req.params.user;
  console.log(dorthy);
  console.log(dorthy['jobs']);
  res.render("jobs", {'user': user, "jobs":dorthy['jobs'], 'little_but':true});
}

exports.post = function(req, res){
  console.log("to post job");
  console.log("user is " + req.params.user)
  var post = req.body;
  //get data on employer
  var current_user = employer_profs['employer_profiles'][req.params.user];
  console.log(current_user);
  console.log(current_user['name']);

  // console.log(employer_profs);
  // console.log(employer_profs['employer_profiles']);
  // console.log(req.params);

  var email;
  if(post.email == ""){
    email = current_user['email'];
  }else{
    email = post.email;
  }
  var id = dorthy['jobs'].length + 1;
  console.log("id is " + id);
  var new_job = {
    "title": post.title,
    "where": current_user['company_name'],
    "email": email,
    "description":post.description,
    "id":id,
    "category":post.field
  }
  // console.log(new_job);
  dorthy['jobs'].push(new_job);
  console.log(dorthy);
  res.redirect('/employer_home/' +req.params.user + '?post_job=1');
  // res.redirect("employer_home", {'user':req.params.user ,'suc_msg':'1'})
}