var models = require('../models');
exports.view = function(req, res) {
    models.Message
        .find()
        .sort('-date')
        .exec(displayPosts);
    function displayPosts(err, msg_posts){
        var data = {data: msg_posts};
        res.render("index", data);
    }
}
