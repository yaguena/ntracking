const { OrderService } = require('../service/order-service');

const orderService = new OrderService();

class OrderController {
  async create (req, res) {
    const data = await orderService.save(req.body);
    return res.json(data);
  }
}

module.exports = new OrderController();
