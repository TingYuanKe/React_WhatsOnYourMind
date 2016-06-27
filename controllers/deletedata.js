var Data = require('../models/data');

module.exports = function(req, res, next) {

	Data.findByIdAndRemove(req.params.id, function(err) {
		if (err) throw err;
		console.log('deleted');
    Data.find({}, function(err, datas) {
  		if (err) throw err;
				res.json({listinfos:datas});
  	});
	});
};
