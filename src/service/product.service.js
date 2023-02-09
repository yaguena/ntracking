const Product = require('../model/product.schema');
const { ProductData } = require('../data/product.data');

class ProductService {
  async save(productData) {
    const products = await Product.insertMany(productData);
    return products.map(product => new ProductData(product));
  }

  async findByCode(code) {
    const product = await Product.findOne({code});
    return new ProductData(product);
  }
}

module.exports = { ProductService }
