const Order = require('../model/order-schema');

class OrderService {
  save(data) {
    Order.save(data);
  }
}

module.exports = { OrderService }
