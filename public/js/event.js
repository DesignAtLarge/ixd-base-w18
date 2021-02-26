function clickHeart(){
    var img1 = "../images/heart_outline.png";
   var img2 = "../images/pink_heart.png";
   
   var imgElement = document.getElementById('clickHeart');

   imgElement.src = (imgElement.src === img1)? img2 : img1;
}