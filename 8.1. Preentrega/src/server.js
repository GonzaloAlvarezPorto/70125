import express from 'express'
import productRouter from './routes/products.router.js'
import cartRouter from './routes/carts.router.js';

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((error, req, res, next)=> {
    console.log(error.stack);
    res.status(500).send('error de server');
})

app.use('/api/products', productRouter);
app.use('/api/carts', cartRouter);

app.listen(PORT, () => {
    console.log('Escuchando en el puerto: ', PORT)
});