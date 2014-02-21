var dorthy = require("../profile.json")

exports.view = function(req, res){
  console.log("WE ARE SEEING THE JOBS AT THE MOMENT!");
  var user = req.params.user;
  console.log(dorthy);
  console.log(dorthy['profiles']);
  res.render("jobhunters", {'user': user, "jobhunters":dorthy['profiles']});
}