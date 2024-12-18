import { Schema, model } from 'mongoose';

// Esquema de Carrito
const cartSchema = new Schema({
    products: [
        {
            id: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
            quantity: { type: Number, required: true } 
        }
    ]
});

const cartModel = model('Cart', cartSchema);

export default cartModel;
