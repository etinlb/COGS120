var dorthy = require("../jobs.json")

exports.view = function(req, res){
  console.log("WE ARE SEEING THE JOBS AT THE MOMENT!");
  
  res.render("jobs", dorthy);
}