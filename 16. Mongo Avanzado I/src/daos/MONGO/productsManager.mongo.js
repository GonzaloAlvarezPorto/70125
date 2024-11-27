import productModel from '../../models/products.model.js'

class ProductManagerMongo {

    constructor(){
        this.model = productModel
    }

    getProducts = async () => await this.model.find({})
    getProduct = async (opts) => await this.model.findOne(opts)
    createProduct = async (newProduct) => await this.model.create(newProduct);
    deleteProduct = async () => {}
    updateProduct = async () => {}
}

export default ProductManagerMongo;