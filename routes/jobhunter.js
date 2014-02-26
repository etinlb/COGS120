var dorthy = require("../profile.json")

exports.view = function(req, res){
  console.log("WE ARE SEEING THE JOBS AT THE MOMENT!");
  console.log(dorthy);
  console.log(dorthy['profiles']);
  res.render("jobhunters", {"jobhunters":dorthy['profiles']});
}