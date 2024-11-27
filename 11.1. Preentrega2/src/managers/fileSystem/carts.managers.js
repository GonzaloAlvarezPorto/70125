import fs from 'fs'
const path = '../dbjson/cartsDb.json';

class CartsManagerFs {
    constructor() {
        this.path = path;
    }

    readCarts = async () => {
        try {
            if (fs.existsSync(path)) {
                const cartsJson = await fs.promises.readFile(path, "utf-8")
                const cartsJs = JSON.parse(cartsJson);
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

    createCart = async (newCart) => {

        try {

            const cart = await this.readCarts();

            if (cart.length === 0) {
                newCart.id = 1;
            }
            else {
                newCart.id = cart[cart.length - 1].id + 1;
            }

            cart.push(newCart);

            await fs.promises.writeFile(path, JSON.stringify(cart, null, '\t'));

            return newCart
        } catch (error) {
            console.log(error);
        }
    }

    getCartById = async (idCart) => {
        try {
            const carts = await this.readCarts();
            const cartsById = carts.find(cart => cart.id === idCart);
            return cartsById;
        } catch (error) {
            console.log(error);
        }
    }

    createProductToCart = () => {
        try {
            
        } catch (error) {
            console.log(error);
        }
    }
}

export default CartsManagerFs;