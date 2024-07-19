import express from 'express';

const PORT = 8080;
const app = express();

app.use(express.urlencoded({extended: true}));

app.get('/queries', (req, res) => {
    const queries = req.query;
    res.send(queries);

});

app.listen(PORT, () => {
    console.log(`Servidor en marcha ${PORT}`);
})