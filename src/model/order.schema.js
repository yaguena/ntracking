const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
    unique: true,
  },
  title: {
    type: String
  },
  orderNumber: {
    type: Number,
  },
  orderType: {
    type: String,
    enum : ['BUDGET','SALE'],
    default: 'SALE'
  },
  price: {
    type: Number
  },
  active: {
    type: Boolean,
    default: true
  },
},
{ timestamps: true });
const Order = mongoose.model("Order", OrderSchema);
module.exports = Order;