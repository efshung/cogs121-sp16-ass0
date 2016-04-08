var models = require('../models');

exports.send = function(req, res) {
        console.log(req.body); // help you see what is inside of req.body
            // your solution here
        var msg;
        var date = new Date();
        if( req.body.email && req.body.content){
            msg = new models.Message({
                'email': req.body.email,
                'content': req.body.content,
                'created': date.getDate()
            });
            msg.save(afterSaving);
        }

        function afterSaving(err){
            if(err) {console.log(err); res.send(500);}
            res.redirect('/'); // redirect to home
        }
};
