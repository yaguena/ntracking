const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  orderNumber: {
    type: Number,
  },
  active: {
    type: Boolean,
    default: false
  },
  timestamps: true,
});
const Order = mongoose.model("Order", OrderSchema);
module.exports = Order;