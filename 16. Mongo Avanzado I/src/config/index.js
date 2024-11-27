// const { connect } = require("mongoose");
// const { cartModel } = require('../models/carts.model')

import { connect } from "mongoose";
import cartModel from '../models/carts.model.js';

const connectDB = async () => {
    console.log("Base de datos conectada");
    await connect('mongodb://127.0.0.1:27017/c70125')

    //creamos un carrito
    // const response = await cartModel.create({products: []})

    //agregar producto
    // const cart = await cartModel.findById({_id:'66ce0c64c8f992392eb4b9b3'})
    // cart.products.push({product: '66ce0a8b0e3474e73c55b1e0', quantity:10});
    // const response = await cartModel.findByIdAndUpdate({_id:'66ce0c64c8f992392eb4b9b3'}, cart)
    // console.log(response)

    const cart = await cartModel.findOne({_id:'66ce0c64c8f992392eb4b9b3'})

    console.log(JSON.stringify(cart,null,2))
}

export default connectDB;