var models = require('../models');
exports.view = function(req, res) {
    models.Message
        .find()
        .sort('-date')
        .exec(renderMessage);
    function renderMessage(err, message){
        if(err) console.log(err);
        res.render("index", { 'data': message});
    }
}
