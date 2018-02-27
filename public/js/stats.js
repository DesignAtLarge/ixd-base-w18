var ctx = document.getElementById("myChart").getContext('2d');
var kb = $("#myChart").attr('Karanbir');
var alex = $("#myChart").attr('Alex');
var allDee = $("#myChart").attr('All');
var youxi = $("#myChart").attr('Youxi');
var guest = $("#myChart").attr('guest'); //this will only hold first element in users (so might not be guest)
//var ctx = graph.getContext('2d');
let name = $("#fbProfilePic").attr('user') || "Guest";
let label = ["All", "KB", "Youxi", "Alex"];
let datas = [allDee, kb, youxi, alex];
if(name != 'Karanbir' && name != 'Youxi' && name != "All" && name != "Alex"){
    label.push(name);
    datas.push(guest);
}

var myChart = new Chart(ctx, {
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


