exports.BASE_URL = 'http://localhost:3003';
exports.USER_SERVICE = 'http://localhost:3001';
exports.PRODUCTS_SERVICE = 'http://localhost:3002';

exports.services = {
    ORDER: `${this.BASE_URL}/pedido`,
    USERS: `${this.BASE_URL}/users`,
    PRODUCTS: `${this.BASE_URL}/products`,
}