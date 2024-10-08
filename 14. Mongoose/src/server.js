const express = require('express');
const userRouter = require('./routes/users.router');
const productRouter = require('./routes/products.router');
const cartRouter = require('./routes/carts.router');
const pruebasRouter = require('./routes/pruebas.router');
const viewsRouter = require('./routes/views.router');

const logger = require('morgan');
const { uploader } = require('./utils/multer');
const handlebars = require('express-handlebars');
const { Server } = require('socket.io');
const { connectDB } = require('./config');

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

connectDB();

app.post('/', uploader.single('myFile'), (req, res) => {
    res.send('archivo subido')
})

//app.use('/', viewsRouter);
app.use('/api/users',userRouter);
app.use('/api/products', productRouter);
app.use('/api/carts', cartRouter);
app.use('/pruebas', pruebasRouter)


app.use((error, req, res, next)=> {
    console.log(error.stack);
    res.status(500).send('error de server');
})

const httpServer = app.listen(PORT, () => {
    console.log('escuchando en el puerto: ', PORT)
});

// por convención se llama io
const io = new Server(httpServer);

let messages = [];

io.on('connection', socket => {
    console.log('Nuevo cliente conectado');

    socket.on('message', data => {
        messages.push(data);
        io.emit('messageLogs', messages)
    })
})