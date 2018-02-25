var description = require('../public/json/description.json');

exports.view = (req, res) => {
    res.render("spider",{"description":description.spider});
}