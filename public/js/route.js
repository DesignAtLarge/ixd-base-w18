'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
    
	initializePage();
    changeTitle();
})


/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Javascript connected!");
    $("#endStop").click(addToFavs);
    getStops();
    $(".dropbtn").click(dropDownButt);
    $("#notifybutton").click(notifyDriver);
    $(".stopp").click(changeStop);
    $(".trackstop").click(clickStop);
    $(".tracknotify").click(clickNotify);
}

function changeTitle(){
    var u = window.location.href;
    console.log("this is u --> " + u);

    var newU = u.substr(u.indexOf('bus=')+4);
    console.log("this is newU --> " + newU);
    
    var finalU = newU.split('%20').join(' ');
    console.log("this is finalU --> " + finalU);

    if (finalU.indexOf('_expid') > -1) {
        finalU = finalU.substring(0,finalU.indexOf("&"));
    }
    $("#routes-title").text(finalU);

}

function changeStop(e){
    e.preventDefault();
    var st = $(this).closest('.stopp').attr('id');
    $("#innerButt").text(st);
}

function addToFavs(e) {
    e.preventDefault();
    var u = window.location.href;
    var newU = u.substr(u.indexOf('bus=')+4);
    var finalU = newU.split('%20').join(' ');
    var q = "/fav?bus=" +finalU;
    $.get(q);
}

function getStops(){
    var u = window.location.href;
    var newU = u.substr(u.indexOf('bus=')+4);
    var finalU = newU.split('%20').join('');
    var q = "stops?stop=" + finalU;
    $.get(q);
}


function search() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("search-p");
    filter = input.value.toUpperCase();
    ul = document.getElementById("routes-ul");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

$("#search-p").focus(function() {
    $("#routes-ul").fadeIn();
}).blur(function() {
    $("#routes-ul").fadeOut();
})

function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

/* Close/hide the sidenav */
function closeNav() {
    document.getElementById("myNav").style.width = "0";
}



function openNav2() {
    document.getElementById("mySidenav2").style.width = "100%";
}

/* Close/hide the sidenav */
function closeNav2() {
    document.getElementById("mySidenav2").style.width = "0";
}

function updateTextInput(val) {
    document.getElementById('textInput').value=val;
}

function dropDownButt() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function notifyDriver(e) {
    e.preventDefault();
    $("#routes-title").click(function(){
        event.stopPropagation();
    });
    alert("Stop Requested and Status Pending!");
}


var clicked = false;

function setLocally(){
    /*if(clicked == false){
        $(".favourite_icon").click(function(){
        $(this).css({"color": "yellow"})
        });
        clicked = true;
    }else {
        $(".favourite_icon").click(function(){
        $(this).css({"color": "grey"})
        });
        clicked = false;
    }*/
    if(clicked == false){
        $(document).on('click', ".favourite_icon", function() {
        $(this).css({"color": "yellow"})        
        });
        clicked=true;
    }else{
        
        $(document).on('click', ".favourite_icon", function() {
        $(this).css({"color": "grey"})        
        });
        clicked=false;
    }

}


$(document).on('click', "a.tabclick", function() {
    var liId = $(this).parent("li").attr("id");
    alert(liId);        
});


/*function clickChat (e) {
    e.preventDefault();
    console.log("clickChat gets called");
    ga('create', 'UA-114625153-1', 'auto');
    ga('send', 'event', 'chat', 'click');
    _gaq.push(['_trackSocial', 'facebook', 'comment']);
}*/

/*
window.fbAsyncInit = function () {
    FB.Event.subscribe('comment.create', function(targetURL){
    ga('send','social', 'Facebook', 'comment', targetURL);
});
};
*/

function clickStop(e) {
    e.preventDefault();
    console.log("clickStop gets called");
    ga('create', 'UA-114625153-1', 'auto');
    ga('send', 'event', 'trackstop', 'click');
}

function clickNotify(e) {
    e.preventDefault();
    console.log("clickNotify gets called");
    ga('create', 'UA-114625153-1', 'auto');
    ga('send', 'event', 'notifydriver', 'click');
}
