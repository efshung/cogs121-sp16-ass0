var models = require('../models');

exports.send = function(req, res) {
        console.log(req.body); // help you see what is inside of req.body
            // your solution here
        var msg = new models.Message(req.body);
        msg.save(afterSaving);

        function afterSaving(err){
            if(err) {console.log(err); res.send(500);}
            res.redirect('/'); // redirect to home
        }
};
