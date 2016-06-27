var path = require('path');
var Data = require('../models/data');
module.exports = function response(req, res) {
  res.sendFile(path.join(__dirname,'../','index.html'));

};
