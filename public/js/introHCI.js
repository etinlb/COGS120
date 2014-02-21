'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */

function initializePage() {
	// add any functionality and listeners you want here
	$("#email").click(profileEditClicked);
	$("#phone").click(profileEditClicked);
	$("#profession").click(profileEditClicked);
	$("#skills").click(profileEditClicked);
	$("#interests").click(profileEditClicked);
	$("#resume").click(profileEditClicked);
	$("#field").click(profileEditClicked);
	$("#yrs_experience").click(profileEditClicked);
}

function profileEditClicked(e){
	//console.log(this.id);
    var containingDetail = $(this).closest(".profile_details");
    var description = $(containingDetail).find(".row");
    var htmlForm = "<div class='row'><div class='col-xs-8'><div class='form'><form class='editBar' name='email-form' id='" + this.id + "'><input class='editText' type='text' placeholder='Change email' name='edit' required='required'></input></div></div><div class='col-xs-4'><button type='submit' class='btn' id='submit'>Submit</button></form></div></div>";

    if (description.length == 0) {
      containingDetail.append(htmlForm);
      	$(".editBar").submit(changeRequest);
    }
    else {console.log("worked");}

  }

 function changeRequest(e, res)
 {
 		console.log("in change request this.id = " + this.id);
	e.preventDefault();
 	console.log(document.getElementsByTagName("input")[0].value);
 	var post_json = document.getElementsByTagName("input")[0].value;
 	var json;
 	var str;
 	switch ( this.id )
 	{
 		case "email":
 			json = { "email" :post_json };
 			break;
 		case "phone": 			
 			json = { "phone" :post_json };
 			break;
 		case "profession":
 			json = { "profession" :post_json };
 			break;
 		case "skills": 			
 			json = { "skills" :post_json };
 			break;
  		case "interests":
 			json = { "interests" :post_json };
 			break;
 		case "resume": 			
 			json = { "resume" :post_json };
 			break;
 		case "field":
 			json = { "field" :post_json };
 			break;
 		case "yrs_experience":
 			json = { "yrs_experience" :post_json };
 			break;
 	}
 			
	$.post("/profile/bullshit", json , doneFunc);

 }

function doneFunc()
{
	location.reload();
	console.log('done editing and reloading with no error checks');

}
