const { Router } = require('express');
const CartsManagerMongo = require('../daos/mongo/cartsManager.mongo');

const router = Router();

const cartsManager = new CartsManagerMongo();

router.post('/', async (req, res) => {
    try {
        const { body } = req;

        const carritoCreado = await cartsManager.createCart(body);
        res.send({status:'success', data: carritoCreado })

    } catch (error) {
        console.log(error);
    }
})

router.get('/', async (req, res) => {
    try {
        const cartsDb = await cartsManager.getCarts();
        res.send({ status: 'success', data: cartsDb })
    } catch (error) {
        console.log(error);
    }
})

router.get('/:cid', async (req, res) => {
    try {
        const cartsId = parseInt(req.params.cid, 10);
        const cart = await cartsManager.getCartById(cartsId);

        if (cart) {
            res.send({ status: 'success', data: cart });
        } else {
            res.send({ status: 'error', message: 'Carrito no encontrado' });
        }
    } catch (error) {
        console.error(error);
    }
});

router.post('/:cid/product/:pid', async (req, res) => {
    try {
        const { body } = req;
    } catch (error) {
        
    }
})
module.exports = router;