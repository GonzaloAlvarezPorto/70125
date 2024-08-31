const { Router } = require("express");
const { ProductManagerMongo } = require("../../daos/MONGO/productsManager.mongo");

const router = Router();
const productsService = new ProductManagerMongo()

router.get('/', async (req, res) => {
    try {
        const products = await productsService.getProducts()
        res.send({ status: 'success', data: products })
    } catch (error) {
        console.log(error)
    }
})

router.post('/', async (req, res) => {
    try {
        const { body } = req
        const response = await productsService.createProduct(body)
        res.send({ status: 'success', data: response })
    } catch (error) {
        console.log(error)
    }
})

router.get('/:pid', async (req, res) => {
    try {

        res.send('get de un producto')

    } catch (error) {
        console.log(error);
    }
})

router.put('/:pid', async (req, res) => {
    try {
        res.send('put de un producto')

    } catch (error) {
        console.log(error);
    }
})

router.delete('/:pid', async (req, res) => {
    try {
        res.send('delete de un producto')

    } catch (error) {
        console.log(error);
    }
})

module.exports = router;