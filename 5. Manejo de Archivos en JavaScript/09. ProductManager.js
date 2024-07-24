const fs = require('fs');
const { title } = require('process');

class ProductManager {
    constructor(path) {
        this.path = path;
    }

    async addProduct(producto) {
        if (
            !producto.title ||
            !producto.description ||
            !producto.price ||
            !producto.stock
        ) {
            return console.log("Producto incompleto");
        };

        const productos = await this.getProducts();

        const lastId = productos.length > 0 ? Math.max(...productos.map(producto => producto.id)) : 0;
        const nuevoId = lastId + 1;

        const nuevoProducto = {
            id: nuevoId,
            title: producto.title,
            description: producto.description,
            price: Number(producto.price),
            stock: producto.stock
        };

        productos.push(nuevoProducto);
        await fs.promises.writeFile(this.path, JSON.stringify(productos, null, 2), 'utf-8')
            .catch(error => console.error("Error al escribir el archivo:", error));

    }

    async getProducts() {
        try {
            const result = await fs.promises.readFile(this.path, 'utf-8')
            const productos = JSON.parse(result);
            return productos;

        } catch (error) {
            return [];
        }
    }

    async getProductById(idProducto) {
        const productos = await this.getProducts();
        const productoFiltrado = productos.find(producto => producto.id === idProducto);

        if (productoFiltrado) {
            return productoFiltrado;
        } else {
            return `Producto con ID ${idProducto} no encontrado.`;
        }
    }

    async updateProduct(idProducto, objeto) {
        const productos = await this.getProducts();
        const index = productos.findIndex(producto => producto.id === idProducto);

        if (index !== -1) {
            productos[index] = { ...productos[index], ...objeto };
            await fs.promises.writeFile(this.path, JSON.stringify(productos, null, 2), 'utf-8')
                .catch(error => console.error("Error al escribir el archivo:", error));
            console.log(`Producto con ID ${idProducto} actualizado.`);
            return productos[index];
        } else {
            console.log(`Producto con ID ${idProducto} no encontrado.`);
            return null;
        }
    }

    async deleteProduct(idProducto) {
        const productos = await this.getProducts();
        const index = productos.findIndex(producto => producto.id === idProducto);

        if (index !== -1) {
            const [productoBorrado] = productos.splice(index, 1);
            await fs.promises.writeFile(this.path, JSON.stringify(productos, null, 2), 'utf-8')
                .catch(error => console.error("Error al escribir el archivo:", error));
            console.log(`Producto con ID ${idProducto} eliminado.`);
            return productoBorrado;
        } else {
            console.log(`Producto con ID ${idProducto} no encontrado.`);
            return null;
        }
    }

}

const test = async () => {

    const productManager = new ProductManager('./productos.json');

    const primerPrueba = await productManager.getProducts();
    console.log(primerPrueba);

    await productManager.addProduct(
        {
            title: "producto prueba",
            description: "Este es un producto de prueba",
            price: "200",
            stock: 25
        }
    )
    const productos = await productManager.getProducts();
    console.log(productos);

    const productoPorId = await productManager.getProductById(2);
    const segundoProductoPorId = await productManager.getProductById(18);
    console.log(productoPorId);
    console.log(segundoProductoPorId);

    const productoEditable = await productManager.updateProduct(3, {
        title: "Botella 1 lt Sprite",
        price: "1900",
        stock: 30,
        description: "Botella de gaseosa sabor limón"
    });
    if (productoEditable) {
        console.log(productoEditable);
    }

    const productoEliminado = await productManager.deleteProduct(4);
    if (productoEliminado) {
        console.log(productoEliminado);
    }
}

test();