function search(idKey, myArray){
    for (var i=0; i < myArray.length; i++) {
        if (myArray[i].id === idKey) {
            return myArray[i];
        }
    }
}

function deleteHeart(dId) {
    var image = document.getElementById(dId);
    image.parentNode.parentNode.parentNode.removeChild(image.parentNode.parentNode);

}
