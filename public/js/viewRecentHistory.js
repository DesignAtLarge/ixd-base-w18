$(".recentPin").click(showAllDetails);

function showAllDetails(res){
	console.log(res);
	var div = document.createElement("div");
	div.style.width = "90%";
	div.style.height = "75%";
	div.style.position = "absolute";
	div.style.top = "12.5%";
	div.style.left = "5%";
	div.style.zIndex = "1000";
	div.style.margin = "auto";
	div.style.boxShadow = "1px 1px 5px 1px rgba(0,0,0,0.5)";
	div.style.borderRadius = "7px";
	div.setAttribute("class","bg-light pin-info-panel");
	var htmlString = loadContents(res.currentTarget);
	div.appendChild(htmlString);

	$("body").append(div);
	$(".close-info").click(closeInformation);
}

function closeInformation(event){
	event.preventDefault();
	console.log("Info panel has been closed");
	$(".pin-info-panel").remove();
}

function loadContents(res){

	/*
	The content for this panel should be retrieved from a consolidated database.
	The image, pin name, description, date uploaded/visited, tags, the stats for the tags,
	all these details should be retrieved and displayed.
	As placeholder, I'm currently displaying hardcoded material.
	Based on if the user uploaded the pin, an edit function should be made available.
	*/

	var pinName = res.children[0].innerText;
	var date = res.children[1].innerText;
	var pinDesc = res.lastElementChild.innerText;

	//close
	var header = document.createElement("div");
	header.style.textAlign = "right";
	header.style.width = "100%";
	header.innerHTML = '<a href="#"><button class="btn btn-sm btn-primary close-info"><i class="fa fa-times-circle-o fa-2x" style="color:#ccc;"></i></button></a>';
	
	//details
	var content = document.createElement("div");

	//pin-image
	var pinImg = document.createElement("img");
	pinImg.src = "static/img/grey.jpg"; //should be relevant image url retrieved from json file
	pinImg.height = "150";
	pinImg.setAttribute("class","card-img-top img-responsive");
	pinImg.style.float = "left";
	pinImg.style.margin = "0 5%";
	pinImg.style.width = "150px";
	pinImg.style.overflow = "hidden";

	var name = document.createElement("h6");
	name.style.textAlign = "left";
	name.textContent = pinName;

	var dateVisitedUploaded = document.createElement("p");
	dateVisitedUploaded.style.textAlign = "left";
	if (res.firstElementChild.children.length == 0){
		dateVisitedUploaded.textContent = "Visited on "+date;
	} else {
		dateVisitedUploaded.textContent = "Uploaded on "+date;
	}

	var pinTags = document.createElement("p");
	pinTags.style.textAlign = "left";
	pinTags.textContent = "#Tag1, #Tag2, #Tag3, #Tag4, #Tag5";

	content.append(pinImg);
	content.append(name);
	content.append(dateVisitedUploaded);
	content.append(pinTags);

	var container = document.createElement("div");
	container.style.padding="0";
	container.setAttribute("class","container");
	container.append(header);
	container.append(content);

	//recycling variables here

	var content = document.createElement("div");
	content.style.textAlign = "center";
	content.style.padding = "0 5%"

	var detailedDescription = document.createElement("p");
	detailedDescription.style.textAlign = "left";
	detailedDescription.textContent = pinDesc;

	content.append(detailedDescription);

	if (res.firstElementChild.children.length!=0){
		var link = document.createElement("a");
		link.href = "#";
		var editButton = document.createElement("button");
		editButton.setAttribute("class","btn btn-lg btn-primary active btn-login edit");
		editButton.textContent = "EDIT";
		editButton.setAttribute("disabled",true);
		link.append(editButton);
		content.append(link);
		if(editButton.disabled==true){
			content.append(document.createElement("br"));
			content.append("This event is over and cannot be edited");
		}
	}

	container.append(content);

	return container
}

$(".edit").click(function(res){
	res.preventDefault();
	//add code for editing
});