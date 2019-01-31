const jsonServer = require('json-server')
const server = jsonServer.create()
const middlewares = jsonServer.defaults();
const faker = require('faker');
const router = jsonServer.router(require('./db.js'));

server.use(middlewares);
server.use(jsonServer.bodyParser);

const cart = require('./endpoints/cart');
const saveCart = require('./endpoints/saveCart');

/**
 * ENDPOINTS
 */

server.get('/cart', (res) => {
    return res.json(cart)
});

server.post('/saveCart', (req, res) => {
    if (req.headers.token) {
        return res.json(saveCart);
    } else {
        return res.status(401).json({
            msg: 'Not authenticated'
        });
    }
});

server.use(router);

server.listen(3500, () => {
    console.log('MOCK SERVER is available on port 3500');
});