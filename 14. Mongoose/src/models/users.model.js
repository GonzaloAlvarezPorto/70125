import { model, Schema } from "mongoose";// const { model, Schema } = require('mongoose');

const userCollection = 'users';

const userSchema = new Schema({
    first_name:{
        type: String,
        required: true
    },  
    last_name: String,
    email:{
        type:String,
        unique:true,
        required:true
    }
});

const userModel = model(userCollection, userSchema);

export default userModel;