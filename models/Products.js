let mongoose = require('mongoose')

let Schema = mongoose.Schema;

let ProductSchema = new Schema({
    productName: String,
    purchasePrice: Number,
    sellingPrice: Number,
});

let ProductModel = mongoose.model('Products', ProductSchema);

module.exports = ProductModel;