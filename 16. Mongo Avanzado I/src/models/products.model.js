const { Schema, model } = require("mongoose");

const collectionName = 'products';

const productSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true,
        unique: true
    },
    thumbnail: String,
    price: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    create: {
        type: Date,
        default: Date.now()
    }
})


const productModel = model(collectionName, productSchema)

module.exports = {
    productModel
}