import { Schema, model } from 'mongoose'

const collections = 'carts'

const CartSchema = new Schema({
    products: {
        type: [{
            product:{
                type:Schema.Types.ObjectId,
                ref: 'products'
            },
            quantity:{
                type: Number
            }
        }]
    }
})

CartSchema.pre('findOne', function(){
    this.populate('products.product')
})

const cartModel = model(collections, CartSchema);

export default cartModel;