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

// Wait until DOM is ready
window.addEventListener("DOMContentLoaded", function()
{

	// getElementById Function
	function $(x)
	{
		var theElement = document.getElementById(x);
		return theElement;
	}
	
	// Create select field element
	function makeMediaTypes() 
	{
		//formTag is an array of all form tags
		var formTag = document.getElementsByTagName("form"),
			selectLi = $("select"),
			makeSelect = document.createElement("select");
			makeSelect.setAttribute("id", "mtype");
		//populate with options
		for(var i=0, j=mediaGroups.length; i<j; i++) 
		{
			//create option for each string in array
			var makeOption = document.createElement("option");
			var optText = mediaGroups[i];
			makeOption.setAttribute("value", optText);
			//put text somewhere
			makeOption.innerHTML = optText;
			makeSelect.appendChild(makeOption);
		}
		selectLi.appendChild(makeSelect);
	}
	
	// Variable defaults
	// store values of dropdown in array
	var mediaGroups = ["-- Choose Media Type--", "book", "document", "music", "movie", "pdf", "doc", "audio", "video"];
	makeMediaTypes();
	
	// Set Link & Submit Click Events
	
	var getAllMedia = $("getAllMedia");
	getAllMedia.addEventListener("click", getData);
	var clearStoredMedia = $("clear");
	clearStoredMedia.addEventListener("click", clearLocal);
	var storeMedia = $("storeMedia");
	storeMedia.addEventListener("click", storeData);
	
});

