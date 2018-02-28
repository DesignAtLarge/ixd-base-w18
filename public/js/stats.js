var ctx = document.getElementById("myChart_expense").getContext('2d');
var kb = $("#myChart_expense").attr('Karanbir');
var alex = $("#myChart_expense").attr('Alex');
var allDee = $("#myChart_expense").attr('All');
var youxi = $("#myChart_expense").attr('Youxi');
var guest = $("#myChart_expense").attr('guest'); //this will only hold first element in users (so might not be guest)
//var ctx = graph.getContext('2d');
let name = $("#fbProfilePic").attr('user') || "Guest";
let label = ["All", "KB", "Youxi", "Alex"];
let datas = [allDee, kb, youxi, alex];
if(name != 'Karanbir' && name != 'Youxi' && name != "All" && name != "Alex"){
    label.push(name);
    datas.push(guest);
}

var myChart_expense = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: label,
        datasets: [{
            label: 'Amount spent in $',
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

var ctx2 = document.getElementById("myChart_chore").getContext('2d');
var kb2 = $("#myChart_chore").attr('Karanbir');
var alex2 = $("#myChart_chore").attr('Alex');
var allDee2 = $("#myChart_chore").attr('All');
var youxi2 = $("#myChart_chore").attr('Youxi');
var guest2 = $("#myChart_chore").attr('guest'); //this will only hold first element in users (so might not be guest)
//var ctx = graph.getContext('2d');
let name2 = $("#fbProfilePic").attr('user') || "Guest";
let label2 = ["All", "KB", "Youxi", "Alex"];
let datas2 = [allDee2, kb2, youxi2, alex2];
if(name2 != 'Karanbir' && name2 != 'Youxi' && name2 != "All" && name2 != "Alex"){
    label.push(name2);
    datas.push(guest2);
}

var myChart_chore = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: label2,
        datasets: [{
            label: 'Amount spent in $',
            data: datas2,
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
