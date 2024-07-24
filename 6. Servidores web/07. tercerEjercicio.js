import express from 'express';

const PORT = 8080;
const app = express();

app.use(express.urlencoded({extended: true}));

const users = [
    {
        id: "1",
        nombre: "Gonzalo",
        apellido: "Alvarez Porto",
        gender: "M"
    },
    {
        id: "2",
        nombre: "Luis",
        apellido: "Novaresio",
        gender: "M"
    },
    {
        id: "3",
        nombre: "Mario",
        apellido: "Biondo",
        gender: "M"
    },
    {
        id: "4",
        nombre: "Gisela Paola",
        apellido: "Rappeti",
        gender: "F"
    }
]

//Esto es con params
app.get('/usuario/:gender', (req, res) => {
    const genero = req.params.gender;

    if(!genero.toUpperCase()){
        return res.send({users});
    }
    if(genero.toUpperCase() !== "M" && genero.toUpperCase() !== "F"){
        return res.send({users})
    }

    const usuariosFiltrados = users.filter(user => user.gender === genero.toUpperCase());

    res.send({users: usuariosFiltrados});
})

//Esto es con params
app.get('/usuario_query', (req, res) => {
    const genero = req.query.gender;

    if(!genero.toUpperCase()){
        return res.send({users});
    }
    if(genero.toUpperCase() !== "M" && genero.toUpperCase() !== "F"){
        return res.send({users})
    }

    const usuariosFiltrados = users.filter(user => user.gender === genero.toUpperCase());

    res.send({users: usuariosFiltrados});
})

app.listen(PORT, () => {
    console.log(`Servidor en marcha ${PORT}`);
})