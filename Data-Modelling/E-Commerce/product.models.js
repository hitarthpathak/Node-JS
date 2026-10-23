const mongoose = require('mongoose');

const product_schema = new mongoose.Schema({
    product_image: String,
    product_name: {
        type: String,
        required: true
    },
    product_description: {
        type: String,
        required: true
    },
    product_price: {
        type: Number,
        default: 0
    },
    product_category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    product_stock: {
        type: Number,
        default: 0
    },
    product_owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, { timestamps: true });

module.exports = {
    Product: mongoose.model('Product', product_schema)
};