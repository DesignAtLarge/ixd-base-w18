var User = require('../models/user');

exports.get = (req, res) => {

    var id = req.params.id;
    
    User.findById(id, (err, user) => {
        if(err)
            res.status(500).json({
                message: "could not get user",
                user   : undefined
            });
        res.status(200).json({
            message: "user found",
            user : user
        });
    });
}

exports.post = (req, res) => {
    console.log(req.body);

    var user = new User();
    user.idToken = req.body.idToken;
    user.name = req.body.name;
    user.history = req.body.history;

    user.save( err => {
        if(err)
            res.status(500).json({
                message : "could not create user",
                user    : undefined
            });
        
        res.status(200).json({
            message : "user created",
            user : user
        });
    });
    
}

exports.put = (req, res) => {
    res.status(200).json("PUT user, TODO");
}

exports.delete = (req, res) => {
    res.status(200).json("DELETE user, TODO");
}