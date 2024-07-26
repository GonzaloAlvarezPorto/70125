const { Router } = require('express');

const router = Router();

const products = [];

// configuracion

router.get('/', (req, res) => {
    res.send('get productos');
})

module.exports = router;