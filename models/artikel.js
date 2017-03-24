var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    artikel: {type: String, required: true},
    wort: {type: String, required: true}
});

module.exports = mongoose.model('Artkel', schema);
