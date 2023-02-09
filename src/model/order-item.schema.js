const mongoose = require("mongoose");

const OrderItemSchema = new mongoose.Schema({
  orderNumber: {
    type: Number,
    required: true
  },
  productNumber: {
    type: Number,
    required: true
  }
},{ timestamps: true });

const OrderItem = mongoose.model("OrderItem", OrderItemSchema);

module.exports = OrderItem;