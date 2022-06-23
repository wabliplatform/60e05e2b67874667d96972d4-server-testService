
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const weatherSchema = new Schema({
Underscoreid:String 



})

module.exports = {
  Weather : mongoose.model('weather', weatherSchema),
}

