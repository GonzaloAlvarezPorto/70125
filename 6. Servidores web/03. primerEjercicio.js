import express from 'express';

const app = express();

app.get('/bienvenida', (req, res) => {

    res.send(`<h1 style="color: blue">Bienvenido al sitio</h1>`)

});

app.get("/usuario", (req, res) => {
    const usuario = [{
        nombre: "Gonzalo",
        apellido: "Alvarez Porto",
        edad: 35,
        email: "gonzaalvarezporto@gmail.com"
    },
    {
        nombre: "Mario",
        apellido: "Biondo",
        edad: "Dead",
        email: "mariobiondo@gmail.com"
    }
    ];

    const nombres = usuario.map(usuario => usuario.nombre);

    res.send(nombres);
})

app.listen("8080", () => {
    console.log("Servidor en marcha en 8080");
})