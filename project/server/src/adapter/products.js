const utils = require ('../utils');

exports.products = (data) => {
    let response = [];

    data.results.forEach(product => {
        response.push({
            id: product.id,
            description: product.description,
            price: utils.formatPrice(product.price)
        });
    });
    
    return response;
}