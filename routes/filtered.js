
/*
 * Search in database based on filter function.
 first filter:
 1- <= 10
 2 - <= 20
 3 - <= 30
 4 - <= 1
 5 - > 60
 6 - no pre
 var activity_pool = require('../activities.json');
 */



exports.view = function(request, response){
    response.render('filtered')
  };
  
/*
function(){
    $(".filter_button").click(function(){
         do the function here
	});
}


.filter('favoriteFilter', ['$localStorage', function (localStorage) {

        if(localStorage.getItem('favorites')!=undefined)
        {
            var out = [];
            return out;
        }
        else
        {
            return function (dishes) {
                var old_favorite = JSON.parse($localStorage.get('favorites'));
                var leng = Object.keys(old_favorite).length;
                console.log(leng);

                var out = [];
                for (var i = 0; i < leng; i++) {
                    for (var j = 0; j < dishes.length; j++) {
                        if (dishes[j].id === favorites[i].id)
                            out.push(dishes[j]);
                    }
                }
                return out;
            }
        };
}]);*/