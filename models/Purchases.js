let mongoose = require('mongoose')

let Schema = mongoose.Schema;

let PurchaseSchema = new Schema({
    date: String,
    productId: String,
    quantity: Number,
    price: Number,
    userId: String,
    vendorId: String
});

let PurchaseModel = mongoose.model('Purchases', PurchaseSchema);

module.exports = PurchaseModel;