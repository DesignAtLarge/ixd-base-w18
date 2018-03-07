var Event = require('../models/event');

exports.get = (req, res) => {
    var id = req.params.id;

    if(id !== undefined)
        Event.findById(id, (err, event) => {
            if(err){
                res.status(500).json({
                    message: "error retrieving events",
                    events: undefined
                });
                return;
            }
            res.status(200).json({
                message: "success",
                event : event
            })
        });
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
    var newEvent = new Event();
    
    newEvent.name = req.body.name;
    newEvent.description = req.body.description;
    newEvent.imageURL = req.body.imageURL;
    newEvent.lat = req.body.lat;
    newEvent.long = req.body.long;

    newEvent.save(err => {
        if(err){
            console.error(err);
            res.status(500).json({
                message: "could not create event",
                event: undefined
            });
            return;
        }
        console.log(newEvent)
        res.status(200).json({
            message: "success",
            event: newEvent
        })
    });
    
}

exports.put = (req, res) => {
    res.status(200).json("PUT event, TODO");
}

exports.delete = (req, res) => {
    res.status(200).json("DELETE event, TODO");
}