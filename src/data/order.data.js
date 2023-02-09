class OrderCreateData {
  constructor(data) {
    this.code = data.code;
    this.orderNumber = data.orderNumber;
    this.name = data.name;
    this.orderType = data.orderType;
    this.price = data.price;
    if (data.createdAt) {
      this.createdAt = data.createdAt;
    }
  }
};

module.exports = { OrderCreateData }
