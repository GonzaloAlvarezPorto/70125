import { Router } from 'express';// const { Router } = require('express')
import productRouter from './api/products.router.js' // const productRouter = require('./api/products.router.js')
import cartsRouter from './api/carts.router.js' // const cartsRouter = require('./api/carts.router.js')
import viewsRouter from './views.router.js' // const viewsRouter = require('./views.router.js');
import uploader from '../utils/uploader.js' // const { uploader } = require('../utils/uploader.js');

const router = Router();

router.post('/', uploader.single('myFile'), (req, res) => {
    res.send('Archivo subido');
} )

router.use('/', viewsRouter)
router.use('/api/products', productRouter)
router.use('/api/carts', cartsRouter)


export default router;