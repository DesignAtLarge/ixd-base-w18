var json = JSON.parse(saved_events);

function search(idKey, myArray){
    for (var i=0; i < myArray.length; i++) {
        if (myArray[i].id === idKey) {
            return myArray[i];
        }
    }
}

function deleteHeart(dId, json) {
    var image = document.getElementById(dId);
    var position = search(dId, json);
    json.splice(position, 1);
    image.parentNode.parentNode.parentNode.removeChild(image.parentNode.parentNode);

}
