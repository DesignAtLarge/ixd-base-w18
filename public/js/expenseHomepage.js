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
    let name = $('#fbProfilePic').attr('user');
    ajax(name, money);
}


function ajax(name, money){
    console.log("inside of ajax");
    let url = "/expense/edit";
    console.log("The name is", name);
    console.log("The money is", money);
    //$.get(url, callback);
    if(name){
        $.post( url, { name: name, money:money });
    }else{
        $.post( url, { name: "Guest", money:money });
    }
}
