const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    colour:{
        type:String
    },
    price:{
        type:Number,
        required:true
    },
    hastags:[{
        type:String,
    }],
    isAvailable:{
        type:Boolean,
        default:true,
        required:true
    }
});


const Product = mongoose.model("Product",productSchema);
module.exports = Product;

