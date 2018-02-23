var User = require('../models/user');

exports.get = (req, res) => {

    var id = req.params.id;
    
    User.find({idToken : id}, (err, user) => {
        if(err)
            res.status(500).json({
                message: "error retrieving user",
                user   : undefined
            });
        res.status(200).json({
            message: "success",
            user : user
        });
    });
}

exports.post = (req, res) => {
    console.log(req.body);

    var newUser = new User();
    newUser.idToken = req.body.idToken;
    newUser.name = req.body.name;
    //newUser.history = [];

    User.find({idToken : newUser.idToken}, (err, user) => {
        // if(err)
        //     res.status(500).json({
        //         message: "error retrieving user",
        //         user   : undefined
        //     });
        if(user.length > 0)
            res.status(200).json({
                message: "user already exists",
                user : undefined
            });
        else
            newUser.save( err => {
                console.log(newUser);
                // if(err)
                //     console.error(err);
                //     res.status(500).json({
                //         message : "could not create user",
                //         user    : undefined
                //     });
                
                res.status(200).json({
                    message : "success",
                    user : newUser
                });
            });
    });
}

exports.put = (req, res) => {
    res.status(200).json("PUT user, TODO");
}

exports.delete = (req, res) => {
    res.status(200).json("DELETE user, TODO");
}