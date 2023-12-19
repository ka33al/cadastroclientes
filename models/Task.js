const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true
    
  },
  phone:{
    type:String,
    require:true
  },
  date:{
    type:String,
    require:true,
  },
  content: {
    type: String,
    require: true,
  }},
  
);
module.exports = mongoose.model("name", taskSchema);
