/*
 * GET home page.
 */
var now = new Date();	
var oneHourLater = new Date();
oneHourLater.setHours(now.getHours() + 1);

Date.prototype.addHours = function(h){
    var copiedDate = new Date();
    copiedDate.setTime(this.getTime() + (h*60*60*1000)); 
    return copiedDate;
}

exports.view = function(req, res){
	res.render('timeSelect', {
		'currentTime':( ("0"+now.getHours()).slice(-2) + ":" +("0"+now.getMinutes()).slice(-2)),
		'nextTime':( ("0"+oneHourLater.getHours()).slice(-2) + ":" +("0"+oneHourLater.getMinutes()).slice(-2))
	});
};
