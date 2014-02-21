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
}

function profileEditClicked(e){
	console.log(this.id);
    var containingDetail = $(this).closest(".profile_details");
    var description = $(containingDetail).find(".row");

    if (description.length == 0) {
      containingDetail.append("<div class='row'><div class='col-xs-8'><div class='form'><form class='editBar' name='email-form'><input class='editText' type='text' placeholder='Change email' name='edit' required='required'></input></div></div><div class='col-xs-4'><button type='submit' class='btn' id='submit'>Submit</button></form></div></div>");
      	$(".editBar").submit(changeEmail);
    }
    else {console.log("worked");}

  }

 function changeEmail(e, res)
 {
	e.preventDefault();
	//$.get("/profile/erik" + "/edit", doneFunc);
 	//console.log(document.getElementsByTagName("input")[0].value);

 	//document.getElementBy("").style.display = 'none';
 }

function doneFunc()
{
	console.log('done');
}
