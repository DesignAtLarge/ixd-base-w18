var mongoose = require('mongoose');

module.exports = mongoose.model('user', {
    idToken : {type : String, required: true},
    name    : {type : String, required: true},
    history : {type: [], required: true}
});