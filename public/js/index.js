function clubHeart(id) {
    var image = document.getElementById(id);

    if (image.src.match("../images/heart_outline.png")) {
        image.src = "../images/pink_heart.png";
    }
    else {
        image.src = "../images/heart_outline.png";
    }
}
