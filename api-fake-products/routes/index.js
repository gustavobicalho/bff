const express = require('express');
const products = require('../data/products');
const request = require('../data/request');

const router = express.Router();

router.get('/products', function(req, res, next) {
  res.json(products);
});

router.get('/pedido', function(req, res, next) {
  res.json(request);
});

module.exports = router;
