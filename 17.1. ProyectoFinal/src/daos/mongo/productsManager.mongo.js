const { productModel } = require("../../models/products.model");

class ProductsManagerMongo {
    constructor() {
        this.model = productModel;
    }

    getProducts = async (filter = {}, sort = {}, limit = 10, skip = 0) => {
        try {
            const products = await this.model.find(filter)
                .sort(sort)
                .limit(limit)
                .skip(skip);
            return products;
        } catch (error) {
            console.error('Error en getProducts:', error);
        }
    }

    getProductById = async (opts) => await this.model.findOne(opts)
    createProduct = async (newProduct) => await this.model.create(newProduct);
}

module.exports = ProductsManagerMongo;