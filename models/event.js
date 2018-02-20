var mongoose = require('mongoose');

module.exports = mongoose.model('event', {
    name : {type : string, default: '', required: true},
    description : {type : string, default: '', required: true},
    lat  : {type : number, default: 0, required: true},
    long : {type : number, default: 0, required: true}
});