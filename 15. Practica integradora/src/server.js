import express from 'express'// const express = require('express');
import handlebars from 'express-handlebars' // const handlebars = require('express-handlebars')
import appRouter from './router/index.js' // const appRouter = require('./router/index.js');
import connectDB from './config/index.js' // const { connectDB } = require('./config/index.js');

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'))
connectDB();

//motor = engine // motor de plantillas
app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')

app.use(appRouter)

app.listen(PORT, error => {
    if (error) {
        console.log(error);
    }
    console.log(`Escuchando el puerto ${PORT}`)
})