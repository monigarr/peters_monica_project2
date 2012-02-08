//
//    Full Sail University
//    Visual Frameworks
//    Monica Peters
//    Web App Part 1
//    Week 1 Project 1
//    Due Thursday Feb. 2nd 2012
//

// most  onblur, onclick, ondblclick
// onfocus, onmousedown, onmouseup, onmouseover, onmouseout

function styleField() {
	var field = document.getElementById("mname");
	field.style.backgroundColor = "#c0c0c0";
}

function unstyleField() {
	var field = document.getElementById("mname");
	field.style.backgroundColor = "";
}

function storeMedia(id) {
	var mtype = document.getElementById("mtype").value;
	var mname = document.getElementById("mname").value;
	var mdate = document.getElementById("mdate").value;
	var mrating = document.getElementById("mrating").value;
	var mtopic = document.getElementById("mtopic").value;
	var mtags = document.getElementById("mtags").value;
	var mcomments = document.getElementById("mcomments").value;
	localStorage.setMedia("appMediaType", mtype);
	localStorage.setMedia("appMediaName", mname);
	localStorage.setMedia("appMediaDate", mdate);
	localStorage.setMedia("appMediaRating", mrating);
	localStorage.setMedia("appMediaTopic", mtopic);
	localStorage.setMedia("appMediaTags", mtags);
	localStorage.setMedia("appMediaComments", mcomments);
}

function getAllMedia() {
	if (localStorage.getMedia("appMediaName")) {
		var mediaType = localStorage.getMedia("appMediaType");
		var mediaName = localStorage.getMedia("appMediaName");
		var mediaDate = localStorage.getMedia("appMediaDate");
		var mediaRating = localStorage.getMedia("appMediaRating");
		var mediaTopic = localStorage.getMedia("appMediaTopic");
		var mediaTags = localStorage.getMedia("appMediaTags");
		var mediaComments = localStorage.getMedia("appMediaComments");
		
}

// clear local storage
function clearLocal() {
	clear;
	localStorage.clear();
	return false;
}

/*// wimba sample
// define vars first
// then write function
//getElementById Function
// function is called $ to select elements
function $(x) {
	var theElement = document.getElementById(x);
	return theElement;
}

/*
// vars to target html elements
// functions with conditional statements to do the work.
// event listeners to run the functions

// Define Vars
var pw = $('password');
var cpw = $('confirm');
var check = $('submit');

// check to see if password is filled out, if so then make confirm enabled.
function checkpw() {
	console.log("pw checked");
	// use .value to look at what the user typed in the field
	if(pw.value != "") {
		cpw.removeAttribute("disabled", "disabled");
	}else {
		cpw.setAttribute("disabled", "disabled");
	}
}

/* 
//compare passwords
// on submit, check to see if password field match
// event data to stop certain default events from happening
//function comparePasswords(e){
function comparePasswords() {
	if(pw.value === cpw.value){
		alert("The passwords match!");
	}else{
		alert("The passwords do not match. Try again");
	}
}

//apply event listeners to elements to run the functions that do the work
pw.addEventListener("blur", checkpw);
check.addEventListener("click", comparePasswords);
*/
