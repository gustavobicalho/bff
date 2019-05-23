var http = require('http');
const express = require('express');
const products = require('./data/products');
const order = require('./data/order');

const app = express();

app.get('/products', function(req, res, next) {
  res.json(products);
});
  
app.get('/pedido', function(req, res, next) {
  res.json(order);
});

const server = http.createServer(app);
server.listen(3002);
