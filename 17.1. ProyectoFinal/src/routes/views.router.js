const { Router } = require('express');
const productsManagerMongo = require('../daos/mongo/productsManager.mongo.js')

const router = Router();

const productsManager = new productsManagerMongo();

router.get('/', (req,res) => {
    res.render('index')
})

router.get('/realtimeproducts', (req,res) => {
    res.render('realTimeProducts')
})

router.get('/home', (req, res) => {
    productsManager.getProducts()
        .then(products => {
            const plainProducts = products.map(product => product.toObject ? product.toObject() : product);

            res.render('home', {
                "Productos": plainProducts
            });
        })
        .catch(error => {
            console.error(error);
        });
});

module.exports = router;