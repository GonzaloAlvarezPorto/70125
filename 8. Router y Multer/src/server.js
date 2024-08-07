const express = require('express');
const userRouter = require('./routes/users.router');
const productRouter = require('./routes/products.router');
const cartRouter = require('./routes/carts.router');

const logger = require('morgan');
const { uploader } = require('./utils/multer');

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/static',express.static(__dirname + '/public'));
app.use(logger('dev'))

app.use(function(req, res, next){
    console.log('Time: ', Date.now());
    next();
})

app.post('/', uploader.single('myFile'), (req, res) => {
    res.send('archivo subido')
})
app.use('/api/users',userRouter);
app.use('/api/products', productRouter);
app.use('/api/carts', cartRouter);

app.use((error, req, res, next)=> {
    console.log(error.stack);
    res.status(500).send('error de server');
})

app.listen(PORT, () => {
    console.log('escuchando en el puerto: ', PORT)
});