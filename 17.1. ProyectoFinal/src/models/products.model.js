const { model, Schema } = require("mongoose");

const collectionName = 'products';

const productSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    }
})

const productModel = model(collectionName, productSchema);

module.exports = { productModel };