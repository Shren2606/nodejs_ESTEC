
const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const Course = new Schema({
  name : {type: String, maxLength : 255},
  description:{type: String, maxLength : 255},
  image:{type: String, maxLength : 255},
  value: String,
});


module.exports = mongoose.model('Estec', Course);;// them chữ s