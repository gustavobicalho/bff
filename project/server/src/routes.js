const httpProxy = require('express-http-proxy');
const path = require('../environment');

const orderService = require('./service/order');
const userProductsService = require('./service/userProducts');

exports.init = (app) => {
    
    const userServiceProxy = httpProxy(path.USER_SERVICE);
    const productsServiceProxy = httpProxy(path.PRODUCTS_SERVICE);

    app.get('/users', (req, res, next) => {
        userServiceProxy(req, res, next);
    });

    app.get('/products', (req, res, next) => {
        productsServiceProxy(req, res, next);
    });
    
    app.get('/userProducts', (req, res, next) => {
        userProductsService.get(req, res, next);
    });

    app.get('/pedido', (req, res, next) => {
        productsServiceProxy(req, res, next);
    });

    app.get('/bff/pedido', (req, res, next) => {
        orderService.get(req, res, next);
    });
}