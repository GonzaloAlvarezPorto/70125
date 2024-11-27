import { Router } from 'express';
import productRouter from './api/products.router.js';
import cartsRouter from './api/carts.router.js';
import viewsRouter from './views.router.js';
import usersRouter from './api/users.router.js';
import uploader from '../utils/uploader.js'

const router = Router();

router.post('/', uploader.single('myFile'), (req, res) => {
    res.send('Archivo subido');
} )

router.use('/', viewsRouter)
router.use('/api/products', productRouter)
router.use('/api/carts', cartsRouter)
router.use('/api/users', usersRouter)


export default router;