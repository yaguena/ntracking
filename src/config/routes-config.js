const express = require("express");

const OrderController = require('../controller/order.controller');
const ProductController = require('../controller/product.controller');

const routesConfig = () => {
  const router = express.Router();
  router.post('/orders', OrderController.create);
  router.get('/products/:code', ProductController.findByCode);
  router.post('/products/', ProductController.create);
  return router;
};

module.exports = routesConfig;
