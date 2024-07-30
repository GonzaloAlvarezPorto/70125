const { Router } = require('express');
const CartsManagerFs = require('../managers/fileSystem/carts.manager');

const router = Router();

const cartsManagerFs = new CartsManagerFs();

router.get('/', async (req, res) => {
    try {
        const cartsDb = await cartsManagerFs.getCarts();
        res.send({ status: 'success', data: cartsDb });
    } catch (error) {
        console.log(error);
    }
});

router.get('/:cid', async (req, res) => {
    try {
        const { cid } = req.params;
        const carts = await cartsManagerFs.getCartById(cid);
        res.send({ status: 'success', data: carts })
    } catch (error) {
        console.log(error)
    }
})

router.post('/', async (req, res) => {
    try {
        const { body } = req;

        const response = await cartsManagerFs.createCart(body);

        res.send({ status: 'success', data: response })
    } catch (error) {
        console.log(error)
    }
})

router.post('/:cid/product/:pid', async (req, res) => {
    try {
        const { cid, pid } = req.params;

        const response = await cartsManagerFs.createProductToCart(cid, pid);

        if (response.status === 'error') {
            res.send(response);
        } else {
            res.send(response);
        }
    } catch (error) {
        console.log(error);
    }
});

router.put('/:cid', async (req, res) => {
    try {
        const { cid } = req.params;
        const cartData = req.body;

        const response = await cartsManagerFs.updateCart(cid, cartData);

        if (response) {
            res.send({ status: 'success', data: response });
        }
    } catch (error) {
        console.log(error);
    }
});

router.delete('/:cid', async (req, res) => {
    try {
        const { cid } = req.params;

        const result = await cartsManagerFs.deleteCart(cid);

        if (result) {
            res.send({ status: 'success', message: 'Carrito eliminado correctamente' });
        }
    } catch (error) {
        console.log(error);
    }
});


module.exports = router;