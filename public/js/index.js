'use strict';
$(document).ready(function() {
      initializePage();
})

function ajax(index, name, pts){
    console.log("inside of ajax");
    let url = "/chores/" + index;
    console.log("the URL is: ", url);
    console.log("the ID is: ", index);
    //$.get(url, callback);
    if(name){
        $.post( url, { name: name, pts:pts });
    }else{
        $.post( url, { name: "Guest", pts:pts });
    }
}



function ajax2(index){
    let url = "/chores/done/" + index;
    $.post(url);
}


function ajax3(index){
    let url = "/chores/delete/" + index;
    $.post(url);
}

function googleAnalytics(){
    console.log("the done button has been pressed");
    ga('create', 'UA-114995147-1', 'auto');
    ga("send", "event", 'done', 'click');
}

function initializePage(){
    $(".chore canvas").hide();
    $(".expense_content canvas").hide();
    $(".card").click(function(e){
        e.preventDefault();
        var graphId = $(this).find('canvas').attr("id");
        makeChart(graphId);
        $(this).find('canvas').toggle();
    })
    $(".doneBtn").click(function(e){
        e.preventDefault();
        googleAnalytics();
        e.stopPropagation();
        let idx = $(this).attr('index');
        let id = '#' + idx;
        let name = $("#fbProfilePic").attr('user');
         
        if ($(this).text() == "Done"){
            console.log("the state is ",$(this).attr('state'));
            $(this)
                .text("Re-Add")
                .toggleClass('btn-success btn-danger')
                .attr( "state", "true" )
                .parent().parent().parent().toggleClass('chore_content doneGray');
            
            var buttonToAppend = $("button");
                buttonToAppend
                    .addClass("btn-danger")
                    .text("delete")
                    addId("deleteBtn");

            $(".done").append(buttonToAppend);
            
            if(name == 'Karanbir'){
                let pts = $(id).attr('Karanbir');
                pts++;
                $(id).attr('Karanbir', pts);
                ajax(idx, name, pts);
            } else if(name == 'Alex'){
                let pts = $(id).attr('Alex');
                pts++;
                $(id).attr('Alex', pts);
                ajax(idx, name, pts);
            } else if(name == 'Youxi'){
                let pts = $(id).attr('Youxi');
                pts++;
                $(id).attr('Youxi', pts);
                ajax(idx, name, pts);
            } else if(name == 'All'){
                let pts = $(id).attr('All');
                pts++;
                $(id).attr('All', pts);
                ajax(idx, name, pts);
            }else{
                let pts = $(id).attr('guest');
                pts++;
                $(id).attr('guest', pts);
                ajax(idx, name, pts);
            }
                makeChart($(id).attr('id'));
        }else{
            console.log("the state is ",$(this).attr('state'));
            $(this)
                .text("Done")
                .toggleClass('btn-danger btn-success')
                .attr( "state", "false")
                .parent().parent().parent().toggleClass('doneGray chore_content');
            let index = idx;
            console.log("the index is", index)
            ajax2(index);
        };

        //TODO: REMOVE FROM THE DATABSE!!!
    });

    $('#delete').click(function (e){
        console.log("the deleteBtn has been pressed");
        ajax3(idx);
        $(this).parent().parent().parent().hide();
    });
}

function makeChart(graphId){
var graph = document.getElementById(graphId);
var id = '#' + graphId;
var kb = $(id).attr('Karanbir');
var alex = $(id).attr('Alex');
var allDee = $(id).attr('All');
var youxi = $(id).attr('Youxi');
var guest = $(id).attr('Guest');
var ctx = graph.getContext('2d');
let name = $("#fbProfilePic").attr('user') || "Guest";
let label = [];
let datas = [];
if(name == 'Karanbir' || name == 'Youxi' || name == "All" || name == "Alex"){
    label = ["All", "KB", "Youxi", "Alex"];
    datas = [allDee, kb, youxi, alex];
}else{
    label =["All", "KB", "Youxi", "Alex", name];
    datas = [allDee, kb, youxi, alex, guest];
}

var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: label,
        datasets: [{
            label: '# of Points',
            data: datas,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
}
