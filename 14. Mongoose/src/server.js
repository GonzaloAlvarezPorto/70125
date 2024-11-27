import express from 'express';//const express = require('express');
import userRouter from './routes/users.router.js'
import productRouter from './routes/products.router.js';
import cartRouter from './routes/carts.router.js';
import pruebasRouter from './routes/pruebas.router.js';
import viewsRouter from './routes/views.router.js';

import logger from 'morgan'// const logger = require('morgan');
import uploader from './utils/multer.js'; // const { uploader } = require('./src/utils/multer');
import handlebars from 'express-handlebars' // const handlebars = require('express-handlebars');
import { Server } from 'socket.io';// const { Server } = require('socket.io');
import connectDB from './config/index.js'; // const { connectDB } = require('./src/config');

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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

// app.use('/', viewsRouter);
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