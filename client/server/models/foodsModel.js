

const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
    customer:{
        type:String,
        required:true
    },    
  food :{
    type:String,
    required:true
},
 price:{
    type:Number,
    required:true
},


})

const foodModel = mongoose.model("food",foodSchema,"foods")

module.exports = foodModel