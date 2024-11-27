import express from 'express';
import userRouter from './routes/users.router.js';
import productRouter from './routes/products.router.js';
import cartRouter from './routes/carts.router.js';
import pruebasRouter from './routes/pruebas.router.js';
import viewsRouter from './routes/views.router.js';

import logger from 'morgan';
import uploader from './utils/multer.js';
import handlebars from 'express-handlebars';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Usando import.meta.url para obtener __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/static', express.static(__dirname + '/public'));
app.use(logger('dev'));

// Configuración del motor de plantillas
app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');

app.use(function(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

app.post('/', uploader.single('myFile'), (req, res) => {
    res.send('archivo subido');
});

app.use('/', viewsRouter);
app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.use('/api/carts', cartRouter);
app.use('/api/pruebas', pruebasRouter);

app.use((error, req, res, next) => {
    console.log(error.stack);
    res.status(500).send('error de server');
});

app.listen(PORT, () => {
    console.log('escuchando en el puerto: ', PORT);
});
