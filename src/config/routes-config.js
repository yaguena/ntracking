const express = require("express");

const orderController = require('../controller/order.controller');

const router = express.Router();

const routesConfig = () => {
  router.post('/orders', orderController.create);
  return router;
};

module.exports = routesConfig;
