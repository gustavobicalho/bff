const axios = require('axios');
const adapter = require('./adapter');
const path = require('../environment');

exports.userProducts = (req, res, next) => {
    const userService =  axios.get(`${path.USER_SERVICE}/users`);
    const productsService = axios.get(`${path.PRODUCTS_SERVICE}/products`);

    Promise.all([userService, productsService]).then(
        ([user, products]) => res.json({
            user: adapter.user(user.data),
            products: adapter.products(products.data)
        })
    );
}