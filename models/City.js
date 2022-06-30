
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const citySchema = new Schema({
Underscoreid:String , 


cityName:String 



})

module.exports = {
  City : mongoose.model('city', citySchema),
}

