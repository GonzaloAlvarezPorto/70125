const fs = require('fs');
const path = './dbjson/cartsDb.json'

class CartsManagerFs {
    constructor() {
        this.path = path;
    }

    readCarts = async () => {
        try {
            if (fs.existsSync(path)) {
                const cartJson = await fs.promises.readFile(path, 'utf-8');

                if (!cartJson.trim()) {
                    return [];
                }

                const cartsJs = JSON.parse(cartJson);
                return cartsJs;
            }
            return [];
        } catch (error) {
            console.log(error);
            return [];
        }
    }

    getCarts = async () => {
        try {
            const carts = await this.readCarts();
            return carts;

        } catch (error) {
            console.log(error);
        }
    }

    getCartById = async (cartId) => {
        try {
            const carts = await this.readCarts();
            const id = parseInt(cartId, 10);
            if (isNaN(id)) {
                return (`El ID ${cartId} no es un número entero válido`);
            }
            const cartById = carts.find(cart => cart.id === id);
            if (!cartById) {
                return (`Carrito con ID ${id} no encontrado`);
            }
            return cartById;
        } catch (error) {
            console.log(error);
        }
    }

    createCart = async (newCart) => {
        try {
            const carts = await this.readCarts();

            if (carts.length === 0) {
                newCart.id = 1;
            }
            else {
                newCart.id = carts[carts.length - 1].id + 1;
            }

            newCart.products = [];

            carts.push(newCart);

            await fs.promises.writeFile(path, JSON.stringify(carts, null, '\t'));

            return 'Carrito agregado';

        } catch (error) {
            console.log(error)
        }
    }

    createProductToCart = async (cartId, productId) => {
        try {
            const carts = await this.readCarts();

            const cartIndex = carts.findIndex(cart => cart.id === parseInt(cartId, 10));

            if (cartIndex === -1) {
                return { status: 'error', message: `Carrito con ID ${cartId} no encontrado` };
            }

            const productIndex = carts[cartIndex].products.findIndex(product => product.id === parseInt(productId, 10));

            if (productIndex === -1) {
                carts[cartIndex].products.push({ id: parseInt(productId, 10), quantity: 1 });
            } else {
                carts[cartIndex].products[productIndex].quantity += 1;
            }

            await fs.promises.writeFile(this.path, JSON.stringify(carts, null, 2));
            return { status: 'success', data: carts[cartIndex] };

        } catch (error) {
            console.log(error);
        }
    }

    updateCart = async (cartId, cartData) => {
        try {
            const carts = await this.readCarts();

            const id = parseInt(cartId, 10);

            if (isNaN(id)) {
                throw new Error(`El ID ${cartId} no es un número entero válido`);
            }

            const cartIndex = carts.findIndex(cart => cart.id === id);

            if (cartIndex === -1) {
                return false;
            }

            const updatedCart = { ...carts[cartIndex], ...cartData };
            carts[cartIndex] = updatedCart;

            await fs.promises.writeFile(path, JSON.stringify(carts, null, 2));
            return updatedCart;

        } catch (error) {
            console.log(error);
        }
    };

    deleteCart = async (cartId) => {
        try {
            const carts = await this.readCarts();

            const id = parseInt(cartId, 10);

            if (isNaN(id)) {
                throw new Error(`El ID ${cartId} no es un número entero válido`);
            }

            const cartIndex = carts.findIndex(cart => cart.id === id);

            if (cartIndex === -1) {
                return false;
            }

            carts.splice(cartIndex, 1);

            await fs.promises.writeFile(path, JSON.stringify(carts, null, 2));
            return true;

        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = CartsManagerFs;