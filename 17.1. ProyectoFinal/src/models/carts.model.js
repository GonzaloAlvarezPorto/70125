const { Schema, model } = require('mongoose');

const cartSchema = new Schema({
    products: [
        {
            id: { type: Schema.Types.ObjectId, ref: 'Product', required: true }, // Referencia al modelo de productos
            quantity: { type: Number, required: true } // Cantidad del producto en el carrito
        }
    ]
});

const cartModel = model('Cart', cartSchema);

module.exports = { cartModel };
