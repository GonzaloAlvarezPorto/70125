import express from 'express';

const PORT = 8080;
const app = express();

app.get("/usuario/:nombre", (req,res) => {
    console.log(req.params.nombre);
    res.send(`Bienvenido ${req.params.nombre}`);
})

app.listen(PORT, () => {
    console.log(`Servidor en marcha ${PORT}`);
})

