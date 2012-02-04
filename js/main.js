//
//    Full Sail University
//    Visual Frameworks
//    Monica Peters
//    Web App Part 1
//    Week 1 Project 1
//    Due Thursday Feb. 2nd 2012
//


function myEvent() {
	var newPara = document.createElement("p");
	var msg = document.createTextNode("hello World");
	newPara.appendChild(msg);
	document.body.appendChild(newPara);
}

function styleField() {
	var field = document.getElementById("mname");
	field.style.backgroundColor = "#c0c0c0";
}

function unstyleField() {
	var field = document.getElementById("mname");
	field.style.backgroundColor = "";
}

