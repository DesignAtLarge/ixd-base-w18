'use strict';

$(document).ready(function() {
      initializePage();
})



function initializePage(){
    $(".expense_content canvas").hide();
    
    $(".card").click(function(e){
        e.preventDefault();
        var graphId = $(this).find('canvas').attr("id");
        makeChart(graphId);
        $(this).find('canvas').toggle();
    })
    
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

function ajax(name, pts){


}
