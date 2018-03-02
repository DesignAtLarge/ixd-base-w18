var Event = require('../models/event');

exports.get = (req, res) => {
    var id = req.params.id;

    if(id !== undefined)
        Event.findById(id, (err, event) => {});
    else
        Event.find({}, (err, events) => {
            if(err){
                res.status(500).json({
                    message: "error retrieving events",
                    events: undefined
                });
                return;
            }
            res.status(200).json({
                message: "success",
                events : events
            })
        });
}

exports.post = (req, res) => {
    res.status(200).json("POST event, TODO");
}

exports.put = (req, res) => {
    res.status(200).json("PUT event, TODO");
}

exports.delete = (req, res) => {
    res.status(200).json("DELETE event, TODO");
}