const express = require('express');
const viewsRouter = require('./routes/views.router')
const productsRouter = require('./routes/products.router')

const logger = require('morgan');
const { uploader } = require('./utils/multer');
const handlebars = require('express-handlebars');
const { Server } = require('socket.io');
const ProductsManagerFs = require('./managers/fileSystem/products.managers');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/static',express.static(__dirname + '/public'));
app.use(logger('dev'))

//configuración del motor de plantillas
app.engine('handlebars', handlebars.engine())
//configurar la carpeta donde debe tomar las plantillas
app.set('views', __dirname + '/views');
//configurar la extensión que tienne las plantillas
app.set('view engine','handlebars')


app.use(function(req, res, next){
    console.log('Time: ', Date.now());
    next();
})

app.use((error, req, res, next)=> {
    console.log(error.stack);
    res.status(500).send('error de server');
})

app.use('/', viewsRouter);
app.use('/api/products', productsRouter)

const httpServer = app.listen(PORT, () => {
    console.log('escuchando en el puerto: ', PORT)
});

// por convención se llama io
const io = new Server(httpServer);
const productsManagerFs = new ProductsManagerFs();

io.on('connection', async socket => {
    console.log('Nuevo cliente conectado');

    // Enviar la lista de productos cuando un cliente se conecta
    try {
        const products = await productsManagerFs.getProducts();
        socket.emit('productosNuevos', products);
    } catch (error) {
        console.error("Error al obtener los productos:", error);
    }

    // Manejar la solicitud de actualización de productos
    socket.on('requestProducts', async () => {
        try {
            const products = await productsManagerFs.getProducts();
            io.emit('productosNuevos', products); // Emitir la lista actualizada a todos los clientes
        } catch (error) {
            console.error("Error al obtener los productos:", error);
        }
    });
});