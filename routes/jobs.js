var dorthy = require("../jobs.json")

exports.view = function(req, res){
  console.log("WE ARE SEEING THE JOBS AT THE MOMENT!");
  var user = req.params.user;
  console.log(dorthy);
  console.log(dorthy['jobs']);
  res.render("jobs", {'user': user, "jobs":dorthy['jobs']});
}