var Data = require('../models/data');

module.exports = function(req, res, next) {
	Data.find({}, function(err, datas) {
		if (err) throw err;
		res.json({
			listinfos: datas
		});
	});
};
