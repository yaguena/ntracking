class OrderCreateData {
  constructor(data) {
    this.code = data.code;
    this.orderNumber = data.orderNumber;
    this.name = data.name;
    if (data.createdAt) {
      this.createdAt = data.createdAt;
    }
  }
};

module.exports = { OrderCreateData }
