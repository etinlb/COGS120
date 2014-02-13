
var dorthy = require("../profile.json");
var temp;

exports.hunter_page1 = function(req, res){
  console.log("OTHER SHIT HAPPEND");
  res.render("create_profile");
}

exports.hunter_page2 = function(req, res){
  console.log("SOME SHIT HAPPEND");
  console.log(req.query);
  temp = req.query;
  console.log(temp);
  res.render("create_profile_2");
}

exports.add = function(req, res){
  console.log(temp);
  console.log("trying to add the temp value");
  var new_person = {
    "name": temp.name,
    "email": temp.email,
    "password": temp.password,
    "phone": temp.phone,
    "street": temp.street,
    "state": temp.state,
    "zip": temp.zip,
    "commute_dist": temp.commute_dist,
    "relocate_dist": temp.relocate_dist,
    "skills": req.query.skills,
    "interests": req.query.interests,
    "profession": req.query.profession,
    "commute_dist": req.query.commute_dist,
    "relocate_dist": req.query.relocate_dist
  };
  //store it in our wizard of oz database
  dorthy["profiles"].push(new_person);
  res.render("profile", new_person);
}
exports.preview = function(req, res){
  console.log(temp);
  console.log("trying to add the temp value");
  var new_person = {
    "name": temp.name,
    "email": temp.email,
    "password": temp.password,
    "phone": temp.phone,
    "street": temp.street,
    "state": temp.state,
    "zip": temp.zip,
    "commute_dist": temp.commute_dist,
    "relocate_dist": temp.relocate_dist,
    "skills": req.query.skills,
    "interests": req.query.interests,
    "profession": req.query.profession,
    "commute_dist": req.query.commute_dist,
    "relocate_dist": req.query.relocate_dist
  };
  //store it in our wizard of oz database
  // dorthy["profiles"].push(new_person);
  res.render("profile_preview", new_person);
}