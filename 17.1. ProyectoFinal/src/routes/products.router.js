const { Router } = require('express');
const express = require('express')
const ProductsManagerMongo = require('../daos/mongo/productsManager.mongo.js');

const router = Router();

const productsManager = new ProductsManagerMongo();

// Endpoint GET para productos con paginación, límite, ordenamiento y filtro
// router.get('/', async (req, res) => {
//     try {
//         const products = await productsManager.getProducts();

//     } catch (error) {
//         console.error(error);
//     }
// });

router.get('/', async (req, res) => {
    try {
        const { limit = 10, page = 1, sort, query = '' } = req.query;

        // Convertir parámetros a tipos apropiados
        const limitInt = parseInt(limit);
        const pageInt = parseInt(page);
        const sortOption = sort === 'desc' ? { precio: -1 } : (sort === 'asc' ? { precio: 1 } : {});
        const filter = query ? { title: new RegExp(query, 'i') } : {}; // Filtro por título con regex

        // Obtener productos desde el manager
        const products = await productsManager.getProducts(filter, sortOption, limitInt, (pageInt - 1) * limitInt);

        // Enviar respuesta
        res.json({
            status: 'success',
            data: products,
            page: pageInt,
            limit: limitInt
        });
    } catch (error) {
        console.error('Error al obtener los productos:', error);
        res.status(500).json({ status: 'error', message: 'Error al obtener los productos' });
    }
});

router.get('/:pid', async (req, res) => {
    try {
        const productsId = parseInt(req.params.pid, 10);
        const product = await productsManager.getProductById(productsId);

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

        const productoCreado = await productsManager.createProduct(body);
        res.send({ status: 'success', data: productoCreado });
    } catch (error) {
        console.log(error)
    }
})

router.put('/:pid', async (req, res) => {
    try {
        const { pid } = req.params;
        const updatedFields = req.body;

        const updatedProduct = await productsManager.updateProduct(parseInt(pid), updatedFields);

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

        const response = await productsManager.deleteProduct(idProduct);

        res.send({ status: 'success', message: 'Producto eliminado' });

    } catch (error) {
        console.error(error);
        res.send({ status: 'error', message: 'Error al eliminar el producto' });
    }
});

module.exports = router;

