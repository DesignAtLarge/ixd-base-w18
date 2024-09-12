// Nav bar js
var navBar = document.getElementById("nav-bar");
var hamburgerButton = document.getElementById("hamburger-button");
hamburgerButton.onclick = function(e) {
    navBar.style.display = 'block';
}
var navClose = document.getElementById("nav-close");
navClose.onclick = function(e) {
    navBar.style.display = 'none';
}