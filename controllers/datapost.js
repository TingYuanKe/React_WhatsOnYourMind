var Data = require('../models/data');

module.exports =function(req,res,next){
    console.log(req.body);
    var data = new Data({
        title:req.body.title,
        content:req.body.content,
        mode:req.body.mode
    });

    data.save(function(err){
        if(err)throw err;

        Data.find({},function(err,datas){
            if(err)throw err;
            res.json({listinfos:datas});
        });
    });
};
