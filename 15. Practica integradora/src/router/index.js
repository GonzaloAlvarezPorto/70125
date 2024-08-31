const { Router } = require('express')
const productRouter = require('./api/products.router.js')
const cartsRouter = require('./api/carts.router.js')
const viewsRouter = require('./views.router.js');
const { uploader } = require('../utils/uploader.js');

const router = Router();

router.post('/', uploader.single('myFile'), (req, res) => {
    res.send('Archivo subido');
} )

router.use('/', viewsRouter)
router.use('/api/products', productRouter)
router.use('/api/carts', cartsRouter)


module.exports = router;