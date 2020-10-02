let mongoose = require('mongoose')

let Schema = mongoose.Schema;

let SaleSchema = new Schema({
    date: String,
    productId: String,
    quantity: Number,
    price: Number,
    customerId: String
});

let SaleModel = mongoose.model('Sales', SaleSchema);

module.exports = SaleModel;