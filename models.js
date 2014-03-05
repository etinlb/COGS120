
var Mongoose = require('mongoose');


var JobSchema = new Mongoose.Schema({
  "title": String,
  "Where": String,
  "description":String,
  "email": String,
  "category": String
});

var JobhunterSchema = new Mongoose.Schema({
  "name": String,
  "email": String,
  "password": String,
  "password2": String,
  "phone": String,
  "street": String,
  "state": String,
  "zip": String,
  "commute_dist": String,
  "relocate_dist": String,
  "skills": String,
  "interests": String,
  "profession": String,
  "yrs_experience" : String,
  "id": String,
  "field":String
});

var EmployerSchema = new Mongoose.Schema({
  "name": String,
  "email": String,
  "password": String,
  "password2": String,
  "phone": String,
  "street": String,
  "state": String,
  "zip": String,
  "company_name": String,
  "skills_wanted": String,
  "company_departments": String,
  "company_industry": String,
  "min_years": String,
});


exports.Job = Mongoose.model('Job', JobSchema);
exports.Jobhunter = Mongoose.model('Jobhunter', JobhunterSchema);
exports.Employer = Mongoose.model('Employer', EmployerSchema);


