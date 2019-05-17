var http = require('http');
const express = require('express');
const httpProxy = require('express-http-proxy');
const services = require('./src/services');
const path = require('./environment');

const app = express();

const userServiceProxy = httpProxy(path.USER_SERVICE);
const productsServiceProxy = httpProxy(path.PRODUCTS_SERVICE);

app.get('/users', (req, res, next) => {
  userServiceProxy(req, res, next);
});

app.get('/products', (req, res, next) => {
  productsServiceProxy(req, res, next);
});

app.get('/pedido', (req, res, next) => {
  productsServiceProxy(req, res, next);
});

app.get('/userProducts', (req, res, next) => {
  services.userProducts(req, res, next);
});

var server = http.createServer(app);
server.listen(3000);