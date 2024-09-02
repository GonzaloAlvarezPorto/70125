const { Router } = require('express');
const CartsManagerMongo = require('../daos/mongo/cartsManager.mongo');
const { cartModel } = require('../models/carts.model');

const router = Router();
const cartsManager = new CartsManagerMongo();

// Obtener todos los carritos
router.get('/', async (req, res) => {
    try {
        const carts = await cartsManager.getCarts();
        if (carts.length === 0) {
            return res.status(404).json({ message: 'No hay carritos en la base de datos' });
        }
        res.json(carts);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los carritos' });
    }
});

// Crear un nuevo carrito
router.post('/', async (req, res) => {
    try {
        console.log('Datos recibidos:', req.body);

        const { products } = req.body;

        if (!products || !Array.isArray(products) || products.length === 0) {
            return res.status(400).json({ success: false, message: 'El carrito está vacío o mal formado' });
        }

        const newCart = new cartModel({ products });
        await newCart.save();

        res.status(201).json({ success: true, message: 'Carrito creado con éxito', cart: newCart });
    } catch (error) {
        console.error('Error al crear el carrito:', error);
        res.status(500).json({ success: false, message: 'Error al crear el carrito', error });
    }
});




// Obtener un carrito por ID
router.get('/:cid', async (req, res) => {
    try {
        const cartId = req.params.cid;
        const cart = await cartsManager.getCartById(cartId);
        if (!cart) {
            return res.status(404).json({ message: 'Carrito no encontrado' });
        }
        res.json(cart);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el carrito por ID' });
    }
});

// Agregar un producto al carrito
router.post('/:cid/products/:pid', async (req, res) => {
    try {
        const cartId = req.params.cid;
        const productId = req.params.pid;
        const quantity = req.body.quantity || 1; // Default quantity is 1
        const updatedCart = await cartsManager.addProductToCart(cartId, productId, quantity);
        if (!updatedCart) {
            return res.status(404).json({ message: 'Carrito no encontrado' });
        }
        res.json(updatedCart);
    } catch (error) {
        res.status(500).json({ message: 'Error al agregar producto al carrito' });
    }
});

// Eliminar un producto del carrito
router.delete('/:cid/products/:pid', async (req, res) => {
    try {
        const cartId = req.params.cid;
        const productId = req.params.pid;
        const updatedCart = await cartsManager.deleteProductFromCart(cartId, productId);
        if (!updatedCart) {
            return res.status(404).json({ message: 'Carrito no encontrado' });
        }
        res.json(updatedCart);
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar producto del carrito' });
    }
});

// Actualizar la cantidad de un producto en el carrito
router.put('/:cid/products/:pid', async (req, res) => {
    try {
        const cartId = req.params.cid;
        const productId = req.params.pid;
        const quantity = req.body.quantity;
        if (quantity === undefined) {
            return res.status(400).json({ message: 'Cantidad no proporcionada' });
        }
        const updatedCart = await cartsManager.updateProductQuantity(cartId, productId, quantity);
        if (!updatedCart) {
            return res.status(404).json({ message: 'Carrito o producto no encontrado' });
        }
        res.json(updatedCart);
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar la cantidad del producto' });
    }
});

// Eliminar todos los productos del carrito
router.delete('/:cid', async (req, res) => {
    try {
        const cartId = req.params.cid;
        const updatedCart = await cartsManager.clearCart(cartId);
        if (!updatedCart) {
            return res.status(404).json({ message: 'Carrito no encontrado' });
        }
        res.json(updatedCart);
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar todos los productos del carrito' });
    }
});

module.exports = router;
