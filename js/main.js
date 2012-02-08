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
	
	//Find value of Selected Radio Button
	function getSelectedRadio()
	{
		//create radio array
		var radios = document.forms[0].mtopics;
		for(var i=0; i<radios.length; i++)
		{
			if(radios[i].checked)
			{
				mtopicsValue = radios[i].value;
			}
		}
	}
	
	
	function saveMedia()
	{
		//can only store strings. arrays will be converted to strings
		//localStorage.setItem("test", "hello");
		//alert(localStorage.key(0));
		var id 				= Math.floor(Math.random()*10000001);
		
		// run function to find Selected Radio Button
		getSelectedRadio();
		
		//Gather up all our form field values and store in object.
		//Object properties contain array with form label and input value
		var item 			= {};
			item.mtype 		= ["Media Type:",$("mtype").value];
			item.mname 		= ["Media Name:", $("mname").value];
			item.mdate  	= ["Date:", $("mdate").value];
			item.mrating 	= ["Rating:", $("mrating").value];
			//radio button
			item.mtopics 	= ["Topics:", mtopicsValue];
			item.mtags		= ["Tags:", $("mtags").value];
			item.mcomments	= ["Comments:", $("mcomments").value];
		//Save Data to Local Storage: Use Stringify to convert our object to a string
		//json.org
		localStorage.setItem(id, JSON.stringify(item));
		alert("Media Saved");
	}
	
	// Variable defaults
	// store values of dropdown in array
	var mediaGroups = ["-- Choose Media Type--", "book", "document", "music", "movie", "pdf", "doc", "audio", "video"],
		mtopicValue;
	makeMediaTypes();
	
	// Set Link & Submit Click Events
	
	//var getAllMedia = $("getAllMedia");
	//getAllMedia.addEventListener("click", getData);
	//var clearStoredMedia = $("clear");
	//clearStoredMedia.addEventListener("click", clearLocal);
	var save = $("submit");
	save.addEventListener("click", saveMedia);
	
});

