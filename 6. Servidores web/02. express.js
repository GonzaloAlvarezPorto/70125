import express from 'express';

const app = express();

app.get('/saludo', (req, res) => {
    res.send("¿Hola cómo están?");

})

app.listen("8080", () => {
    console.log("Servidor en marcha en 8080");
})

