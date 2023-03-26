const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const Query = new Schema({
    label : {type: String, maxLength : 255},
    data : {type: String},
});



module.exports = mongoose.model('Estecs', Query);;// them chữ s