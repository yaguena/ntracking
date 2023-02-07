const { OrderService } = require("../service/order-service");

class OrderController {

  constructor() {
    this.orderService = new OrderService();
  }

  async create(request, response) {
    const data = request.body;
    const result = this.orderService.save(data);
    response.json(result);
  }
}

module.exports = new OrderController();
