const axios = require('axios');
const path = require('../../environment');
const adapter = require('../adapter/order');

exports.get = (req, res, next) => {
    axios.get(path.services.ORDER).then(
        (order) => res.json({
            pedido: adapter.order(order.data)
        })
    );
}