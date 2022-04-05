// create menu schema
const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({
  id: Number,
  name: String,
  price: Number,
  image: String

});
module.exports = mongoose.model("Menu", menuSchema);