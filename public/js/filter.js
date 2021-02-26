

/*
 * Search in database based on filter function.
 
1st
1 - <=10/ 2 - <=20/ 3 - <=30/ 4 - <=60 / 5 - >60/ 6 - no pre
2nd
"a" -Exercise
"b" -Music
"c" -Creative
"d" -Productivity
"e" -Art
"f" -Nature
"g" -Cooking
"h" -Relaxation
"i" -Learning
3st
in 
out
no
Category
minTime
Tags
*/

var activities = require('../activites.json');

var selectTime =  window.localStorage.getItem('currentId');
var selectCategory =   window.localStorage.getItem('selectedCategory');
var selectTag =   window.localStorage.getItem('currentSelect');
console.log(selectTime);

function filterByTime(time){
    const results = activities.activites.filter(element => element.minTime <= time);
    return results
}