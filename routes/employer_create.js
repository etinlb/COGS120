var dorthy = require("../employer_prof.json");

var temp;
exports.page1 = function(req, res){
  res.render('employer_create');
  console.log("EMPLOYER SHIT HAPPEND");
  res.render("employer_create");
}
exports.page2 = function(req, res){
  console.log("EMPLOYER SHIT HAPPEND");
  console.log(req.query);
  temp = req.query;
  console.log(temp);
  res.render('employer_create_ii');
}

exports.add = function(req, res){
  console.log(temp);
  console.log("trying to add the temp value");
  var new_employer = {
    "name": temp.name,
    "email": temp.email,
    "password": temp.password,
    "phone": temp.phone,
    "street": temp.street,
    "state": temp.state,
    "zip": temp.zip,
    "company_name": temp.company_name,
    "company_site": temp.company_site,
    "skills_wanted": req.query.skills_wanted,
    "company_traits": req.query.company_traits,
    "company_industry": req.query.company_industry,
    "commute_dist": req.query.commute_dist,
    "min_years": req.query.min_years
  };

  //store it in our wizard of oz database
  console.log(new_employer);
  dorthy["employer_profiles"][temp.email] = new_employer;
  console.log(dorthy);
  res.redirect('/employer_home/' + new_employer['name']);
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
    "company_name": temp.company_name,
    "company_site": temp.company_site,
    "skills_wanted": req.query.skills_wanted,
    "company_traits": req.query.company_traits,
    "company_industry": req.query.company_industry,
    "min_years": req.query.min_years
  };
  //store it in our wizard of oz database
  // dorthy["profiles"].push(new_person);
  res.render("employer_preview", new_employer);
}
