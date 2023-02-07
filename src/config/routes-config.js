const orderController = require('../controller/order.controller');

const routesConfig = (route) => {
  route.post('orders/', orderController.create);
};

module.exports = routesConfig;
