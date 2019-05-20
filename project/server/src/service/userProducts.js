const axios = require('axios');
const userAdapter = require('../adapter/user');
const productsAdapter = require('../adapter/products');
const path = require('../../environment');

exports.get = (req, res, next) => {
    const userService =  axios.get(`${path.USER_SERVICE}/users`);
    const productsService = axios.get(`${path.PRODUCTS_SERVICE}/products`);

    Promise.all([userService, productsService]).then(
        ([user, products]) => res.json({
            user: userAdapter.user(user.data),
            products: productsAdapter.products(products.data)
        })
    );
}