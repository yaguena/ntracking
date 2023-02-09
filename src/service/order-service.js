const Order = require('../model/order.schema');
const { OrderCreateData } = require('../data/order.data');

class OrderService {
  async save(orderData) {
    const order = await Order.create(orderData);
    return new OrderCreateData(order);
  }
}

module.exports = { OrderService }
