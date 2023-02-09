const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  code: {
    type: Number,
    required: true
  },
  productNumber: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  priceDefault: {
    type: Number,
    required: true
  },
  size: {
    type: String,
  },
  categoryCode: {
    type: String,
  }
},{ timestamps: true });

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
