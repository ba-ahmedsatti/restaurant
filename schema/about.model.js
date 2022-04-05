// create about schema
const mongoose = require("mongoose");

const aboutSchema = new mongoose.Schema({
  
  name: String,
  image: String

});
module.exports = mongoose.model("about", aboutSchema);