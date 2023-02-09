class ProductData {
  constructor(data) {
    this.code = data.code;
    this.productNumber = data.productNumber;
    this.name = data.name;
    this.priceDefault = data.priceDefault;
    this.categoryCode = data.categoryCode;
    if (data.createdAt) {
      this.createdAt = data.createdAt;
    }
  }
};

module.exports = { ProductData };
