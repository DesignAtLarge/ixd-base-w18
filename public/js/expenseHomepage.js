'use strict';

$(document).ready(function() {
      initializePage();
})

function initializePage(){
    $(".expense_content canvas").hide();

    $(".reviveBtn").click(function (e){
        if ($(this).text() == "Revive"){
            $(this).text("Done");
            $(this).toggleClass('reviveBtn doneBtn');
            $(this).toggleClass('btn-danger btn-success');
        }
    });

    $(".boughtBtn").click(function(e){
        e.preventDefault;
        var thisCard = $(this);
        $('#bought-confirmation').click(function(e){
            if(!$('#price').val()){
                alert("Enter a number for expensed price!")
            }else{
                thisCard.parent().parent().parent().hide();}
        })
    });
}

function yeet(){
    let money = $("#price").val();
    console.log("this is that yeet yeet", money);
    //update the person who is signed in expense field.

    //get the user

    //ajax call (name, cost){//add cost to current cost}
}
