console.log("info script loaded");

$(".info").click(loadInformation);

function loadInformation(response){
	response.preventDefault();
	console.log("Info Button has been clicked");
	var div = document.createElement("div");
	div.style.width = "100%";
	div.style.height = "100%";
	div.style.background = "rgba(0,0,0,0.7)";
	div.style.color = "white";
	div.style.position = "absolute";
	div.style.top = "0";
	div.style.zIndex = "100";
	div.setAttribute("class","info-panel");
	var htmlString = loadContents(response);
	div.appendChild(htmlString);

	$("body").append(div);
	$(".close-info").click(closeInformation);
}

function loadContents(res){
	console.log(res);
	var header = document.createElement("div");
	header.innerHTML = '<a href="#"><button class="btn btn-lg btn-primary close-info" style="float:right;"><i class="fa fa-times-circle-o fa-2x" style="color:#fff;"></i></button></a>';
	var description = document.createElement("div");
	description.setAttribute("class","content");
	description.innerHTML = "Lorem Ipsum dolores.."
	var content = document.createElement("div");
	content.append(header);
	content.append(description);
	return content
}

function closeInformation(event){
	event.preventDefault();
	console.log("Info panel has been closed");
	$(".info-panel").remove();
}