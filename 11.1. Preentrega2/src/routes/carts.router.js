const { Router } = require('express');
const CartsManagerFs = require('../managers/fileSystem/carts.managers');

const router = Router();

const cartsManagerFs = new CartsManagerFs();

router.post('/', async (req, res) => {
    try {
        const { body } = req;

        const carritoCreado = await cartsManagerFs.createCart(body);
        res.send({status:'success', data: carritoCreado })

    } catch (error) {
        console.log(error);
    }
})

router.get('/', async (req, res) => {
    try {
        const cartsDb = await cartsManagerFs.getCarts();
        res.send({ status: 'success', data: cartsDb })
    } catch (error) {
        console.log(error);
    }
})

router.get('/:cid', async (req, res) => {
    try {
        const cartsId = parseInt(req.params.cid, 10);
        const cart = await cartsManagerFs.getCartById(cartsId);

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