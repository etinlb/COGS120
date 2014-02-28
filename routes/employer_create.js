var dorthy = require("../employer_prof.json");
var temp;
var states = require("../states.json")

exports.page1 = function(req, res){
  console.log("EMPLOYER SHIT HAPPEND");
  console.log(states);
  console.log(states['states'])
  res.render('employer_create', {"states":states['states']});
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
    "company_name": req.query.company_name,
    "company_site": req.query.company_site,
    "skills_wanted": req.query.skills_wanted,
    "company_departments": req.query.company_departments,
    "company_industry": req.query.company_industry,
    "min_years": req.query.min_years
  };

  //store it in our wizard of oz database
  console.log(new_employer);
  dorthy["employer_profiles"][temp.name] = new_employer;
  console.log(dorthy);
  req.session.user =  new_employer['name'];
  res.redirect('/employer_home');
}

exports.preview = function(req, res){
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
    "company_name": req.query.company_name,
    "company_site": req.query.company_site,
    "skills_wanted": req.query.skills_wanted,
    "company_departments": req.query.company_departments,
    "company_industry": req.query.company_industry,
    "min_years": req.query.min_years
  };
  //store it in our wizard of oz database
  // dorthy["profiles"].push(new_person);
  dorthy['employer_profiles'][temp.name] = new_employer;
  console.log(new_employer);
  var user = temp.name;
  res.render("employer_preview", {'user':user, 'data': new_employer});
}
