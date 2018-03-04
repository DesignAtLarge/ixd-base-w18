var mongoose = require('mongoose');

module.exports = mongoose.model('event', {
    name : {type : String, default: '', required: true},
    description : {type : String, default: '', required: true},
    imageURL : {type: String, default: '', required: true},
    lat  : {type : Number, default: 0, required: true},
    long : {type : Number, default: 0, required: true},
    tags : {type: [], default: [], required: true}
});