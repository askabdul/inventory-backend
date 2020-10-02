const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const Products = require('../models/Products')

router.get('/', async (req,res) => {
    let products = await Products.find().then((products) => {
        return products
    }).catch((err) => {
        console.log(err);
    })

    if(products){
        return res.json(products)
    }
});

router.post('/add', async (req,res) => {
    let data = req.body;
    let product = new Products();
    product.productName = data.productName
    product.purchasePrice = data.purchasePrice
    product.sellingPrice = data.sellingPrice

    let savedProduct = await product.save().then((product) => {
        return product
    }).catch((err) => {
        console.log(err)
    })

    if(savedProduct) {
        res.send({
            message: "new product registered",
            data: {
                productName: savedProduct.productName,
                purchasePrice: savedProduct.purchasePrice,
                sellingPrice: savedProduct.sellingPrice
            }
        })
    }
});

router.put('/update-product', async (req,res) => {
    let productId = req.body.productId
    res.json("res is hghjhg")
});

router.patch('/patch/:productId', async (req,res) => {});

router.delete('/delete-product', async (req,res) => {
    let productId = req.query.productId;

    let del = await Products.deleteOne({ _id : productId}).then((del) => {
        return del
    })

    if(del) {
        res.json({ message: "successfully deleted"})
    }
});

module.exports = router
