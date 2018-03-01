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
        e.preventDefault();
        let idx = $(this).attr('index');
        var thisCard = $(this);
        
        $('#bought-confirmation').click(function(e){
            e.preventDefault();
            if(!$('#price').val()){
                alert("Enter a number for expensed price!");
            }else{
                console.log("in the ELSE, about to delete");
                let money = $("#price").val();
                let name = $('#fbProfilePic').attr('user');
                ajax(idx, name, money);  
                window.location = "expenseHomepage";
            }

        })
    });
}

function ajax(idx, name, money){
    console.log("inside of ajax");
    let url = "/expense/edit/" + idx;
    console.log("The name is", name);
    console.log("The money is", money);
    console.log("The idx is", idx);
    //$.get(url, callback);
    if(name){
        console.log("posting to url");
        $.post( url, { name: name, money:money });
    }else{
        $.post( url, { name: "Guest", money:money });
    }

}
