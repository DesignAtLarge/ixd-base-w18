function clickHeart() {
    var image = document.getElementById('clickHeart');

    if (image.src.match("images/heart_outline.png")) {
        image.src = "images/pink_heart.png";
    }
    else {
        image.src = "images/heart_outline.png";
    }
}