const { Router } = require('express');
const ProductsManagerFs = require('../managers/fileSystem/products.manager');

const router = Router();

const productsManagerFs = new ProductsManagerFs();

router.get('/', async (req, res) => {
    try {
        const productsDb = await productsManagerFs.getProducts();
        res.send({ status: 'success', data: productsDb });
    } catch (error) {
        console.log(error);
    }
});

router.get('/:pid', async (req,res) => {
    try {
        const { pid } = req.params;
        const products = await productsManagerFs.getProductById(pid);
        res.send({status:'success', data: products})
    } catch (error) {
        console.log(error)
    }
})

router.post('/', async (req, res) => {
    try {
        const { body } = req;

        const response = await productsManagerFs.createProduct(body);

        res.send({status:'success', data: response})
    } catch (error) {
        console.log(error)
    }
})

router.put('/:pid', async (req, res) => {
    try {
        const { pid } = req.params;
        const productData = req.body;

        const response = await productsManagerFs.updateProduct(pid, productData);

        if (response) {
            res.send({ status: 'success', data: response });
        }
    } catch (error) {
        console.log(error);
    }
});

router.delete('/:pid', async (req, res) => {
    try {
        const { pid } = req.params;

        const result = await productsManagerFs.deleteProduct(pid);

        if (result) {
            res.send({ status: 'success', message: 'Producto eliminado correctamente' });
        } 
    } catch (error) {
        console.log(error);
    }
});


module.exports = router;