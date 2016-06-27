var mongoose  = require('mongoose');
mongoose.connect('mongodb://prelude0390:1233@ds013221.mlab.com:13221/whatsonyourmind');
var Schema = mongoose.Schema;

var dataSchema = new Schema({
  title : String,
  content : String,
  mode:String
});

module.exports = mongoose.model('data',dataSchema);
