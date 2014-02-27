var dorthy = require("../profile.json");
var temp;
var states = require("../states.json")

exports.hunter_page1 = function(req, res){
  console.log("OTHER SHIT HAPPEND");
  console.log(states);
  console.log(states['states'])
  res.render("create_profile", {"states":states['states']});
}

exports.hunter_page2 = function(req, res){
  console.log("SOME SHIT HAPPEND");
  console.log(req.query);
  temp = req.query;
  console.log(temp);
  res.render("create_profile_ii");
}

exports.add = function(req, res){
  console.log(temp);
  console.log("trying to add the temp value");
  console.log(dorthy);
  var new_person = {
      "name": temp.name,
      "email": temp.email,
      "password": temp.password,
      "phone": temp.phone,
      "city": temp.city,
      "state": temp.state,
      "zip": temp.zip,
      "commute_dist": temp.commute_dist,
      "relocate_dist": temp.relocate_dist,
      "skills": req.query.skills,
      "interests": req.query.interests,
      "profession": req.query.profession,
      "yrs_experience": req.query.yrs_experience
  };

  console.log(new_person);
  //store it in our wizard of oz database
  dorthy["profiles"][temp.name] = new_person;
  console.log(dorthy);
  // res.render("profile", new_person);
  res.redirect('/home/' + new_person['name'])
}

exports.preview = function(req, res){
  console.log(temp);
  console.log("trying to add the temp value");
  var new_person = {
    "name": temp.name,
    "email": temp.email,
    "password": temp.password,
    "phone": temp.phone,
    "city": temp.city,
    "state": temp.state,
    "zip": temp.zip,
    "commute_dist": temp.commute_dist,
    "relocate_dist": temp.relocate_dist,
    "skills": req.query.skills,
    "interests": req.query.interests,
    "profession": req.query.profession,
    "yrs_experience" : req.query.yrs_experience
  };

  //store it in our wizard of oz database
  // dorthy["profiles"].push(new_person);
  dorthy["profiles"][temp.name] = new_person;
  console.log(new_person);
  var user = temp.name;
  res.render("profile_preview", {'user':user, 'data': new_person });
}


