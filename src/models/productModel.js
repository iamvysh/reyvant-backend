const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  image: String,

  

},{timestamps:true});

const products = mongoose.model("products", productSchema);

module.exports = products;