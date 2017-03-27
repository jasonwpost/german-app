var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    artikels: [{type: Schema.Types.ObjectId, ref: 'artikel'}],
    artikelAssessment: [{type: Number, required: true}],
    user: {type: Schema.Types.ObjectId, ref: 'user'}
});

module.exports = mongoose.model('Assessment', schema);
