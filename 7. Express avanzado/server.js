import express from 'express';
// import express from 'express'

const app = express();

const PORT = 8080;

// para procesar los JSON del cliente
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//users - crud
//productos
//session
//carrito
//mensajes
//tickets

// get http://localhost:8080 /

const users = [];

// req => peticion // res => respuesta
app.get('/api/users', (req, res) => {

    res.send({ data: users });
});

app.post('/api/users', (req, res) => {
    const { body } = req;
    if (!body.email || !body.password) {
        return res.status(400).send({ status: 'error', error: 'falta data' });
    }
    users.push({ id: users.length + 1, ...body });
    res.status(200).send({ data: users });
});

app.put('/api/users', (req, res) => {
    res.send('put hola mundo');
});

app.delete('/api/users/:uid', (req, res) => {
    const { uid } = req.params;
    const nuevaLista = users.filter(user => user.id !== Number(uid));
    res.send(nuevaLista);
});


app.listen(PORT, () => {
    console.log('escuchando en el puerto: ', PORT)
});