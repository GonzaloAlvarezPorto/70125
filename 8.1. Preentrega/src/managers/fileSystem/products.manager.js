const fs = require('fs');
const path = './dbjson/productsDb.json'

class ProductsManagerFs {
    constructor() {
        this.path = path;
    }

    readProducts = async () => {
        try {
            if (fs.existsSync(path)) {
                const productJson = await fs.promises.readFile(path, 'utf-8');
                const productsJs = JSON.parse(productJson);
                return productsJs;
            }
            return [];
        } catch (error) {
            console.log(error);
        }
    }

    getProducts = async () => {
        try {
            const products = await this.readProducts();
            return products;

        } catch (error) {
            console.log(error);
        }
    }
    getProductById = async (productId) => {
        try {
            const products = await this.readProducts();
            const id = parseInt(productId, 10);
            if (isNaN(id)) {
                throw new Error(`El ID ${productId} no es un número entero válido`);
            }
            const productById = products.find(product => product.id === id);
            if (!productById) {
                throw new Error(`Producto con ID ${id} no encontrado`);
            }
            return productById;
        } catch (error) {
            console.error(`Error al obtener el producto con ID ${productId}:`, error);
            throw error;
        }
    }

    getProductById = async (productId) => {
        try {
            const products = await this.readProducts();
            const id = parseInt(productId, 10);
            if (isNaN(id)) {
                throw new Error(`El ID ${productId} no es un número entero válido`);
            }
            const productById = products.find(product => product.id === id);
            if (!productById) {
                throw new Error(`Producto con ID ${id} no encontrado`);
            }
            return productById;
        } catch (error) {
            console.error(`Error al obtener el producto con ID ${productId}:`, error);
            throw error;
        }
    }

    createProduct = async (newProduct) => {
        try {
            const products = await this.readProducts();

            if (products.length === 0) {
                newProduct.id = 1;
            }
            else {
                newProduct.id = products[products.length - 1].id + 1;
            }

            newProduct.status = true;

            products.push(newProduct);

            await fs.promises.writeFile(path, JSON.stringify(products, null, '\t'));

            return 'Producto agregado';

        } catch (error) {
            console.log(error)
        }
    }

    updateProduct = async (productId, productData) => {
        try {
            const products = await this.readProducts();

            const id = parseInt(productId, 10);

            if (isNaN(id)) {
                throw new Error(`El ID ${productId} no es un número entero válido`);
            }

            const productIndex = products.findIndex(product => product.id === id);

            if (productIndex === -1) {
                return false;
            }

            const updatedProduct = { ...products[productIndex], ...productData };
            products[productIndex] = updatedProduct;

            await fs.promises.writeFile(path, JSON.stringify(products, null, 2));
            return updatedProduct;

        } catch (error) {
            console.log(error);
        }
    };

    deleteProduct = async (productId) => {
        try {
            const products = await this.readProducts();

            const id = parseInt(productId, 10);

            if (isNaN(id)) {
                throw new Error(`El ID ${productId} no es un número entero válido`);
            }

            const productIndex = products.findIndex(product => product.id === id);

            if (productIndex === -1) {
                return false;
            }

            products.splice(productIndex, 1);

            await fs.promises.writeFile(path, JSON.stringify(products, null, 2));
            return true;

        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = ProductsManagerFs;