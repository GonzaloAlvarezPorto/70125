import { Router } from "express";
import ProductsManagerFs from "../managers/fileSystem/products.managers.js";

const router = Router();

const productsManagerFs = new ProductsManagerFs();

router.get('/', (req,res) => {
    res.render('index')
})

router.get('/realtimeproducts', (req,res) => {
    res.render('realTimeProducts')
})

router.get('/home', (req, res) => {
    productsManagerFs.getProducts()
        .then(products => {
            res.render('home', {
                "Productos": products
            });
        })
        .catch(error => {
            console.error(error);
            res.status(500).send("Error al obtener los productos");
        });
});

export default router;