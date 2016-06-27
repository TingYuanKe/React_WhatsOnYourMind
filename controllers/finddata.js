var Data = require('../models/data');

module.exports =function(req,res,next){
    var keyword = req.body.keyword;
    console.log(keyword);
    Data.find({title:keyword},function(err,datas){
        if(err)throw err;
        res.json({listinfos:datas});

    });
};
