import { Schema, model } from 'mongoose';

const productSchema = new Schema({
    title: { type: String, required: true },
    category: { type: String, required: true },
    precio: { type: Number, required: true }
});

const productModel = model('Product', productSchema);

export default productModel;