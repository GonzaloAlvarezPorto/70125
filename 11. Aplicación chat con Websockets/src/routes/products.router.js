const { Router } = require('express');
const ProductsManagerFs = require('../managers/fileSystem/products.managers');

const router = Router();

const productsManagerFs = new ProductsManagerFs();

router.get('/', async (req, res) => {
    try {
        const productsDb = await productsManagerFs.getProducts();
        res.send({ status: 'success', data: productsDb })
    } catch (error) {
        console.log(error);
    }
})

router.get('/:pid', async (req, res) => {
    try {
        const productsId = parseInt(req.params.pid, 10);
        const product = await productsManagerFs.getProductById(productsId);

        if (product) {
            res.send({ status: 'success', data: product });
        } else {
            res.send({ status: 'error', message: 'Producto no encontrado' });
        }
    } catch (error) {
        console.error(error);
    }
});

router.post('/', async (req, res) => {
    try {
        const { body } = req;

        const productoCreado = await productsManagerFs.createProduct(body);
        res.send({ status: 'success', data: productoCreado });
    } catch (error) {
        console.log(error)
    }
})

router.put('/:pid', async (req, res) => {
    try {
        const { pid } = req.params;
        const updatedFields = req.body;

        const updatedProduct = await productsManagerFs.updateProduct(parseInt(pid), updatedFields);

        if (!updatedProduct) {
            console.log("Error");
        }

        res.json(updatedProduct);
    } catch (error) {
        console.log(error);
    }
});

router.delete('/:pid', async (req, res) => {
    try {
        const { pid } = req.params;
        const idProduct = parseInt(pid);

        const response = await productsManagerFs.deleteProduct(idProduct);

        res.send({ status: 'success', message: 'Producto eliminado' });

    } catch (error) {
        console.error(error);
        res.send({ status: 'error', message: 'Error al eliminar el producto' });
    }
});


module.exports = router;

