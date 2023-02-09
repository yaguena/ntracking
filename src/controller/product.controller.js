const express = require('express');
const { ProductService } = require('../service/product.service');

const productService = new ProductService();

class ProductController {
  static async create (req, res) {
    const products = await productService.save(req.body);
    return res.json(products);
  }

  static async findByCode (req, res) {
    const code = req.params.code;
    const productData = await productService.findByCode(code);
    return res.json(productData);
  }
}

module.exports = ProductController;
