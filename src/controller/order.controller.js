const express = require('express');
const { OrderService } = require('../service/order-service');

const orderService = new OrderService();

class OrderController {
  static async create (req, res) {
    const data = await orderService.save(req.body);
    return res.json(data);
  }
}

module.exports = OrderController;
