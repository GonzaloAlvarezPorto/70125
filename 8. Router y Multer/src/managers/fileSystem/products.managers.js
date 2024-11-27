import fs from 'fs';
const path = '../dbjson/productsDb.json';

class ProductsManagerFs {
    constructor() {
        this.path = path;
    }

    readProducts = async () => {
        try {
            if (fs.existsSync(path)) {
                const productsJson = await fs.promises.readFile(path, "utf-8");
                const productsJs = JSON.parse(productsJson);
                return productsJs;
            }
            return [];
        } catch (error) {
            console.log(error);
            return [];
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

    createProduct = async newProduct => {
        try {
            const products = await this.readProducts();

            if (products.length === 0) {
                newProduct.id = 1000;
            }
            else {
                newProduct.id = products[products.length - 1].id + 1;
            }

            products.push(newProduct);

            await fs.promises.writeFile(path, JSON.stringify(products, null, '\t'));

            return newProduct;

        } catch (error) {
            console.log(error);
        }
    }

    getProductById = async (idProduct) => {
        try {
            const products = await this.readProducts();
            const productsById = products.find(product => product.id === idProduct);
            return productsById;
        } catch (error) {
            console.log(error);
        }
    }

    updateProduct = async (idProduct, updatedFields) => {
        try {
            const products = await this.readProducts();
            const productIndex = products.findIndex(product => product.id === idProduct);
    
            if (!productIndex) {
                console.log("Error");
            }
    
            const updatedProduct = { ...products[productIndex], ...updatedFields };
            products[productIndex] = updatedProduct;
    
            await fs.promises.writeFile(path, JSON.stringify(products, null, '\t'));
    
            return updatedProduct;
    
        } catch (error) {
            console.log(error);
        }
    }
    
    deleteProduct = async (idProduct) => {
        try {
            const products = await this.readProducts();
            
            const productIndex = products.findIndex(product => product.id === idProduct);
            
            if (productIndex === -1) {
                console.log('Producto no encontrado');
            }
            
            products.splice(productIndex, 1);
            
            await fs.promises.writeFile(this.path, JSON.stringify(products, null, '\t'));
    
            return { message: 'Producto eliminado correctamente' };
        } catch (error) {
            console.log(error);
        }
    }
    
}

export default ProductsManagerFs;